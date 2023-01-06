"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[8444],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>c});var i=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,i,l=function(e,t){if(null==e)return{};var a,i,l={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=i.createContext({}),p=function(e){var t=i.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},d=function(e){var t=p(e.components);return i.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=p(a),c=l,y=u["".concat(o,".").concat(c)]||u[c]||m[c]||n;return a?i.createElement(y,r(r({ref:t},d),{},{components:a})):i.createElement(y,r({ref:t},d))}));function c(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,r=new Array(n);r[0]=u;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:l,r[1]=s;for(var p=2;p<n;p++)r[p]=a[p];return i.createElement.apply(null,r)}return i.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2591:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>m,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=a(7462),l=(a(7294),a(3905));const n={},r="Display Item",s={unversionedId:"modules/shops/display-system",id:"modules/shops/display-system",title:"Display Item",description:"QuickShop provide a cool feature that let player identify shops item.",source:"@site/i18n/tr-TR/docusaurus-plugin-content-docs/current/modules/shops/display-system.md",sourceDirName:"modules/shops",slug:"/modules/shops/display-system",permalink:"/QuickShop-Hikari-Documents/tr-TR/docs/modules/shops/display-system",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/tr-TR",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Blacklist System",permalink:"/QuickShop-Hikari-Documents/tr-TR/docs/modules/shops/blacklist"},next:{title:"Per shop permission management",permalink:"/QuickShop-Hikari-Documents/tr-TR/docs/modules/shops/per-shop-perms-management"}},o={},p=[{value:"Work Mode",id:"work-mode",level:2},{value:"Real DisplayItem",id:"real-displayitem",level:2},{value:"Virtual DisplayItem",id:"virtual-displayitem",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Globally disable display item",id:"globally-disable-display-item",level:2},{value:"Per shop disable display item",id:"per-shop-disable-display-item",level:2},{value:"DisplayItem Guard",id:"displayitem-guard",level:2},{value:"DisplayItem Auto Despawn (Not recommended)",id:"displayitem-auto-despawn-not-recommended",level:2}],d={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"display-item"},"Display Item"),(0,l.kt)("p",null,"QuickShop provide a cool feature that let player identify shops item."),(0,l.kt)("h2",{id:"work-mode"},"Work Mode"),(0,l.kt)("p",null,"Display Item have two different work mode:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Real DisplayItem"),(0,l.kt)("li",{parentName:"ul"},"Virtual DisplayItem")),(0,l.kt)("h2",{id:"real-displayitem"},"Real DisplayItem"),(0,l.kt)("p",null,"This work mode will spawn a Item entity on the shop container, this is the original display mode.",(0,l.kt)("br",{parentName:"p"}),"\n","Real DisplayItem is out of the box and doesn't need any configure.",(0,l.kt)("br",{parentName:"p"}),"\n","BUT, it will heavy impact the server performance when many shops are loaded in same time.",(0,l.kt)("br",{parentName:"p"}),"\n","It also have risk that allow players dupe items, because the item is real exists on the server."),(0,l.kt)("h2",{id:"virtual-displayitem"},"Virtual DisplayItem"),(0,l.kt)("p",null,"This work mode will send a Item packet to player's client to trick client display a floating item that above the shop container.",(0,l.kt)("br",{parentName:"p"}),"\n","Player ",(0,l.kt)("em",{parentName:"p"},"can")," see the item BUT it actually not exists on the server, it won't affect the server performance and more security."),(0,l.kt)("p",null,"To use this feature, you need to install ",(0,l.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/protocollib.1997/"},"ProtocolLib")," and set ",(0,l.kt)("inlineCode",{parentName:"p"},"display-type")," to ",(0,l.kt)("inlineCode",{parentName:"p"},"2"),"."),(0,l.kt)("h2",{id:"configuration"},"Configuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  #The display type you want use.\n  #Old mode, ArmorStand (display-type=1) is Outdated and could not be used\n  #0=Normal Dropped Item\n  #2=Virtual Item (Requires ProtocolLib, fallback to type 0 if ProtocolLib is not installed)\n  display-type: 2\n")),(0,l.kt)("h2",{id:"globally-disable-display-item"},"Globally disable display item"),(0,l.kt)("p",null,"For some reason you don't want the shops on your server spawn the display items, you can disable this feature in config.yml"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  #Should we place display items on the chests?\n  #This may cause duped items, especially for modded servers!\n  #Virtual DisplayItem is safe for dupe\n  display-items: false\n")),(0,l.kt)("h2",{id:"per-shop-disable-display-item"},"Per shop disable display item"),(0,l.kt)("p",null,"Too many items in same region may hurt client fps, especially when you are in a shopping center.",(0,l.kt)("br",{parentName:"p"}),"\n","You can disable or enable display item for single shop by looking a quickshop and execute:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-mcfunction"},"/qs toggledisplay\n")),(0,l.kt)("p",null,"Note: If display item already globally disabled, it won't force spawn display items."),(0,l.kt)("h2",{id:"displayitem-guard"},"DisplayItem Guard"),(0,l.kt)("p",null,"When QuickShop working ",(0,l.kt)("strong",{parentName:"p"},"under Real DisplayItem mode"),", DisplayItem Guard will enabled to protect DisplayItem dupe with Hopper, Water etc.",(0,l.kt)("br",{parentName:"p"}),"\n","Server administrators will receive alert when player trying to dupe display items."),(0,l.kt)("p",null,"You can disable the alert by tweak the settings:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"#Allow QuickShop to send alerts when someone tries to make a displayItem exploit.\nsend-display-item-protection-alert: false\n")),(0,l.kt)("p",null,"QuickShop also will check all display items to make sure they are still at the position they should be, and reset, respawn them when need. You can tweak the options below the change this:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  #QuickShop will check if the display item is in a valid position every specified amount of ticks.\n  #Set to 0 to disable it.\n  display-items-check-ticks: 6000\n  #The interval (in ticks) at which QS checks the shops range to despawn/spawn displays.\n  display-check-time: 40\n")),(0,l.kt)("h2",{id:"displayitem-auto-despawn-not-recommended"},"DisplayItem Auto Despawn (Not recommended)"),(0,l.kt)("p",null,"This function is completely a compromise of client render performance, which will greatly increase the pressure on the server, and it is not recommended to use it."),(0,l.kt)("p",null,"This feature allow you despawn both Real DisplayItem and Virtual DisplayItem when player too far with shops."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"  #Allow QuickShop to automatically despawn displays when no players are in range of the shop.\n  display-auto-despawn: false\n\n  #The range at which displays will despawn.\n  display-despawn-range: 20\n")))}m.isMDXComponent=!0}}]);