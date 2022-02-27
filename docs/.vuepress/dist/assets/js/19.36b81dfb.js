(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{203:function(t,a,s){"use strict";s.r(a);var e=s(6),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"配置-ip-地址"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-ip-地址"}},[t._v("#")]),t._v(" 配置 IP 地址")]),t._v(" "),s("h2",{attrs:{id:"_1-ifconfig-临时配置-ip"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-ifconfig-临时配置-ip"}},[t._v("#")]),t._v(" 1. ifconfig 临时配置 IP")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("查看与配置网络状态")])]),t._v(" "),s("li",[s("p",[t._v("inet 是 ipv4 地址")])])]),t._v(" "),s("h2",{attrs:{id:"_2-查看网络环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-查看网络环境"}},[t._v("#")]),t._v(" 2. 查看网络环境")]),t._v(" "),s("h3",{attrs:{id:"_2-1-查询网络状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-查询网络状态"}},[t._v("#")]),t._v(" 2.1 查询网络状态")]),t._v(" "),s("ul",[s("li",[t._v("netstat 选项")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("选项")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-t")]),t._v(" "),s("td",[t._v("列出 TCP 协议端口")])]),t._v(" "),s("tr",[s("td",[t._v("-u")]),t._v(" "),s("td",[t._v("列出 UDP 协议端口")])]),t._v(" "),s("tr",[s("td",[t._v("-n")]),t._v(" "),s("td",[t._v("不使用域名与服务名，而使用 IP 地址和端口号")])]),t._v(" "),s("tr",[s("td",[t._v("-l")]),t._v(" "),s("td",[t._v("仅列出在监听状态网络服务")])]),t._v(" "),s("tr",[s("td",[t._v("-a")]),t._v(" "),s("td",[t._v("列出所有的网络连接")])])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -tlun\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -an "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("more")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -unt "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("grep")]),t._v(" ESTABLISHED\n")])])]),s("h2",{attrs:{id:"_3-网络测试命令"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-网络测试命令"}},[t._v("#")]),t._v(" 3. 网络测试命令")]),t._v(" "),s("h3",{attrs:{id:"_3-1-ping"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-ping"}},[t._v("#")]),t._v(" 3.1 ping")]),t._v(" "),s("ul",[s("li",[t._v("ping [选项] ip 或域名")]),t._v(" "),s("li",[t._v("测试指定 IP 或域名的网络状况")]),t._v(" "),s("li",[t._v("选项\n"),s("ul",[s("li",[t._v("-c 次数指定 ping 包的次数")])])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ping")]),t._v(" www.baidu.com -c "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n")])])]),s("h3",{attrs:{id:"_3-2-wget"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-wget"}},[t._v("#")]),t._v(" 3.2 wget")]),t._v(" "),s("ul",[s("li",[t._v("下载命令")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("wget")]),t._v(" http://www.baidu.com\n")])])]),s("h2",{attrs:{id:"_4-远程登录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-远程登录"}},[t._v("#")]),t._v(" 4. 远程登录")]),t._v(" "),s("h3",{attrs:{id:"_4-1-ssh-协议原理"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-ssh-协议原理"}},[t._v("#")]),t._v(" 4.1 SSH 协议原理")]),t._v(" "),s("h4",{attrs:{id:"_4-1-1-对称加密算法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-1-对称加密算法"}},[t._v("#")]),t._v(" 4.1.1 对称加密算法")]),t._v(" "),s("ul",[s("li",[t._v("采用单密钥系统的加密方法，同一个密钥可以同时用作信息的加密和解密，这种加密被称为对称加密。")]),t._v(" "),s("li",[t._v("非对称加密算法 需要公钥和私钥")])]),t._v(" "),s("h4",{attrs:{id:"_4-1-2-ssh-安全外壳协议"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-2-ssh-安全外壳协议"}},[t._v("#")]),t._v(" 4.1.2 SSH 安全外壳协议")]),t._v(" "),s("ul",[s("li",[t._v("ssh 用户名@ip")]),t._v(" "),s("li",[t._v("远程管理指定 Linux 服务器")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("root@192-171-207-101-static ~"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ssh root@192.171.207.101")]),t._v("\nThe authenticity of "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("host")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'192.171.207.101 (192.171.207.101)'")]),t._v(" can"),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'t be established.\nRSA key fingerprint is a4:97:52:eb:0a:0b:35:a0:98:7d:4f:c8:3b:dc:f9:0a.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.171")]),t._v(".207.101' "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("RSA"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" to the list of known hosts.\n")])])]),s("p",[t._v("/root/.ssh/known_hosts")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.171")]),t._v(".207.101 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAomDpQxV3RmjJyKkf7elMTInbdm+/ZLnFpfbAryi5PSb2ewfYbwRaBcVl1lBta6yjFuz0J12p9qy90DBhadvoBsfwTB8lQhmlT8B2eCcHr0bfLa1IdKMcjImxRJiD4v0emCGFquHnHIr41vs8uxQ2Ek28mH/1JC0e/+VPEvylBB4+Kk2789ACdAlmhGTtlu7zgeUoLaWQSl1/6g7zfSLIz+/U8qGiRSPaGT+M40oqx/PZdoGOMTRhHgNIR5qgvcNaJXhlZGYT42fLFSmtzUHJ030hP7JGZ99oXS20/mnc8qvonC9itp0+K/nCj5g6uR/gPFb5B0NmTZCM2/gcLkHumw"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v("\n")])])]),s("h4",{attrs:{id:"_4-1-3-scp"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-3-scp"}},[t._v("#")]),t._v(" 4.1.3 scp")]),t._v(" "),s("ul",[s("li",[t._v("scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令")]),t._v(" "),s("li",[t._v("linux 的 scp 命令可以在 linux 服务器之间复制文件和目录")]),t._v(" "),s("li",[t._v("命令格式 scp [参数][原路径] [目标路径]")])]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("-r")]),t._v(" "),s("td",[t._v("递归复制整个目录")])]),t._v(" "),s("tr",[s("td",[t._v("-v")]),t._v(" "),s("td",[t._v("详细方式显示输出")])])])]),t._v(" "),s("p",[t._v("从本地服务器复制到远程服务器")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" local_file remote_username@remote_ip:remote_folder\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r local_folder remote_username@remote_ip:remote_folder\n")])])]),s("p",[t._v("从远程服务器复制到本地服务器")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v("  remote_username@remote_ip:remote_folder  local_file\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("scp")]),t._v(" -r  remote_username@remote_ip:remote_folder local_folder\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);