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

nginx 服务的启动管理的可执行文件

| 路径                  | 概念               |
| --------------------- | ------------------ |
| /usr/sbin/nginx       | 可执行命令         |
| /usr/sbin/nginx-debug | 调试执行可执行命令 |
