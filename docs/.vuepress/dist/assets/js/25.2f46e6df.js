(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{209:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"核心模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心模块"}},[t._v("#")]),t._v(" 核心模块")]),t._v(" "),s("h2",{attrs:{id:"_1-监控-nginx-客户端的状态"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-监控-nginx-客户端的状态"}},[t._v("#")]),t._v(" 1. 监控 nginx 客户端的状态")]),t._v(" "),s("h3",{attrs:{id:"_1-1-模块名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-模块名"}},[t._v("#")]),t._v(" 1.1 模块名")]),t._v(" "),s("p",[s("code",[t._v("--with-http_stub_status_module")]),t._v(" 监控 nginx 客户端的状态")]),t._v(" "),s("h3",{attrs:{id:"_1-2-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-语法"}},[t._v("#")]),t._v(" 1.2 语法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Syntax: stub_status on/off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: -\nContext: server-"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("location\n")])])]),s("h3",{attrs:{id:"_1-3-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-实践"}},[t._v("#")]),t._v(" 1.3 实践")]),t._v(" "),s("p",[t._v("/etc/nginx/conf.d/default.conf")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在配置文件中，server内加入配置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当访问/status地址的时候，会开启stub_status_module监控服务")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n+    location /status"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n+       stub_status  on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 重启nginx服务")]),t._v("\nsystemctl reload nginx.service\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 浏览器访问地址")]),t._v("\nhttp://10.10.18.62/status\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 页面显示内容")]),t._v("\nActive connections: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\nserver accepts handled requests\n       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nReading: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" Writing: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" Waiting: "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("参数")]),t._v(" "),s("th",[t._v("含义")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("Active")]),t._v(" "),s("td",[t._v("connections 当前 nginx 正在处理的活动连接数")])]),t._v(" "),s("tr",[s("td",[t._v("accepts")]),t._v(" "),s("td",[t._v("总共处理的连接数")])]),t._v(" "),s("tr",[s("td",[t._v("handled")]),t._v(" "),s("td",[t._v("成功创建握手数")])]),t._v(" "),s("tr",[s("td",[t._v("requests")]),t._v(" "),s("td",[t._v("总共处理请求数")])]),t._v(" "),s("tr",[s("td",[t._v("Reading")]),t._v(" "),s("td",[t._v("读取到客户端的 Header 信息数")])]),t._v(" "),s("tr",[s("td",[t._v("Writing")]),t._v(" "),s("td",[t._v("返回给客户端的 Header 信息数")])]),t._v(" "),s("tr",[s("td",[t._v("Waiting")]),t._v(" "),s("td",[t._v("开启 keep-alive 的情况下,这个值等于 active – (reading + writing)")])])])]),t._v(" "),s("h2",{attrs:{id:"_2-随机主页"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-随机主页"}},[t._v("#")]),t._v(" 2. 随机主页")]),t._v(" "),s("h3",{attrs:{id:"_2-1-模块名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-模块名"}},[t._v("#")]),t._v(" 2.1 模块名")]),t._v(" "),s("p",[s("code",[t._v("--with-http_random_index_module")]),t._v(" 在根目录里随机选择一个主页显示")]),t._v(" "),s("h3",{attrs:{id:"_2-2-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-语法"}},[t._v("#")]),t._v(" 2.2 语法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Syntax: random_index on/off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: off\nContext: location\n")])])]),s("h3",{attrs:{id:"_2-3-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-3-实践"}},[t._v("#")]),t._v(" 2.3 实践")]),t._v(" "),s("p",[t._v("/etc/nginx/conf.d/default.conf")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("+    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n+       root /opt/app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+       random_index on"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" /opt/app\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" /opt/app\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" red  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" red.html\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" yellow  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" yellow.html\n"),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" blue  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" blue.html\n")])])]),s("h2",{attrs:{id:"_3-内容替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-内容替换"}},[t._v("#")]),t._v(" 3. 内容替换")]),t._v(" "),s("h3",{attrs:{id:"_3-1-模块名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-模块名"}},[t._v("#")]),t._v(" 3.1 模块名")]),t._v(" "),s("p",[s("code",[t._v("--with-http_sub_module")]),t._v(" 内容替换")]),t._v(" "),s("h3",{attrs:{id:"_3-2-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-语法"}},[t._v("#")]),t._v(" 3.2 语法")]),t._v(" "),s("h4",{attrs:{id:"_3-2-1-文本替换"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-1-文本替换"}},[t._v("#")]),t._v(" 3.2.1 文本替换")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Syntax: sub_filter string replacement"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: --\nContext: http,service,location\n")])])]),s("h3",{attrs:{id:"_3-3-实践"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-实践"}},[t._v("#")]),t._v(" 3.3 实践")]),t._v(" "),s("p",[t._v("/etc/nginx/conf.d/default.conf")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    root   /usr/share/nginx/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    index  index.html index.htm"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+   sub_filter "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'name'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'yl'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"_4-请求限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-请求限制"}},[t._v("#")]),t._v(" 4. 请求限制")]),t._v(" "),s("h3",{attrs:{id:"_4-1-模块名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-模块名"}},[t._v("#")]),t._v(" 4.1 模块名")]),t._v(" "),s("ul",[s("li",[t._v("--with-limit_conn_module 连接频率限制")]),t._v(" "),s("li",[t._v("--with-limit_req_module 请求频率限制")]),t._v(" "),s("li",[t._v("一次 TCP 请求至少产生一个 HTTP 请求")]),t._v(" "),s("li",[t._v("SYN > SYN,ACK->ACK->REQUEST->RESPONSE->FIN->ACK->FIN->ACK")])]),t._v(" "),s("h3",{attrs:{id:"_4-2-ab"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-ab"}},[t._v("#")]),t._v(" 4.2 ab")]),t._v(" "),s("ul",[s("li",[t._v("Apache 的 ab 命令模拟多线程并发请求，测试服务器负载压力，也可以测试 nginx、lighthttp、IIS 等其它 Web 服务器的压力")]),t._v(" "),s("li",[t._v("-n 总共的执行次数")]),t._v(" "),s("li",[t._v("-c 并发的请求数，每次执行，发出的请求数")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装之后，输入ab有参数介绍")]),t._v("\nyum -y "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" httpd-tools\nab -n "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("40")]),t._v(" -c "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),t._v(" http://10.10.18.62/\n")])])]),s("h3",{attrs:{id:"_4-3-连接限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-连接限制"}},[t._v("#")]),t._v(" 4.3 连接限制")]),t._v(" "),s("ul",[s("li",[t._v("ngx_http_limit_conn_module 模块会在 NGX_HTTP_PREACCESS_PHASE 阶段生效")]),t._v(" "),s("li",[t._v("针对全部的 worker 生效，依赖 realip 模块获得到的真实 IP")])]),t._v(" "),s("h4",{attrs:{id:"_4-3-1-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-1-语法"}},[t._v("#")]),t._v(" 4.3.1 语法")]),t._v(" "),s("p",[t._v("limit_conn_zone 定义共享内存(大小)，以及 key 关键字的含义/用法")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以以IP为key zone为空间的名称 size为申请空间的大小")]),t._v("\nSyntax: limit_conn_zone key "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name:size"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: --\nContext: http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("定义在server以外"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zone名称 number限制的数量")]),t._v("\nSyntax: limit_conn  zone number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: --\nContext: http,server,location\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#打印日志级别")]),t._v("\nSyntax: limit_conn_log_level  info"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("notice"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("warn"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: limit_conn_log_level error"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nContext: http,server,location\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#限制连接的状态码")]),t._v("\nSyntax: limit_conn_status  code"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: limit_conn_status "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nContext: http,server,location\n")])])]),s("h4",{attrs:{id:"_4-3-2-例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-3-2-例"}},[t._v("#")]),t._v(" 4.3.2 例")]),t._v(" "),s("p",[t._v("$binary_remote_addr 是二进制格式的，比较短")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("limit_conn_zone "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$binary_remote_addr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("conn_zone:10m"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  location /"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      limit_conn_status "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#限制连接的状态码是500")]),t._v("\n      limit_conn_log_level warn"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#打印日志级别")]),t._v("\n      limit_rate "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每秒最多返回50字节")]),t._v("\n      limit_conn conn_zone "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 并发连接数最多是1")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("p",[t._v("表明以 ip 为 key，来限制每个 ip 访问文件时候，最多只能有 1 个在线，否则其余的都要返回不可用")]),t._v(" "),s("h3",{attrs:{id:"_4-4-请求限制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-请求限制"}},[t._v("#")]),t._v(" 4.4 请求限制")]),t._v(" "),s("ul",[s("li",[t._v("ngx_http_limit_req_module 模块是在 NGX_HTTP_PREACCESS_PHASE 阶段生效")]),t._v(" "),s("li",[t._v("生效算法是漏斗算法(Leaky Bucket) 把突出的流量限定为每秒恒定多少个请求")]),t._v(" "),s("li",[t._v("Traffic Shaping 的核心理念是等待，Traffic Policing 的核心理念是丢弃")]),t._v(" "),s("li",[t._v("limit_req 生效是在 limit_conn 之前的")])]),t._v(" "),s("h4",{attrs:{id:"_4-4-1-语法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-1-语法"}},[t._v("#")]),t._v(" 4.4.1 语法")]),t._v(" "),s("ul",[s("li",[t._v("limit_req_zone 定义共享内存，以及 key 和限制速度")])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以以IP为key zone为空间的名称 size为申请空间的大小")]),t._v("\nSyntax: limit_req_zone key "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name:size "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("rate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: --\nContext: http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("定义在server以外"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("limit_req 限制并发请求数")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# zone名称 number限制的数量")]),t._v("\nSyntax: limit_req  "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("burst"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("nodelay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: --\nContext: http,server,location\n")])])]),s("ul",[s("li",[t._v("burst 是 bucket 的数量，默认为 0")]),t._v(" "),s("li",[t._v("nodelay 是对 burst 中的请求不再采用延迟处理的做法，而是立刻处理")])]),t._v(" "),s("h4",{attrs:{id:"_4-4-2-例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-4-2-例"}},[t._v("#")]),t._v(" 4.4.2 例")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("limit_req_zone "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$binary_remote_addr")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("req_zone:10m "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("rate")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("1r/s"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  location /"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      //缓存区队列burst"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("个,不延期，即每秒最多可处理rate+burst个.同时处理rate个\n      //limit_req "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("req_zone"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      limit_req "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("zone")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("one "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("burst")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v(" nodelay"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("ul",[s("li",[s("p",[t._v("$binary_remote_addr 表示远程的 IP 地址")])]),t._v(" "),s("li",[s("p",[t._v("zone=req_zone:10m 表示一个内存区域大小为 10m,并且设定了名称为 req_zone")])]),t._v(" "),s("li",[s("p",[t._v("rate=1r/s 表示允许相同标识的客户端的访问频次，这里限制的是每秒 1 次，即每秒只处理一个请求")])]),t._v(" "),s("li",[s("p",[t._v("zone=req_zone 表示这个参数对应的全局设置就是 req_zone 的那个内存区域")])]),t._v(" "),s("li",[s("p",[t._v("burst 设置一个大小为 3 的缓冲区,当有大量请求（爆发）过来时，超过了访问频次限制的请求可以先放到这个缓冲区内等待，但是这个等待区里的位置只有 3 个，超过的请求会直接报 503 的错误然后返回。")])]),t._v(" "),s("li",[s("p",[t._v("nodelay 如果设置，会在瞬时提供处理(burst + rate)个请求的能力，请求超过（burst + rate）的时候就会直接返回 503，永远不存在请求需要等待的情况,如果没有设置，则所有请求会依次等待排队")])])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("netstat")]),t._v(" -n "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("awk")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/^tcp/ {++S[$NF]} END {for(a in S) print a, S[a]}'")]),t._v("\n")])])]),s("h2",{attrs:{id:"_5-访问控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-访问控制"}},[t._v("#")]),t._v(" 5. 访问控制")]),t._v(" "),s("ul",[s("li",[t._v("基于 IP 的访问控制 -http_access_module")]),t._v(" "),s("li",[t._v("基于用户的信任登录 -http_auth_basic_module")])]),t._v(" "),s("h3",{attrs:{id:"_5-1-http-access-module"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-http-access-module"}},[t._v("#")]),t._v(" 5.1 http_access_module")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Syntax: allow address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: --\nContext: http,server,location,limit_except\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("Syntax: deny address"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("CIDR"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v("all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\nDefault: --\nContext: http,server,location,limit_except\n")])])]),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("server "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n+ location ~ ^/admin.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n+      deny "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.171")]),t._v(".207.100"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+      allow all"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n+    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);