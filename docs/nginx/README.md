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
