"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3032],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>h});var r=o(7294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function p(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):p(p({},t),e)),o},s=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),d=c(o),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return o?r.createElement(m,p(p({ref:t},s),{},{components:o})):r.createElement(m,p({ref:t},s))}));function h(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,p=new Array(a);p[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var c=2;c<a;c++)p[c]=o[c];return r.createElement.apply(null,p)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},3212:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>p,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var r=o(7462),n=(o(7294),o(3905));const a={},p="Shop Protection",i={unversionedId:"modules/shops/protection",id:"modules/shops/protection",title:"Shop Protection",description:"Player Protection",source:"@site/i18n/ro-RO/docusaurus-plugin-content-docs/current/modules/shops/protection.md",sourceDirName:"modules/shops",slug:"/modules/shops/protection",permalink:"/QuickShop-Hikari-Documents/ro-RO/docs/modules/shops/protection",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ro-RO",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Protection Checker",permalink:"/QuickShop-Hikari-Documents/ro-RO/docs/modules/shops/protection-checker"},next:{title:"Ranks",permalink:"/QuickShop-Hikari-Documents/ro-RO/docs/modules/shops/ranks"}},l={},c=[{value:"Player Protection",id:"player-protection",level:2},{value:"Entity, Block, Explosion and Hopper protection",id:"entity-block-explosion-and-hopper-protection",level:2}],s={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"shop-protection"},"Shop Protection"),(0,n.kt)("h2",{id:"player-protection"},"Player Protection"),(0,n.kt)("p",null,"By default, players that don't have permission or not the owner cannot remove another player's shop.",(0,n.kt)("br",{parentName:"p"}),"\n","And they also cannot open the shop container, put in items or take out items."),(0,n.kt)("p",null,"But for some reason, you don't want QuickShop handle shop protection, you can disable by tweak config settings to disable it like below:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"  #Should QS try to lock shops for other players?\n  #This prevents players from stealing from them.\n  lock: false\n")),(0,n.kt)("h2",{id:"entity-block-explosion-and-hopper-protection"},"Entity, Block, Explosion and Hopper protection"),(0,n.kt)("p",null,"By default, QuickShop will protect shop container and shop sign from entity, block, explode breaks or hopper I/O."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Block"),(0,n.kt)("th",{parentName:"tr",align:null},"Entity"),(0,n.kt)("th",{parentName:"tr",align:null},"Explode"),(0,n.kt)("th",{parentName:"tr",align:null},"Hopper ",(0,n.kt)("br",null),"(include Hopper Minecart)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"block-protect",src:o(6660).Z,width:"1024",height:"1024"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"entity-protect",src:o(3046).Z,width:"1024",height:"1024"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"explode-protect",src:o(7774).Z,width:"1024",height:"1024"})),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("img",{alt:"hopper-protect",src:o(8813).Z,width:"1024",height:"1024"}))))),(0,n.kt)("p",null,"You can toggle the protections above by tweak settings:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"#The protection that a shop should check.\nprotect:\n  explode: true\n  hopper: true\n  # Should we allow shop owner placed hoppers?\n  hopper-owner-exclude: false\n  entity: true\n")))}u.isMDXComponent=!0},6660:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/protection-block-4e4236adc99af4d96f88cb6c6900b2fc.png"},3046:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/protection-entity-47c3ed6b6e10454f148e54b1fa5bc8b8.png"},7774:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/protection-explode-a789b6f34e2cb75b9028f6c552963f01.png"},8813:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/protection-hopper-770bd094ee463c15a6f7774b5266cdc2.png"}}]);