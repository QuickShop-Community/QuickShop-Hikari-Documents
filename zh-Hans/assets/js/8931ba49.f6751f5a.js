"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[5494],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>p});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),c=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=c(r),p=n,k=m["".concat(u,".").concat(p)]||m[p]||d[p]||o;return r?a.createElement(k,i(i({ref:t},s),{},{components:r})):a.createElement(k,i({ref:t},s))}));function p(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1419:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={},i="ItemStack Loader",l={unversionedId:"modules/itemstack-loader",id:"modules/itemstack-loader",title:"ItemStack Loader",description:"ItemStack Loader is a workaround for loading the Bukkit ItemStack.",source:"@site/docs/modules/itemstack-loader.md",sourceDirName:"modules",slug:"/modules/itemstack-loader",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/itemstack-loader",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/tree/master/docs/modules/itemstack-loader.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"itemmatcher",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/itemmatcher"},next:{title:"Localization",permalink:"/QuickShop-Hikari-Documents/zh-Hans/docs/modules/localization"}},u={},c=[{value:"When is this feature required",id:"when-is-this-feature-required",level:2},{value:"Turn on workaround",id:"turn-on-workaround",level:2}],s={toc:c};function d(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"itemstack-loader"},"ItemStack Loader"),(0,n.kt)("p",null,"ItemStack Loader is a workaround for loading the Bukkit ItemStack."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Before use this function, you ",(0,n.kt)("strong",{parentName:"p"},"MUST")," create a server full backup. After enable this function, all changes will write into worlds and databases, and it is persistent, rollback without backup is impossble.")),(0,n.kt)("h2",{id:"when-is-this-feature-required"},"When is this feature required"),(0,n.kt)("p",null,"When you update to Minecraft to a newer versions and downgrade after that (but without quickshop database), you may see the errors like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},"[Server] ERROR Could not call method 'public static org.bukkit.inventory.ItemStack org.bukkit.inventory.ItemStack.deserialize(java.util.Map)' of class org.bukkit.inventory.ItemStack for deserialization\n[Server] INFO java.lang.IllegalArgumentException: Newer version! Server downgrades are not supported!\n")),(0,n.kt)("p",null,"In this case, our recommendation is to restore the last normal QuickShop database backup, but if you are unfortunate enough to lose all your backups, here is a workaround you can try."),(0,n.kt)("p",null,"QuickShop will prompt on the console when an error is detected as a result of a version downgrade, such as the following:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-log"},"[QuickShop-Hikari] [WARN] Cannot load ItemStack {ITEM_INFO} because it saved from higher Minecraft server version, the action will fail and you will receive a exception, PLELASE DON'T REPORT TO QUICKSHOP!\n[QuickShop-Hikari] [WARN] You can try force load this ItemStack by our hacked ItemStack read util(shop.force-load-downgrade-items), but beware, the data may damaged if you load on this lower Minecraft server version, Please backup your world and database before enable!\n")),(0,n.kt)("h2",{id:"turn-on-workaround"},"Turn on workaround"),(0,n.kt)("p",null,"You can turn on loader workaround by change the settings in config.yml:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"  force-load-downgrade-items:\n    enable: true\n    #WorkMode\n    #0=Call Bukkit to try to update the ItemStack\n    #1=Call Bukkit to directly load the ItemStack\n    method: 0\n")),(0,n.kt)("p",null,"method = 0 means the ItemStack version will override by current ItemStack version number but -1.\nmethod = 1 means trick Bukkit the ItemStack version exactly same with current ItemStack version number."),(0,n.kt)("p",null,"By default, method value is ",(0,n.kt)("inlineCode",{parentName:"p"},"0"),"."))}d.isMDXComponent=!0}}]);