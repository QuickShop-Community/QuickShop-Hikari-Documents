"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3678],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9280:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const o={},i="Stacking Shop",s={unversionedId:"modules/shops/stacking-shop",id:"modules/shops/stacking-shop",title:"Stacking Shop",description:"QuickShop allow you sell/buy multiple item in bundles.",source:"@site/i18n/de-DE/docusaurus-plugin-content-docs/current/modules/shops/stacking-shop.md",sourceDirName:"modules/shops",slug:"/modules/shops/stacking-shop",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/shops/stacking-shop",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/de-DE",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sign Material",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/shops/sign-material"},next:{title:"Suggest Price",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/shops/suggest-price"}},l={},c=[{value:"Stacking shop",id:"stacking-shop-1",level:2},{value:"Configure",id:"configure",level:2},{value:"Create",id:"create",level:2},{value:"Change the amount for stack",id:"change-the-amount-for-stack",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"stacking-shop"},"Stacking Shop"),(0,a.kt)("p",null,"QuickShop allow you sell/buy multiple item in bundles."),(0,a.kt)("h2",{id:"stacking-shop-1"},"Stacking shop"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Regular Shop"),(0,a.kt)("th",{parentName:"tr",align:null},"Stacking Shop"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"regular",src:n(1132).Z,width:"1066",height:"1001"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{alt:"stacking",src:n(6517).Z,width:"1155",height:"1061"}))))),(0,a.kt)("h2",{id:"configure"},"Configure"),(0,a.kt)("p",null,"Stacking shop feature is disabled by default. To enable it, you need to configure config.yml."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #Allow QuickShop to sell/buy multiple items in one transaction?\n  allow-stacks: true\n  #Allow displays to show stack effects when stack creation is turned on.\n  #It doesn't work under Virtual DisplayItem.\n  display-allow-stacks: true\n")),(0,a.kt)("p",null,"By the way, create stacking shop need an extra permission which included in ",(0,a.kt)("inlineCode",{parentName:"p"},"quickshop.player"),", you can check it in ",(0,a.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/de-DE/docs/setup/permissions"},"Permissions"),"."),(0,a.kt)("h2",{id:"create"},"Create"),(0,a.kt)("p",null,"To create a stacking shop, just like normal shop creation but holding multiple items in your hand like the image below:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create",src:n(8916).Z,width:"1919",height:"934"})),(0,a.kt)("p",null,"Then enter the price and go to go."),(0,a.kt)("p",null,"Note: The amount of items in one stack cannot up over the Item's max stacksize due Minecraft limitation."),(0,a.kt)("h2",{id:"change-the-amount-for-stack"},"Change the amount for stack"),(0,a.kt)("p",null,"To change the amount of item in your stacking shop, use command ",(0,a.kt)("inlineCode",{parentName:"p"},"/qs size <newamount>"),"."))}p.isMDXComponent=!0},1132:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/non-stacking-5aecd96893dd5bd3d5b55232e1da0c34.png"},8916:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/stacking-create-89125f33f18552ed060a45be475f5544.png"},6517:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/stacking-84eefe45013215cb8fe212d7554640ef.png"}}]);