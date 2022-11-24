"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),l=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return o.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=l(n),h=r,d=m["".concat(p,".").concat(h)]||m[h]||c[h]||a;return n?o.createElement(d,i(i({ref:t},u),{},{components:n})):o.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=n(7462),r=(n(7294),n(3905));const a={},i="Admin Shop (Unlimited Shop)",s={unversionedId:"modules/shops/adminshop",id:"modules/shops/adminshop",title:"Admin Shop (Unlimited Shop)",description:"QuickShop provides a feature that allow you set a shop to unlimited space (for buying shop) or unlimited stock (for selling shop).",source:"@site/docs/modules/shops/adminshop.md",sourceDirName:"modules/shops",slug:"/modules/shops/adminshop",permalink:"/QuickShop-Hikari-Documents/docs/modules/shops/adminshop",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/modules/shops/adminshop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shop Features",permalink:"/QuickShop-Hikari-Documents/docs/category/shop-features"},next:{title:"Ranks",permalink:"/QuickShop-Hikari-Documents/docs/modules/shops/rank"}},p={},l=[{value:"Owner Mechanism",id:"owner-mechanism",level:2},{value:"Set a shop to unlimited shop",id:"set-a-shop-to-unlimited-shop",level:2},{value:"Automatic change the owner when a shop turn to unlimited",id:"automatic-change-the-owner-when-a-shop-turn-to-unlimited",level:2}],u={toc:l};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"admin-shop-unlimited-shop"},"Admin Shop (Unlimited Shop)"),(0,r.kt)("p",null,"QuickShop provides a feature that allow you set a shop to unlimited space (for buying shop) or unlimited stock (for selling shop)."),(0,r.kt)("h2",{id:"owner-mechanism"},"Owner Mechanism"),(0,r.kt)("p",null,"Even set a shop to admin shop, ",(0,r.kt)("strong",{parentName:"p"},"the shop owner still is you!"),"  "),(0,r.kt)("h2",{id:"set-a-shop-to-unlimited-shop"},"Set a shop to unlimited shop"),(0,r.kt)("p",null,"Looking an quickshop and execute ",(0,r.kt)("inlineCode",{parentName:"p"},"/qs unlimited")," to toggle that shop between limited or unlimited."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unlimited Shop"),(0,r.kt)("th",{parentName:"tr",align:null},"Limited Shop (Out of stock)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"adminshop",src:n(5591).Z,width:"1464",height:"748"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"regularshop",src:n(3212).Z,width:"1472",height:"830"}))))),(0,r.kt)("h2",{id:"automatic-change-the-owner-when-a-shop-turn-to-unlimited"},"Automatic change the owner when a shop turn to unlimited"),(0,r.kt)("p",null,"You can turn on ",(0,r.kt)("inlineCode",{parentName:"p"},"unlimited-shop-owner-change")," in config.yml, then configure ",(0,r.kt)("inlineCode",{parentName:"p"},"unlimited-shop-owner-change-account")," in config.yml to an player username or uuid. Then all ",(0,r.kt)("strong",{parentName:"p"},"new")," unlimited shops will automatically transfer to specfic player."),(0,r.kt)("p",null,"The mechanic is not limited by the option that control maximum number of stores a player can create."))}c.isMDXComponent=!0},3212:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/a-limited-shop-0399b273d8dcc829bfa1dfdd3a3fbbae.png"},5591:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/a-unlimited-shop-c5a6c8435512cf32822b040b396154d7.png"}}]);