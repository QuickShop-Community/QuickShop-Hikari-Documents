"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[58],{3905:(e,s,t)=>{t.d(s,{Zo:()=>m,kt:()=>c});var n=t(7294);function i(e,s,t){return s in e?Object.defineProperty(e,s,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[s]=t,e}function r(e,s){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);s&&(n=n.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var s=1;s<arguments.length;s++){var t=null!=arguments[s]?arguments[s]:{};s%2?r(Object(t),!0).forEach((function(s){i(e,s,t[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(t,s))}))}return e}function o(e,s){if(null==e)return{};var t,n,i=function(e,s){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||(i[t]=e[t]);return i}(e,s);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],s.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var a=n.createContext({}),l=function(e){var s=n.useContext(a),t=s;return e&&(t="function"==typeof e?e(s):p(p({},s),e)),t},m=function(e){var s=l(e.components);return n.createElement(a.Provider,{value:s},e.children)},h={inlineCode:"code",wrapper:function(e){var s=e.children;return n.createElement(n.Fragment,{},s)}},u=n.forwardRef((function(e,s){var t=e.components,i=e.mdxType,r=e.originalType,a=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=l(t),c=i,k=u["".concat(a,".").concat(c)]||u[c]||h[c]||r;return t?n.createElement(k,p(p({ref:s},m),{},{components:t})):n.createElement(k,p({ref:s},m))}));function c(e,s){var t=arguments,i=s&&s.mdxType;if("string"==typeof e||i){var r=t.length,p=new Array(r);p[0]=u;var o={};for(var a in s)hasOwnProperty.call(s,a)&&(o[a]=s[a]);o.originalType=e,o.mdxType="string"==typeof e?e:i,p[1]=o;for(var l=2;l<r;l++)p[l]=t[l];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},8490:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>a,contentTitle:()=>p,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=t(7462),i=(t(7294),t(3905));const r={},p="Per shop permission management",o={unversionedId:"modules/shops/per-shop-perms-management",id:"modules/shops/per-shop-perms-management",title:"Per shop permission management",description:"QuickShop-Hikari provide a system to allow control every single shop's permissions.",source:"@site/i18n/ro-RO/docusaurus-plugin-content-docs/current/modules/shops/per-shop-perms-management.md",sourceDirName:"modules/shops",slug:"/modules/shops/per-shop-perms-management",permalink:"/QuickShop-Hikari-Documents/ro-RO/docs/modules/shops/per-shop-perms-management",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ro-RO",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Display Item",permalink:"/QuickShop-Hikari-Documents/ro-RO/docs/modules/shops/display-system"},next:{title:"Price Limiter",permalink:"/QuickShop-Hikari-Documents/ro-RO/docs/modules/shops/price-system"}},a={},l=[{value:"Check the current shop settings",id:"check-the-current-shop-settings",level:2},{value:"Default Shop Permission Groups",id:"default-shop-permission-groups",level:2},{value:"Default Shop Permission Permissions",id:"default-shop-permission-permissions",level:2},{value:"Configure the group&#39;s permissions",id:"configure-the-groups-permissions",level:2},{value:"Assign players to specific permission group",id:"assign-players-to-specific-permission-group",level:2},{value:"Usage: Ban a player from your shop",id:"usage-ban-a-player-from-your-shop",level:2}],m={toc:l};function h(e){let{components:s,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:s,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"per-shop-permission-management"},"Per shop permission management"),(0,i.kt)("p",null,"QuickShop-Hikari provide a system to allow control every single shop's permissions."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"THIS IS NOT PLUGIN PERMISSION NODES, IT IS SHOP LEVEL!"),(0,i.kt)("br",{parentName:"p"}),"\n","To check the plugin's permission nodes, please click ",(0,i.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/ro-RO/docs/setup/permissions"},"here"),"."),(0,i.kt)("h2",{id:"check-the-current-shop-settings"},"Check the current shop settings"),(0,i.kt)("p",null,"Looking at a quickshop, execute command ",(0,i.kt)("inlineCode",{parentName:"p"},"/qs permission group list")," will listing all users you configured on this shop."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"showcase1",src:t(5379).Z,width:"667",height:"76"})),(0,i.kt)("h2",{id:"default-shop-permission-groups"},"Default Shop Permission Groups"),(0,i.kt)("p",null,"QuickShop-Hikari has built-in groups below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.blocked - All players in this shop will cannot purchase this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hiakri.everyone - All undefined players will have this group's permissions."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.staff - Use command ",(0,i.kt)("inlineCode",{parentName:"li"},"/qs staff")," will add that player into this group."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.administrator - Exactly same permission with shop owner, can do almost everything on this shop.")),(0,i.kt)("h2",{id:"default-shop-permission-permissions"},"Default Shop Permission Permissions"),(0,i.kt)("p",null,"QuickShop-Hikari has built-in permissions in the list below:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.purchase",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can purchase with this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hiakri.show_information",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can open shop purchase info panel."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.preview_shop",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission will have a ",(0,i.kt)("inlineCode",{parentName:"li"},"[Preview Item]")," button on shop purchase info panel and allow to open this shop's preview GUI."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.search",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission will make this shop visible on that player's ",(0,i.kt)("inlineCode",{parentName:"li"},"/qs find")," results."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.delete",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can delete this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.alert.receive",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission will receive the shop alerts."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.access_inventory",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can open the container inventory."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.ownership_transfer",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can transfer this shop to another one."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.management_permission",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can management the per-shop permissions on this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.toggle_display",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can use command ",(0,i.kt)("inlineCode",{parentName:"li"},"/qs toggledisplay")," to toggle per-shop display item."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.set_shoptype",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can use command ",(0,i.kt)("inlineCode",{parentName:"li"},"/qs buy")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"/qs sell")," to switch shop type between selling and buying."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.set_price",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can modify the price on this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.set_item",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can modify the shop item on this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.set_stack_amount",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can change the amount of shop item stacking on this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.set_currency",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can change the shop currency on this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.set_name",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can change the shop name on this shop."),(0,i.kt)("li",{parentName:"ul"},"quickshop-hikari.set_benefit",(0,i.kt)("br",{parentName:"li"}),"Any players who own this permission can modify the shop benefits on this shop.")),(0,i.kt)("h2",{id:"configure-the-groups-permissions"},"Configure the group's permissions"),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Incorrect group permissions configure will cause plugin stop working.")),(0,i.kt)("p",null,"Open ",(0,i.kt)("inlineCode",{parentName:"p"},"group.yml")," and you will be able to edit permissions in every single group."),(0,i.kt)("p",null,"You cannot delete ",(0,i.kt)("inlineCode",{parentName:"p"},"quickshop-hikari.everyone"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"quickshop-hikari.staff")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"quickshop-hikari.administrator")," groups. It may cause plugin working incorrectly."),(0,i.kt)("h2",{id:"assign-players-to-specific-permission-group"},"Assign players to specific permission group"),(0,i.kt)("p",null,"Looking at a quickshop and execute command ",(0,i.kt)("inlineCode",{parentName:"p"},"/qs permission user set <player> <group>"),", then a player will assign to new group.",(0,i.kt)("br",{parentName:"p"}),"\n","If this player already in another group, it will be removed from old group."),(0,i.kt)("p",null,"You can also use ",(0,i.kt)("inlineCode",{parentName:"p"},"/qs permission user unset <player>")," to send player back to default group."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"showcase2",src:t(2779).Z,width:"654",height:"146"})),(0,i.kt)("h2",{id:"usage-ban-a-player-from-your-shop"},"Usage: Ban a player from your shop"),(0,i.kt)("p",null,"You can assign a player to group ",(0,i.kt)("inlineCode",{parentName:"p"},"quickshop-hikari.blocked")," to block that player interact with your shop."))}h.isMDXComponent=!0},5379:(e,s,t)=>{t.d(s,{Z:()=>n});const n="data:image/png;base64,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"},2779:(e,s,t)=>{t.d(s,{Z:()=>n});const n=t.p+"assets/images/per-shop-permission-management-group-list-demo2-eb3f793b34cc485ebd7b3040cca718e1.png"}}]);