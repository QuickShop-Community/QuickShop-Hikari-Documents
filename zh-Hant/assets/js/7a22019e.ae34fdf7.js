"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3109],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=a,f=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8054:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={},i="Command Alias",s={unversionedId:"modules/cmd-alias",id:"modules/cmd-alias",title:"Command Alias",description:"By default, QuickShop will register the the command prefix below:",source:"@site/docs/modules/cmd-alias.md",sourceDirName:"modules",slug:"/modules/cmd-alias",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/cmd-alias",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/main/packages/create-docusaurus/templates/shared/docs/modules/cmd-alias.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"stacking-shop",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/shops/stacking-shop"},next:{title:"Databases",permalink:"/QuickShop-Hikari-Documents/zh-Hant/docs/modules/datasource"}},c={},l=[{value:"Register a new prefix or remove a prefix",id:"register-a-new-prefix-or-remove-a-prefix",level:2}],p={toc:l};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"command-alias"},"Command Alias"),(0,a.kt)("p",null,"By default, QuickShop will register the the command prefix below:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"qs (root command, cannot remove or change it)"),(0,a.kt)("li",{parentName:"ul"},"shop"),(0,a.kt)("li",{parentName:"ul"},"chestshop"),(0,a.kt)("li",{parentName:"ul"},"cshop")),(0,a.kt)("h2",{id:"register-a-new-prefix-or-remove-a-prefix"},"Register a new prefix or remove a prefix"),(0,a.kt)("p",null,"All optional prefix are defined in config.yml like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Set the command alias for qs main command\n# - playershop\n# - pshop\ncustom-commands:\n  - shop\n  - chestshop\n  - cshop\n")),(0,a.kt)("p",null,"Simple add or remove prefix from ",(0,a.kt)("inlineCode",{parentName:"p"},"custom-commands")," list, then you might need restart your server to make it take effect.",(0,a.kt)("br",{parentName:"p"}),"\n","The effect should be like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"command-alias",src:r(9079).Z,width:"1730",height:"954"})))}m.isMDXComponent=!0},9079:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/command-alias-1f3d8811e17293e14c96f14e81a6c30e.png"}}]);