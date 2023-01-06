"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3318],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),p=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||c[h]||i;return n?o.createElement(d,a(a({ref:t},u),{},{components:n})):o.createElement(d,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var p=2;p<i;p++)a[p]=n[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5006:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=n(7462),r=(n(7294),n(3905));const i={},a="Admin Shop (Unlimited Shop)",s={unversionedId:"modules/shops/adminshop",id:"modules/shops/adminshop",title:"Admin Shop (Unlimited Shop)",description:"QuickShop provides a feature that allow you set a shop to unlimited space (for buying shop) or unlimited stock (for selling shop).",source:"@site/docs/modules/shops/adminshop.md",sourceDirName:"modules/shops",slug:"/modules/shops/adminshop",permalink:"/QuickShop-Hikari-Documents/lt-LT/docs/modules/shops/adminshop",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/lt-LT",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shop Features",permalink:"/QuickShop-Hikari-Documents/lt-LT/docs/category/shop-features"},next:{title:"Shop Benefits",permalink:"/QuickShop-Hikari-Documents/lt-LT/docs/modules/shops/benefit"}},l={},p=[{value:"Owner Mechanism",id:"owner-mechanism",level:2},{value:"Set a shop to unlimited shop",id:"set-a-shop-to-unlimited-shop",level:2},{value:"Automatic change the owner when a shop turn to unlimited",id:"automatic-change-the-owner-when-a-shop-turn-to-unlimited",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"admin-shop-unlimited-shop"},"Admin Shop (Unlimited Shop)"),(0,r.kt)("p",null,"QuickShop provides a feature that allow you set a shop to unlimited space (for buying shop) or unlimited stock (for selling shop)."),(0,r.kt)("h2",{id:"owner-mechanism"},"Owner Mechanism"),(0,r.kt)("p",null,"Even set a shop to admin shop, ",(0,r.kt)("strong",{parentName:"p"},"the shop owner still is you!"),"  "),(0,r.kt)("h2",{id:"set-a-shop-to-unlimited-shop"},"Set a shop to unlimited shop"),(0,r.kt)("p",null,"Looking an quickshop and execute ",(0,r.kt)("inlineCode",{parentName:"p"},"/qs unlimited")," to toggle that shop between limited or unlimited."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Unlimited Shop"),(0,r.kt)("th",{parentName:"tr",align:null},"Limited Shop (Out of stock)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"adminshop",src:n(5591).Z,width:"1464",height:"748"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"regularshop",src:n(3212).Z,width:"1472",height:"830"}))))),(0,r.kt)("h2",{id:"automatic-change-the-owner-when-a-shop-turn-to-unlimited"},"Automatic change the owner when a shop turn to unlimited"),(0,r.kt)("p",null,"You can turn on ",(0,r.kt)("inlineCode",{parentName:"p"},"unlimited-shop-owner-change")," in config.yml, then configure ",(0,r.kt)("inlineCode",{parentName:"p"},"unlimited-shop-owner-change-account")," in config.yml to an player username or uuid. Then all ",(0,r.kt)("strong",{parentName:"p"},"new")," unlimited shops will automatically transfer to specific player."),(0,r.kt)("p",null,"The mechanic is not limited by the option that control maximum number of stores a player can create."))}c.isMDXComponent=!0},3212:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/a-limited-shop-877bd1bec685140eef3d1161c03c0698.png"},5591:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/a-unlimited-shop-5dc68a8bf25b08273b412625a2d4c733.png"}}]);