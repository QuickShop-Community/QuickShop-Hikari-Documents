"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[6273],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||p[h]||o;return n?a.createElement(d,i(i({ref:t},u),{},{components:n})):a.createElement(d,i({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6171:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const o={},i="Stacking Shop",s={unversionedId:"modules/shops/stacking-shop",id:"modules/shops/stacking-shop",title:"Stacking Shop",description:"QuickShop allow you sell/buy multiple item in bundles.",source:"@site/i18n/uk-UA/docusaurus-plugin-content-docs/current/modules/shops/stacking-shop.md",sourceDirName:"modules/shops",slug:"/modules/shops/stacking-shop",permalink:"/QuickShop-Hikari-Documents/uk-UA/docs/modules/shops/stacking-shop",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/uk-UA",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shop Search",permalink:"/QuickShop-Hikari-Documents/uk-UA/docs/modules/shops/shop-search"},next:{title:"Command Alias",permalink:"/QuickShop-Hikari-Documents/uk-UA/docs/modules/cmd-alias"}},l={},c=[{value:"Stacking shop",id:"stacking-shop-1",level:2},{value:"Configure",id:"configure",level:2},{value:"Create",id:"create",level:2},{value:"Change the amount for stack",id:"change-the-amount-for-stack",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"stacking-shop"},"Stacking Shop"),(0,r.kt)("p",null,"QuickShop allow you sell/buy multiple item in bundles."),(0,r.kt)("h2",{id:"stacking-shop-1"},"Stacking shop"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Regular Shop"),(0,r.kt)("th",{parentName:"tr",align:null},"Stacking Shop"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"regular",src:n(8922).Z,width:"1066",height:"1001"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"stacking",src:n(500).Z,width:"1155",height:"1061"}))))),(0,r.kt)("h2",{id:"configure"},"Configure"),(0,r.kt)("p",null,"Stacking shop feature is disabled by default. To enable it, you need to configure config.yml."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #Allow QuickShop to sell/buy multiple items in one transaction?\n  allow-stacks: true\n  #Allow displays to show stack effects when stack creation is turned on.\n  #It doesn't work under Virtual DisplayItem.\n  display-allow-stacks: true\n")),(0,r.kt)("p",null,"By the way, create stacking shop need an extra permission which included in ",(0,r.kt)("inlineCode",{parentName:"p"},"quickshop.player"),", you can check it in ",(0,r.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/uk-UA/docs/setup/permissions"},"Permissions"),"."),(0,r.kt)("h2",{id:"create"},"Create"),(0,r.kt)("p",null,"To create a stacking shop, just like normal shop creation but holding multiple items in your hand like the image below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"create",src:n(6217).Z,width:"1919",height:"934"})),(0,r.kt)("p",null,"Then enter the price and go to go."),(0,r.kt)("p",null,"Note: The amount of items in one stack cannot up over the Item's max stacksize due Minecraft limitation."),(0,r.kt)("h2",{id:"change-the-amount-for-stack"},"Change the amount for stack"),(0,r.kt)("p",null,"To change the amount of item in your stacking shop, use command ",(0,r.kt)("inlineCode",{parentName:"p"},"/qs size <newamount>"),"."))}p.isMDXComponent=!0},8922:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/non-stacking-5aecd96893dd5bd3d5b55232e1da0c34.png"},6217:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stacking-create-89125f33f18552ed060a45be475f5544.png"},500:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stacking-84eefe45013215cb8fe212d7554640ef.png"}}]);