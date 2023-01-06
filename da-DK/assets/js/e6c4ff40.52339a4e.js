"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[172],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),l=d(r),m=o,f=l["".concat(c,".").concat(m)]||l[m]||p[m]||i;return r?n.createElement(f,a(a({ref:t},u),{},{components:r})):n.createElement(f,a({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=r.length,a=new Array(i);a[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=r[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},1608:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=r(7462),o=(r(7294),r(3905));const i={},a="DiscordSRV Addon",s={unversionedId:"addon/discordsrv",id:"addon/discordsrv",title:"DiscordSRV Addon",description:"DiscordSRV addon will allow you hook QuickShop-Hikari into your DiscordSRV, send real-time notifications to your players through Discord DM.",source:"@site/i18n/da-DK/docusaurus-plugin-content-docs/current/addon/discordsrv.md",sourceDirName:"addon",slug:"/addon/discordsrv",permalink:"/QuickShop-Hikari-Documents/da-DK/docs/addon/discordsrv",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/da-DK",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addon",permalink:"/QuickShop-Hikari-Documents/da-DK/docs/category/addon"},next:{title:"Discount Addon",permalink:"/QuickShop-Hikari-Documents/da-DK/docs/addon/discount"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Screenshot",id:"screenshot",level:2}],u={toc:d};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discordsrv-addon"},"DiscordSRV Addon"),(0,o.kt)("p",null,"DiscordSRV addon will allow you hook QuickShop-Hikari into your ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/discordsrv.18494/"},"DiscordSRV"),", send real-time notifications to your players through Discord DM."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Addon will read DiscordSRV's player binding data and use DiscordSRV's API send embed messages to player."),(0,o.kt)("p",null,"Embed messages can be customize in use ",(0,o.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/da-DK/docs/modules/localization"},"Language Override System"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# the config-version, don\'t touch it.\nconfig-version: 2\n\n# the moderator discord channel ID used for sending mod messages.\nmoderator-channel: "000000000000000000"\n\n# the features should be enabled.\nfeatures:\n  notify-shop-permission-changed: true\n  notify-shop-price-changed: true\n  notify-shop-transfer: true\n  notify-shop-out-of-stock: true\n  notify-shop-out-of-space: true\n  notify-shop-purchase: true\n  mod-notify-shop-purchase: true\n  mod-notify-shop-price-changed: true\n  mod-notify-shop-removed: true\n  mod-notify-shop-transfer: false\n')),(0,o.kt)("h2",{id:"screenshot"},"Screenshot"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/206912863-aecd677f-194a-40bf-8f2c-564f7e3be368.png",alt:null})," ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/206912864-34a5114a-53c7-41d4-9931-75532c6525b8.png",alt:null})," ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/206912867-01a5b862-82d3-4988-929d-d6db20f0dd44.png",alt:null})," ",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/206912869-2b0609a8-46f8-4ba0-8a8e-9e2afb77e0a9.png",alt:null})))}p.isMDXComponent=!0}}]);