# Nginx

Nginx (engine x) 是一个高性能的 HTTP 和反向代理 web 服务器，同时也提供了 IMAP/POP3/SMTP 服务。Nginx 是由伊戈尔·赛索耶夫为俄罗斯访问量第二的 Rambler.ru 站点（俄文：Рамблер）开发的，第一个公开版本 0.1.0 发布于 2004 年 10 月 4 日。

## 1. nginx 使用场景

- 静态资源服务器
- 反向代理服务
- API 接口服务(Lua&Javascript)

## 2. nginx 的优点

- 高并发高性能 (几十万无压力)
- 可扩展性好 (内核精简，可进行二次编程)
- 高可靠性 (很稳定)
- 热布署 (不需要重启)
- 开源许可证 (免费开源)

## 3. 使用

### 3.1 关闭防火墙

| 命令                                | 作用           |
| ----------------------------------- | -------------- |
| systemctl stop firewalld.service    | 停止防火墙     |
| systemctl disable firewalld.service | 永久关闭防火墙 |

### 3.2 确认停用 selinux

- 安全增强型 Linux（Security-Enhanced Linux）简称 SELinux，它是一个 Linux 内核模块，也是 Linux 的一个安全子系统。
- SELinux 主要作用就是最大限度地减小系统中服务进程可访问的资源（最小权限原则）。

| 命令                                                        | 作用     |
| ----------------------------------------------------------- | -------- |
| getenforce                                                  | 检查状态 |
| /usr/sbin/sestatus -v                                       | 检查状态 |
| setenforce 0                                                | 临时关闭 |
| /etc/selinux/config SELINUX=enforcing 改为 SELINUX=disabled | 永久关闭 |

### 3.3 安装依赖模块

```bash
yum  -y install gcc gcc-c++ autoconf pcre pcre-devel make automake openssl openssl-devel
```

| 软件包      | 描述                                                                                                                                                                                                                                                                                                |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| gcc         | gcc 是指整个 gcc 的这一套工具集合，它分为 gcc 前端和 gcc 后端（我个人理解为 gcc 外壳和 gcc 引擎），gcc 前端对应各种特定语言（如 c++/go 等）的处理（对 c++/go 等特定语言进行对应的语法检查, 将 c++/go 等语言的代码转化为 c 代码等），gcc 后端对应把前端的 c 代码转为跟你的电脑硬件相关的汇编或机器码 |
| gcc-c++     | 而就软件程序包而言，gcc.rpm 就是那个 gcc 后端，而 gcc-c++.rpm 就是针对 c++这个特定语言的 gcc 前端                                                                                                                                                                                                   |
| autoconf    | autoconf 是一个软件包，以适应多种 Unix 类系统的 shell 脚本的工具                                                                                                                                                                                                                                    |
| pcre        | PCRE(Perl Compatible Regular Expressions)是一个 Perl 库，包括 perl 兼容的正则表达式库                                                                                                                                                                                                               |
| pcre-devel  | devel 包主要是供开发用,包含头文件和链接库                                                                                                                                                                                                                                                           |
| make        | 常指一条计算机指令，是在安装有 GNU Make 的计算机上的可执行指令。该指令是读入一个名为 makefile 的文件，然后执行这个文件中指定的指令                                                                                                                                                                  |
| automake    | automake 可以用来帮助我们自动地生成符合自由软件惯例的 Makefile                                                                                                                                                                                                                                      |
| wget        | wget 是一个从网络上自动下载文件的自由工具，支持通过 HTTP、HTTPS、FTP 三个最常见的 TCP/IP 协议 下载，并可以使用 HTTP 代理                                                                                                                                                                            |
| httpd-tools | apace 压力测试                                                                                                                                                                                                                                                                                      |
| vim         | Vim 是一个类似于 Vi 的著名的功能强大、高度可定制的文本编辑器                                                                                                                                                                                                                                        |

| 目录名   | 含义                   |
| -------- | ---------------------- |
| app      | 存放代码和应用         |
| backup   | 存放备份的文件         |
| download | 下载下来的代码和安装包 |
| logs     | 放日志的               |
| work     | 工作目录               |

## 4. nginx 的架构

### 4.1 轻量

- 源代码只包含核心模块
- 其它非核心功能都是通过模块实现，可以自由选择

### 4.2 架构

- Nginx 采用的是多进程(单线程)和多路 IO 复用模型

#### 4.2.1 工作流程

