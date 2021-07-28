(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{547:function(s,a,n){"use strict";n.r(a);var t=n(44),e=Object(t.a)({},(function(){var s=this,a=s.$createElement,n=s._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[n("h1",{attrs:{id:"简要"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#简要"}},[s._v("#")]),s._v(" 简要")]),s._v(" "),n("blockquote",[n("p",[s._v("一个正在成长的前端团队")])]),s._v(" "),n("h2",{attrs:{id:"技术栈"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#技术栈"}},[s._v("#")]),s._v(" 技术栈")]),s._v(" "),n("p",[s._v("移动端")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("使用chameleon + tailwindcss + loadsh + natjs 开发\n")])])]),n("p",[s._v("管理端")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("使用vue + element-ui 开发\n")])])]),n("h2",{attrs:{id:"环境准备"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#环境准备"}},[s._v("#")]),s._v(" 环境准备")]),s._v(" "),n("p",[s._v("依赖环境")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("git\nnode >= 8.10.0、npm >= 5.6.0\n")])])]),n("p",[s._v("工具")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("vscode 或 webstorm、小程序开发者工具、Android Studio、Axure RP...\n")])])]),n("p",[s._v("vscode插件")]),s._v(" "),n("div",{staticClass:"language- extra-class"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[s._v("cml、ESlint、Tailwind CSS IntelliSense、Vetur、loadsh...\n")])])]),n("h2",{attrs:{id:"安装chameleon"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#安装chameleon"}},[s._v("#")]),s._v(" 安装chameleon")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" i -g chameleon-tool\n安装成功后，执行 cml -v 查看当前版本， cml -h 查看帮助文档。\n")])])]),n("h2",{attrs:{id:"项目介绍"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#项目介绍"}},[s._v("#")]),s._v(" 项目介绍")]),s._v(" "),n("p",[s._v("cml项目目录")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("├── dist                                // 打包产出目录\n  ├── wx                                // 微信小程序代码\n  ├── web                               // web端代码\n  ├── weex                              // weex端代码\n├── mock                                // 模拟数据目录\n├── optimize                            // 加速构建配置文件夹\n├── platforms                           // 多平台文件夹\n    ├── android                         // android项目目录\n    ├── ios                             // ios项目目录\n├── node_modules                        // npm包依赖\n├── package.json\n└── src                                 // 项目源代码\n    ├── app                             // app启动入口\n    ├── assets                          // 资源文件夹\n    ├── components                      // 组件文件夹\n    ├── interface                       // 多态接口文件夹\n    ├── pages                           // 页面文件夹\n    ├── subpackages                     // 分包页面文件夹\n    ├── store                           // 全局状态管理\n    ├── utils                           // 工具文件夹\n    └── router.config.json              // 路由配置\n├── .eslintrc.js                        // eslint规则配置文件\n├── chameleon.config.js                 // 项目的配置文件\n├── dev-optimize.js                     // 加速构建脚本文件\n├── gulpfile.js                         // 脚本文件\n├── postcss.config.js                   // postcss配置文件\n├── tailwind.config.js                  // tailwind配置文件\n")])])]),n("p",[s._v("cml项目命令行")]),s._v(" "),n("div",{staticClass:"language-sh extra-class"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[s._v("package.json --"),n("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" scripts\n\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run dev                             // 启动开发环境，同时启动 web、wx、weex 三端\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run web:dev                         // 启动开发环境，启动 web 一端\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run wx:dev                          // 启动开发环境，启动 wx 一端\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run weex:dev                        // 启动开发环境，启动 weex 一端\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run postcss                         // 将tailwind.config的配置生成对应的css代码\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run gulp                            // 执行脚本 在对应目录下生成global.css\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run eslint                          // 对项目进行格式校验\n"),n("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run eslintfix                       // 对项目进行格式修复 \n")])])])])}),[],!1,null,null,null);a.default=e.exports}}]);