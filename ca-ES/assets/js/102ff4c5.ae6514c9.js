"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[1151],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),a=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=a(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,u=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),y=a(r),m=o,d=y["".concat(i,".").concat(m)]||y[m]||s[m]||u;return r?n.createElement(d,c(c({ref:t},p),{},{components:r})):n.createElement(d,c({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=r.length,c=new Array(u);c[0]=y;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var a=2;a<u;a++)c[a]=r[a];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},6962:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>u,metadata:()=>l,toc:()=>a});var n=r(7462),o=(r(7294),r(3905));const u={},c="Multi Currency",l={unversionedId:"modules/multi-currency",id:"modules/multi-currency",title:"Multi Currency",description:"QuickShop-Hikari supports some Multi-Currency economy plugin or bridge plugin, but they're not out of the box, you must configure them to take effect.",source:"@site/i18n/ca-ES/docusaurus-plugin-content-docs/current/modules/multi-currency.md",sourceDirName:"modules",slug:"/modules/multi-currency",permalink:"/QuickShop-Hikari-Documents/ca-ES/docs/modules/multi-currency",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ca-ES",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Localization",permalink:"/QuickShop-Hikari-Documents/ca-ES/docs/modules/localization"},next:{title:"Network and Proxy",permalink:"/QuickShop-Hikari-Documents/ca-ES/docs/modules/networking"}},i={},a=[{value:"Supported Economy Plugin",id:"supported-economy-plugin",level:2},{value:"Set default currency",id:"set-default-currency",level:2},{value:"Set multi-currency alternate symbol",id:"set-multi-currency-alternate-symbol",level:2},{value:"Change the currency for shops",id:"change-the-currency-for-shops",level:2},{value:"Ongoing Fee Currency",id:"ongoing-fee-currency",level:2},{value:"Shop Tax Currency",id:"shop-tax-currency",level:2}],p={toc:a};function s(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"multi-currency"},"Multi Currency"),(0,o.kt)("p",null,"QuickShop-Hikari supports some Multi-Currency economy plugin or bridge plugin, but they're not out of the box, you must configure them to take effect."),(0,o.kt)("h2",{id:"supported-economy-plugin"},"Supported Economy Plugin"),(0,o.kt)("p",null,"QuickShop-Hikari current supports the multi-Currency economy plugin below:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GemsEconomy"),(0,o.kt)("li",{parentName:"ul"},"TheNewEconomy","## Enable Multi-Currency support")),(0,o.kt)("p",null,"To enable multi-currency feature, you need to configure QuickShop economy processor to a supported mode, this can be configured in config.yml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# What economy provider should QuickShop use?\n# 0=Vault\n# 3=GemsEconomy with Multi-Currency on\n# 4=TNE with Multi-Currency on\n# DO NOT TOUCH THIS IF YOU DON'T KNOW WHAT IT DOES. ASK FOR SUPPORT BEFORE TOUCHING THIS!\neconomy-type: 0\n")),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"economy-type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"4")," will enable the Multi-Currency feature.",(0,o.kt)("br",{parentName:"p"}),"\n","Note: Only one processor can be enabled in same time which mean once you choose ",(0,o.kt)("inlineCode",{parentName:"p"},"3")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"4"),", Vault will be disabled."),(0,o.kt)("h2",{id:"set-default-currency"},"Set default currency"),(0,o.kt)("p",null,"You need to set a currency for default usage (like new shop default currency),and configure it in config.yml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The currency used to create shops.\n# Set this to \"\" to use default currency.\n# Only required if you use multiple currencies.\ncurrency: ''\n")),(0,o.kt)("h2",{id:"set-multi-currency-alternate-symbol"},"Set multi-currency alternate symbol"),(0,o.kt)("p",null,"You can set a alternate for symbols, QuickShop-Hikari will use alternate for specific currencies in text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  # This setting is for multi-currency setups.\n  # If nothing matches in this list, it falls back to the name of currency itself.\n  alternate-currency-symbol-list:\n  - USD;$\n  - CNY;\uffe5\n")),(0,o.kt)("h2",{id:"change-the-currency-for-shops"},"Change the currency for shops"),(0,o.kt)("p",null,"Looking at a quickshop, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"/qs currency <new-currency>")," to change shop currency."),(0,o.kt)("h2",{id:"ongoing-fee-currency"},"Ongoing Fee Currency"),(0,o.kt)("p",null,"OngoingFee will always use server scope default currency (",(0,o.kt)("inlineCode",{parentName:"p"},"currency"),")."),(0,o.kt)("h2",{id:"shop-tax-currency"},"Shop Tax Currency"),(0,o.kt)("p",null,"Shop tax will use per-shop currency with global tax rate (cannot change yet).",(0,o.kt)("br",{parentName:"p"}),"\n","If you really want this feature, open a Feature Request on our Issue Tracker!"))}s.isMDXComponent=!0}}]);