(window.webpackJsonp=window.webpackJsonp||[]).push([[228],{575:function(t,s,a){"use strict";a.r(s);var n=a(42),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代理"}},[t._v("#")]),t._v(" 代理")]),t._v(" "),a("p",[t._v("客户端与服务端发生交互的时候，不是选择直接交互而是让第三者介入，无论是服务器还是客户端都是与代理服务器交互，然后代理服务器再与目标交互，这个第三者就叫这代理\n"),a("img",{attrs:{src:"http://qaq0n2z40.bkt.clouddn.com/%E4%BB%A3%E7%90%86.png",alt:""}})]),t._v(" "),a("h3",{attrs:{id:"正反向代理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#正反向代理"}},[t._v("#")]),t._v(" 正反向代理")]),t._v(" "),a("p",[t._v("简单的来说正向代理和反向代理的区别就是这个小三对谁更加的亲近")]),t._v(" "),a("p",[a("b",[t._v("对于正向代理：")]),t._v("\n代理服务器和客户端是一体的，目标服务器将无法得知客户端IP, 客户端将通过nginx虚拟一个IP与目标服务器交互，目标服务器将一直与nginx虚拟的ip交互。（例如，我们日常用的VPN就是正向代理的例子）")]),t._v(" "),a("p",[a("b",[t._v("对于反向代理：")]),t._v("\n代理服务器和目标服务器是一体的，客户端对代理是无感知的，因为客户端不需要任何配置就可以访问，我们只需要将请求发送到反向代理服务器，由反向代理服务器去选择目标服务器获取数据后，在返回给客户端，此时反向代理服务器和目标服务器对外就是一个服务器，暴露的是代理服务器地址，隐藏了真实服务器IP地址。（例如我们实现跨域有时候用到的就是反向代理）")]),t._v(" "),a("p",[t._v("总结起来还是一句话："),a("b",[t._v("正向代理代理客户端，反向代理代理服务器。")])]),t._v(" "),a("h3",{attrs:{id:"nginx反向代理在跨域方面的运用"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nginx反向代理在跨域方面的运用"}},[t._v("#")]),t._v(" nginx反向代理在跨域方面的运用")]),t._v(" "),a("p",[a("b",[t._v("在这里只说明一种情况当一个前端要请求多个后端的时候该如何配置nginx")]),t._v("\n假设我们拥有两个服务器要提供给一个前端使用：\n服务器一、ip: 192.168.40.122; 端口: 8079\n服务器二、ip: 192.168.40.123; 端口：8080\n而我们的nginx启动服务的端口是80  那么接下啦我们将演示如何配置\n1、首先打开自己的nginx的配置文件nginx.conf")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXX")]),t._v("\nhttp "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXXXXXX")]),t._v("  #一些图片压缩处理之类的配置\n    server "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen       "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("     #nginx  端口\n        server_name          #你的域名"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\t\t\n\t\t"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXXX")]),t._v("\n\t\troot "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("usr"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("share"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nginx"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n        #后台服务配置，配置了这个location便可以通过http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("域名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" 访问        \n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            proxy_pass              http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".40")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".122")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8079")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  #这里将配置服务器一， 服务器一将可以被访问\n            proxy_set_header        Host "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".40")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".122")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_set_header        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v(" $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            proxy_set_header        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For $proxy_add_x_forwarded_for"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        #后台服务配置，配置了这个location便可以通过http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("域名"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abc 访问 \n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("~")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abc "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    proxy_pass              http"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".40")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".123")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8080")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("abc"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("  #这里将配置服务器二， 服务器二将可以被访问\n                    proxy_set_header        Host "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("192.168")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".40")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v(".123")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    proxy_set_header        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Real"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("IP")]),t._v(" $remote_addr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                    proxy_set_header        "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("X")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("Forwarded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("For $proxy_add_x_forwarded_for"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        \n        "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("#解决Router")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mode"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'history'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("模式下，刷新路由地址不能找到页面的问题\n        location "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   html"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            index  index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("htm"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v("e $request_filename"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                rewrite "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("^")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("index"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("html"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("?")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("$"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(" last"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("XXXXXXX")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("其他前端路径等配置"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("通过上述配置就可以在同一个项目之中去请求两个服务器的数据了，是不是很简单；(如有不正确的地方欢迎指正)")])])}),[],!1,null,null,null);s.default=r.exports}}]);