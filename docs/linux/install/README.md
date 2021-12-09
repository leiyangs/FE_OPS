# 软件包下载

RPM 是 RedHat Package Manager（RedHat 软件包管理工具）类似 Windows 里面的"添加/删除程序"

## 1. 软件包的分类

- 源码包(需要经过编译，把人所编写的源代码编译成机器语言才能运行)

  - 优点

    - 开源免费
    - 可以自由配置功能
    - 编译安装更适合自己系统，更稳定
    - 卸载方便

  - 缺点
    - 安装过程比较复杂
    - 编译过程比较长
    - 安装过程一旦报错，非常难以排查

- 二进制包(把源代码包经过编译生成 0/1 二进制，PRM 包、系统默认的安装包)

  - 优点

    - 包管理系统比较简单，只要通过简单的命令就可以实现包的安装、升级、查询和卸载
    - 安装速度比源码包快很多

  - 缺点
    - 经过编译则不能看到源代码
    - 功能选择不灵活
    - 依赖性比较麻烦

- 脚本安装包(就是把复杂的安装过程写成了脚本，可以一键安装，本质上安装的还是源代码包和二进制包)
  - 优点是安装简单
  - 缺点是失去了自定义性

## 2. YUM 在线管理

- yum = Yellow dog Updater, Modified 主要功能是更方便的添加/删除/更新 RPM 包.它能自动解决包的倚赖性问题.
- 这是 rpm 包的在线管理命令
- 将所有的软件名放到官方服务器上，当进行 YUM 在线安装时，可以自动解决依赖性问题
- /etc/yum.repos.d/
  - CentOS-Base.repo
  - epel.repo

### 2.1 CentOS-Base.repo

```bash
cd /etc/yum.repos.d/
ll
cat CentOS-Base.repo

#打印出
[baseos]
name=CentOS Linux $releasever - BaseOS
mirrorlist=http://mirrorlist.centos.org/?release=$releasever&arch=$basearch&repo=BaseOS&infra=$infra
#baseurl=http://mirror.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/
gpgcheck=1
enabled=1
gpgkey=file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial
```

| 字段       | 含义                                                                    |
| ---------- | ----------------------------------------------------------------------- |
| base       | 容器名称，一定要放在[]中                                                |
| name       | 容器说明，可以自己随便写                                                |
| mirrorlist | 镜像站点，可以注释掉                                                    |
| baseurl    | YUM 源服务器的地址，默认是 CentOS 官方的 YUM 源                         |
| enable     | 此容器是否生效 不写或者写成 enable=1 表示生效，写成 enable=0 表示不生效 |
| gpgcheck   | 如果是 1 就是指 RPM 的数字证书生效,如果是 0 则表示不生效                |
| gpgkey     | 数字证书的公钥文件保存位置，不用改                                      |

使用阿里云镜像

```bash
mv /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup #首先备份初始的配置文件
wget -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo #下载阿里云的源 注意区分centos版本
yum makecache # 更新缓存
yum -y update #级所有包同时也升级软件和系统内核
```

## 3. YUM 命令

- yum 安装只需要写包名即可

| 命令                      | 含义                                                       |
| ------------------------- | ---------------------------------------------------------- |
| yum list                  | 查询所有可用软件包列表                                     |
| yum search 关键字         | 搜索服务器上所有和关键字相关的包                           |
| yum -y install 包名       | -y 自动回答 yes install 安装                               |
| yum -y update 包名        | -y 自动回答 yes update 升级                                |
| yum -y remove 包名        | -y 自动回答 yes remove 卸载,卸载有依赖性，所以尽量不要卸载 |
| yum grouplist             | 列出所有可用的软件组列表                                   |
| yum groupinstall 软件组名 | 安装指定的组，组名可以用 grouplist 查询                    |
| yum groupremove 软件组名  | 卸载指定软件组                                             |

```bash
yum -y install gcc  #安装C语言安装包
```

## 4. 常用软件安装

### 4.1 nginx

```bash
yum install nginx  -y

whereis nginx #查看安装位置
```

启动服务

```bash
ps -ef | grep nginx #打印nginx进程，也就是看nginx是否运行

/bin/systemctl start nginx.service # systemctl系统管理命令
/bin/systemctl stop nginx.service
/bin/systemctl restart nginx.service # 重启
/bin/systemctl status nginx.service # 状态


curl http://192.168.59.128/ # 访问本机地址
```

### 4.2 mongodb

yum 中没有 mogodb 源

#### 4.2.1 添加安装源

`vim /etc/yum.repos.d/mongodb-org-3.4.repo`
添加以下内容：

```bash
[mongodb-org-3.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/3.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-3.4.asc
```

- 这里可以修改 gpgcheck=0, 省去 gpg 验证
- yum makecache 就是把服务器的包信息下载到本地电脑缓存起来

#### 4.2.2 更新缓存

```bash
yum makecache
```

#### 4.2.3 安装

```bash
yum -y install mongodb-org
```

#### 4.2.4 修改配置文件

```bash
whereis mongod
vi /etc/mongod.conf
```

/etc/mongod.conf

注释掉绑定的 ip，就可以远程连接了

```bash
net:
  port: 27017
#  bindIp: 127.0.0.1
``
```

#### 4.2.5 启动服务

```bash
systemctl start mongod.service
systemctl stop mongod.service
systemctl status mongod.service
systemctl restart mongod.service
```

#### 4.2.6 远程连接

```bash
systemctl stop firewalld.service #停止firewall
systemctl disable firewalld.service #禁止firewall开机启动
mongo 192.168.59.128
```

### 4.3 redis

#### 4.3.1 安装软件

```bash
yum install redis -y
```

#### 4.3.2 启动服务

```bash
systemctl start redis.service
systemctl stop redis.service
systemctl status redis.service
systemctl restart redis.service
```

### 4.4 mysql

#### 4.4.1 查看最新的安装包

https://dev.mysql.com/downloads/repo/yum/

#### 4.4.2 下载 MySQL 源安装包

- 先下载源安装包
  `wget http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm`

#### 4.4.3 安装源

- yum -y install mysql57-community-release-el7-11.noarch.rpm # 安装源
- yum repolist enabled | grep mysql.\* # 查看是否有源

#### 4.4.4 安装 MYSQL 服务器

`yum install mysql-community-server -y` 这种下载方式特别慢，所以用下面的下载方式，在本地下载好，然后用 ftp 上传到下面目录，然后下载

```bash
/var/cache/yum/x86_64/7/mysql57-community/packages
https://mirrors.ustc.edu.cn/mysql-ftp/Downloads/MySQL-5.7/
```

#### 4.4.5 启动服务器

```bash
systemctl start mysqld.service
systemctl stop mysqld.service
systemctl status mysqld.service
systemctl restart mysqld.service
```

#### 4.4.6 初始化数据库密码

- grep "password" /var/log/mysqld.log
- mysql -uroot -p
- ALTER USER 'root'@'localhost' IDENTIFIED BY 'abcd1#EFG';
- SHOW VARIABLES LIKE 'validate_password%';

#### 4.4.7 支持远程访问

- GRANT ALL PRIVILEGES ON . TO 'root'@'%' IDENTIFIED BY 'abcd1#EFG' WITH GRANT OPTION;
- FLUSH PRIVILEGES;

#### 4.4.8 开机自动访问

- systemctl enable mysqld
- systemctl daemon-reload

#### 4.4.9 远程访问

- C:\program1\mysql-5.7.31-winx64\bin\mysqld MySQL

```bash
mysql -h192.168.59.128 -uroot -p
```
