# linux 常用命令

## 1. 常见目录

- / 根目录
- /boot 启动目录，启动相关文件
- /dev 设备文件
- /etc 配置文件
- /home 普通用户的家目录,可以操作
- /lib 系统库保存目录
- /mnt 移动设备挂载目录
- /media 光盘挂载目录
- /misc 磁带机挂载目录
- /root 超级用户的家目录,可以操作
- /tmp 临时目录,可以操作
- /proc 不能直接操作，保存的是内存的挂载点
- /sys 不能直接操作，保存的是内存的挂载点
- /var 变量
- /bin 普通命令
- /sbin 命令保存目录，级用户才可以执行的命令
- /usr/bin 系统软件资源目录 面向普通用户的系统命令
- /usr/sbin 系统软件资源目录 面向超级用户的系统命令

## 2. 命令基本格式

### 2.1 命令提示符

```bash
[root@localhost ~]#
```

- root 当前登录用户
- localhost 主机名
- ~ 当前工作目录,默认是当前用户的家目录，root 就是/root,普通用户是 /home/用户名
- 提示符 超级用户是 #,普通用户是\$

### 2.2 命令格式

- 命令 [选项][参数]
- 当有多个选项时，可以写在一起

### 2.3 ls

- 查询目录中的内容
- ls [选项][文件或者目录]
- 选项
  - -a 显示所有文件，包括隐藏文件
  - -l 显示详细信息
  - -d 查看目录本身的属性而非子文件 ls /etc/
  - -h 人性化的方式显示文件大小
  - -i 显示 inode,也就是 i 节点，每个节点都有 ID 号
- 默认当前目录下的文件列表

#### 2.3.1 ls -l

```bash
#文件类型和权限  ACL权限  硬链接引用计数  所有者  所属组  文件大小  最后修改时间  文件名
drwxr-xr-x . 1 user 197121      0  9月 29 10:13 docs/
drwxr-xr-x . 1 user 197121      0  9月 29 09:54 node_modules/
-rw-r--r-- . 1 user 197121    383  9月 29 10:13 package.json
-rw-r--r-- . 1 user 197121     74  9月 29 10:13 package-lock.json
-rw-r--r-- . 1 user 197121 364332  9月 29 10:13 yarn.lock
```

| 文件类型和权限 | ACL 权限 | 硬链接引用计数 | 所有者 | 所属组 | 文件大小 | 最后修改时间  | 文件名       |
| -------------- | -------- | -------------- | ------ | ------ | -------- | ------------- | ------------ |
| -rw-r--r--     | .        | 1              | user   | 197121 | 383      | 9 月 29 10:13 | package.json |

- 文件类型 - 文件、d 目录、l 软链接文件
- u(所有者)、g(所属组)、o(其他人)
- r(read) 读取、w(write) 写入、x(execute) 执行

## 3. 处理文件命令

### 3.1 mkdir

- 创建目录 make directory

- mkdir -p [目录名] <kbd>-p 递归创建</kbd>

```bash
mkdir folder
```

### 3.2 cd

- 切换所在目录 change directory

- cd [目录]

  - ~ 家目录
  - 家目录
    - 上次目录
  - . 当前目录
  - .. 上级目录

  相对路径是参照当前所在目录;绝对路径是从根目录开始;按 TAB 键可以补全命令和目录

### 3.3 pwd

- 显示当前目录 pwd

```bash
pwd
```

### 3.4 rmdir

- 删除目录 remove empty diretory
- rmdir [目录名]
- 只能删除空目录

```bash
rmdir folder
```

### 3.5 rm

- 删除文件或者目录 remove
- rm [文件或者目录]

  - -r 删除目录
  - -f 强制删除

- rm -rf [文件或者目录] 递归强制删除所有目录

```bash
rm -r folder
```

### 3.5 cp

- copy 复制命令
  -copy [源文件或者目录][目标文件]
  - -r 复制目录，`cp` 命令默认只能复制文件
  - -p 连带文件属性复制
  - -d 若源文件是链接文件，则复制连接属性
  - -a 相当于 -rpd

```bash
cp -r assets assets1
cp -rp assets assets2
cp -a assets assets3
```

### 3.6 mv

- 移动文件或者改名 move
- mv [源文件或者目录][目标文件]

```bash
# 改名
mv folder folder1
#移动
mv assets1 assets
```

### 3.7 ln

- 链接命令,生成链接文件 `link`

#### 3.7.1 软连接

- ln -s [源文件][目标文件]

  - -s 创建软链接

- 很实用
- 相当于 Windows 的快捷方式
- 软链接拥有自己的 i 节点和 Block 块，但是数据块中只保存源文件的文件名和 i 节点号，并没有实际的文件数据
- lrwxrwxrwx l 软链接 软链接的文件权限都是 777
- 修改任意一个文件，另一个都会改变
- 删除源文件，软链接不能使用
- 软链接源文件必须写绝对路径

#### 3.7.2 硬链接

- 一般不使用
- 拥有相同的 i 节点和存储 block 块，可以看作是同一个文件
- 可以通过 i 节点访问
- 不能跨分区
- 不能针对目录使用

### 3.8 cat

查看并显示文件内容

```bash
cat index.html
```

### 3.9 head tail |

- head 查看前两行

```bash
head -2 index.html
```

- tail 查看后两行

```bash
tail -2 index.html
```

- | 管道符用来做分页

```bash
head -10 index.html | tail -2
```

## 4. 搜索文件命令

### 4.1 locate

```bash
#如果没有请安装
yum -y install mlocate
```

