"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[2341],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),h=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=h(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),s=h(n),p=i,k=s["".concat(u,".").concat(p)]||s[p]||m[p]||o;return n?r.createElement(k,a(a({ref:t},l),{},{components:n})):r.createElement(k,a({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=s;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var h=2;h<o;h++)a[h]=n[h];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},663:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>h});var r=n(7462),i=(n(7294),n(3905));const o={},a="Item Matcher",c={unversionedId:"modules/itemmatcher",id:"modules/itemmatcher",title:"Item Matcher",description:"ItemMatcher is a utility used by QuickShop-Hikari to compare the items, it is the most important thing in whole system.",source:"@site/docs/modules/itemmatcher.md",sourceDirName:"modules",slug:"/modules/itemmatcher",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/itemmatcher",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/master/docs/modules/itemmatcher.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Item Reference (Item Lookup)",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/item-ref"},next:{title:"ItemStack Loader",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/itemstack-loader"}},u={},h=[{value:"Matchers",id:"matchers",level:2},{value:"Customize the metadata compareing",id:"customize-the-metadata-compareing",level:2}],l={toc:h};function m(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"item-matcher"},"Item Matcher"),(0,i.kt)("p",null,"ItemMatcher is a utility used by QuickShop-Hikari to compare the items, it is the most important thing in whole system."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"If this feature is misconfigured, it will cause the plugin to stop working, and it can even be used for dupes, glitches or even worse.",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("strong",{parentName:"p"},"TL;DR: Keep default unless you know what you're doing."))),(0,i.kt)("h2",{id:"matchers"},"Matchers"),(0,i.kt)("p",null,"QuickShop-Hikari supports two of matchers by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Bukkit Item Matcher (default)"),(0,i.kt)("li",{parentName:"ul"},"QuickShop Item Matcher")),(0,i.kt)("p",null,"You can change the matcher by tweak the setting:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"matcher:\n  #Matcher type\n  #0= QuickShop item matcher with configurable options below.\n  #1= Bukkit item matcher, can be more accurate.\n  work-type: 1\n")),(0,i.kt)("p",null,"By default, QuickShop-Hikari will use Bukkit's matcher to provide the best cross-compatibility.",(0,i.kt)("br",{parentName:"p"}),"\n","But still, you can toggle to QuickShop Item Matcher if you need customize the comparing or running QuickShop on the server jar which have bug affect the Bukkit comparing system."),(0,i.kt)("h2",{id:"customize-the-metadata-compareing"},"Customize the metadata compareing"),(0,i.kt)("p",null,"Customize only works under QuickShop Item Matcher.  "),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Using the QuickShop Item Matcher may have a slight performance impact on the server. Using the Bukkit API to compare item by item results in more serialization/deserialization work."),(0,i.kt)("p",{parentName:"admonition"},"Keep using Bukkit Item Matcher if not necessary.")),(0,i.kt)("p",null,"You can specific to enable or disable the some checks by tweak the configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"matcher:\n  #For Item (Only works under QuickShop ItemMatcher)\n  item:\n    #Should the Plugin check the item damage?\n    damage: true\n    #Should the Plugin check the item repair cost?\n    repaircost: false\n    #Should the Plugin check the item display name?\n    displayname: true\n    #Should the Plugin check the item lores?\n    lores: true\n    #Should the Plugin check the item enchs?\n    enchs: true\n    #Should the Plugin check the item potions?\n    potions: true\n    #Should the Plugin check the item attributes?\n    attributes: true\n    #Should the Plugin check the item itemflags?\n    itemflags: true\n    #Should the Plugin check the item custommodeldata?\n    custommodeldata: true\n    #Should the Plugin check the item bookmetas?\n    books: true\n    #Should the Plugin check the banner meta?\n    banner: true\n    #Should the Plugin check the skull meta?\n    skull: true\n    #Should the Plugin check the firework meta?\n    firework: true\n    #Should the Plugin check the map meta?\n    map: true\n    #Should the Plugin check the leather armor meta?\n    leatherArmor: true\n    #Should the Plugin check the fishBucket meta?\n    fishBucket: true\n    #Should the Plugin check the suspiciousStew meta?\n    suspiciousStew: true\n    #Should the Plugin check the shulkerBox contents?\n    shulkerBox: true\n    #Should the Plugin check the bundle contents?\n    bundle: true\n")))}m.isMDXComponent=!0}}]);