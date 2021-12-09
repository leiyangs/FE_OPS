(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{199:function(t,a,s){"use strict";s.r(a);var _=s(6),e=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"用户-用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用户-用户组"}},[t._v("#")]),t._v(" 用户&用户组")]),t._v(" "),s("ul",[s("li",[t._v("使用操作系统的人都是用户")]),t._v(" "),s("li",[t._v("用户组是具有相同系统权限的一组用户")])]),t._v(" "),s("h2",{attrs:{id:"_1-配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置文件"}},[t._v("#")]),t._v(" 1. 配置文件")]),t._v(" "),s("h3",{attrs:{id:"_1-1-etc-group"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-etc-group"}},[t._v("#")]),t._v(" 1.1 /etc/group")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("/etc/group")]),t._v(" 存储当前系统中所有用户组信息")]),t._v(" "),s("li",[s("code",[t._v("group:x:123:abc,def")])]),t._v(" "),s("li",[t._v("组名称:组密码占位符:组编号:组中用户名列表")]),t._v(" "),s("li",[t._v("root 组编号为 0")]),t._v(" "),s("li",[t._v("1-499 系统预留的编号 预留给安装的软件和服务的")]),t._v(" "),s("li",[t._v("用户手动创建的用户组从 500 开始")]),t._v(" "),s("li",[t._v("组密码占位符都是 "),s("code",[t._v("x")])]),t._v(" "),s("li",[t._v("如果组内只有一个用户，而且用户名和组名相同的话，是可以省略用户名的")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/group\n")])])]),s("p",[s("code",[t._v("root:x:0:root")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("代码")]),t._v(" "),s("th",[t._v("概念")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("组的名称")])]),t._v(" "),s("tr",[s("td",[t._v("x")]),t._v(" "),s("td",[t._v("密码占位符")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("组编号")])]),t._v(" "),s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("组中用户名列表")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-2-etc-gshadow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-etc-gshadow"}},[t._v("#")]),t._v(" 1.2 /etc/gshadow")]),t._v(" "),s("ul",[s("li",[t._v("存放当前系统中用户组的密码信息")]),t._v(" "),s("li",[t._v("和"),s("code",[t._v("/etc/group")]),t._v("中的记录一一对应")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/gshadow\n")])])]),s("p",[s("code",[t._v("root:*::root")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("代码")]),t._v(" "),s("th",[t._v("概念")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("组的名称")])]),t._v(" "),s("tr",[s("td",[t._v("*")]),t._v(" "),s("td",[t._v("组密码，*为空")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("组管理者,为空表示都可以管理这个组")])]),t._v(" "),s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("组中用户名列表")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-3-etc-passwd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-etc-passwd"}},[t._v("#")]),t._v(" 1.3 /etc/passwd")]),t._v(" "),s("ul",[s("li",[t._v("存储当前系统中所有用户的信息")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/passwd\n")])])]),s("p",[s("code",[t._v("root:x:0:0:root:/root:/bin/bash")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("代码")]),t._v(" "),s("th",[t._v("概念")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("用户名")])]),t._v(" "),s("tr",[s("td",[t._v("x")]),t._v(" "),s("td",[t._v("密码占位符")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("用户编号")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("用户组编号")])]),t._v(" "),s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("用户注释信息")])]),t._v(" "),s("tr",[s("td",[t._v("/root")]),t._v(" "),s("td",[t._v("用户主目录")])]),t._v(" "),s("tr",[s("td",[t._v("/bin/bash")]),t._v(" "),s("td",[t._v("shell 类型")])])])]),t._v(" "),s("h3",{attrs:{id:"_1-4-etc-shadow"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-etc-shadow"}},[t._v("#")]),t._v(" 1.4 /etc/shadow")]),t._v(" "),s("ul",[s("li",[t._v("存放当前系统中所有用户的密码信息")]),t._v(" "),s("li",[t._v("user:xxx:::::::")]),t._v(" "),s("li",[t._v("用户名:密码:")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/shadow\n")])])]),s("p",[s("code",[t._v("root:password:17982:0:99999:7:::")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("代码")]),t._v(" "),s("th",[t._v("概念")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("root")]),t._v(" "),s("td",[t._v("用户名")])]),t._v(" "),s("tr",[s("td",[t._v("password")]),t._v(" "),s("td",[t._v("单向加密后的密码")])]),t._v(" "),s("tr",[s("td",[t._v("17982")]),t._v(" "),s("td",[t._v("修改日期,这个是表明上一次修改密码的日期与 1970-1-1 相距的天数密码不可改的天数：假如这个数字是 8，则 8 天内不可改密码，如果是 0，则随时可以改")])]),t._v(" "),s("tr",[s("td",[t._v("0")]),t._v(" "),s("td",[t._v("这个是表明上一次修改密码的日期与 1970-1-1 相距的天数密码不可改的天数：假如这个数字是 8，则 8 天内不可改密码，如果是 0，则随时可以改")])]),t._v(" "),s("tr",[s("td",[t._v("99999")]),t._v(" "),s("td",[t._v("如果是 99999 则永远不用改。如果是其其他数字比如 12345，那么必须在距离 1970-1-1 的 12345 天内修改密码，否则密码失效")])]),t._v(" "),s("tr",[s("td",[t._v("7")]),t._v(" "),s("td",[t._v("修改期限前 N 天发出警告")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("密码过期的宽限天数")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("帐号失效日期")])]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td",[t._v("保留：被保留项，暂时还没有被用上")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-用户命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-用户命令"}},[t._v("#")]),t._v(" 2. 用户命令")]),t._v(" "),s("ul",[s("li",[t._v("显示登录的月用户名")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("whoami")]),t._v("\n")])])]),s("ul",[s("li",[t._v("显示指定用户信息，包括用户编号，用户名 主要组的编号及名称，附属组列表")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" user\n")])])]),s("ul",[s("li",[t._v("显示用户所在的所有组")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groups")]),t._v(" user\n")])])]),s("h2",{attrs:{id:"_3-用户和用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-用户和用户组"}},[t._v("#")]),t._v(" 3. 用户和用户组")]),t._v(" "),s("h3",{attrs:{id:"_3-1-添加用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-添加用户组"}},[t._v("#")]),t._v(" 3.1 添加用户组")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/dev\n")])])]),s("h3",{attrs:{id:"_3-2-修改用户组名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-修改用户组名"}},[t._v("#")]),t._v(" 3.2 修改用户组名")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#组名dev修改为develop")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupmod")]),t._v(" -n develop dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/group\n")])])]),s("h3",{attrs:{id:"_3-3-修改用户组编号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-修改用户组编号"}},[t._v("#")]),t._v(" 3.3 修改用户组编号")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#组编号修改为888")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupmod")]),t._v(" -g "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("888")]),t._v(" dev\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" /etc/group\n")])])]),s("h3",{attrs:{id:"_3-4-创建分组并指定编号"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-4-创建分组并指定编号"}},[t._v("#")]),t._v(" 3.4 创建分组并指定编号")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" -g "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("888")]),t._v(" admin\n")])])]),s("h3",{attrs:{id:"_3-5-删除用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-5-删除用户组"}},[t._v("#")]),t._v(" 3.5 删除用户组")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupdel")]),t._v(" admin\n")])])]),s("h3",{attrs:{id:"_3-6-添加用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-6-添加用户"}},[t._v("#")]),t._v(" 3.6 添加用户")]),t._v(" "),s("p",[t._v("如果创建用户的时候没有指定用户组，系统会为他创建一个和用户名相同的用户组")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("groupadd")]),t._v(" develop\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" -g develop yang "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建用户并指定用户组")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("id")]),t._v(" yang "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查询用户信息")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("useradd")]),t._v(" -d /home/yang yang   "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#创建用户并指定家目录")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("passwd")]),t._v(" yanglei //root用户可以设置用户的密码\n")])])]),s("h3",{attrs:{id:"_3-7-指定个人文件夹"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-7-指定个人文件夹"}},[t._v("#")]),t._v(" 3.7 指定个人文件夹")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -d /home/yang yanglei\n")])])]),s("h3",{attrs:{id:"_3-8-修改用户组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-8-修改用户组"}},[t._v("#")]),t._v(" 3.8 修改用户组")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("usermod")]),t._v(" -g yanglei leiyang\n")])])]),s("h3",{attrs:{id:"_3-9-删除用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-9-删除用户"}},[t._v("#")]),t._v(" 3.9 删除用户")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("userdel")]),t._v(" leiyang\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("userdel")]),t._v(" -r leiyang "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#删除用户的时候级联删除对应的目录")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);