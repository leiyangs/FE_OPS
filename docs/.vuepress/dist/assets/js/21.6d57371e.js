(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{212:function(t,a,s){"use strict";s.r(a);var n=s(6),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#服务"}},[t._v("#")]),t._v(" 服务")]),t._v(" "),s("h2",{attrs:{id:"_1-服务和分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-服务和分类"}},[t._v("#")]),t._v(" 1. 服务和分类")]),t._v(" "),s("h3",{attrs:{id:"_1-1-运行级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-运行级别"}},[t._v("#")]),t._v(" 1.1 运行级别")]),t._v(" "),s("h4",{attrs:{id:"_1-1-1-运行级别分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-运行级别分类"}},[t._v("#")]),t._v(" 1.1.1 运行级别分类")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("运行级别")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("0 关机")]),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td",[t._v("1")]),t._v(" "),s("td",[t._v("单用户,类似于 Window 的安全模式，主要用于系统修复")])]),t._v(" "),s("tr",[s("td",[t._v("2")]),t._v(" "),s("td",[t._v("不完全多用户，类似于字符界面，但不包含 NFS(Linux 和 Window 进行文件共享)服务")])]),t._v(" "),s("tr",[s("td",[t._v("3")]),t._v(" "),s("td",[t._v("完整的命令行模式，就是标准的字符界面")])]),t._v(" "),s("tr",[s("td",[t._v("4")]),t._v(" "),s("td",[t._v("系统保留未使用")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("图形界面")])]),t._v(" "),s("tr",[s("td",[t._v("5")]),t._v(" "),s("td",[t._v("图形界面")])]),t._v(" "),s("tr",[s("td",[t._v("6")]),t._v(" "),s("td",[t._v("重启")])])])]),t._v(" "),s("h4",{attrs:{id:"_1-1-2-查看上一个级别和当前级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-查看上一个级别和当前级别"}},[t._v("#")]),t._v(" 1.1.2 查看上一个级别和当前级别")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("runlevel\n"),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("h4",{attrs:{id:"_1-1-3-切换运行级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-切换运行级别"}},[t._v("#")]),t._v(" 1.1.3 切换运行级别")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("init "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),s("h4",{attrs:{id:"_1-1-4-设置默认运行级别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-设置默认运行级别"}},[t._v("#")]),t._v(" 1.1.4 设置默认运行级别")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/inittab\nid:3:initdefault:\n")])])]),s("h3",{attrs:{id:"_1-2-服务的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-服务的分类"}},[t._v("#")]),t._v(" 1.2 服务的分类")]),t._v(" "),s("ul",[s("li",[t._v("系统开启的服务越少，服务器就会更加稳定和安全")]),t._v(" "),s("li",[t._v("服务安装方式不同，启动的方式也不同")])]),t._v(" "),s("h4",{attrs:{id:"_1-2-1-服务管理的方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-服务管理的方式"}},[t._v("#")]),t._v(" 1.2.1 服务管理的方式")]),t._v(" "),s("ul",[s("li",[t._v("RPM 包安装的服务,由软件包作者指定安装位置,独立的服务，绝大多数服务都是独立运行在内存中的，可以直接响应客户端的请求")]),t._v(" "),s("li",[t._v("源码包安装的服务，由我们用户决定安装位置")])]),t._v(" "),s("h4",{attrs:{id:"_1-2-2-查看-rpm-包安装的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-查看-rpm-包安装的服务"}},[t._v("#")]),t._v(" 1.2.2 查看 RPM 包安装的服务")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" --list\n")])])]),s("h4",{attrs:{id:"_1-2-3-查看源码包安装的服务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-查看源码包安装的服务"}},[t._v("#")]),t._v(" 1.2.3 查看源码包安装的服务")]),t._v(" "),s("ul",[s("li",[t._v("查看自定义的安装位置，默认为/usr/local 下")]),t._v(" "),s("li",[t._v("usr= Unix System Resource 系统资源")])]),t._v(" "),s("h4",{attrs:{id:"_1-2-4-启动和自启动"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-4-启动和自启动"}},[t._v("#")]),t._v(" 1.2.4 启动和自启动")]),t._v(" "),s("ul",[s("li",[t._v("启动服务就是指让此服务在当前系统中运行，并向客户端提供服务")]),t._v(" "),s("li",[t._v("服务自启动就是指通过设置，让此服务在开机或者重启后随着系统启动而自动启动")])]),t._v(" "),s("h3",{attrs:{id:"_1-3-服务与端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-服务与端口"}},[t._v("#")]),t._v(" 1.3 服务与端口")]),t._v(" "),s("ul",[s("li",[t._v("查看系统中的运行中的进程")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -aux\n")])])]),s("ul",[s("li",[t._v("查看常见服务端口")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/services\n")])])]),s("h3",{attrs:{id:"_1-4-查询系统中监听的端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-查询系统中监听的端口"}},[t._v("#")]),t._v(" 1.4 查询系统中监听的端口")]),t._v(" "),s("ul",[s("li",[t._v("netstat -tulnp")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-t")]),t._v(" "),s("td",[t._v("列出 tcp 数据")])]),t._v(" "),s("tr",[s("td",[t._v("-u")]),t._v(" "),s("td",[t._v("列出 udp 数据")])]),t._v(" "),s("tr",[s("td",[t._v("-l")]),t._v(" "),s("td",[t._v("列出正在监听的网络服务")])]),t._v(" "),s("tr",[s("td",[t._v("-n")]),t._v(" "),s("td",[t._v("用端口号来显示服务，而非服务名")])]),t._v(" "),s("tr",[s("td",[t._v("-p")]),t._v(" "),s("td",[t._v("列出该服务的进程 ID")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-prm-包服务管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-prm-包服务管理"}},[t._v("#")]),t._v(" 2. PRM 包服务管理")]),t._v(" "),s("ul",[s("li",[t._v("RMP 是 LINUX 下的一种软件的可执行程序，你只要安装它就可以了。这种软件安装包通常是一个 RPM 包（Redhat Linux Packet Manager，就是 Redhat 的包管理器），后缀是.rpm")]),t._v(" "),s("li",[t._v("RPM 是 Red Hat 公司随 Redhat Linux 推出了一个软件包管理器，通过它能够更加轻松容易地实现软件的安装")])]),t._v(" "),s("h3",{attrs:{id:"_2-1-rpm-命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-rpm-命令"}},[t._v("#")]),t._v(" 2.1 rpm 命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("安装软件")]),t._v(" "),s("td",[t._v("执行 rpm -ivh rpm 包名 其中 i 表示安装 install，v 表示显示安装过程 verbose，h 表示显示进度")])]),t._v(" "),s("tr",[s("td",[t._v("升级软件")]),t._v(" "),s("td",[t._v("执行 rpm -Uvh rpm 包名 U 表示升级 update")])]),t._v(" "),s("tr",[s("td",[t._v("反安装")]),t._v(" "),s("td",[t._v("执行 rpm -e rpm 包名")])]),t._v(" "),s("tr",[s("td",[t._v("查询软件包的详细信息")]),t._v(" "),s("td",[t._v("执行 rpm -qpi rpm 包名")])]),t._v(" "),s("tr",[s("td",[t._v("查询某个文件是属于那个 rpm 包的")]),t._v(" "),s("td",[t._v("执行 rpm -qf rpm 包名")])]),t._v(" "),s("tr",[s("td",[t._v("查该软件包会向系统里面写入哪些文件")]),t._v(" "),s("td",[t._v("执行 rpm -qpl rpm 包名")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-repo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-repo"}},[t._v("#")]),t._v(" 2.2 repo")]),t._v(" "),s("ul",[s("li",[t._v("repo 文件是 yum 源（软件仓库）的配置文件，通常一个 repo 文件定义了一个或者多个软件仓库的细节内容，例如我们将从哪里下载需要安装或者升级的软件包，repo 文件中的设置内容将被 yum 读取和应用")]),t._v(" "),s("li",[t._v("服务器端：在服务器上面存放了所有的 RPM 软件包，然后以相关的功能去分析每个 RPM 文件的依赖性关系，将这些数据记录成文件存放在服务器的某特定目录内。")]),t._v(" "),s("li",[t._v("客户端：如果需要安装某个软件时，先下载服务器上面记录的依赖性关系文件(可通过 WWW 或 FTP 方式)，通过对服务器端下载的纪录数据进行分析，然后取得所有相关的软件，一次全部下载下来进行安装。")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/yum.conf\n/etc/yum.repos.d\n/etc/yum.repos.d/nginx.repo\n")])])]),s("h3",{attrs:{id:"_2-3-rpm-包的默认安装位置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-rpm-包的默认安装位置"}},[t._v("#")]),t._v(" 2.3 RPM 包的默认安装位置")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("文件")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/etc")]),t._v(" "),s("td",[t._v("配置文件位置")])]),t._v(" "),s("tr",[s("td",[t._v("/etc/init.d")]),t._v(" "),s("td",[t._v("启动脚本位置")])]),t._v(" "),s("tr",[s("td",[t._v("/etc/sysconfig")]),t._v(" "),s("td",[t._v("初始化环境配置文件位置")])]),t._v(" "),s("tr",[s("td",[t._v("/var/lib")]),t._v(" "),s("td",[t._v("服务产生的数据放在这里")])]),t._v(" "),s("tr",[s("td",[t._v("/var/log")]),t._v(" "),s("td",[t._v("日志")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-4-启动命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-启动命令"}},[t._v("#")]),t._v(" 2.4 启动命令")]),t._v(" "),s("ul",[s("li",[t._v("systemd 是 Linux 系统最新的初始化系统(init),作用是提高系统的启动速度，尽可能启动较少的进程，尽可能更多进程并发启动")]),t._v(" "),s("li",[t._v("systemd 对应的进程管理命令是 "),s("code",[t._v("systemctl")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 下载nginx安装源")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("rpm")]),t._v(" -ivh http://nginx.org/packages/centos/6/noarch/RPMS/nginx-release-centos-6-0.el6.ngx.noarch.rpm\nyum info nginx\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装nginx")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y nginx\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启动nginx")]),t._v("\nsystemctl start nginx.service\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -ltun "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("curl")]),t._v(" http://localhost\n")])])]),s("h2",{attrs:{id:"_3-源码包服务管理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-源码包服务管理"}},[t._v("#")]),t._v(" 3. 源码包服务管理")]),t._v(" "),s("p",[s("strong",[t._v("通过源码包安装软件，通常使用 yum 包管理安装")])]),t._v(" "),s("ul",[s("li",[t._v("使用绝对路径，调用启动脚本来启动。")]),t._v(" "),s("li",[t._v("不同的源码包的启动脚本不一样")]),t._v(" "),s("li",[t._v("要通过阅读源码包安装说明的方式来查看启动的方法")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-安装-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-安装-nginx"}},[t._v("#")]),t._v(" 3.1 安装 nginx")]),t._v(" "),s("h4",{attrs:{id:"_3-1-1-安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-1-安装依赖"}},[t._v("#")]),t._v(" 3.1.1 安装依赖")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /root/nginxinstall\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /root/nginxinstall\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 一般去到官网下载，")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# gcc C语言编译器 perl 正则包")]),t._v("\nyum "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc gcc-c++ perl -y\n")])])]),s("h4",{attrs:{id:"_3-1-2-下载源文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-下载源文件"}},[t._v("#")]),t._v(" 3.1.2 下载源文件")]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-1-pcre"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-1-pcre"}},[t._v("#")]),t._v(" 3.1.2.1 PCRE")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.pcre.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("pcre"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("RouterLink",{attrs:{to:"ftp://ftp.csx.cam.ac.uk/pub/software/programming/pcre/"}},[t._v("FTP 下载")])],1),t._v(" "),s("li",[s("a",{attrs:{href:"https://sourceforge.net/projects/pcre/files/pcre/",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 下载"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" ftp://ftp.pcre.org/pub/pcre/pcre-8.44.tar.gz\n")])])]),s("h5",{attrs:{id:"_3-1-2-2-zlib"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-2-zlib"}},[t._v("#")]),t._v(" 3.1.2.2 zlib")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://www.zlib.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1)]),t._v(" "),s("li",[s("a",{attrs:{href:"https://sourceforge.net/projects/libpng/files/zlib/1.2.11/zlib-1.2.11.tar.gz/download?use_mirror=nchc",target:"_blank",rel:"noopener noreferrer"}},[t._v("HTTP 下载"),s("OutboundLink")],1)])]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-3-openssl"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-3-openssl"}},[t._v("#")]),t._v(" 3.1.2.3 openssl")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://www.openssl.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1)])]),t._v(" "),s("h5",{attrs:{id:"_3-1-2-4-nginx"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-2-4-nginx"}},[t._v("#")]),t._v(" 3.1.2.4 nginx")]),t._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"http://nginx.org/en/docs/configure.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网"),s("OutboundLink")],1)])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v("  http://nginx.org/download/nginx-1.10.1.tar.gz\n")])])]),s("h4",{attrs:{id:"_3-1-3-解压文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-3-解压文件"}},[t._v("#")]),t._v(" 3.1.3 解压文件")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /root/nginxinstall\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v("  /root/nginxinstall\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 解压上面安装的包")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf nginx-1.10.1.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf openssl-1.0.2h.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf pcre-8.44.tar.gz\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("tar")]),t._v(" -zxvf zlib-1.2.11.tar.gz\n")])])]),s("h4",{attrs:{id:"_3-1-4-配置和安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-4-配置和安装"}},[t._v("#")]),t._v(" 3.1.4 配置和安装")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 编译")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进入nginx目录并配置。./configure配置命令，配置安装路径等等")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" nginx-1.10.1\n./configure --prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--pid-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/nginx.pid "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--error-log-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/error.log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--http-log-path"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/access.log "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-http_ssl_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-mail --with-mail_ssl_module "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-stream --with-threads "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--user"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("comex --group"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("comexgroup "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-pcre"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/nginxinstall/pcre-8.44 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-zlib"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/nginxinstall/zlib-1.2.11 "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n--with-openssl"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/root/nginxinstall/openssl-1.0.2n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# make编译")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 此目录是nginx可执行文件的目录 -t是检测目录是否合法")]),t._v("\n/usr/local/nginx/sbin/nginx -t\nnginx: "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("emerg"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" getpwnam"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"comex"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" failed\n\nuseadd nginx "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 添加nginx用户")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /usr/local/nginx/conf/nginx.conf\nuser nginx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3-1-5-管理命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-5-管理命令"}},[t._v("#")]),t._v(" 3.1.5 管理命令")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("命令")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("/usr/local/nginx/sbin/nginx -c /usr/local/nginx/conf/nginx.conf")]),t._v(" "),s("td",[t._v("启动")])]),t._v(" "),s("tr",[s("td",[t._v("ps -ef grep nginx;kill -QUIT 2072")]),t._v(" "),s("td",[t._v("从容停止")])]),t._v(" "),s("tr",[s("td",[t._v("ps -ef grep nginx;kill -TERM 2132; kill -INT 2132")]),t._v(" "),s("td",[t._v("快速停止")])]),t._v(" "),s("tr",[s("td",[t._v("pkill -9 nginx")]),t._v(" "),s("td",[t._v("强制停止")])]),t._v(" "),s("tr",[s("td",[t._v("nginx -t")]),t._v(" "),s("td",[t._v("验证 nginx 配置文件是否正确")])]),t._v(" "),s("tr",[s("td",[t._v("nginx -s reload")]),t._v(" "),s("td",[t._v("重启 Nginx 服务")])]),t._v(" "),s("tr",[s("td",[t._v("kill -HUP 进程号")]),t._v(" "),s("td",[t._v("查找当前 nginx 进程号")])])])]),t._v(" "),s("h4",{attrs:{id:"_3-1-6-以服务启动-service"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-6-以服务启动-service"}},[t._v("#")]),t._v(" 3.1.6 以服务启动 service")]),t._v(" "),s("ul",[s("li",[t._v("Nginx 启动、关闭、重新加载脚本")]),t._v(" "),s("li",[t._v("创建文件 etc/init.d/nginx")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("/etc/init.d/nginx start\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token shebang important"}},[t._v("#! /bin/bash")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定义变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("NAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("nginx\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DAEMON")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/sbin/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可执行文件路径")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("CONFIGFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/conf/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".conf\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("PIDFILE")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/nginx/logs/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v(".pid "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 进程号")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("SCRIPTNAME")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/init.d/"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" -e "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 报错退出")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v(" -x "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DAEMON")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 没有可执行权限，退出")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("do_start")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$DAEMON")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$CONFIGFILE")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx already running"')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("pid")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ps")]),t._v(" -ef "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" nginx "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" master "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'{print $2}'")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v(")")])]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$pid")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$PIDFILE")]),t._v('"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("do_stop")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -INT "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" $PIDFILE"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx not running"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function-name function"}},[t._v("do_reload")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("kill")]),t._v(" -HUP "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" $PIDFILE"),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("||")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"nginx can\'t reload"')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("case")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$1")]),t._v('"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v("\n start"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Starting  '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v('"')]),t._v("\n do_start\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n stop"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Stopping  '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v('"')]),t._v("\n do_stop\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n reload"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("graceful"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Reloading  configuration"')]),t._v("\n do_reload\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n restart"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Restarting  '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$NAME")]),t._v('"')]),t._v("\n do_stop\n do_start\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"."')]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n *"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Usage: '),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$SCRIPTNAME")]),t._v(' {start|stop|reload|restart}"')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),s("span",{pre:!0,attrs:{class:"token file-descriptor important"}},[t._v("&2")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("esac")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exit")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n")])])]),s("h4",{attrs:{id:"_3-1-7-chkconfig"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-7-chkconfig"}},[t._v("#")]),t._v(" 3.1.7 chkconfig")]),t._v(" "),s("ul",[s("li",[t._v("指定 nginx 脚本可以被 chkconfig 命令管理")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#开机启动")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" --add nginx\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" --list\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" --level "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2345")]),t._v(" nginx on\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chkconfig")]),t._v(" nginx off\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);