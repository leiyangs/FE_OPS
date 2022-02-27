(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{199:function(a,s,t){"use strict";t.r(s);var _=t(6),v=Object(_.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"linux-常用命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#linux-常用命令"}},[a._v("#")]),a._v(" linux 常用命令")]),a._v(" "),t("h2",{attrs:{id:"_1-常见目录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-常见目录"}},[a._v("#")]),a._v(" 1. 常见目录")]),a._v(" "),t("ul",[t("li",[a._v("/ 根目录")]),a._v(" "),t("li",[a._v("/boot 启动目录，启动相关文件")]),a._v(" "),t("li",[a._v("/dev 设备文件")]),a._v(" "),t("li",[a._v("/etc 配置文件")]),a._v(" "),t("li",[a._v("/home 普通用户的家目录,可以操作")]),a._v(" "),t("li",[a._v("/lib 系统库保存目录")]),a._v(" "),t("li",[a._v("/mnt 移动设备挂载目录")]),a._v(" "),t("li",[a._v("/media 光盘挂载目录")]),a._v(" "),t("li",[a._v("/misc 磁带机挂载目录")]),a._v(" "),t("li",[a._v("/root 超级用户的家目录,可以操作")]),a._v(" "),t("li",[a._v("/tmp 临时目录,可以操作")]),a._v(" "),t("li",[a._v("/proc 不能直接操作，保存的是内存的挂载点")]),a._v(" "),t("li",[a._v("/sys 不能直接操作，保存的是内存的挂载点")]),a._v(" "),t("li",[a._v("/var 变量")]),a._v(" "),t("li",[a._v("/bin 普通命令")]),a._v(" "),t("li",[a._v("/sbin 命令保存目录，级用户才可以执行的命令")]),a._v(" "),t("li",[a._v("/usr/bin 系统软件资源目录 面向普通用户的系统命令")]),a._v(" "),t("li",[a._v("/usr/sbin 系统软件资源目录 面向超级用户的系统命令")])]),a._v(" "),t("h2",{attrs:{id:"_2-命令基本格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-命令基本格式"}},[a._v("#")]),a._v(" 2. 命令基本格式")]),a._v(" "),t("h3",{attrs:{id:"_2-1-命令提示符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-命令提示符"}},[a._v("#")]),a._v(" 2.1 命令提示符")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("root@localhost ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#")]),a._v("\n")])])]),t("ul",[t("li",[a._v("root 当前登录用户")]),a._v(" "),t("li",[a._v("localhost 主机名")]),a._v(" "),t("li",[a._v("~ 当前工作目录,默认是当前用户的家目录，root 就是/root,普通用户是 /home/用户名")]),a._v(" "),t("li",[a._v("提示符 超级用户是 #,普通用户是$")])]),a._v(" "),t("h3",{attrs:{id:"_2-2-命令格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-命令格式"}},[a._v("#")]),a._v(" 2.2 命令格式")]),a._v(" "),t("ul",[t("li",[a._v("命令 [选项][参数]")]),a._v(" "),t("li",[a._v("当有多个选项时，可以写在一起")])]),a._v(" "),t("h3",{attrs:{id:"_2-3-ls"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-ls"}},[a._v("#")]),a._v(" 2.3 ls")]),a._v(" "),t("ul",[t("li",[a._v("查询目录中的内容")]),a._v(" "),t("li",[a._v("ls [选项][文件或者目录]")]),a._v(" "),t("li",[a._v("选项\n"),t("ul",[t("li",[a._v("-a 显示所有文件，包括隐藏文件")]),a._v(" "),t("li",[a._v("-l 显示详细信息")]),a._v(" "),t("li",[a._v("-d 查看目录本身的属性而非子文件 ls /etc/")]),a._v(" "),t("li",[a._v("-h 人性化的方式显示文件大小")]),a._v(" "),t("li",[a._v("-i 显示 inode,也就是 i 节点，每个节点都有 ID 号")])])]),a._v(" "),t("li",[a._v("默认当前目录下的文件列表")])]),a._v(" "),t("h4",{attrs:{id:"_2-3-1-ls-l"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-1-ls-l"}},[a._v("#")]),a._v(" 2.3.1 ls -l")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#文件类型和权限  ACL权限  硬链接引用计数  所有者  所属组  文件大小  最后修改时间  文件名")]),a._v("\ndrwxr-xr-x "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" user "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("197121")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v("月 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":13 docs/\ndrwxr-xr-x "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" user "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("197121")]),a._v("      "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v("月 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" 09:54 node_modules/\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" user "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("197121")]),a._v("    "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("383")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v("月 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":13 package.json\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" user "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("197121")]),a._v("     "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("74")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v("月 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":13 package-lock.json\n-rw-r--r-- "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),a._v(" user "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("197121")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("364332")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("9")]),a._v("月 "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("29")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),a._v(":13 yarn.lock\n")])])]),t("table",[t("thead",[t("tr",[t("th",[a._v("文件类型和权限")]),a._v(" "),t("th",[a._v("ACL 权限")]),a._v(" "),t("th",[a._v("硬链接引用计数")]),a._v(" "),t("th",[a._v("所有者")]),a._v(" "),t("th",[a._v("所属组")]),a._v(" "),t("th",[a._v("文件大小")]),a._v(" "),t("th",[a._v("最后修改时间")]),a._v(" "),t("th",[a._v("文件名")])])]),a._v(" "),t("tbody",[t("tr",[t("td",[a._v("-rw-r--r--")]),a._v(" "),t("td",[a._v(".")]),a._v(" "),t("td",[a._v("1")]),a._v(" "),t("td",[a._v("user")]),a._v(" "),t("td",[a._v("197121")]),a._v(" "),t("td",[a._v("383")]),a._v(" "),t("td",[a._v("9 月 29 10:13")]),a._v(" "),t("td",[a._v("package.json")])])])]),a._v(" "),t("ul",[t("li",[a._v("文件类型 - 文件、d 目录、l 软链接文件")]),a._v(" "),t("li",[a._v("u(所有者)、g(所属组)、o(其他人)")]),a._v(" "),t("li",[a._v("r(read) 读取、w(write) 写入、x(execute) 执行")])]),a._v(" "),t("h2",{attrs:{id:"_3-处理文件命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-处理文件命令"}},[a._v("#")]),a._v(" 3. 处理文件命令")]),a._v(" "),t("h3",{attrs:{id:"_3-1-mkdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-mkdir"}},[a._v("#")]),a._v(" 3.1 mkdir")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("创建目录 make directory")])]),a._v(" "),t("li",[t("p",[a._v("mkdir -p [目录名] "),t("kbd",[a._v("-p 递归创建")])])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" folder\n")])])]),t("h3",{attrs:{id:"_3-2-cd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-cd"}},[a._v("#")]),a._v(" 3.2 cd")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("切换所在目录 change directory")])]),a._v(" "),t("li",[t("p",[a._v("cd [目录]")]),a._v(" "),t("ul",[t("li",[a._v("~ 家目录")]),a._v(" "),t("li",[a._v("家目录\n"),t("ul",[t("li",[a._v("上次目录")])])]),a._v(" "),t("li",[a._v(". 当前目录")]),a._v(" "),t("li",[a._v(".. 上级目录")])]),a._v(" "),t("p",[a._v("相对路径是参照当前所在目录;绝对路径是从根目录开始;按 TAB 键可以补全命令和目录")])])]),a._v(" "),t("h3",{attrs:{id:"_3-3-pwd"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-pwd"}},[a._v("#")]),a._v(" 3.3 pwd")]),a._v(" "),t("ul",[t("li",[a._v("显示当前目录 pwd")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("pwd")]),a._v("\n")])])]),t("h3",{attrs:{id:"_3-4-rmdir"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-rmdir"}},[a._v("#")]),a._v(" 3.4 rmdir")]),a._v(" "),t("ul",[t("li",[a._v("删除目录 remove empty diretory")]),a._v(" "),t("li",[a._v("rmdir [目录名]")]),a._v(" "),t("li",[a._v("只能删除空目录")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rmdir")]),a._v(" folder\n")])])]),t("h3",{attrs:{id:"_3-5-rm"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-rm"}},[a._v("#")]),a._v(" 3.5 rm")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("删除文件或者目录 remove")])]),a._v(" "),t("li",[t("p",[a._v("rm [文件或者目录]")]),a._v(" "),t("ul",[t("li",[a._v("-r 删除目录")]),a._v(" "),t("li",[a._v("-f 强制删除")])])]),a._v(" "),t("li",[t("p",[a._v("rm -rf [文件或者目录] 递归强制删除所有目录")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("rm")]),a._v(" -r folder\n")])])]),t("h3",{attrs:{id:"_3-5-cp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-cp"}},[a._v("#")]),a._v(" 3.5 cp")]),a._v(" "),t("ul",[t("li",[a._v("copy 复制命令\n-copy [源文件或者目录][目标文件]\n"),t("ul",[t("li",[a._v("-r 复制目录，"),t("code",[a._v("cp")]),a._v(" 命令默认只能复制文件")]),a._v(" "),t("li",[a._v("-p 连带文件属性复制")]),a._v(" "),t("li",[a._v("-d 若源文件是链接文件，则复制连接属性")]),a._v(" "),t("li",[a._v("-a 相当于 -rpd")])])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -r assets assets1\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -rp assets assets2\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cp")]),a._v(" -a assets assets3\n")])])]),t("h3",{attrs:{id:"_3-6-mv"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-mv"}},[a._v("#")]),a._v(" 3.6 mv")]),a._v(" "),t("ul",[t("li",[a._v("移动文件或者改名 move")]),a._v(" "),t("li",[a._v("mv [源文件或者目录][目标文件]")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 改名")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" folder folder1\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#移动")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mv")]),a._v(" assets1 assets\n")])])]),t("h3",{attrs:{id:"_3-7-ln"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-ln"}},[a._v("#")]),a._v(" 3.7 ln")]),a._v(" "),t("ul",[t("li",[a._v("链接命令,生成链接文件 "),t("code",[a._v("link")])])]),a._v(" "),t("h4",{attrs:{id:"_3-7-1-软连接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-1-软连接"}},[a._v("#")]),a._v(" 3.7.1 软连接")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("ln -s [源文件][目标文件]")]),a._v(" "),t("ul",[t("li",[a._v("-s 创建软链接")])])]),a._v(" "),t("li",[t("p",[a._v("很实用")])]),a._v(" "),t("li",[t("p",[a._v("相当于 Windows 的快捷方式")])]),a._v(" "),t("li",[t("p",[a._v("软链接拥有自己的 i 节点和 Block 块，但是数据块中只保存源文件的文件名和 i 节点号，并没有实际的文件数据")])]),a._v(" "),t("li",[t("p",[a._v("lrwxrwxrwx l 软链接 软链接的文件权限都是 777")])]),a._v(" "),t("li",[t("p",[a._v("修改任意一个文件，另一个都会改变")])]),a._v(" "),t("li",[t("p",[a._v("删除源文件，软链接不能使用")])]),a._v(" "),t("li",[t("p",[a._v("软链接源文件必须写绝对路径")])])]),a._v(" "),t("h4",{attrs:{id:"_3-7-2-硬链接"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-2-硬链接"}},[a._v("#")]),a._v(" 3.7.2 硬链接")]),a._v(" "),t("ul",[t("li",[a._v("一般不使用")]),a._v(" "),t("li",[a._v("拥有相同的 i 节点和存储 block 块，可以看作是同一个文件")]),a._v(" "),t("li",[a._v("可以通过 i 节点访问")]),a._v(" "),t("li",[a._v("不能跨分区")]),a._v(" "),t("li",[a._v("不能针对目录使用")])]),a._v(" "),t("h3",{attrs:{id:"_3-8-cat"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-cat"}},[a._v("#")]),a._v(" 3.8 cat")]),a._v(" "),t("p",[a._v("查看并显示文件内容")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("cat")]),a._v(" index.html\n")])])]),t("h3",{attrs:{id:"_3-9-head-tail"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-head-tail"}},[a._v("#")]),a._v(" 3.9 head tail |")]),a._v(" "),t("ul",[t("li",[a._v("head 查看前两行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -2 index.html\n")])])]),t("ul",[t("li",[a._v("tail 查看后两行")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -2 index.html\n")])])]),t("ul",[t("li",[a._v("| 管道符用来做分页")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("head")]),a._v(" -10 index.html "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tail")]),a._v(" -2\n")])])]),t("h2",{attrs:{id:"_4-搜索文件命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-搜索文件命令"}},[a._v("#")]),a._v(" 4. 搜索文件命令")]),a._v(" "),t("h3",{attrs:{id:"_4-1-locate"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-locate"}},[a._v("#")]),a._v(" 4.1 locate")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#如果没有请安装")]),a._v("\nyum -y "),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mlocate\n")])])]),t("ul",[t("li",[a._v("在后台数据库中按文件名搜索，速度比较快。数据保存在"),t("code",[a._v("/var/lib/mlocate")]),a._v(" 后台数据库，每天更新一次")]),a._v(" "),t("li",[a._v("可以 "),t("code",[a._v("updatedb")]),a._v(" 命令立刻更新数据库")]),a._v(" "),t("li",[a._v("只能搜索文件名\n"),t("ul",[t("li",[t("code",[a._v("/etc/updatedb.conf")]),a._v("建立索引的配置文件")]),a._v(" "),t("li",[a._v('PRUNE_BIND_MOUNTS = "yes" 全部生效，开启搜索限制')]),a._v(" "),t("li",[a._v("PRUNEFS 不搜索的文件系统")]),a._v(" "),t("li",[a._v("PRUNENAMES 忽略的文件类型")]),a._v(" "),t("li",[a._v("PRUNEPATHS 忽略的路径 /tmp")])])])]),a._v(" "),t("h3",{attrs:{id:"_4-2-环境变量"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-环境变量"}},[a._v("#")]),a._v(" 4.2 环境变量")]),a._v(" "),t("p",[t("code",[a._v("/usr/local/bin:/usr/bin:/bin:/usr/sbin:/sbin")])]),a._v(" "),t("ul",[t("li",[a._v("定义的是"),t("kbd",[a._v("系统搜索命令的路径")])]),a._v(" "),t("li",[a._v("echo $PATH")])]),a._v(" "),t("h3",{attrs:{id:"_4-3-whereis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-whereis"}},[a._v("#")]),a._v(" 4.3 whereis")]),a._v(" "),t("ul",[t("li",[a._v("搜索"),t("kbd",[a._v("命令")]),a._v("所在路径以及帮助文档所在位置")]),a._v(" "),t("li",[a._v("whereis 命令名 "),t("code",[a._v("whereis ls")]),a._v(" "),t("ul",[t("li",[a._v("-b 只查找可执行文件")]),a._v(" "),t("li",[a._v("-m 只查找帮助文件")])])])]),a._v(" "),t("h3",{attrs:{id:"_4-4-which"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-which"}},[a._v("#")]),a._v(" 4.4 which")]),a._v(" "),t("ul",[t("li",[a._v("可以看到别名 "),t("code",[a._v("which ls")])]),a._v(" "),t("li",[a._v("能看到的都是外部安装的命令")]),a._v(" "),t("li",[a._v("无法查看 Shell 自带的命令，如 "),t("code",[a._v("which cd")])])]),a._v(" "),t("h3",{attrs:{id:"_4-5-find"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-find"}},[a._v("#")]),a._v(" 4.5 find")]),a._v(" "),t("ul",[t("li",[a._v("文件搜索命令")]),a._v(" "),t("li",[a._v("find [搜索范围][搜索条件]")])]),a._v(" "),t("h4",{attrs:{id:"_4-5-1-按名称搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-1-按名称搜索"}},[a._v("#")]),a._v(" 4.5.1 按名称搜索")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / -name folder\n")])])]),t("h4",{attrs:{id:"_4-5-2-通配符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-2-通配符"}},[a._v("#")]),a._v(" 4.5.2 通配符")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("find")]),a._v(" 是在系统当中搜索符合条件的文件名，如果需要匹配，使用通配符匹配，通配符是完全匹配")]),a._v(" "),t("li",[a._v("通配符\n"),t("ul",[t("li",[a._v("* 匹配任意内容")]),a._v(" "),t("li",[a._v("? 匹配任意一个字符")]),a._v(" "),t("li",[a._v("[] 匹配任意一个中括号内的字符")])])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#.表示当前目录")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" -name "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"ab[cdef]"')]),a._v("\n")])])]),t("h4",{attrs:{id:"_4-5-3-不区分大小写"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-3-不区分大小写"}},[a._v("#")]),a._v(" 4.5.3 不区分大小写")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" / -iname AA.txt\n")])])]),t("h4",{attrs:{id:"_4-5-4-按所有者进行搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-4-按所有者进行搜索"}},[a._v("#")]),a._v(" 4.5.4 按所有者进行搜索")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /root -user root\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /root -nouser\n")])])]),t("h4",{attrs:{id:"_4-5-5-按时间搜索"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-5-按时间搜索"}},[a._v("#")]),a._v(" 4.5.5 按时间搜索")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#7天前修改的")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#atime 文件访问时间")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#ctime 改变文件属性")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#mtime 修改文件内容")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#+7 7天前")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#-7 7天内")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#7 7天前当天修改的")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" /nginx/txt.log -mtime +7\n")])])]),t("h4",{attrs:{id:"_4-5-6-按大小搜"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-6-按大小搜"}},[a._v("#")]),a._v(" 4.5.6 按大小搜")]),a._v(" "),t("ul",[t("li",[a._v("k 小写,M 大写")]),a._v(" "),t("li",[a._v("-a and 逻辑与，两个条件都满足")]),a._v(" "),t("li",[a._v("-o or 逻辑或，两个条件满足一个就可以")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" -size +100k\n")])])]),t("h4",{attrs:{id:"_4-5-7-按-i-节点搜"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-7-按-i-节点搜"}},[a._v("#")]),a._v(" 4.5.7 按 i 节点搜")]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("find")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v(".")]),a._v(" -inum "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("10023")]),a._v("\n")])])]),t("h4",{attrs:{id:"_4-5-8-grep-查询"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-5-8-grep-查询"}},[a._v("#")]),a._v(" 4.5.8 grep(查询)")]),a._v(" "),t("ul",[t("li",[a._v("在文件当中匹配符合条件的字符串")]),a._v(" "),t("li",[t("code",[a._v("-i")]),a._v(" 忽略大小写")]),a._v(" "),t("li",[t("code",[a._v("-v")]),a._v(" 排除指定字符串")]),a._v(" "),t("li",[a._v("find 命令，在系统当中搜索符合条件的文件名，如果需要匹配，使用通配符匹配，通配符是完全匹配")]),a._v(" "),t("li",[a._v("grep 命令 在文件当中搜索符合条件的字符串，如果需要匹配，使用正则表达式进行匹配，正则表达式时包含匹配")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#查找内容包含10的")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"10"')]),a._v(" aa.txt\n")])])]),t("h2",{attrs:{id:"_5-压缩命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-压缩命令"}},[a._v("#")]),a._v(" 5. 压缩命令")]),a._v(" "),t("h3",{attrs:{id:"_5-1-zip-格式命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-zip-格式命令"}},[a._v("#")]),a._v(" 5.1 zip 格式命令")]),a._v(" "),t("p",[a._v("压缩文件或目录，是一种压缩格式,缺点压缩比不高")]),a._v(" "),t("ul",[t("li",[a._v("压缩文件 "),t("code",[a._v("zip 压缩文件名 源文件")])]),a._v(" "),t("li",[a._v("压缩目录 "),t("code",[a._v("zip -r 压缩文件名 源目录")])]),a._v(" "),t("li",[a._v("解压 "),t("code",[a._v("unzip 压缩文件名")])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("mkdir")]),a._v(" folder\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" folder/1.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("touch")]),a._v(" folder/2.txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("zip")]),a._v(" -r folder.zip folder\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("unzip")]),a._v(" bool.zip\n")])])]),t("h3",{attrs:{id:"_5-2-gzip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-2-gzip"}},[a._v("#")]),a._v(" 5.2 gzip")]),a._v(" "),t("p",[a._v("gzip 是高压缩，可以把文件压缩的更小。但是不支持目录,压缩目录会把目录下的所有文件压缩。")]),a._v(" "),t("ul",[t("li",[t("code",[a._v("gzip 源文件")]),a._v(" "),t("code",[a._v("gzip a.txt")]),a._v(" 压缩为.gz 格式的压缩文件，源文件会消失")]),a._v(" "),t("li",[t("code",[a._v("gzip -c 源文件 > 压缩文件")]),a._v(" "),t("code",[a._v("gzip -c yum.txt > yum.txt.gz")]),a._v(" 压缩为.gz 格式的压缩文件，源文件不会消失")]),a._v(" "),t("li",[t("code",[a._v("gzip -r 目录")]),a._v(" "),t("code",[a._v("gzip -r folder")]),a._v(" 压缩目录下的所有子文件，但是不压缩目录")]),a._v(" "),t("li",[t("code",[a._v("gzip -d 压缩文件名")]),a._v(" "),t("code",[a._v("gzip -d yum.txt.gz")]),a._v(" 解压缩文件,不保留压缩包")]),a._v(" "),t("li",[t("code",[a._v("gunzip 压缩文件")]),a._v(" "),t("code",[a._v("gunzip yum.txt.gz")]),a._v(" 解压缩文件,不保留压缩包")])]),a._v(" "),t("h3",{attrs:{id:"_5-3-tar"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-3-tar"}},[a._v("#")]),a._v(" 5.3 tar")]),a._v(" "),t("ul",[t("li",[t("p",[a._v("打包命令，只打包不压缩")])]),a._v(" "),t("li",[t("p",[t("code",[a._v("tar -cvf 打包文件名 源文件")])]),a._v(" "),t("ul",[t("li",[a._v("-c 打包")]),a._v(" "),t("li",[a._v("-v 显示过程")]),a._v(" "),t("li",[a._v("-f 指定打包后的文件名")])])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -cvf folder1 folder\n")])])]),t("ul",[t("li",[t("code",[a._v("-x")]),a._v(" 解打包")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -xvf folder.tar\n")])])]),t("ul",[t("li",[a._v("一般配合 gzip 使用，先打包再压缩 .tar.gz")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#-z 代表gzip")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#压缩")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zcvf folder.tar.gz folder\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#解压缩")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("tar")]),a._v(" -zxvf folder.tar.gz\n")])])]),t("h2",{attrs:{id:"_6-关机、重启"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-关机、重启"}},[a._v("#")]),a._v(" 6. 关机、重启")]),a._v(" "),t("h3",{attrs:{id:"_6-1-shutdown"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-shutdown"}},[a._v("#")]),a._v(" 6.1 shutdown")]),a._v(" "),t("ul",[t("li",[a._v("关机命令\n"),t("ul",[t("li",[a._v("-c 取消上一个关机命令")]),a._v(" "),t("li",[a._v("-h 关机")]),a._v(" "),t("li",[a._v("-r 重启")])])])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#定时5点关机")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" -r 05:00\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("#请取消关机命令")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[a._v("shutdown")]),a._v(" -c\n")])])]),t("h3",{attrs:{id:"_6-2-init"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-init"}},[a._v("#")]),a._v(" 6.2 init")]),a._v(" "),t("ul",[t("li",[a._v("关机")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("init "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v("\n")])])]),t("ul",[t("li",[a._v("重启")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[a._v("init "),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("6")]),a._v("\n")])])]),t("h3",{attrs:{id:"_6-3-logout"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-logout"}},[a._v("#")]),a._v(" 6.3 logout")]),a._v(" "),t("ul",[t("li",[a._v("退出登录")])]),a._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("logout")]),a._v("\n")])])]),t("h2",{attrs:{id:"_7-查看登录用户信息"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-查看登录用户信息"}},[a._v("#")]),a._v(" 7.查看登录用户信息")]),a._v(" "),t("h3",{attrs:{id:"_7-1-w"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-1-w"}},[a._v("#")]),a._v(" 7.1 w")]),a._v(" "),t("p",[a._v("查看登录用户信息(每列的含义)")]),a._v(" "),t("ul",[t("li",[a._v("USER 登录的用户名")]),a._v(" "),t("li",[a._v("TTY 登录的终端 tty1 本地终端 pts/0 远程终端")]),a._v(" "),t("li",[a._v("FROM 登录的 IP")]),a._v(" "),t("li",[a._v("LOGIN 登录时间")]),a._v(" "),t("li",[a._v("IDLE 用户闲置时间")]),a._v(" "),t("li",[a._v("JCPU 该终端所有进程占用的时间")]),a._v(" "),t("li",[a._v("PCPU 当前进程所占用的时间")]),a._v(" "),t("li",[a._v("WHAT 正在执行的命令")])]),a._v(" "),t("h3",{attrs:{id:"_7-2-who"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-2-who"}},[a._v("#")]),a._v(" 7.2 who")]),a._v(" "),t("p",[a._v("查看登录用户信息(每列的含义)")]),a._v(" "),t("ul",[t("li",[a._v("USER 登录的用户名")]),a._v(" "),t("li",[a._v("TTY 登录的终端 tty1 本地终端 pts/0 远程终端")]),a._v(" "),t("li",[a._v("LOGIN 登录时间（登录的 IP）")])]),a._v(" "),t("h3",{attrs:{id:"_7-3-last"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-3-last"}},[a._v("#")]),a._v(" 7.3 last")]),a._v(" "),t("p",[a._v("查看当前登录和过去登录的用户信息 默认读取 /var/log/wtmp 文件")]),a._v(" "),t("ul",[t("li",[a._v("用户名")]),a._v(" "),t("li",[a._v("登录终端")]),a._v(" "),t("li",[a._v("登录 IP")]),a._v(" "),t("li",[a._v("登录时间")]),a._v(" "),t("li",[a._v("退出时间(在线时间)")])]),a._v(" "),t("h3",{attrs:{id:"_7-4-lastlog"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_7-4-lastlog"}},[a._v("#")]),a._v(" 7.4 lastlog")]),a._v(" "),t("p",[a._v("查看所有用户的最后一次登录时间")]),a._v(" "),t("ul",[t("li",[a._v("用户名")]),a._v(" "),t("li",[a._v("登录终端")]),a._v(" "),t("li",[a._v("登录 IP")]),a._v(" "),t("li",[a._v("最后一次登录时间")])])])}),[],!1,null,null,null);s.default=v.exports}}]);