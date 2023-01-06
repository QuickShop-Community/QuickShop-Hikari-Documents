"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[5714],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>k});var r=i(7294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,r,a=function(e,t){if(null==e)return{};var i,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)i=n[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var i=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=p(i),k=a,h=c["".concat(l,".").concat(k)]||c[k]||m[k]||n;return i?r.createElement(h,s(s({ref:t},u),{},{components:i})):r.createElement(h,s({ref:t},u))}));function k(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=i.length,s=new Array(n);s[0]=c;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<n;p++)s[p]=i[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,i)}c.displayName="MDXCreateElement"},8344:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>m,frontMatter:()=>n,metadata:()=>o,toc:()=>p});var r=i(7462),a=(i(7294),i(3905));const n={},s="Permission",o={unversionedId:"setup/permissions",id:"setup/permissions",title:"Permission",description:"Most QuickShop features are controlled by permissions, you are able to control most features by using QuickShop-Hikari's permissions.",source:"@site/i18n/fi-FI/docusaurus-plugin-content-docs/current/setup/permissions.md",sourceDirName:"setup",slug:"/setup/permissions",permalink:"/QuickShop-Hikari-Documents/fi-FI/docs/setup/permissions",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/fi-FI",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Installation",permalink:"/QuickShop-Hikari-Documents/fi-FI/docs/setup/install"},next:{title:"FAQ",permalink:"/QuickShop-Hikari-Documents/fi-FI/docs/category/faq"}},l={},p=[{value:"Basic LuckPerms Guide",id:"basic-luckperms-guide",level:2},{value:"Simple Permissions",id:"simple-permissions",level:2},{value:"Details Permissions",id:"details-permissions",level:2},{value:"Player Permissions",id:"player-permissions",level:3},{value:"Admin Permissions",id:"admin-permissions",level:3}],u={toc:p};function m(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"permission"},"Permission"),(0,a.kt)("p",null,"Most QuickShop features are controlled by permissions, you are able to control most features by using QuickShop-Hikari's permissions."),(0,a.kt)("h2",{id:"basic-luckperms-guide"},"Basic LuckPerms Guide"),(0,a.kt)("p",null,"To give a group a specific permission, you can use:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Grant"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"/lp group <group> permission set <permission> true")),(0,a.kt)("p",null,"To revoke it, execute:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Revoke"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"/lp group <group> permission unset <permission>")),(0,a.kt)("p",null,"If a permission is included in a ",(0,a.kt)("em",{parentName:"p"},"Simple Permission"),", you can explicit override to disable it:",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("strong",{parentName:"p"},"Force disable"),": ",(0,a.kt)("inlineCode",{parentName:"p"},"/lp group <group> permission set <permission> false")),(0,a.kt)("p",null,"If you don't know what is the name of your group, use ",(0,a.kt)("inlineCode",{parentName:"p"},"default"),".",(0,a.kt)("br",{parentName:"p"}),"\n","To learn more about LuckPerms, you can read their wiki at ",(0,a.kt)("a",{parentName:"p",href:"https://luckperms.net/wiki/Home"},"here"),"."),(0,a.kt)("h2",{id:"simple-permissions"},"Simple Permissions"),(0,a.kt)("p",null,"QuickShop provides a simple permission that allows you to quickly setup permissions, they are:"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"quickshop.player")," which contains all ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ghost-chu/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L78"},"sub permission nodes")," that players required.",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"quickshop.moderator")," which contains all ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/Ghost-chu/QuickShop-Hikari/blob/f7b12693d753fa9d2f147238b3afdf0e4030cfa6/quickshop-bukkit/src/main/resources/plugin.yml#L101"},"sub permission nodes")," that moderators required."),(0,a.kt)("p",null,"The biggest advantage of using Simple Permission is that when a new permission is added to QuickShop, it will be automatically authorized without additional configuration."),(0,a.kt)("h2",{id:"details-permissions"},"Details Permissions"),(0,a.kt)("p",null,"There is a detailed list of all QuickShop-Hikari permission nodes, you can grant/revoke them by using command."),(0,a.kt)("h3",{id:"player-permissions"},"Player Permissions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"quickshop.use",(0,a.kt)("br",{parentName:"li"}),"Required for any QuickShop actions."),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.sell",(0,a.kt)("br",{parentName:"li"}),"Required to create a shop (Sell-Mode)"),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.buy",(0,a.kt)("br",{parentName:"li"}),"Required to create a shop (Buy-Mode) or to switch from Sell to Buy-Mode."),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.stacks",(0,a.kt)("br",{parentName:"li"}),"Required to allow selling items in stacks."),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.changeitem",(0,a.kt)("br",{parentName:"li"}),"Allows the player to change a shop's item."),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.changeamount",(0,a.kt)("br",{parentName:"li"}),"Allows the player to change the amount per buy/sell."),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.changeprice",(0,a.kt)("br",{parentName:"li"}),"Allows the player to change the buy/sell price of their shops."),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.double",(0,a.kt)("br",{parentName:"li"}),"Allows the player to create a double chest shop."),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.cmd",(0,a.kt)("br",{parentName:"li"}),"Required to have access to the ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs create")," command.",(0,a.kt)("br",{parentName:"li"}),"This command may bypass certain protections of not-supported protection plugins!"),(0,a.kt)("li",{parentName:"ul"},"quickshop.transfer",(0,a.kt)("br",{parentName:"li"}),"Required to transfer shops to another player."),(0,a.kt)("li",{parentName:"ul"},"quickshop.find",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs find <item>")),(0,a.kt)("li",{parentName:"ul"},"quickshop.fetchmessage",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs fetchmessage")),(0,a.kt)("li",{parentName:"ul"},"quickshop.staff",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs staff")," and all its subcommands."),(0,a.kt)("li",{parentName:"ul"},"quickshop.preview",(0,a.kt)("br",{parentName:"li"}),"Required to use the GUI Item Preview."),(0,a.kt)("li",{parentName:"ul"},"quickshop.currency",(0,a.kt)("br",{parentName:"li"}),"Required to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs currency <currency>")),(0,a.kt)("li",{parentName:"ul"},"quickshop.shopnaming",(0,a.kt)("br",{parentName:"li"}),"Required to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs name <name>")),(0,a.kt)("li",{parentName:"ul"},"quickshop.permission",(0,a.kt)("br",{parentName:"li"}),"Required to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs permission")),(0,a.kt)("li",{parentName:"ul"},"quickshop.benefit",(0,a.kt)("br",{parentName:"li"}),"Required to use the ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs benefit"))),(0,a.kt)("h3",{id:"admin-permissions"},"Admin Permissions"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"quickshop.unlimited",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs unlimited")),(0,a.kt)("li",{parentName:"ul"},"quickshop.alwayscounting",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs alwayscounting")),(0,a.kt)("li",{parentName:"ul"},"quickshop.setowner",(0,a.kt)("br",{parentName:"li"}),"Required to use /qs setowner"),(0,a.kt)("li",{parentName:"ul"},"quickshop.other.destroy",(0,a.kt)("br",{parentName:"li"}),"Allows the player to remove/destroy the shops of others."),(0,a.kt)("li",{parentName:"ul"},"quickshop.other.open",(0,a.kt)("br",{parentName:"li"}),"Allows the player to open chests of other shops and take/put items from/into it."),(0,a.kt)("li",{parentName:"ul"},"quickshop.other.price",(0,a.kt)("br",{parentName:"li"}),"Allows the player to change the price of someone's shop."),(0,a.kt)("li",{parentName:"ul"},"quickshop.transfer.other",(0,a.kt)("br",{parentName:"li"}),"Required to transfer ALL shops of someone to another player."),(0,a.kt)("li",{parentName:"ul"},"quickshop.refill",(0,a.kt)("br",{parentName:"li"}),"Allows the player to refill their shops using a command, essentially making the shop having unlimited items."),(0,a.kt)("li",{parentName:"ul"},"quickshop.empty",(0,a.kt)("br",{parentName:"li"}),"Allows the player to clear the shop's inventory."),(0,a.kt)("li",{parentName:"ul"},"quickshop.clean",(0,a.kt)("br",{parentName:"li"}),"Allows the purging/removal of any Shops that have no items in stock."),(0,a.kt)("li",{parentName:"ul"},"quickshop.bypass.",(0,a.kt)("inlineCode",{parentName:"li"},"<ItemID>"),(0,a.kt)("br",{parentName:"li"}),"Required to sell blacklisted items (E.g. bedrock)."),(0,a.kt)("li",{parentName:"ul"},"quickshop.price.restriction.bypass.",(0,a.kt)("inlineCode",{parentName:"li"},"<RuleName>"),(0,a.kt)("br",{parentName:"li"}),"Required to bypass a specific price limit rule."),(0,a.kt)("li",{parentName:"ul"},"quickshop.alerts",(0,a.kt)("br",{parentName:"li"}),"Required to receive notifications about possible cheating, plugin warnings and updates."),(0,a.kt)("li",{parentName:"ul"},"quickshop.info",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs info")),(0,a.kt)("li",{parentName:"ul"},"quickshop.debug",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs debug")),(0,a.kt)("li",{parentName:"ul"},"quickshop.paste",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs paste")),(0,a.kt)("li",{parentName:"ul"},"quickshop.purge",(0,a.kt)("br",{parentName:"li"}),"Required to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs purge")),(0,a.kt)("li",{parentName:"ul"},"quickshop.create.admin",(0,a.kt)("br",{parentName:"li"}),"Required to bypass any protection-checks while creating a shop using ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs supercreate")),(0,a.kt)("li",{parentName:"ul"},"quickshop.tax",(0,a.kt)("br",{parentName:"li"}),"Permission to bypass the tax fee."),(0,a.kt)("li",{parentName:"ul"},"quickshop.tax.bypassunlimited",(0,a.kt)("br",{parentName:"li"}),"Permission to bypass the tax fee but only in the unlimited shop."),(0,a.kt)("li",{parentName:"ul"},"quickshop.cleanghost",(0,a.kt)("br",{parentName:"li"}),"Permission to remove any broken shop using ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs cleanghost")),(0,a.kt)("li",{parentName:"ul"},"quickshop.export",(0,a.kt)("br",{parentName:"li"}),"Permission to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs export"),(0,a.kt)("br",{parentName:"li"}),"This permission is pointless since the command is console only."),(0,a.kt)("li",{parentName:"ul"},"quickshop.recovery",(0,a.kt)("br",{parentName:"li"}),"Permission to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs recovery"),(0,a.kt)("br",{parentName:"li"}),"This permission is pointless since the command is console only."),(0,a.kt)("li",{parentName:"ul"},"quickshop.removeworld",(0,a.kt)("br",{parentName:"li"}),"Permission to remove all shops in a world using /qs removeworld"),(0,a.kt)("li",{parentName:"ul"},"quickshop.other.changeitem",(0,a.kt)("br",{parentName:"li"}),"Allows the player to change the item of someone's shop."),(0,a.kt)("li",{parentName:"ul"},"quickshop.other.changeamount",(0,a.kt)("br",{parentName:"li"}),"Allows the player to change the bulk amount of someone's shop."),(0,a.kt)("li",{parentName:"ul"},"quickshop.other.shopnaming",(0,a.kt)("br",{parentName:"li"}),"Allows the player to change the name of someone's shop."),(0,a.kt)("li",{parentName:"ul"},"quickshop.bypass.namefee",(0,a.kt)("br",{parentName:"li"}),"Allows the player to bypass the fee of shop naming."),(0,a.kt)("li",{parentName:"ul"},"quickshop.database",(0,a.kt)("br",{parentName:"li"}),"Permission to use ",(0,a.kt)("inlineCode",{parentName:"li"},"/qs database"))))}m.isMDXComponent=!0}}]);