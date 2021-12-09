(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{197:function(s,a,t){"use strict";t.r(a);var e=t(6),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"软件包下载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#软件包下载"}},[s._v("#")]),s._v(" 软件包下载")]),s._v(" "),t("p",[s._v('RPM 是 RedHat Package Manager（RedHat 软件包管理工具）类似 Windows 里面的"添加/删除程序"')]),s._v(" "),t("h2",{attrs:{id:"_1-软件包的分类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-软件包的分类"}},[s._v("#")]),s._v(" 1. 软件包的分类")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("源码包(需要经过编译，把人所编写的源代码编译成机器语言才能运行)")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("优点")]),s._v(" "),t("ul",[t("li",[s._v("开源免费")]),s._v(" "),t("li",[s._v("可以自由配置功能")]),s._v(" "),t("li",[s._v("编译安装更适合自己系统，更稳定")]),s._v(" "),t("li",[s._v("卸载方便")])])]),s._v(" "),t("li",[t("p",[s._v("缺点")]),s._v(" "),t("ul",[t("li",[s._v("安装过程比较复杂")]),s._v(" "),t("li",[s._v("编译过程比较长")]),s._v(" "),t("li",[s._v("安装过程一旦报错，非常难以排查")])])])])]),s._v(" "),t("li",[t("p",[s._v("二进制包(把源代码包经过编译生成 0/1 二进制，PRM 包、系统默认的安装包)")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("优点")]),s._v(" "),t("ul",[t("li",[s._v("包管理系统比较简单，只要通过简单的命令就可以实现包的安装、升级、查询和卸载")]),s._v(" "),t("li",[s._v("安装速度比源码包快很多")])])]),s._v(" "),t("li",[t("p",[s._v("缺点")]),s._v(" "),t("ul",[t("li",[s._v("经过编译则不能看到源代码")]),s._v(" "),t("li",[s._v("功能选择不灵活")]),s._v(" "),t("li",[s._v("依赖性比较麻烦")])])])])]),s._v(" "),t("li",[t("p",[s._v("脚本安装包(就是把复杂的安装过程写成了脚本，可以一键安装，本质上安装的还是源代码包和二进制包)")]),s._v(" "),t("ul",[t("li",[s._v("优点是安装简单")]),s._v(" "),t("li",[s._v("缺点是失去了自定义性")])])])]),s._v(" "),t("h2",{attrs:{id:"_2-yum-在线管理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-yum-在线管理"}},[s._v("#")]),s._v(" 2. YUM 在线管理")]),s._v(" "),t("ul",[t("li",[s._v("yum = Yellow dog Updater, Modified 主要功能是更方便的添加/删除/更新 RPM 包.它能自动解决包的倚赖性问题.")]),s._v(" "),t("li",[s._v("这是 rpm 包的在线管理命令")]),s._v(" "),t("li",[s._v("将所有的软件名放到官方服务器上，当进行 YUM 在线安装时，可以自动解决依赖性问题")]),s._v(" "),t("li",[s._v("/etc/yum.repos.d/\n"),t("ul",[t("li",[s._v("CentOS-Base.repo")]),s._v(" "),t("li",[s._v("epel.repo")])])])]),s._v(" "),t("h3",{attrs:{id:"_2-1-centos-base-repo"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-centos-base-repo"}},[s._v("#")]),s._v(" 2.1 CentOS-Base.repo")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" /etc/yum.repos.d/\nll\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" CentOS-Base.repo\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打印出")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("baseos"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("CentOS Linux "),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v(" - BaseOS\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("mirrorlist")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("http://mirrorlist.centos.org/?release"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("arch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$basearch")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("repo")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("BaseOS"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&")]),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("infra")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$infra")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#baseurl=http://mirror.centos.org/$contentdir/$releasever/BaseOS/$basearch/os/")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("file:///etc/pki/rpm-gpg/RPM-GPG-KEY-centosofficial\n")])])]),t("table",[t("thead",[t("tr",[t("th",[s._v("字段")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("base")]),s._v(" "),t("td",[s._v("容器名称，一定要放在[]中")])]),s._v(" "),t("tr",[t("td",[s._v("name")]),s._v(" "),t("td",[s._v("容器说明，可以自己随便写")])]),s._v(" "),t("tr",[t("td",[s._v("mirrorlist")]),s._v(" "),t("td",[s._v("镜像站点，可以注释掉")])]),s._v(" "),t("tr",[t("td",[s._v("baseurl")]),s._v(" "),t("td",[s._v("YUM 源服务器的地址，默认是 CentOS 官方的 YUM 源")])]),s._v(" "),t("tr",[t("td",[s._v("enable")]),s._v(" "),t("td",[s._v("此容器是否生效 不写或者写成 enable=1 表示生效，写成 enable=0 表示不生效")])]),s._v(" "),t("tr",[t("td",[s._v("gpgcheck")]),s._v(" "),t("td",[s._v("如果是 1 就是指 RPM 的数字证书生效,如果是 0 则表示不生效")])]),s._v(" "),t("tr",[t("td",[s._v("gpgkey")]),s._v(" "),t("td",[s._v("数字证书的公钥文件保存位置，不用改")])])])]),s._v(" "),t("p",[s._v("使用阿里云镜像")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("mv")]),s._v(" /etc/yum.repos.d/CentOS-Base.repo /etc/yum.repos.d/CentOS-Base.repo.backup "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#首先备份初始的配置文件")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" -O /etc/yum.repos.d/CentOS-Base.repo http://mirrors.aliyun.com/repo/Centos-8.repo "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#下载阿里云的源 注意区分centos版本")]),s._v("\nyum makecache "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 更新缓存")]),s._v("\nyum -y update "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#级所有包同时也升级软件和系统内核")]),s._v("\n")])])]),t("h2",{attrs:{id:"_3-yum-命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-yum-命令"}},[s._v("#")]),s._v(" 3. YUM 命令")]),s._v(" "),t("ul",[t("li",[s._v("yum 安装只需要写包名即可")])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("命令")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("yum list")]),s._v(" "),t("td",[s._v("查询所有可用软件包列表")])]),s._v(" "),t("tr",[t("td",[s._v("yum search 关键字")]),s._v(" "),t("td",[s._v("搜索服务器上所有和关键字相关的包")])]),s._v(" "),t("tr",[t("td",[s._v("yum -y install 包名")]),s._v(" "),t("td",[s._v("-y 自动回答 yes install 安装")])]),s._v(" "),t("tr",[t("td",[s._v("yum -y update 包名")]),s._v(" "),t("td",[s._v("-y 自动回答 yes update 升级")])]),s._v(" "),t("tr",[t("td",[s._v("yum -y remove 包名")]),s._v(" "),t("td",[s._v("-y 自动回答 yes remove 卸载,卸载有依赖性，所以尽量不要卸载")])]),s._v(" "),t("tr",[t("td",[s._v("yum grouplist")]),s._v(" "),t("td",[s._v("列出所有可用的软件组列表")])]),s._v(" "),t("tr",[t("td",[s._v("yum groupinstall 软件组名")]),s._v(" "),t("td",[s._v("安装指定的组，组名可以用 grouplist 查询")])]),s._v(" "),t("tr",[t("td",[s._v("yum groupremove 软件组名")]),s._v(" "),t("td",[s._v("卸载指定软件组")])])])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" gcc  "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#安装C语言安装包")]),s._v("\n")])])]),t("h2",{attrs:{id:"_4-常用软件安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-常用软件安装"}},[s._v("#")]),s._v(" 4. 常用软件安装")]),s._v(" "),t("h3",{attrs:{id:"_4-1-nginx"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-nginx"}},[s._v("#")]),s._v(" 4.1 nginx")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" nginx  -y\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#查看安装位置")]),s._v("\n")])])]),t("p",[s._v("启动服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ps")]),s._v(" -ef "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v(" nginx "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#打印nginx进程，也就是看nginx是否运行")]),s._v("\n\n/bin/systemctl start nginx.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# systemctl系统管理命令")]),s._v("\n/bin/systemctl stop nginx.service\n/bin/systemctl restart nginx.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 重启")]),s._v("\n/bin/systemctl status nginx.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 状态")]),s._v("\n\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("curl")]),s._v(" http://192.168.59.128/ "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 访问本机地址")]),s._v("\n")])])]),t("h3",{attrs:{id:"_4-2-mongodb"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-mongodb"}},[s._v("#")]),s._v(" 4.2 mongodb")]),s._v(" "),t("p",[s._v("yum 中没有 mogodb 源")]),s._v(" "),t("h4",{attrs:{id:"_4-2-1-添加安装源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-1-添加安装源"}},[s._v("#")]),s._v(" 4.2.1 添加安装源")]),s._v(" "),t("p",[t("code",[s._v("vim /etc/yum.repos.d/mongodb-org-3.4.repo")]),s._v("\n添加以下内容：")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("mongodb-org-3.4"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("name")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("MongoDB Repository\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("baseurl")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://repo.mongodb.org/yum/redhat/"),t("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$releasever")]),s._v("/mongodb-org/3.4/x86_64/\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgcheck")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("enabled")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gpgkey")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("https://www.mongodb.org/static/pgp/server-3.4.asc\n")])])]),t("ul",[t("li",[s._v("这里可以修改 gpgcheck=0, 省去 gpg 验证")]),s._v(" "),t("li",[s._v("yum makecache 就是把服务器的包信息下载到本地电脑缓存起来")])]),s._v(" "),t("h4",{attrs:{id:"_4-2-2-更新缓存"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-2-更新缓存"}},[s._v("#")]),s._v(" 4.2.2 更新缓存")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum makecache\n")])])]),t("h4",{attrs:{id:"_4-2-3-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-3-安装"}},[s._v("#")]),s._v(" 4.2.3 安装")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mongodb-org\n")])])]),t("h4",{attrs:{id:"_4-2-4-修改配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-4-修改配置文件"}},[s._v("#")]),s._v(" 4.2.4 修改配置文件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("whereis")]),s._v(" mongod\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/mongod.conf\n")])])]),t("p",[s._v("/etc/mongod.conf")]),s._v(" "),t("p",[s._v("注释掉绑定的 ip，就可以远程连接了")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("net:\n  port: "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("27017")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#  bindIp: 127.0.0.1")]),s._v("\n``\n")])])]),t("h4",{attrs:{id:"_4-2-5-启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-5-启动服务"}},[s._v("#")]),s._v(" 4.2.5 启动服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start mongod.service\nsystemctl stop mongod.service\nsystemctl status mongod.service\nsystemctl restart mongod.service\n")])])]),t("h4",{attrs:{id:"_4-2-6-远程连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-6-远程连接"}},[s._v("#")]),s._v(" 4.2.6 远程连接")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl stop firewalld.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#停止firewall")]),s._v("\nsystemctl disable firewalld.service "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("#禁止firewall开机启动")]),s._v("\nmongo "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.168")]),s._v(".59.128\n")])])]),t("h3",{attrs:{id:"_4-3-redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-redis"}},[s._v("#")]),s._v(" 4.3 redis")]),s._v(" "),t("h4",{attrs:{id:"_4-3-1-安装软件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-安装软件"}},[s._v("#")]),s._v(" 4.3.1 安装软件")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("yum "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" redis -y\n")])])]),t("h4",{attrs:{id:"_4-3-2-启动服务"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-启动服务"}},[s._v("#")]),s._v(" 4.3.2 启动服务")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start redis.service\nsystemctl stop redis.service\nsystemctl status redis.service\nsystemctl restart redis.service\n")])])]),t("h3",{attrs:{id:"_4-4-mysql"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-mysql"}},[s._v("#")]),s._v(" 4.4 mysql")]),s._v(" "),t("h4",{attrs:{id:"_4-4-1-查看最新的安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-查看最新的安装包"}},[s._v("#")]),s._v(" 4.4.1 查看最新的安装包")]),s._v(" "),t("p",[s._v("https://dev.mysql.com/downloads/repo/yum/")]),s._v(" "),t("h4",{attrs:{id:"_4-4-2-下载-mysql-源安装包"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-下载-mysql-源安装包"}},[s._v("#")]),s._v(" 4.4.2 下载 MySQL 源安装包")]),s._v(" "),t("ul",[t("li",[s._v("先下载源安装包\n"),t("code",[s._v("wget http://dev.mysql.com/get/mysql57-community-release-el7-11.noarch.rpm")])])]),s._v(" "),t("h4",{attrs:{id:"_4-4-3-安装源"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-3-安装源"}},[s._v("#")]),s._v(" 4.4.3 安装源")]),s._v(" "),t("ul",[t("li",[s._v("yum -y install mysql57-community-release-el7-11.noarch.rpm # 安装源")]),s._v(" "),t("li",[s._v("yum repolist enabled | grep mysql.* # 查看是否有源")])]),s._v(" "),t("h4",{attrs:{id:"_4-4-4-安装-mysql-服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-4-安装-mysql-服务器"}},[s._v("#")]),s._v(" 4.4.4 安装 MYSQL 服务器")]),s._v(" "),t("p",[t("code",[s._v("yum install mysql-community-server -y")]),s._v(" 这种下载方式特别慢，所以用下面的下载方式，在本地下载好，然后用 ftp 上传到下面目录，然后下载")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("/var/cache/yum/x86_64/7/mysql57-community/packages\nhttps://mirrors.ustc.edu.cn/mysql-ftp/Downloads/MySQL-5.7/\n")])])]),t("h4",{attrs:{id:"_4-4-5-启动服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-5-启动服务器"}},[s._v("#")]),s._v(" 4.4.5 启动服务器")]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("systemctl start mysqld.service\nsystemctl stop mysqld.service\nsystemctl status mysqld.service\nsystemctl restart mysqld.service\n")])])]),t("h4",{attrs:{id:"_4-4-6-初始化数据库密码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-6-初始化数据库密码"}},[s._v("#")]),s._v(" 4.4.6 初始化数据库密码")]),s._v(" "),t("ul",[t("li",[s._v('grep "password" /var/log/mysqld.log')]),s._v(" "),t("li",[s._v("mysql -uroot -p")]),s._v(" "),t("li",[s._v("ALTER USER 'root'@'localhost' IDENTIFIED BY 'abcd1#EFG';")]),s._v(" "),t("li",[s._v("SHOW VARIABLES LIKE 'validate_password%';")])]),s._v(" "),t("h4",{attrs:{id:"_4-4-7-支持远程访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-7-支持远程访问"}},[s._v("#")]),s._v(" 4.4.7 支持远程访问")]),s._v(" "),t("ul",[t("li",[s._v("GRANT ALL PRIVILEGES ON . TO 'root'@'%' IDENTIFIED BY 'abcd1#EFG' WITH GRANT OPTION;")]),s._v(" "),t("li",[s._v("FLUSH PRIVILEGES;")])]),s._v(" "),t("h4",{attrs:{id:"_4-4-8-开机自动访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-8-开机自动访问"}},[s._v("#")]),s._v(" 4.4.8 开机自动访问")]),s._v(" "),t("ul",[t("li",[s._v("systemctl enable mysqld")]),s._v(" "),t("li",[s._v("systemctl daemon-reload")])]),s._v(" "),t("h4",{attrs:{id:"_4-4-9-远程访问"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-9-远程访问"}},[s._v("#")]),s._v(" 4.4.9 远程访问")]),s._v(" "),t("ul",[t("li",[s._v("C:\\program1\\mysql-5.7.31-winx64\\bin\\mysqld MySQL")])]),s._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[s._v("mysql -h192.168.59.128 -uroot -p\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);