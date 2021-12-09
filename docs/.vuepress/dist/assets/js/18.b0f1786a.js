(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{200:function(_,v,t){"use strict";t.r(v);var a=t(6),e=Object(a.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h1",{attrs:{id:"vi-编辑器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#vi-编辑器"}},[_._v("#")]),_._v(" vi 编辑器")]),_._v(" "),t("ul",[t("li",[_._v("VI visual interface 可视化接口")]),_._v(" "),t("li",[_._v("可视化接口")]),_._v(" "),t("li",[_._v("类似与 windows 中的记事本")]),_._v(" "),t("li",[_._v("vim 是 vi 编辑器的升级版，支持多级撤销")]),_._v(" "),t("li",[_._v("跨平台")]),_._v(" "),t("li",[_._v("语法高亮")]),_._v(" "),t("li",[_._v("支持图形界面")])]),_._v(" "),t("h2",{attrs:{id:"_1-操作模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-操作模式"}},[_._v("#")]),_._v(" 1. 操作模式")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("模式")]),_._v(" "),t("th",[_._v("作用")]),_._v(" "),t("th",[_._v("使用")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("Command Mode 命令模式")]),_._v(" "),t("td",[_._v("等待输入的模式")]),_._v(" "),t("td",[_._v("Esc 键")])]),_._v(" "),t("tr",[t("td",[_._v("Insert Mode 输入模式")]),_._v(" "),t("td",[_._v("编辑模式，用于输入文本")]),_._v(" "),t("td",[_._v("a i o s 键(命令模式下)")])]),_._v(" "),t("tr",[t("td",[_._v("Last Line Mode 底行模式(尾行、末行)")]),_._v(" "),t("td",[_._v("可以输入指令，搜索，保存")]),_._v(" "),t("td",[_._v(":键(命令模式下)")])])])]),_._v(" "),t("ul",[t("li",[_._v("a 当前位置后写入")]),_._v(" "),t("li",[_._v("A 在当前光标右的行末插入文件")]),_._v(" "),t("li",[_._v("i 当前位置写入")]),_._v(" "),t("li",[_._v("o 换行写入")]),_._v(" "),t("li",[_._v("O 在光标所在行的上方插入一行并切换到输入模式")]),_._v(" "),t("li",[_._v("s 删除当前位置写入")]),_._v(" "),t("li",[_._v("r 替换当前位置字符")]),_._v(" "),t("li",[_._v("x 删除当前字符")]),_._v(" "),t("li",[_._v("dd 删除光标所在行")]),_._v(" "),t("li",[_._v("u 撤消最后执行的一次命令")]),_._v(" "),t("li",[_._v("yy 复制光标所在的行")]),_._v(" "),t("li",[_._v("p 在光标所在行的下方粘贴")]),_._v(" "),t("li",[_._v("P 在光标所在行的上方粘贴")])]),_._v(" "),t("div",{staticClass:"language-bash extra-class"},[t("pre",{pre:!0,attrs:{class:"language-bash"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[_._v("touch")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),_._v(".txt\n"),t("span",{pre:!0,attrs:{class:"token function"}},[_._v("vi")]),_._v(" "),t("span",{pre:!0,attrs:{class:"token number"}},[_._v("1")]),_._v(".txt\ni\n:wq\n")])])]),t("h2",{attrs:{id:"_2-打开文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-打开文件"}},[_._v("#")]),_._v(" 2. 打开文件")]),_._v(" "),t("ul",[t("li",[_._v("输入 "),t("code",[_._v("vi 文件名")]),_._v(" 可输入多个文件名，利用"),t("code",[_._v(":n")]),_._v(" "),t("code",[_._v(":N")]),_._v("切换修改")]),_._v(" "),t("li",[_._v("vimtutor (官方教程)")])]),_._v(" "),t("h2",{attrs:{id:"_3-底行模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-底行模式"}},[_._v("#")]),_._v(" 3. 底行模式")]),_._v(" "),t("ul",[t("li",[t("code",[_._v(":w")]),_._v(" 保存")]),_._v(" "),t("li",[t("code",[_._v(":q")]),_._v(" 退出")]),_._v(" "),t("li",[t("code",[_._v(":!")]),_._v(" 强制保存")]),_._v(" "),t("li",[t("code",[_._v(":ls")]),_._v(" 列出所有的文件")]),_._v(" "),t("li",[t("code",[_._v(":n")]),_._v(" 下一个")]),_._v(" "),t("li",[t("code",[_._v(":N")]),_._v(" 上一个")]),_._v(" "),t("li",[t("code",[_._v(":10")]),_._v(" 跳转到指定行")]),_._v(" "),t("li",[t("code",[_._v("/xxx")]),_._v(" 从光标位置开始向后搜索 xxx 字符串。搜索后，n 查找下一个，Shift-N 查找上一个")]),_._v(" "),t("li",[t("code",[_._v("?xxx")]),_._v(" 从光标位置开始向前搜索")]),_._v(" "),t("li",[t("code",[_._v(":s/old/new")]),_._v(" 把光标所在行的 old 替换成 new")]),_._v(" "),t("li",[t("code",[_._v(":%s/old/new/g")]),_._v(" 把所有行的 old 替换成 new")])]),_._v(" "),t("h2",{attrs:{id:"_4-命令模式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-命令模式"}},[_._v("#")]),_._v(" 4. 命令模式")]),_._v(" "),t("h3",{attrs:{id:"_4-1-光标"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-光标"}},[_._v("#")]),_._v(" 4.1 光标")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("命令")]),_._v(" "),t("th",[_._v("作用")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("h")]),_._v(" "),t("td",[_._v("光标左移")])]),_._v(" "),t("tr",[t("td",[_._v("j")]),_._v(" "),t("td",[_._v("光标下移")])]),_._v(" "),t("tr",[t("td",[_._v("k")]),_._v(" "),t("td",[_._v("光标上移")])]),_._v(" "),t("tr",[t("td",[_._v("l")]),_._v(" "),t("td",[_._v("光标右移")])])])]),_._v(" "),t("h3",{attrs:{id:"_4-2-翻页"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-翻页"}},[_._v("#")]),_._v(" 4.2 翻页")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("命令")]),_._v(" "),t("th",[_._v("作用")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("ctrl+f")]),_._v(" "),t("td",[_._v("向下翻页")])]),_._v(" "),t("tr",[t("td",[_._v("ctrl+b")]),_._v(" "),t("td",[_._v("向上翻页")])]),_._v(" "),t("tr",[t("td",[_._v("ctrl+d")]),_._v(" "),t("td",[_._v("向下翻半页")])]),_._v(" "),t("tr",[t("td",[_._v("ctrl+u")]),_._v(" "),t("td",[_._v("向上翻半页")])])])])])}),[],!1,null,null,null);v.default=e.exports}}]);