- 在后台数据库中按文件名搜索，速度比较快。数据保存在`/var/lib/mlocate` 后台数据库，每天更新一次
- 可以 `updatedb` 命令立刻更新数据库
- 只能搜索文件名
  - `/etc/updatedb.conf`建立索引的配置文件
  - PRUNE_BIND_MOUNTS = "yes" 全部生效，开启搜索限制
  - PRUNEFS 不搜索的文件系统
  - PRUNENAMES 忽略的文件类型
  - PRUNEPATHS 忽略的路径 /tmp

### 4.2 环境变量

`/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin`

- 定义的是<kbd>系统搜索命令的路径</kbd>
- echo \$PATH

### 4.3 whereis

- 搜索<kbd>命令</kbd>所在路径以及帮助文档所在位置
- whereis 命令名 `whereis ls`
  - -b 只查找可执行文件
  - -m 只查找帮助文件

### 4.4 which

- 可以看到别名 `which ls`
- 能看到的都是外部安装的命令
- 无法查看 Shell 自带的命令，如 `which cd`

### 4.5 find

- 文件搜索命令
- find [搜索范围][搜索条件]

#### 4.5.1 按名称搜索

```bash
find / -name folder
```

#### 4.5.2 通配符

- `find` 是在系统当中搜索符合条件的文件名，如果需要匹配，使用通配符匹配，通配符是完全匹配
- 通配符
  - \* 匹配任意内容
  - ? 匹配任意一个字符
  - [] 匹配任意一个中括号内的字符

```bash
#.表示当前目录
find . -name "ab[cdef]"
```

#### 4.5.3 不区分大小写

```bash
find / -iname AA.txt
```

#### 4.5.4 按所有者进行搜索

```bash
find /root -user root
find /root -nouser
```

#### 4.5.5 按时间搜索

```bash
#7天前修改的
#atime 文件访问时间
#ctime 改变文件属性
#mtime 修改文件内容
#+7 7天前
#-7 7天内
#7 7天前当天修改的
find /nginx/txt.log -mtime +7
```

#### 4.5.6 按大小搜

- k 小写,M 大写
- -a and 逻辑与，两个条件都满足
- -o or 逻辑或，两个条件满足一个就可以

```bash
find . -size +100k
```

#### 4.5.7 按 i 节点搜

```bash
find . -inum 10023
```

#### 4.5.8 grep(查询)

- 在文件当中匹配符合条件的字符串
- `-i` 忽略大小写
- `-v` 排除指定字符串
- find 命令，在系统当中搜索符合条件的文件名，如果需要匹配，使用通配符匹配，通配符是完全匹配
- grep 命令 在文件当中搜索符合条件的字符串，如果需要匹配，使用正则表达式进行匹配，正则表达式时包含匹配

```bash
#查找内容包含10的
grep "10" aa.txt
```

## 5. 压缩命令

### 5.1 zip 格式命令

压缩文件或目录，是一种压缩格式,缺点压缩比不高

- 压缩文件 `zip 压缩文件名 源文件`
- 压缩目录 `zip -r 压缩文件名 源目录`
- 解压 `unzip 压缩文件名`

```bash
mkdir folder
touch folder/1.txt
touch folder/2.txt
zip -r folder.zip folder
unzip bool.zip
```

### 5.2 gzip

gzip 是高压缩，可以把文件压缩的更小。但是不支持目录,压缩目录会把目录下的所有文件压缩。

- `gzip 源文件` `gzip a.txt` 压缩为.gz 格式的压缩文件，源文件会消失
- `gzip -c 源文件 > 压缩文件` `gzip -c yum.txt > yum.txt.gz` 压缩为.gz 格式的压缩文件，源文件不会消失
- `gzip -r 目录` `gzip -r folder` 压缩目录下的所有子文件，但是不压缩目录
- `gzip -d 压缩文件名` `gzip -d yum.txt.gz` 解压缩文件,不保留压缩包
- `gunzip 压缩文件` `gunzip yum.txt.gz` 解压缩文件,不保留压缩包

### 5.3 tar

- 打包命令，只打包不压缩
- `tar -cvf 打包文件名 源文件`

  - -c 打包
  - -v 显示过程
  - -f 指定打包后的文件名

```bash
tar -cvf folder1 folder
```

- `-x` 解打包

```bash
tar -xvf folder.tar
```

- 一般配合 gzip 使用，先打包再压缩 .tar.gz

```bash
#-z 代表gzip
#压缩
tar -zcvf folder.tar.gz folder
#解压缩
tar -zxvf folder.tar.gz
```

## 6. 关机、重启

### 6.1 shutdown

- 关机命令
  - -c 取消上一个关机命令
  - -h 关机
  - -r 重启

```bash
#定时5点关机
shutdown -r 05:00
#请取消关机命令
shutdown -c
```

### 6.2 init

- 关机

```bash
init 0
```

- 重启

```bash
init 6
```

### 6.3 logout

- 退出登录

```bash
logout
```

## 7.查看登录用户信息

### 7.1 w

查看登录用户信息(每列的含义)

- USER 登录的用户名
- TTY 登录的终端 tty1 本地终端 pts/0 远程终端
- FROM 登录的 IP
- LOGIN 登录时间
- IDLE 用户闲置时间
- JCPU 该终端所有进程占用的时间
- PCPU 当前进程所占用的时间
- WHAT 正在执行的命令

### 7.2 who

查看登录用户信息(每列的含义)

- USER 登录的用户名
- TTY 登录的终端 tty1 本地终端 pts/0 远程终端
- LOGIN 登录时间（登录的 IP）

### 7.3 last

查看当前登录和过去登录的用户信息 默认读取 /var/log/wtmp 文件

- 用户名
- 登录终端
- 登录 IP
- 登录时间
- 退出时间(在线时间)

### 7.4 lastlog

查看所有用户的最后一次登录时间

- 用户名
- 登录终端
- 登录 IP
- 最后一次登录时间