- Nginx 在启动后，会有一个 master 进程和多个相互独立的 worker 进程。
- 接收来自外界的信号,向各 worker 进程发送信号,每个进程都有可能来处理这个连接。
- master 进程能监控 worker 进程的运行状态，当 worker 进程退出后(异常情况下)，会自动启动新的 worker 进程。
- worker 进程数，一般会设置成机器 cpu 核数。因为更多的 worker 数，只会导致进程相互竞争 cpu，从而带来不必要的上下文切换
- 使用多进程模式，不仅能提高并发率，而且进程之间相互独立，一个 worker 进程挂了不会影响到其他 worker 进程

#### 4.2.2 IO 多路复用

- 多个文件描述符的 IO 操作都能在一个线程里并发交替顺序完成，复用线程

#### 4.2.4 CPU 亲和

- 把 CPU 内核和 nginx 的工作进程绑定在一起，让每个 worker 进程固定在一个 CPU 上执行，从而减少 CPU 的切换并提高缓存命中率，提高 性能

#### 4.2.5 sendfile

- sendfile 零拷贝传输模式

## 5. 安装

### 5.1 版本

- Mainline version 开发版
- Stable version 稳定版
- Legacy versions 历史版本

### 5.2 下载地址

- [下载地址](http://nginx.org/en/download.html)
- [linux_packages](http://nginx.org/en/linux_packages.html#stable)

### 5.3 CentOS 下 YUM 安装

```bash
# 添加安装源
vi /etc/yum.repos.d/nginx.repo

# 写入内容
[nginx]
name=nginx repo
baseurl=http://nginx.org/packages/centos/7/$basearch/
gpgcheck=0
enabled=1

#下载
yum install nginx -y # 安装nginx
nginx -v # 查看安装的版本
nginx -V # 查看编译时的参数
```

## 6. 目录

### 6.1 安装目录

```bash
# 查看nginx安装的配置文件和目录
rpm -ql nginx
```

### 6.2 日志切割文件

```bash
# 查看日志配置
cat /etc/logrotate.d/nginx

# 对访问日志进行切割
# 每天都生成一个日志文件，就是所谓的日志切割
/var/log/nginx/*.log {
  daily
}

# 查看所有的log文件
ls /var/log/nginx/*.log
```

### 6.3 主配置文件

| 路径                           | 概念                     |
| ------------------------------ | ------------------------ |
| /etc/nginx/nginx.conf          | 核心配置文件             |
| /etc/nginx/conf.d/default.conf | 默认 http 服务器配置文件 |

### 6.4 守护进程管理

```bash
# 用于配置系统守护进程管理器管理方式
systemctl restart nginx.service
```

### 6.5 nginx 模块目录

| 路径               | 概念                     |
| ------------------ | ------------------------ |
| /etc/nginx/modules | 最基本的共享库和内核模块 |

nginx 的安装模块，目的是存放用于启动系统和执行 root 文件系统的命令的如/bin 和/sbin 的二进制文件的共享库，或者存放 32 位，或者 64 位(file 命令查看)| | /usr/lib64/nginx/modules |64 位共享库|

### 6.6 文档

nginx 的手册和帮助文件

| 路径                                  | 概念     |
| ------------------------------------- | -------- |
| /usr/share/doc/nginx-1.14.2           | 帮助文档 |
| /usr/share/doc/nginx-1.14.0/COPYRIGHT | 版权声明 |
| /usr/share/man/man8/nginx.8.gz        | 手册     |

### 6.7 缓存目录

| 路径             | 概念             |
| ---------------- | ---------------- |
| /var/cache/nginx | nginx 的缓存目录 |

### 6.8 日志目录

| 路径           | 概念             |
| -------------- | ---------------- |
| /var/log/nginx | nginx 的日志目录 |

### 6.9 可执行命令

nginx 服务的启动管理的可执行文件（重要）

| 路径                  | 概念               |
| --------------------- | ------------------ |
| /usr/sbin/nginx       | 可执行命令         |
| /usr/sbin/nginx-debug | 调试执行可执行命令 |

## 7. 编译参数

### 7.1 安装目录和路径

```bash
--prefix=/etc/nginx //安装目录
--sbin-path=/usr/sbin/nginx //可执行文件
--modules-path=/usr/lib64/nginx/modules //安装模块
--conf-path=/etc/nginx/nginx.conf  //配置文件路径
--error-log-path=/var/log/nginx/error.log  //错误日志
--http-log-path=/var/log/nginx/access.log  //访问日志
--pid-path=/var/run/nginx.pid //进程ID
--lock-path=/var/run/nginx.lock //加锁对象
```

### 7.2 指定用户

- 配置 nginx 进程启动的用户和用户组

```bash
--user=nginx   #指定用户
--group=nginx  #指定用户组
```

## 8. 配置文件

- /etc/nginx/nginx.conf #主配置文件
- /etc/nginx/conf.d/\*.conf #包含 conf.d 目录下面的所有配置文件
- /etc/nginx/conf.d/default.conf

### 8.1 nginx 配置语法

```bash

# 使用#可以添加注释,使用$符号可以使用变量
# 配置文件由指令与指令块组成,指令块以{}将多条指令组织在一起
http {
    # include语句允许把多个配置文件组合起来以提升可维护性，也就是通过引入其他文件的方式
    include       /etc/nginx/mime.types; #包含minme.types
    # 每条指令以;(分号)结尾，指令与参数之间以空格分隔
    default_type  application/octet-stream;
    sendfile        on; # 打开零拷贝
    keepalive_timeout  65; # 保持连接的超时时间
    include /etc/nginx/conf.d/*.conf; # 包含conf.d目录下的所有配置文件
    server { # 配置服务
        listen       80; # 监听端口，默认监听80
        server_name  localhost; # 服务名字或域名或ip
        #charset koi8-r; # 俄语字符集
        # 有些指令可以支持正则表达式
        location / {
            root   F:/dist; # 文件跟目录
            index  index.html index.htm; # 默认文件
        }

        error_page  404              /404.html;

        error_page   500 502 503 504  /50x.html; # 如果服务器返回的是500 就指向到500.html
        location = /50x.html {
            root   html;
        }
    }
}
```

### 8.2 全局配置

| 分类 | 配置项           | 作用                           |
| ---- | ---------------- | ------------------------------ |
| 全局 | user             | 设置 nginx 服务的系统使用用户  |
| 全局 | worker_processes | 工作进程数,一般和 CPU 数量相同 |
| 全局 | error_log        | nginx 的错误日志               |
| 全局 | pid              | nginx 服务启动时的 pid         |

### 8.3 事件配置

| 分类   | 配置项             | 作用                                                                                                       |
| ------ | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| events | worker_connections | 每个进程允许的最大连接数 10000                                                                             |
| events | use                | 指定使用哪种模型(select/poll/epoll),建议让 nginx 自动选择,linux 内核 2.6 以上一般能使用 epoll 可以提高性能 |

### 8.4 http 配置

- /etc/nginx/nginx.conf
- 一个 HTTP 下面可以配置多个 server

```bash
user  nginx;   #设置nginx服务的系统使用用户
worker_processes  1;  #工作进程数,一般和CPU数量相同

error_log  /var/log/nginx/error.log warn;   #nginx的错误日志
pid        /var/run/nginx.pid;   #nginx服务启动时的pid

events {
    worker_connections  1024; #每个进程允许的最大连接数 10000
}

http {
    include       /etc/nginx/mime.types; #文件后缀和类型类型的对应关系
    default_type  application/octet-stream; #默认content-type

    log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';  # 日志记录格式

    access_log  /var/log/nginx/access.log  main; #默认访问日志

    sendfile        on; #启用sendfile
    #tcp_nopush     on; #懒发送

    keepalive_timeout  65; #超时时间是65秒

    #gzip  on; # 启用gzip压缩

    include /etc/nginx/conf.d/*.conf; #包含的子配置文件
}
```

### 8.5 server

- /etc/nginx/conf.d/default.conf
- 一个 server 下面可以配置多个 location

```bash
server {
    listen       80;  #监听的端口号
    server_name  localhost;  #用域名方式访问的地址

    #charset koi8-r; //编码
    #access_log  /var/log/nginx/host.access.log  main; #访问日志文件和名称

    location / {
        root   /usr/share/nginx/html;  #静态文件根目录
        index  index.html index.htm;  #首页的索引文件
    }

    #error_page  404              /404.html;  #指定错误页面

    # redirect server error pages to the static page /50x.html
    # 把后台错误重定向到静态的50x.html页面
    error_page   500 502 503 504  /50x.html;
    location = /50x.html {
        root   /usr/share/nginx/html;
    }
}
```

### 8.6 Systemd

- 系统启动和服务器守护进程管理器，负责在系统启动或运行时，激活系统资源，服务器进程和其他进程，根据管理，字母 d 是守护进程（daemon）的缩写

#### 8.6.1 配置目录

| 配置目录                | 作用                                                                                                       |
| ----------------------- | ---------------------------------------------------------------------------------------------------------- |
| /usr/lib/systemd/system | 每个服务最主要的启动脚本设置，类似于之前的/etc/initd.d                                                     |
| /run/system/system      | 系统执行过程中所产生的服务脚本，比上面的目录优先运行                                                       |
| /etc/system/system      | 管理员建立的执行脚本，类似于/etc/rc.d/rcN.d/Sxx 类的功能，比上面目录优先运行，在三者之中，此目录优先级最高 |

#### 8.6.2 systemctl

- 监视和控制 systemd 的主要命令是 systemctl
- 该命令可用于查看系统状态和管理系统及服务

```bash
# 命令：
systemctl  command name.service
# 启动：
service name start –>systemctl start name.service
# 停止：
service name stop –>systemctl stop name.service
# 重启：
service name restart–>systemctl restart name.service
# 状态：
service name status–>systemctl status name.service
```

### 8.7 启动和重新加载

```bash
systemctl restart nginx.service
systemctl reload nginx.service
nginx -s reload
```

### 8.8 日志类型

- `curl -v http://localhost`

#### 8.8.1 日志类型

- /var/log/nginx/access.log 访问日志
- /var/log/nginx/error.log 错误日志

#### 8.8.2 log_format

| 类型    | 用法                                          |
| ------- | --------------------------------------------- |
| 语法    | log_format name [escape=default[json] string] |
| 默认    | log_format combined " "                       |
| Context | http                                          |

##### 8.8.2.1 内置变量

[ngx_http_log_module log_format]('http://nginx.org/en/docs/http/ngx_http_log_module.html#log_format')

| 名称              | 含义                     |
| ----------------- | ------------------------ |
| \$remote_addr     | 客户端地址               |
| \$remote_user     | 客户端用户名称           |
| \$time_local      | 访问时间和时区           |
| \$request         | 请求行                   |
| \$status          | HTTP 请求状态            |
| \$body_bytes_sent | 发送给客户端文件内容大小 |

##### 8.8.2.2 HTTP 请求变量

- 注意要把-转成下划线,比如 User-Agent 对应于\$http_user_agent

| 名称             | 作用     | 例子                                                                      |
| ---------------- | -------- | ------------------------------------------------------------------------- |
| arg_PARAMETER    | 请求参数 | \$arg_name                                                                |
| http_HEADER      | 请求头   | $http_referer $http_host $http_user_agent $http_x_forwarded_for(代理过程) |
| sent_http_HEADER | 响应头   | sent_http_cookie                                                          |

- IP1->IP2(代理)->IP3 会记录 IP 地址的代理过程

  - http_x_forwarded_for=Client IP,Proxy(1) IP,Proxy(2) IP

例

```bash
 # 定义一种日志格式
 log_format  main  '$remote_addr - $remote_user [$time_local] "$request" '
                      '$status $body_bytes_sent "$http_referer" '
                      '"$http_user_agent" "$http_x_forwarded_for"';

 log_format  zfpx  '$arg_name $http_referer sent_http_date"';
 # 指定写入的文件名和日志格式
 access_log  /var/log/nginx/access.log  main;
```

```bash
tail -f /var/log/nginx/access.log

10.10.18.150 - - [30/Dec/2021:21:54:45 -0500] "GET / HTTP/1.1" 200 4057 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/96.0.4664.110 Safari/537.36" "-"
```

## 9.nginx 工作流

### 9.1 配置块

- 请求到来时先按域名找到 server 块
- 再按请求路径找到 location 块
- Context 是指本指令出现在哪个块内

### 9.2 值指令继承规则

- 值指令可以合并，动作类指令不可以合并
- 值指令是向上覆盖的，子配置不存在，可以使用父配置块的指令，如果子指令存在，会覆盖父配置块中的指令

```bash
server {
    listen 80;
    root /home/nginx/html;
    access_log logs/access.log main;
    location /image{
       access_log logs/access.log image;
    }
    location /video{
    }
}
```

### 9.3 server 匹配

- 精确匹配
- \*在前
- \*在后
- 按文件中的顺序匹配正则式域名
- default server

### 9.4 HTTP 请求处理

| 阶段           | 名称           | 对应模块                       |
| -------------- | -------------- | ------------------------------ |
| 读取请求后     | POST_READ      | realip                         |
| 重写           | SERVER_REWRITE | rewrite                        |
| 匹配 location  | FIND_CONFIG    | rewrite                        |
| 重写           | REWRITE        | rewrite                        |
| 重写后         | POST_REWRITE   |
| 访问前限制     | PREACCESS      | limit_conn,limit_req           |
| 是否有权限访问 | ACCESS         | auth_basic,access,auth_request |
| 判断权限后     | POST_ACCESS    |
| 响应前         | PRECONTENT     | try_files                      |
| 读取请求后     | CONTENT        | index,autoindex,concat         |
| 打印日志       | LOG            | access_log                     |
