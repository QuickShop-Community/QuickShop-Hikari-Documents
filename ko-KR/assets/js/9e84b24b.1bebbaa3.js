"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3495],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=i,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={},a="Limited Addon",s={unversionedId:"addon/limited",id:"addon/limited",title:"Limited Addon",description:"This addon was added into QuickShop-Hikari at 4.1.0.0-SNAPSHOT",source:"@site/i18n/ko-KR/docusaurus-plugin-content-docs/current/addon/limited.md",sourceDirName:"addon",slug:"/addon/limited",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/addon/limited",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ko-KR",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Discount Addon",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/addon/discount"},next:{title:"List Addon",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/addon/list"}},l={},u=[{value:"Permissions",id:"permissions",level:2},{value:"Usage",id:"usage",level:2},{value:"Permanent sales quantity limit",id:"permanent-sales-quantity-limit",level:3},{value:"Periodic repetition limit",id:"periodic-repetition-limit",level:3},{value:"Purchase Notice",id:"purchase-notice",level:2},{value:"Block the purchase",id:"block-the-purchase",level:2}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"limited-addon"},"Limited Addon"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This addon was added into QuickShop-Hikari at 4.1.0.0-SNAPSHOT")),(0,i.kt)("p",null,"This addon allows store owners to set a limit on the number of sales for their store over a period of time."),(0,i.kt)("h2",{id:"permissions"},"Permissions"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"quickshopaddon.limit.use")," - Permission to use ",(0,i.kt)("inlineCode",{parentName:"li"},"/qs limit"))),(0,i.kt)("h2",{id:"usage"},"Usage"),(0,i.kt)("h3",{id:"permanent-sales-quantity-limit"},"Permanent sales quantity limit"),(0,i.kt)("p",null,"This restriction does not reset periodically."),(0,i.kt)("p",null,"Limit player purchases to a maximum of 32 items in this store:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/qs limit set 32\n")),(0,i.kt)("h3",{id:"periodic-repetition-limit"},"Periodic repetition limit"),(0,i.kt)("p",null,"This restriction type allows resetting everyone's quota at certain intervals."),(0,i.kt)("p",null,"Limit players to purchase up to 16 items per month."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"/qs limit set 32\n/qs limit period MONTH\n")),(0,i.kt)("p",null,"The system is based on the QuickShop-Hikari calendar system.",(0,i.kt)("br",{parentName:"p"}),"\n",'The timing is updated using the "value change" update system, which means that 2022-12-31 to 2023-01-01 is also considered a year.',(0,i.kt)("br",{parentName:"p"}),"\n","Same for days, months and hours."),(0,i.kt)("p",null,"Available time units:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("del",{parentName:"li"},"SECOND - 1 second")," DELETED DUE PERFORMANCE IMPACT, all exists and new second rules will update every mintue instead"),(0,i.kt)("li",{parentName:"ul"},"MINUTE - 1 mintue"),(0,i.kt)("li",{parentName:"ul"},"HOUR - 1 hour"),(0,i.kt)("li",{parentName:"ul"},"DAY - 1 day"),(0,i.kt)("li",{parentName:"ul"},"WEEK - 1 week"),(0,i.kt)("li",{parentName:"ul"},"MONTH - 1 month"),(0,i.kt)("li",{parentName:"ul"},"YEAR - 1 year")),(0,i.kt)("p",null,"Due to the limitation of QuickShop-Hikari's calendar timing system, it is impossible to set other values (for example, 3 days)"),(0,i.kt)("h2",{id:"purchase-notice"},"Purchase Notice"),(0,i.kt)("p",null,"When a player purchases from a store that has set a limit, the plugin will prompt the player with the remaining purchase quota after the purchase."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"purchase",src:n(4075).Z,width:"1586",height:"935"})),(0,i.kt)("h2",{id:"block-the-purchase"},"Block the purchase"),(0,i.kt)("p",null,"When the player exceeds or exhausts the purchase quota, the purchase will be blocked."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"run-out-of-quota",src:n(7677).Z,width:"928",height:"82"})))}c.isMDXComponent=!0},4075:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/limited_purchase-a17ca2e139537f43a84e04aeeee892d4.png"},7677:(e,t,n)=>{n.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);