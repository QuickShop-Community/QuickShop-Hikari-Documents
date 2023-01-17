"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[5647],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,m=c(e,["components","mdxType","originalType","parentName"]),u=l(n),h=i,d=u["".concat(s,".").concat(h)]||u[h]||p[h]||a;return n?r.createElement(d,o(o({ref:t},m),{},{components:n})):r.createElement(d,o({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,o[1]=c;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},8041:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={},o="Item Expression",c={unversionedId:"modules/item-expression",id:"modules/item-expression",title:"Item Expression",description:"Hikari allows you to use a string to represent or match items.",source:"@site/i18n/it-IT/docusaurus-plugin-content-docs/current/modules/item-expression.md",sourceDirName:"modules",slug:"/modules/item-expression",permalink:"/QuickShop-Hikari-Documents/it-IT/docs/modules/item-expression",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/it-IT",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Economy Formatter",permalink:"/QuickShop-Hikari-Documents/it-IT/docs/modules/economy-formatter"},next:{title:"Item Reference (Item Lookup)",permalink:"/QuickShop-Hikari-Documents/it-IT/docs/modules/item-ref"}},s={},l=[{value:"Matching with Material name",id:"matching-with-material-name",level:2},{value:"Matching with Item Reference",id:"matching-with-item-reference",level:2},{value:"Matching with Enchantment",id:"matching-with-enchantment",level:2}],m={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"item-expression"},"Item Expression"),(0,i.kt)("p",null,"Hikari allows you to use a string to represent or match items."),(0,i.kt)("h2",{id:"matching-with-material-name"},"Matching with Material name"),(0,i.kt)("p",null,"Fill in the Material name of Bukkit directly."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"- BEDROCK # select items that matches given material name\n- GOLDEN_SWORD\n")),(0,i.kt)("p",null,"You can find all materials in ",(0,i.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html"},"here"),"."),(0,i.kt)("h2",{id:"matching-with-item-reference"},"Matching with Item Reference"),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"@")," prefix before item reference name."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- "@purediamond" # select items that matches with specfics item references\n')),(0,i.kt)("p",null,"Please also check ",(0,i.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/it-IT/docs/modules/item-ref"},"here")),(0,i.kt)("h2",{id:"matching-with-enchantment"},"Matching with Enchantment"),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"This feature added since Hikari-4.0.0.0.")),(0,i.kt)("p",null,"Add ",(0,i.kt)("inlineCode",{parentName:"p"},"%")," prefix before enchantment namespaced key."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},'- "%minecraft:sharpness" # select all items with sharpness enchantment\n- "%minecraft:sharpness|1|3" # select all items with sharpness enchantment but only the enchantment level between 1 and 3\n- "%ecoenchants:soulbound" # it also support 3rd-party enchantments IF they registered into Bukkit enchantments registry...\n')))}p.isMDXComponent=!0}}]);