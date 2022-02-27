(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{198:function(t,a,s){"use strict";s.r(a);var _=s(6),r=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"文件权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文件权限"}},[t._v("#")]),t._v(" 文件权限")]),t._v(" "),s("h2",{attrs:{id:"_1-文件基本权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件基本权限"}},[t._v("#")]),t._v(" 1. 文件基本权限")]),t._v(" "),s("p",[s("code",[t._v("-rw-r--r--")]),t._v(" read write execute")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("代码")]),t._v(" "),s("th",[t._v("概念")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-")]),t._v(" "),s("td",[t._v("文件")])]),t._v(" "),s("tr",[s("td",[t._v("d")]),t._v(" "),s("td",[t._v("目录")])]),t._v(" "),s("tr",[s("td",[t._v("l")]),t._v(" "),s("td",[t._v("软连接文件")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-基本权限的修改"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-基本权限的修改"}},[t._v("#")]),t._v(" 1.2 基本权限的修改")]),t._v(" "),s("p",[t._v("chmod [选项] 模式 文件名")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#没有任何权限 000")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" 000 "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#所有人可以写 +")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" u+w "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#所有组可以读 +")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" g+r "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#其他人可以执行 +")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" o+x "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#去掉其他人可以执行的权限 -")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" o-x "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".txt\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#同时指定三个角色的权限 777")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(".txt\n")])])]),s("ul",[s("li",[s("p",[t._v("权限")]),t._v(" "),s("ul",[s("li",[t._v("r 4 // 读")]),t._v(" "),s("li",[t._v("w 2 // 写")]),t._v(" "),s("li",[t._v("x 1 // 执行")])])]),t._v(" "),s("li",[s("p",[t._v("选项")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("-R")]),t._v("递归")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-权限作用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-权限作用"}},[t._v("#")]),t._v(" 1.3 权限作用")]),t._v(" "),s("ul",[s("li",[t._v("对文件来说最高权限是 "),s("code",[t._v("x")])]),t._v(" "),s("li",[t._v("对目录来讲最高权限是 "),s("code",[t._v("w")]),t._v("，只有读权限没有意义，对目录有了写权限，里面可以做任何事情")])]),t._v(" "),s("h4",{attrs:{id:"_1-3-1-文件权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-文件权限"}},[t._v("#")]),t._v(" 1.3.1 文件权限")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("权限")]),t._v(" "),s("th",[t._v("概念")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("r")]),t._v(" "),s("td",[t._v("读取文件内容")])]),t._v(" "),s("tr",[s("td",[t._v("w")]),t._v(" "),s("td",[t._v("编辑、新增、修改文件内容,不能删除文件,除非对目录有写权限")])]),t._v(" "),s("tr",[s("td",[t._v("x")]),t._v(" "),s("td",[t._v("可执行")])])])]),t._v(" "),s("h4",{attrs:{id:"_1-3-2-目录权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-目录权限"}},[t._v("#")]),t._v(" 1.3.2 目录权限")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("权限")]),t._v(" "),s("th",[t._v("概念")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("r")]),t._v(" "),s("td",[t._v("可以查看目录下的文件名")])]),t._v(" "),s("tr",[s("td",[t._v("w")]),t._v(" "),s("td",[t._v("具有修改目录结构的权限。如新建、删除和重命名此目录下的文件和目录")])]),t._v(" "),s("tr",[s("td",[t._v("x")]),t._v(" "),s("td",[t._v("进入目录")])])])]),t._v(" "),s("h4",{attrs:{id:"_1-3-3-其他权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-其他权限"}},[t._v("#")]),t._v(" 1.3.3 其他权限")]),t._v(" "),s("h5",{attrs:{id:"_1-3-3-1-chown-改变所有者"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-1-chown-改变所有者"}},[t._v("#")]),t._v(" 1.3.3.1 chown 改变所有者")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("chown 用户名 文件夹")])]),t._v(" "),s("li",[t._v("如果想让一个用户拥有 7 权限，可以把这个文件的所有者改成这个用户名")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chmod")]),t._v(" yang folder\n")])])]),s("h5",{attrs:{id:"_1-3-3-2-chown-改变组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-2-chown-改变组"}},[t._v("#")]),t._v(" 1.3.3.2 chown 改变组")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("chgrp 组名 文件名")])]),t._v(" "),s("li",[t._v("创建用户名的时候会为它创建一个所属组")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("chgrp")]),t._v(" developer folder\n")])])]),s("h2",{attrs:{id:"_2-默认权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-默认权限"}},[t._v("#")]),t._v(" 2. 默认权限")]),t._v(" "),s("h3",{attrs:{id:"_2-1-umask"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-umask"}},[t._v("#")]),t._v(" 2.1 umask")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("umask")]),t._v("\n")])])]),s("ul",[s("li",[t._v("查看默认权限")]),t._v(" "),s("li",[t._v("0022 默认文件的权限掩码\n"),s("ul",[s("li",[t._v("第一位 0 文件特殊权限")]),t._v(" "),s("li",[t._v("022 文件默认权限")])])])]),t._v(" "),s("h3",{attrs:{id:"_2-2-文件权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-文件权限"}},[t._v("#")]),t._v(" 2.2 文件权限")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("666")]),t._v(" - 022 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("644")]),t._v("\n")])])]),s("ul",[s("li",[t._v("默认权限就是文件一创建后就拥有的权限")]),t._v(" "),s("li",[t._v("文件默认不能建立可执行文件，必须手工赋予执行权限")]),t._v(" "),s("li",[t._v("文件默认权限最大为 666")]),t._v(" "),s("li",[t._v("默认权限需要换算成字母再相减")]),t._v(" "),s("li",[t._v("建立文件之后的默认权限，为 666 减去 umask 值")])]),t._v(" "),s("h3",{attrs:{id:"_2-3-目录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-目录"}},[t._v("#")]),t._v(" 2.3 目录")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("777")]),t._v(" - 022 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("  "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("755")]),t._v("\n")])])]),s("h3",{attrs:{id:"_2-4-修改-umask-值"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-4-修改-umask-值"}},[t._v("#")]),t._v(" 2.4 修改 umask 值")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#零时修改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("umask")]),t._v(" 0002\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#永久修改")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("vi")]),t._v(" /etc/profile\n")])])]),s("ul",[s("li",[t._v("目录默认权限最大为 777")]),t._v(" "),s("li",[t._v("建立目录之后的默认权限，为 777 减去 umask 值")])]),t._v(" "),s("h2",{attrs:{id:"_3-sudo-权限"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-sudo-权限"}},[t._v("#")]),t._v(" 3. sudo 权限")]),t._v(" "),s("ul",[s("li",[t._v("root 把本来只有超级管理员可以使用的命令赋予普通用户来使用")]),t._v(" "),s("li",[t._v("sudo 操作的对象是系统命令")])]),t._v(" "),s("h3",{attrs:{id:"_3-1-visudo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-visudo"}},[t._v("#")]),t._v(" 3.1 visudo")]),t._v(" "),s("ul",[s("li",[t._v("通过 visudo 可以由超级用户赋权")]),t._v(" "),s("li",[t._v("实际修改的是/etc/sudoers 文件")]),t._v(" "),s("li",[t._v("命令必须写绝对路径")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("root    "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ALL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("ALL"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ALL\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#用户名 被管理主机地址=(可使用的身份) 授权命令(绝对路径)")]),t._v("\nyang1 "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("ALL")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" ALL "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#新增加用户行")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);