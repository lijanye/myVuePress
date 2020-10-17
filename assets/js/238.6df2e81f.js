(window.webpackJsonp=window.webpackJsonp||[]).push([[238],{583:function(t,s,a){"use strict";a.r(s);var n=a(42),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h3",{attrs:{id:"虚拟列表demo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#虚拟列表demo"}},[t._v("#")]),t._v(" 虚拟列表DEMO")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[t._v("\nimport React, { useRef, useEffect, useState } from 'react';\nimport './index1.less';\n\nconst count = 100;\n\nconst List1 = () => {\n\n    const itemHeight = 124;\n    const [sourceList, setSourceList] = useState([]);\n    const [viewList, setViewList] = useState([]);\n    const [loading, setLoading] = useState(false);\n    const [finish, setFinish] = useState(false);\n    const [size, setSize] = useState(0);\n\n    const ref = useRef();\n\n    useEffect(() => {\n        setLoading(true);\n        setTimeout(() => {\n            const arrs = Array.from({ length: 20 }, (v, i) => i + 1);\n            setViewList(arrs);\n            setSourceList(arrs);\n            setLoading(false);\n            setSize(20);\n        }, 1000);\n    }, []);\n\n    useEffect(() => {\n        window.addEventListener('scroll', handleScroll);\n\n        return function () {\n            window.removeEventListener('scroll', handleScroll);\n        }\n    }, [sourceList, loading, viewList, size]);\n\n    function handleScroll() {\n        //判断触底\n        if (document.documentElement.offsetHeight - 1000 - document.documentElement.scrollTop === 0 && !loading && sourceList.length < count) {\n            setLoading(true);\n            setTimeout(() => {\n                const arrs = Array.from({ length: 10 }, (v, i) => sourceList.length + i + 1);\n                setSourceList([...sourceList, ...arrs]);\n                setViewList(viewList.splice(10, 10).concat(arrs.splice(0, 10)));\n                setLoading(false);\n            }, 1000);\n            setSize(size + 10);\n        }\n\n        //向下\n        if (document.documentElement.scrollTop >= (size + 10) * itemHeight + 248 && size + 20 < sourceList.length) {\n            const [item] = viewList;\n            const copy = JSON.parse(JSON.stringify(sourceList));\n            // 临界值判断\n            if (item > 0) {\n                // console.log(1);\n                setViewList(viewList.splice(10, 10).concat(copy.splice(item + 19, 10)));\n            }\n            setSize(size + 10);\n        }\n\n        //向上\n        if (document.documentElement.scrollTop <= size * itemHeight) {\n            const [item] = viewList;\n            const copy = JSON.parse(JSON.stringify(sourceList));\n            // 临界值判断\n            if (item > 1) {\n                setViewList(copy.splice(item - 11, 10).concat(viewList.splice(0, 10)));\n            }\n            size > 0 && setSize(size - 10);\n        }\n    }\n\n\n    return (\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("listHome"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("ref")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{ref}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("lists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("transform:")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("`translate3d(0px,")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("${(viewList[0]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("1)")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("124}px,")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("0px)`,")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("width:")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("'100vw'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("}}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                {\n                    viewList.map((item, index) => {\n                        return "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("itemList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{index}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{item}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                    })\n                }\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("className")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("loading"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[t._v("=")]),t._v("{{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[a("span",{pre:!0,attrs:{class:"token namespace"}},[t._v("paddingTop:")])]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("`${sourceList.length")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("124}px`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("}}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n                "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("{loading ? 'Loading...' : ''}"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("span")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    )\n}\n\nexport default List1;\n\n")])])])])}),[],!1,null,null,null);s.default=e.exports}}]);