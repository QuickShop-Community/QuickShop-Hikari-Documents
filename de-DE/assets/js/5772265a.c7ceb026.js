"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[9150],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),c=p(n),m=r,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||i;return n?o.createElement(f,a(a({ref:t},u),{},{components:n})):o.createElement(f,a({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8467:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={},a="Shop Benefits",l={unversionedId:"modules/shops/benefit",id:"modules/shops/benefit",title:"Shop Benefits",description:"Shop Benefits feature allow you split your shop reward to multiple players.",source:"@site/i18n/de-DE/docusaurus-plugin-content-docs/current/modules/shops/benefit.md",sourceDirName:"modules/shops",slug:"/modules/shops/benefit",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/shops/benefit",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/de-DE",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Admin Shop (Unlimited Shop)",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/shops/adminshop"},next:{title:"Blacklist System",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/shops/blacklist"}},s={},p=[{value:"Add a benefit",id:"add-a-benefit",level:2},{value:"Remove from benefits",id:"remove-from-benefits",level:2},{value:"Query all benefits in your shop",id:"query-all-benefits-in-your-shop",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"Allow to add offline players",id:"allow-to-add-offline-players",level:2}],u={toc:p};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shop-benefits"},"Shop Benefits"),(0,r.kt)("p",null,"Shop Benefits feature allow you split your shop reward to multiple players."),(0,r.kt)("h2",{id:"add-a-benefit"},"Add a benefit"),(0,r.kt)("p",null,"Looking at a quickshop, execute command ",(0,r.kt)("inlineCode",{parentName:"p"},"/qs benefit add <player> <percentage>")," (example: ",(0,r.kt)("inlineCode",{parentName:"p"},"/qs benefit add Aether 50%"),") will split ",(0,r.kt)("inlineCode",{parentName:"p"},"<percentage>%")," rewards to ",(0,r.kt)("inlineCode",{parentName:"p"},"<player"),"."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/qs benefit add Nahida 50%")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"/qs benefit add Venti 30%"))),(0,r.kt)("p",null,"In those commands, shop owner set split ",(0,r.kt)("inlineCode",{parentName:"p"},"50%")," rewards to Nahida and ",(0,r.kt)("inlineCode",{parentName:"p"},"30%")," to Venti. When a shop earn ",(0,r.kt)("inlineCode",{parentName:"p"},"100\\$"),", Nahida will get ",(0,r.kt)("inlineCode",{parentName:"p"},"50$")," for rewards, and Venti will get ",(0,r.kt)("inlineCode",{parentName:"p"},"30$")," for rewards, and shop owner will get remains ",(0,r.kt)("inlineCode",{parentName:"p"},"20%")," (",(0,r.kt)("inlineCode",{parentName:"p"},"20$"),") for rewards."),(0,r.kt)("h2",{id:"remove-from-benefits"},"Remove from benefits"),(0,r.kt)("p",null,"To remove a player from your shop benefits, simple use command: ",(0,r.kt)("inlineCode",{parentName:"p"},"/qs benefit remove <player>"),"."),(0,r.kt)("h2",{id:"query-all-benefits-in-your-shop"},"Query all benefits in your shop"),(0,r.kt)("p",null,"To query the all benefits in your shop, simple use command: ",(0,r.kt)("inlineCode",{parentName:"p"},"/qs benefit query"),"."),(0,r.kt)("h2",{id:"side-effects"},"Side Effects"),(0,r.kt)("p",null,"Depending on the implementation of different economy plugins, the assignment may suffer from loss of precision."),(0,r.kt)("p",null,"When the amount is too small, rounding may occur due to the implementation of the economy plugin, or decimal precision may be lost such as ",(0,r.kt)("inlineCode",{parentName:"p"},"2.899999999999999"),"."),(0,r.kt)("p",null,"QuickShop-Hikari have a workaround about this, but still, if this problem occurs, please do not report it as a bug, it is expected."),(0,r.kt)("h2",{id:"allow-to-add-offline-players"},"Allow to add offline players"),(0,r.kt)("p",null,"By default, for security, QuickShop-Hikari disallow add offline players into shop benefits, To remove this restriction, you must add the JVM Startup Flag like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"-Dcom.ghostchu.quickshop.command.subcommand.SubCommand_Benefit.allowOffline=true\n")))}d.isMDXComponent=!0}}]);