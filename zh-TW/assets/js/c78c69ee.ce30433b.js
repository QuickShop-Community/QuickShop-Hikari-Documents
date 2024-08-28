"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[9167],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(h,s(s({ref:t},p),{},{components:r})):n.createElement(h,s({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,s=new Array(a);s[0]=u;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=r[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},9480:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var n=r(7462),o=(r(7294),r(3905));const a={},s="\u9ed1\u540d\u55ae\u7cfb\u7d71",i={unversionedId:"modules/shops/blacklist",id:"modules/shops/blacklist",title:"\u9ed1\u540d\u55ae\u7cfb\u7d71",description:"Server administrator can disable shop creation at/for world or items.",source:"@site/i18n/zh-TW/docusaurus-plugin-content-docs/current/modules/shops/blacklist.md",sourceDirName:"modules/shops",slug:"/modules/shops/blacklist",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/modules/shops/blacklist",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-TW",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shop Benefits",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/modules/shops/benefit"},next:{title:"Display Item",permalink:"/QuickShop-Hikari-Documents/zh-TW/docs/modules/shops/display-system"}},l={},c=[{value:"\u4e16\u754c\u9ed1\u540d\u55ae",id:"\u4e16\u754c\u9ed1\u540d\u55ae",level:2},{value:"\u7269\u54c1\u9ed1\u540d\u55ae",id:"\u7269\u54c1\u9ed1\u540d\u55ae",level:2},{value:"Item name based",id:"item-name-based",level:3},{value:"Item lores based",id:"item-lores-based",level:3},{value:"Legacy shops",id:"legacy-shops",level:3}],p={toc:c};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u9ed1\u540d\u55ae\u7cfb\u7d71"},"\u9ed1\u540d\u55ae\u7cfb\u7d71"),(0,o.kt)("p",null,"Server administrator can disable shop creation at/for world or items."),(0,o.kt)("h2",{id:"\u4e16\u754c\u9ed1\u540d\u55ae"},"\u4e16\u754c\u9ed1\u540d\u55ae"),(0,o.kt)("p",null,"The worlds added into ",(0,o.kt)("inlineCode",{parentName:"p"},"shop.blacklist-world")," will be disabled for new shop creation."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #The list of worlds in which creating new shops is disabled.\n  blacklist-world:\n    - disabled_world_name\n")),(0,o.kt)("h2",{id:"\u7269\u54c1\u9ed1\u540d\u55ae"},"\u7269\u54c1\u9ed1\u540d\u55ae"),(0,o.kt)("h3",{id:"item-name-based"},"Item name based"),(0,o.kt)("p",null,"Server administrator can add the item name that disallow used for shop creating into ",(0,o.kt)("inlineCode",{parentName:"p"},"blacklist")," in config.yml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#List of items that can't be sold in shops.\n#Anyone with the quickshop.bypass.<itemID> permission can bypass it.\n#Add the reference the item lookup table by adding @ before the name.\n#For referenced item, the permission quickshop.bypass.reference will be used.\nblacklist:\n  - Bedrock\n")),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"blacklist")," supports ",(0,o.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/zh-TW/docs/modules/item-ref"},"Item Reference")),(0,o.kt)("h3",{id:"item-lores-based"},"Item lores based"),(0,o.kt)("p",null,"Server administrator can add the item lores that disallow used for shop creating into ",(0,o.kt)("inlineCode",{parentName:"p"},"shop.blacklist-lores")," in config.yml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'shop:\n  #The list of lore keywords that are blocked from being sold.\n  #This will not affect existing shops!\n  blacklist-lores:\n    - "SoulBound"\n')),(0,o.kt)("h3",{id:"legacy-shops"},"Legacy shops"),(0,o.kt)("p",null,"New rules only blocks the shop creation, it won't affect all exists shops."))}d.isMDXComponent=!0}}]);