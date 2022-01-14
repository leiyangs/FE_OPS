# 核心模块

## 1. 监控 nginx 客户端的状态

### 1.1 模块名

`--with-http_stub_status_module` 监控 nginx 客户端的状态

### 1.2 语法

```bash
Syntax: stub_status on/off;
Default: -
Context: server->location
```

### 1.3 实践

/etc/nginx/conf.d/default.conf

```bash
# 在配置文件中，server内加入配置
# 当访问/status地址的时候，会开启stub_status_module监控服务
server {
+    location /status{
+       stub_status  on;
+    }
```

```bash
# 重启nginx服务
systemctl reload nginx.service
# 浏览器访问地址
http://10.10.18.62/status
# 页面显示内容
Active connections: 2
server accepts handled requests
       3       3       10
Reading: 0 Writing: 1 Waiting: 1
```

| 参数     | 含义                                                             |
| -------- | ---------------------------------------------------------------- |
| Active   | connections 当前 nginx 正在处理的活动连接数                      |
| accepts  | 总共处理的连接数                                                 |
| handled  | 成功创建握手数                                                   |
| requests | 总共处理请求数                                                   |
| Reading  | 读取到客户端的 Header 信息数                                     |
| Writing  | 返回给客户端的 Header 信息数                                     |
| Waiting  | 开启 keep-alive 的情况下,这个值等于 active – (reading + writing) |

## 2. 随机主页

### 2.1 模块名

`--with-http_random_index_module` 在根目录里随机选择一个主页显示

### 2.2 语法

```bash
Syntax: random_index on/off;
Default: off
Context: location
```

### 2.3 实践

/etc/nginx/conf.d/default.conf

```bash
+    location / {
+       root /opt/app;
+       random_index on;
+    }
```

```bash
mkdir /opt/app
cd /opt/app
ls
echo red  > read.html
echo yellow  > yellow.html
echo blue  > blue.html
```

## 3. 内容替换

### 3.1 模块名

`--with-http_sub_module` 内容替换

### 3.2 语法

#### 3.2.1 文本替换

```bash
Syntax: sub_filter string replacement;
Default: --
Context: http,service,location
```

### 3.3 实践

/etc/nginx/conf.d/default.conf

```bash
location / {
    root   /usr/share/nginx/html;
    index  index.html index.htm;
+   sub_filter 'name' 'yl';
}
```

## 4. 请求限制

### 4.1 模块名

- --with-limit_conn_module 连接频率限制
- --with-limit_req_module 请求频率限制
- 一次 TCP 请求至少产生一个 HTTP 请求
- SYN > SYN,ACK->ACK->REQUEST->RESPONSE->FIN->ACK->FIN->ACK

### 4.2 ab

- Apache 的 ab 命令模拟多线程并发请求，测试服务器负载压力，也可以测试 nginx、lighthttp、IIS 等其它 Web 服务器的压力
- -n 总共的请求数
- -c 并发的请求数

```bash
yum -y install httpd-tools
ab -n 40 -c 20 http://127.0.0.1/
```

### 4.3 连接限制

- ngx_http_limit_conn_module 模块会在 NGX_HTTP_PREACCESS_PHASE 阶段生效
- 针对全部的 worker 生效，依赖 realip 模块获得到的真实 IP

#### 4.3.1 语法

limit_conn_zone 定义共享内存(大小)，以及 key 关键字

```bash
# 可以以IP为key zone为空间的名称 size为申请空间的大小
Syntax: limit_conn_zone key zone=name:size;
Default: --
Context: http(定义在server以外)
```

limit_conn

```bash
# zone名称 number限制的数量
Syntax: limit_conn  zone number;
Default: --
Context: http,server,location
```

```bash
Syntax: limit_conn_log_level  info|notice|warn|error;
Default: limit_conn_log_level error;
Context: http,server,location
```

```bash
Syntax: limit_conn_status  code;
Default: limit_conn_status 503;
Context: http,server,location
```

#### 4.3.2 例

\$binary_remote_addr 是二进制格式的，比较短

```bash
limit_conn_zone $binary_remote_addr zone=conn_zone:10m;
server {
  location /{
      limit_conn_status 500;
      limit_conn_status warn;
      limit_rate 50; //每秒最多返回50字节
      limit_conn conn_zone 1; //并发连接数最多是1
  }
}
```

表明以 ip 为 key，来限制每个 ip 访问文件时候，最多只能有 1 个在线，否则其余的都要返回不可用

### 4.4 请求限制

- ngx_http_limit_req_module 模块是在 NGX_HTTP_PREACCESS_PHASE 阶段生效
- 生效算法是漏斗算法(Leaky Bucket) 把突出的流量限定为每秒恒定多少个请求
- Traffic Shaping 的核心理念是等待，Traffic Policing 的核心理念是丢弃
- limit_req 生效是在 limit_conn 之前的

#### 4.4.1 语法

- limit_req_zone 定义共享内存，以及 key 和限制速度

```bash
# 可以以IP为key zone为空间的名称 size为申请空间的大小
Syntax: limit_req_zone key zone=name:size rate=rate;
Default: --
Context: http(定义在server以外)
```

limit_req 限制并发请求数

```bash
# zone名称 number限制的数量
Syntax: limit_req  zone=name [burst=number] [nodelay];
Default: --
Context: http,server,location
```

- burst 是 bucket 的数量，默认为 0
- nodelay 是对 burst 中的请求不再采用延迟处理的做法，而是立刻处理

#### 4.4.2 例

```bash
limit_req_zone $binary_remote_addr zone=req_zone:10m rate=1r/s;
server {
  location /{
      //缓存区队列burst=3个,不延期，即每秒最多可处理rate+burst个.同时处理rate个
      //limit_req zone=req_zone;
      limit_req zone=one burst=5 nodelay;
  }
}
```

- \$binary_remote_addr 表示远程的 IP 地址
- zone=req_zone:10m 表示一个内存区域大小为 10m,并且设定了名称为 req_zone
- rate=1r/s 表示允许相同标识的客户端的访问频次，这里限制的是每秒 1 次，即每秒只处理一个请求

- zone=req_zone 表示这个参数对应的全局设置就是 req_zone 的那个内存区域

- burst 设置一个大小为 3 的缓冲区,当有大量请求（爆发）过来时，超过了访问频次限制的请求可以先放到这个缓冲区内等待，但是这个等待区里的位置只有 3 个，超过的请求会直接报 503 的错误然后返回。
- nodelay 如果设置，会在瞬时提供处理(burst + rate)个请求的能力，请求超过（burst + rate）的时候就会直接返回 503，永远不存在请求需要等待的情况,如果没有设置，则所有请求会依次等待排队

```bash
netstat -n | awk '/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'
```

## 5. 访问控制

- 基于 IP 的访问控制 -http_access_module
- 基于用户的信任登录 -http_auth_basic_module

### 5.1 http_access_module

```bash
Syntax: allow address|all;
Default: --
Context: http,server,location,limit_except
```

```bash
Syntax: deny address|CIDR|all;
Default: --
Context: http,server,location,limit_except
```

```bash
server {
+ location ~ ^/admin.html{
+      deny 192.171.207.100;
+      allow all;
+    }
}
```
