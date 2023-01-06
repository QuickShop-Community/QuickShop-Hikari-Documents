"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7760],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>m});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),d=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=d(e.components);return n.createElement(c.Provider,{value:r},e.children)},l={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=d(t),m=o,f=p["".concat(c,".").concat(m)]||p[m]||l[m]||i;return t?n.createElement(f,a(a({ref:r},u),{},{components:t})):n.createElement(f,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=p;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var d=2;d<i;d++)a[d]=t[d];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},89:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var n=t(7462),o=(t(7294),t(3905));const i={},a="DiscordSRV Addon",s={unversionedId:"addon/discordsrv",id:"addon/discordsrv",title:"DiscordSRV Addon",description:"DiscordSRV addon will allow you hook QuickShop-Hikari into your DiscordSRV, send real-time notifications to your players through Discord DM.",source:"@site/docs/addon/discordsrv.md",sourceDirName:"addon",slug:"/addon/discordsrv",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/addon/discordsrv",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/sr-Cyrl",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Addon",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/category/addon"},next:{title:"Discount Addon",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/addon/discount"}},c={},d=[{value:"How it works",id:"how-it-works",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Screenshot",id:"screenshot",level:2}],u={toc:d};function l(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"discordsrv-addon"},"DiscordSRV Addon"),(0,o.kt)("p",null,"DiscordSRV addon will allow you hook QuickShop-Hikari into your ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/discordsrv.18494/"},"DiscordSRV"),", send real-time notifications to your players through Discord DM."),(0,o.kt)("h2",{id:"how-it-works"},"How it works"),(0,o.kt)("p",null,"Addon will read DiscordSRV's player binding data and use DiscordSRV's API send embed messages to player.  "),(0,o.kt)("p",null,"Embed messages can be customize in use ",(0,o.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/modules/localization"},"Language Override System"),"."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# the config-version, don\'t touch it.\nconfig-version: 2\n\n# the moderator discord channel ID used for sending mod messages.\nmoderator-channel: "000000000000000000"\n\n# the features should be enabled.\nfeatures:\n  notify-shop-permission-changed: true\n  notify-shop-price-changed: true\n  notify-shop-transfer: true\n  notify-shop-out-of-stock: true\n  notify-shop-out-of-space: true\n  notify-shop-purchase: true\n  mod-notify-shop-purchase: true\n  mod-notify-shop-price-changed: true\n  mod-notify-shop-removed: true\n  mod-notify-shop-transfer: false\n')),(0,o.kt)("h2",{id:"screenshot"},"Screenshot"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/206912863-aecd677f-194a-40bf-8f2c-564f7e3be368.png",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/206912864-34a5114a-53c7-41d4-9931-75532c6525b8.png",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/206912867-01a5b862-82d3-4988-929d-d6db20f0dd44.png",alt:null}),"\n",(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/30802565/206912869-2b0609a8-46f8-4ba0-8a8e-9e2afb77e0a9.png",alt:null})))}l.isMDXComponent=!0}}]);