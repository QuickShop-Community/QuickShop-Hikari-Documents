"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[5153],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=o.createContext({}),c=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=c(n),h=r,m=d["".concat(i,".").concat(h)]||d[h]||u[h]||a;return n?o.createElement(m,p(p({ref:t},s),{},{components:n})):o.createElement(m,p({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,p=new Array(a);p[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,p[1]=l;for(var c=2;c<a;c++)p[c]=n[c];return o.createElement.apply(null,p)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8164:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=n(7462),r=(n(7294),n(3905));const a={},p="Shop Protection",l={unversionedId:"modules/shops/protection",id:"modules/shops/protection",title:"Shop Protection",description:"Player Protection",source:"@site/i18n/nl-NL/docusaurus-plugin-content-docs/current/modules/shops/protection.md",sourceDirName:"modules/shops",slug:"/modules/shops/protection",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/shops/protection",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/nl-NL",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Protection Checker",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/shops/protection-checker"},next:{title:"Ranks",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/shops/ranks"}},i={},c=[{value:"Player Protection",id:"player-protection",level:2},{value:"Entity, Block, Explosion and Hopper protection",id:"entity-block-explosion-and-hopper-protection",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,o.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shop-protection"},"Shop Protection"),(0,r.kt)("h2",{id:"player-protection"},"Player Protection"),(0,r.kt)("p",null,"By default, players that don't have permission or not the owner cannot remove another player's shop.",(0,r.kt)("br",{parentName:"p"}),"\n","And they also cannot open the shop container, put in items or take out items."),(0,r.kt)("p",null,"But for some reason, you don't want QuickShop handle shop protection, you can disable by tweak config settings to disable it like below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"  #Should QS try to lock shops for other players?\n  #This prevents players from stealing from them.\n  lock: false\n")),(0,r.kt)("h2",{id:"entity-block-explosion-and-hopper-protection"},"Entity, Block, Explosion and Hopper protection"),(0,r.kt)("p",null,"By default, QuickShop will protect shop container and shop sign from entity, block, explode breaks or hopper I/O."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Block"),(0,r.kt)("th",{parentName:"tr",align:null},"Entity"),(0,r.kt)("th",{parentName:"tr",align:null},"Explode"),(0,r.kt)("th",{parentName:"tr",align:null},"Hopper ",(0,r.kt)("br",null),"(include Hopper Minecart)"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"block-protect",src:n(4874).Z,width:"1024",height:"1024"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"entity-protect",src:n(1854).Z,width:"1024",height:"1024"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"explode-protect",src:n(1579).Z,width:"1024",height:"1024"})),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("img",{alt:"hopper-protect",src:n(4521).Z,width:"1024",height:"1024"}))))),(0,r.kt)("p",null,"You can toggle the protections above by tweak settings:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#The protection that a shop should check.\nprotect:\n  explode: true\n  hopper: true\n  # Should we allow shop owner placed hoppers?\n  hopper-owner-exclude: false\n  entity: true\n")))}u.isMDXComponent=!0},4874:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/protection-block-4e4236adc99af4d96f88cb6c6900b2fc.png"},1854:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/protection-entity-47c3ed6b6e10454f148e54b1fa5bc8b8.png"},1579:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/protection-explode-a789b6f34e2cb75b9028f6c552963f01.png"},4521:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/protection-hopper-770bd094ee463c15a6f7774b5266cdc2.png"}}]);