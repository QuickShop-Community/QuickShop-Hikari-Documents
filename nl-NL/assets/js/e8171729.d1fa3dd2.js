"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[215],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>d});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=l(n),d=o,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var l=2;l<i;l++)a[l]=n[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},5418:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const i={},a="Item Reference (Item Lookup)",c={unversionedId:"modules/item-ref",id:"modules/item-ref",title:"Item Reference (Item Lookup)",description:"In some situations, only use Material name is not enough.",source:"@site/i18n/nl-NL/docusaurus-plugin-content-docs/current/modules/item-ref.md",sourceDirName:"modules",slug:"/modules/item-ref",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/item-ref",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/nl-NL",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Economy Formatter",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/economy-formatter"},next:{title:"Item Matcher",permalink:"/QuickShop-Hikari-Documents/nl-NL/docs/modules/itemmatcher"}},u={},l=[{value:"Why",id:"why",level:2},{value:"Create a item reference",id:"create-a-item-reference",level:2}],s={toc:l};function m(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"item-reference-item-lookup"},"Item Reference (Item Lookup)"),(0,o.kt)("p",null,"In some situations, only use Material name is not enough."),(0,o.kt)("h2",{id:"why"},"Why"),(0,o.kt)("p",null,"Think about, it's easy to limit a Stone price like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rules: # Rules set\n  cheap-stone: # Rules name, used for identifier and permission node (quickshop.price.restriction.bypass.<name>)\n    items: # Items in the rule (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html), or the reference the item lookup table by adding @ before the name\n      - STONE\n    currency: # Currency name, If your plugin doesn't support multi-currency (Vault API), this section won't be used\n      - '*'\n    min: 0.01 # Min price (double)\n    max: 1.00 # Max price (double)\n")),(0,o.kt)("p",null,"But if I want to limit a Slimefun gadget?"),(0,o.kt)("h2",{id:"create-a-item-reference"},"Create a item reference"),(0,o.kt)("p",null,"Holding the item you want to create a reference for, then execute command ",(0,o.kt)("inlineCode",{parentName:"p"},"/qs lookup create <name>"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"item-ref",src:n(7661).Z,width:"1419",height:"238"})),(0,o.kt)("p",null,"And you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"@")," prefix at the front of item name to use that reference."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"rules: # Rules set\n  cheap-diamond: # Rules name, used for identifier and permission node (quickshop.price.restriction.bypass.<name>)\n    items: # Items in the rule (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html), or the reference the item lookup table by adding @ before the name\n      - \"@purediamond\"\n    currency: # Currency name, If your plugin doesn't support multi-currency (Vault API), this section won't be used\n      - '*'\n    min: 0.01 # Min price (double)\n    max: 1.00 # Max price (double)\n")),(0,o.kt)("p",null,"Now you will only limit the price for item Pure Diamond!"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"item-ref-demo",src:n(4929).Z,width:"2560",height:"1494"})))}m.isMDXComponent=!0},4929:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/itemref-demo-a6d353c129e408700be50b6832ce5b11.png"},7661:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/itemref-5014b3d9a926a7ff18457912786781c1.png"}}]);