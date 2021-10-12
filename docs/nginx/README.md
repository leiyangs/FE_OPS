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
