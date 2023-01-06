"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4610],{3905:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>d});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},s=Object.keys(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)o=s[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var i=n.createContext({}),c=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),h=c(o),d=r,m=h["".concat(i,".").concat(d)]||h[d]||u[d]||s;return o?n.createElement(m,a(a({ref:t},p),{},{components:o})):n.createElement(m,a({ref:t},p))}));function d(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,a=new Array(s);a[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<s;c++)a[c]=o[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}h.displayName="MDXCreateElement"},2616:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var n=o(7462),r=(o(7294),o(3905));const s={},a="Shop Blocks",l={unversionedId:"modules/shops/shop-blocks",id:"modules/shops/shop-blocks",title:"Shop Blocks",description:"Not only Chests, but also all Containers all supported used for QuickShop containers!",source:"@site/i18n/el-GR/docusaurus-plugin-content-docs/current/modules/shops/shop-blocks.md",sourceDirName:"modules/shops",slug:"/modules/shops/shop-blocks",permalink:"/QuickShop-Hikari-Documents/el-GR/docs/modules/shops/shop-blocks",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/el-GR",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Create and purchase",permalink:"/QuickShop-Hikari-Documents/el-GR/docs/modules/shops/shop-basic"},next:{title:"Shop Fees",permalink:"/QuickShop-Hikari-Documents/el-GR/docs/modules/shops/shop-fees"}},i={},c=[{value:"Configuration",id:"configuration",level:2}],p={toc:c};function u(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"shop-blocks"},"Shop Blocks"),(0,r.kt)("p",null,"Not only Chests, but also all Containers all supported used for QuickShop containers!"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"shop-blocks",src:o(2597).Z,width:"1819",height:"1157"})),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("p",null,"To add or remove shop blocks, you can change the settings in config.yml:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#The list of blocks that can be used to create shops.\n#By default, chests are added to this list.\n#This will only work for blocks that implement an InventoryHolder!\n#In other words, You cannot create shops with normal blocks like dirt or stone.\n#May cause unexpected behavior with some blocks...eg:\n#-Hopper shops suck the display item in,\n#-Furnace shops allow players whatever item they want in all 3 slots,\n#-Dispenser shops aren't protected from redstone,\n#-Etc...\nshop-blocks:\n- CHEST\n- TRAPPED_CHEST\n- BARREL\n- BLAST_FURNACE\n- FURNACE\n- BREWING_STAND\n- DISPENSER\n- DROPPER\n- HOPPER\n- SMOKER\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"shop-blocks")," list doesn't support ItemReference, you can only use ",(0,r.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html"},"Bukkit Material Name")," in this list."))}u.isMDXComponent=!0},2597:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/shop-blocks-90b720d03945e9f5defe2d4a37ba7097.png"}}]);