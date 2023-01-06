"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[8239],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,m=d["".concat(s,".").concat(h)]||d[h]||u[h]||r;return n?o.createElement(m,l(l({ref:t},c),{},{components:n})):o.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var p=2;p<r;p++)l[p]=n[p];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1656:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={},l="Towny",i={unversionedId:"compat-modules/towny",id:"compat-modules/towny",title:"Towny",description:"Warning! This is a SUPER COMPLEX module, read the guidelines carefully!",source:"@site/i18n/ar-SA/docusaurus-plugin-content-docs/current/compat-modules/towny.md",sourceDirName:"compat-modules",slug:"/compat-modules/towny",permalink:"/QuickShop-Hikari-Documents/ar-SA/docs/compat-modules/towny",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ar-SA",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SuperiorSkyBlock",permalink:"/QuickShop-Hikari-Documents/ar-SA/docs/compat-modules/superiorskyblock"},next:{title:"Velocity",permalink:"/QuickShop-Hikari-Documents/ar-SA/docs/compat-modules/velocity"}},s={},p=[{value:"Commands",id:"commands",level:2},{value:"/qs nation",id:"qs-nation",level:3},{value:"/qs town",id:"qs-town",level:3},{value:"Nation shop",id:"nation-shop",level:2},{value:"Town shop",id:"town-shop",level:2},{value:"Bank System",id:"bank-system",level:2},{value:"Permission Override",id:"permission-override",level:2},{value:"Name Override",id:"name-override",level:2},{value:"Taxes to town",id:"taxes-to-town",level:2},{value:"Delete shops bridge",id:"delete-shops-bridge",level:2},{value:"Create/Purchase control",id:"createpurchase-control",level:2},{value:"Essentials Workaround",id:"essentials-workaround",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"towny"},"Towny"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Warning! This is a SUPER COMPLEX module, read the guidelines carefully!")),(0,a.kt)("h2",{id:"commands"},"Commands"),(0,a.kt)("h3",{id:"qs-nation"},"/qs nation"),(0,a.kt)("p",null,"Nation sub-command allow you switch a quickshop between regular shop and nation shop."),(0,a.kt)("h3",{id:"qs-town"},"/qs town"),(0,a.kt)("p",null,"Town sub-command allow you switch a quickshop between regular shop and town shop."),(0,a.kt)("h2",{id:"nation-shop"},"Nation shop"),(0,a.kt)("p",null,"For a nation shop, the shop owner will changed to nation fake player created by Towny, and use Nation's Tax account for receiving the shop taxes."),(0,a.kt)("p",null,"All purchases will deposit or withdraw money from nation Towny account.",(0,a.kt)("br",{parentName:"p"}),"\n","At the same time, if the bank mode is enabled, the price will be forced to adjust automatically according to the price of the item in the profile."),(0,a.kt)("p",null,"If Plot type restriction is enabled, only a specific Plot type can create a Nation Shop."),(0,a.kt)("h2",{id:"town-shop"},"Town shop"),(0,a.kt)("p",null,"For a town shop, the shop owner will changed to town fake player created by Towny, and use Town's Tax account for receiving the shop taxes."),(0,a.kt)("p",null,"All purchases will deposit or withdraw money from town Towny account.",(0,a.kt)("br",{parentName:"p"}),"\n","At the same time, if the bank mode is enabled, the price will be forced to adjust automatically according to the price of the item in the profile."),(0,a.kt)("p",null,"If Plot type restriction is enabled, only a specific Plot type can create a Town Shop."),(0,a.kt)("h2",{id:"bank-system"},"Bank System"),(0,a.kt)("p",null,"The Bank System allows you to complete your Town/Nation economic flow through QuickShop-Hikari."),(0,a.kt)("p",null,"You can set an additional percentage to ",(0,a.kt)("inlineCode",{parentName:"p"},"make money")," during the transaction."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#The shops under bank mode will only accept items from player but money goes to the town bank account.\n#And all\nbank-mode:\n  #Only allow shop transform to bank mode when shop at bank plot\n  bank-plot-only: true\n  #Enforce the bank mode shops to use price that specified in the config.\n  #The items not included will deny to be turned a bank mode shop\n  enable: true\n  #Extra percent of money they can make from the bank mode shop to bank account so bank can make money.\n  extra-percent: 0.10 # 0.10 = 10%\n  #Item list\n  #Only allow the bank mode shops created if they trade those items.\n  #To add a price for an item to lock the item price (if force-prices enabled)\n  #Set -1 for price will disable price lock for this type of item even force-prices turned on.\n  # MATERIAL: PRICE\n  item-list:\n    COPPER_ORE: 0.01\n    IRON_ORE: 0.05\n    COAL_ORE: 0.10\n    LAPIS_ORE: 0.25\n    REDSTONE_ORE: 1.00\n    GOLD_ORE: 5.00\n    DIAMOND_ORE: 20.00\n    EMERALD_ORE: 500.00\n    DEEPSLATE_COPPER_ORE: 0.01\n    DEEPSLATE_IRON_ORE: 0.05\n    DEEPSLATE_COAL_ORE: 0.10\n    DEEPSLATE_LAPIS_ORE: 0.25\n    DEEPSLATE_REDSTONE_ORE: 1.00\n    DEEPSLATE_GOLD_ORE: 5.00\n    DEEPSLATE_DIAMOND_ORE: 20.00\n    DEEPSLATE_EMERALD_ORE: 500.00\n    # NETHER_QUARTZ_ORE: 0.50\n    # NETHER_GOLD_ORE: 1.25\n    ANCIENT_DEBRIS: 250.00\n    # HEART_OF_THE_SEA: 2500.00\n    # ENCHANTED_GOLDEN_APPLE: 25000.00\n")),(0,a.kt)("h2",{id:"permission-override"},"Permission Override"),(0,a.kt)("p",null,"By adjust configuration, you're allow mayor or king automaticlly grant administrator permission on all shops in their management range."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Should allow Mayor grant the shop administrator permission on they town.\nallow-mayor-permission-override: true\n\n#Should allow King grant the shop administrator permission on they nation.\nallow-king-permission-override: true\n")),(0,a.kt)("h2",{id:"name-override"},"Name Override"),(0,a.kt)("p",null,"We provide a way to use Nation Name or Town Name instead of the owner's name on the information sign of Nation Shop or Town Shop."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Should allow override the owner name from town/nation vault name to town/nation display name.\nallow-owner-name-override: true\n")),(0,a.kt)("h2",{id:"taxes-to-town"},"Taxes to town"),(0,a.kt)("p",null,"This mechanism allows you to set the QuickShop Hikari tax system to give priority to paying taxes to the Towny system account of Town or Nation, rather than the server tax account."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Should we send the taxes to the town/nation vault account if shop inside a town or nation.\n#NOTE: If shop belongs to a Town or Nation, taxes will still send to Server taxes account.\ntaxes-to-town: true\n")),(0,a.kt)("h2",{id:"delete-shops-bridge"},"Delete shops bridge"),(0,a.kt)("p",null,"Same as other compatibility modules, Towny module will also allow you delete shops when resident leave your town, plot cleared and plot unclaimed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Should we delete player's shops in town when they leaved the that town\ndelete-shop-on-resident-leave: false\n\n#Should we remove the shops in plot when plot cleared\ndelete-shop-on-plot-clear: true\n\n#Should we remove the shops in plot when plot unclaimed\ndelete-shop-on-plot-unclaimed: true\n")),(0,a.kt)("h2",{id:"createpurchase-control"},"Create/Purchase control"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Which checks does a player need to pass to create a shop?\n#You can use multiple checks at the same time.\n#Priority: UP > DOWN\n#\n#Available fields:\n#OWN = The player must own the plot to create a shop.\n#MODIFY = The player must have the ability to build on the target plot to create a shop.\n#SHOPTYPE = The player must create the shop on a SHOP type plot.\ncreate:\n  - SHOPTYPE\n  - MODIFY\n\n#Which checks does a player need to pass to trade with a shop?\n#You can use multiple checks at the same time.\n#Priority: UP > DOWN\n#\n#Available fields:\n#OWN = The player must own the plot to trade with a shop.\n#MODIFY = The player must have the ability to build on the target plot to trade with a shop.\n#SHOPTYPE = The player must trade with the shop on a SHOP type plot.\ntrade: [ ]\n")),(0,a.kt)("h2",{id:"essentials-workaround"},"Essentials Workaround"),(0,a.kt)("p",null,"Because Essentials use username to lookup user account if API calls is username based."),(0,a.kt)("p",null,"But it lead to a problem that QuickShop-Hikari always use UUID, and generate offline UUID by use Bukkit API with Standard Offline UUID Generate algorithm."),(0,a.kt)("p",null,"This causes Towny and QuickShop Hikari to use accounts with the same name but different UUIDs, and leads to a series of problems."),(0,a.kt)("p",null,"You can adjust the option in configuration to enable workaround."),(0,a.kt)("p",null,"NOTE: It will force turned on if detected EssentialsX installed on your server.",(0,a.kt)("br",{parentName:"p"}),"\n","At present, we do not provide a method for disable it."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Workaround for username issue\nworkaround-for-account-name: false\n")))}u.isMDXComponent=!0}}]);