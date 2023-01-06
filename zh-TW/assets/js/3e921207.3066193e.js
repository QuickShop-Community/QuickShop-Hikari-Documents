"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4701],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},7717:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={},i="Command Alias",c={unversionedId:"modules/cmd-alias",id:"modules/cmd-alias",title:"Command Alias",description:"By default, QuickShop will register the command prefix below:",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/modules/cmd-alias.md",sourceDirName:"modules",slug:"/modules/cmd-alias",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/modules/cmd-alias",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-TW",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Stacking Shop",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/modules/shops/stacking-shop"},next:{title:"Databases",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/modules/datasource"}},l={},s=[{value:"Register a new prefix or remove a prefix",id:"register-a-new-prefix-or-remove-a-prefix",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"command-alias"},"Command Alias"),(0,o.kt)("p",null,"By default, QuickShop will register the command prefix below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"qs (root command, cannot remove or change it)"),(0,o.kt)("li",{parentName:"ul"},"shop"),(0,o.kt)("li",{parentName:"ul"},"chestshop"),(0,o.kt)("li",{parentName:"ul"},"cshop")),(0,o.kt)("h2",{id:"register-a-new-prefix-or-remove-a-prefix"},"Register a new prefix or remove a prefix"),(0,o.kt)("p",null,"All optional prefix are defined in config.yml like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Set the command alias for qs main command\n# - playershop\n# - pshop\ncustom-commands:\n  - shop\n  - chestshop\n  - cshop\n")),(0,o.kt)("p",null,"Simple add or remove prefix from ",(0,o.kt)("inlineCode",{parentName:"p"},"custom-commands")," list, then you might need to restart your server to make it take effect.",(0,o.kt)("br",{parentName:"p"}),"\n","The effect should be like this:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"command-alias",src:r(4764).Z,width:"1730",height:"954"})))}m.isMDXComponent=!0},4764:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/command-alias-15d36e43a5abc92270051389bf8dd0b7.png"}}]);