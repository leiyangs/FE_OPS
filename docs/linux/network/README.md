# 配置 IP 地址

## 1. ifconfig 临时配置 IP

- 查看与配置网络状态

- inet 是 ipv4 地址

## 2. 查看网络环境

### 2.1 查询网络状态

- netstat 选项

| 选项 | 含义                                       |
| ---- | ------------------------------------------ |
| -t   | 列出 TCP 协议端口                          |
| -u   | 列出 UDP 协议端口                          |
| -n   | 不使用域名与服务名，而使用 IP 地址和端口号 |
| -l   | 仅列出在监听状态网络服务                   |
| -a   | 列出所有的网络连接                         |

```bash
netstat -tlun
netstat -an | more
netstat -unt | grep ESTABLISHED
```

## 3. 网络测试命令

### 3.1 ping

- ping [选项] ip 或域名
- 测试指定 IP 或域名的网络状况
- 选项
  - -c 次数指定 ping 包的次数

```bash
ping www.baidu.com -c 3
```

### 3.2 wget

- 下载命令

```bash
wget http://www.baidu.com
```

## 4. 远程登录

### 4.1 SSH 协议原理

#### 4.1.1 对称加密算法

- 采用单密钥系统的加密方法，同一个密钥可以同时用作信息的加密和解密，这种加密被称为对称加密。
- 非对称加密算法 需要公钥和私钥

#### 4.1.2 SSH 安全外壳协议

- ssh 用户名@ip
- 远程管理指定 Linux 服务器

```bash
[root@192-171-207-101-static ~]# ssh root@192.171.207.101
The authenticity of host '192.171.207.101 (192.171.207.101)' can't be established.
RSA key fingerprint is a4:97:52:eb:0a:0b:35:a0:98:7d:4f:c8:3b:dc:f9:0a.
Are you sure you want to continue connecting (yes/no)? yes
Warning: Permanently added '192.171.207.101' (RSA) to the list of known hosts.
```

/root/.ssh/known_hosts

```bash
192.171.207.101 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAomDpQxV3RmjJyKkf7elMTInbdm+/ZLnFpfbAryi5PSb2ewfYbwRaBcVl1lBta6yjFuz0J12p9qy90DBhadvoBsfwTB8lQhmlT8B2eCcHr0bfLa1IdKMcjImxRJiD4v0emCGFquHnHIr41vs8uxQ2Ek28mH/1JC0e/+VPEvylBB4+Kk2789ACdAlmhGTtlu7zgeUoLaWQSl1/6g7zfSLIz+/U8qGiRSPaGT+M40oqx/PZdoGOMTRhHgNIR5qgvcNaJXhlZGYT42fLFSmtzUHJ030hP7JGZ99oXS20/mnc8qvonC9itp0+K/nCj5g6uR/gPFb5B0NmTZCM2/gcLkHumw==
```

#### 4.1.3 scp

- scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令
- linux 的 scp 命令可以在 linux 服务器之间复制文件和目录
- 命令格式 scp [参数][原路径] [目标路径]

| 参数 | 含义             |
| ---- | ---------------- |
| -r   | 递归复制整个目录 |
| -v   | 详细方式显示输出 |

从本地服务器复制到远程服务器

```bash
scp local_file remote_username@remote_ip:remote_folder
scp -r local_folder remote_username@remote_ip:remote_folder
```

从远程服务器复制到本地服务器

```bash
scp  remote_username@remote_ip:remote_folder  local_file
scp -r  remote_username@remote_ip:remote_folder local_folder
```
