# linux 概念

## 1. 什么是 Linux

- Linux 是一套免费使用和自由传播的类 Unix 操作系统
- 在服务器端领域和嵌入式领域有非常广泛的应用

## 2. Linux 版本

分为内核版本和发型版本

- kernel
- 各个厂商会制作自己的发行版本
  - redhat
  - CentOS
  - debian
  - ubuntu
  - fedora

## 3. Linux 与 Windows 的区别

- Linux 严格区分大小写
- Linux 中所有的内容以文件形式保存，包括硬件、用户和文件。
- Linux 不靠扩展名区分文件类型，是靠权限来区分，但是有一些约定的扩展名，是给管理员看的
  - 压缩包 .gz .bz2 .tar.bz2 .tgz
  - 二进制文件 .rpm
  - 网页文件 .html .php
  - 脚本文件 .sh
  - 配置文件 .conf
- Windows 下的程序不能直接在 Linux 中安装和运行
- Linux 更多使用字符界面
- 占用的系统资源更少
- 减少了出错和被攻击的可能性，会让系统更稳定

## 4. 安装

### 4.1 虚拟机

- 是一个虚拟 PC 的软件
- 可以在现有的操作系统上虚拟出一个新的硬件环境
- 相当于模拟出一台新的个人电脑
- 可以实现在一台机器上真正同时运行两个独立的操作系统
- VMware
- VMware8

### 4.2 虚拟机的主要特点

- 不需要分区或重新开机就能在同一台 PC 上使用两种以上的操作系统
- 本机系统可以与虚拟机系统网络通信
- 可以设定并且随时修改虚拟机操作系统的硬件环境
- 系统快照可以方便备份和回滚

### 4.3 建议 VMWare 配置

- CPU 建议主频 1GHz 以上
- 内存 建议 2GB 以上
- 硬盘 建议分区空闲空间 8GB 以上
- CD 盘设置[下载 isos](https://blog.csdn.net/ct_666/article/details/111132896)

### 4.4 虚拟机的安装

[VMware16.x](https://www.vmware.com/cn/products/workstation-pro/workstation-pro-evaluation.html)

### 4.5 使用虚拟机

#### 4.5.1 新建虚拟机

- Create a New Virtual Machine 开始新建虚拟机向导
- 我以后再安装操作系统
- Linux CentOS 64 位(32 位占用系统资源比较少)
- 20G 硬盘

#### 4.5.2 硬件管理

#### 4.5.3 网络链接

- 虚拟机网卡-查看网络属性
  - Vmware Virtual Ethernet Adapter For VMnet1
  - Vmware Virtual Ethernet Adapter For VMnet8
- 网络连接(选择桥连接模式，直接连接物理网络)
  - 桥接 直接连接到物理网络，会占用一个局域网内的真实 IP 地址，优先选择桥接
  - NAT 使用已共享的主机 IP 地址，可以上网，利用 VMnet8 网卡通信
  - Host-Only 与主机共享一个私有网络，只能本机使用，利用 VMnet1 进行通信，不能上网，虚拟机系统和真是网络是隔离开的。

```bash
service network restart #重启网络服务
```

#### 4.5.4 使用快照

- 可以使用快照
- 在合适的时间恢复快照

#### 4.5.5 硬件设备文件名

| 硬件               | 设备文件名            |
| ------------------ | --------------------- |
| IDE 硬盘           | /dev/hd[a-d]          |
| SCSI/SATA/USB 硬盘 | /dev/sd[a-p]          |
| 光驱               | /dev/cdrom 或/dev/hdc |
| 软盘               | /dev/fd[0-1]          |
| 打印机(25 针)      | /dev/lp[0-2]          |
| 打印机(USB)        | /dev/usb/lp[0-15]     |
| 鼠标               | /dev/mouse            |

#### 4.5.6 分区设备文件名

- 设备文件名只要插入硬盘，Linux 会自动检测和分配
- 1-4 一定给主分区和扩展分区使用
- 逻辑分区一定从 5 开始

| 硬件      | 设备文件名                                     |
| --------- | ---------------------------------------------- |
| /dev/hda1 | IDE 硬盘接口(133M/秒)                          |
| /dev/sda1 | SCSI 硬盘接口(200M/秒)、SATA 硬盘接口(500M/秒) |

#### 4.5.7 分区

- 磁盘分区是使用分区编辑器在磁盘上划分几个逻辑部分
- 磁盘一旦划分成多个分区，不同类的目录与文件可以存储进不同的分区内
- 分区表的长度只有 64 个字节，里面又分成四项，每项 16 个字节。所以，一个硬盘最多只能分四个一级分区，又叫做"主分区"

#### 4.5.8 扩展分区

为了突破 4 个分区的限制，就取出一个分区作为扩展分区

- 扩展分区最多只能有 1 个
- 主分区加扩展分区最多有 4 个
- 不能写入数据，只能包含逻辑分区，逻辑分区最多是 23 个

#### 4.5.9 格式化

- 格式化是指根据用户选定的文件系统(如 FAT16(2G),FAT32(4G)、NTFS、EXT2、EXT3、EXT4)对分区进行划分
- 目的是为了更好的写入和读取数据
- 主要是把整个分区切分成等大小的数据块，每个数据块是 4KB，10K 需要使用 2 个半的数据块。是存放文件的最小空间。
- 在分区中划出一片用于存放文件分配表，目录表等用户文件管理的磁盘空间：
  - ID
  - 修改时间
  - 权限
  - 数据块位置
- 格式化会清空数据