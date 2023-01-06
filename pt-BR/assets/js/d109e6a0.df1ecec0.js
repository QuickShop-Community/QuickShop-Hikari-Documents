"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7640],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>k});var n=a(7294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},u=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),u=d(a),k=l,s=u["".concat(o,".").concat(k)]||u[k]||N[k]||r;return a?n.createElement(s,i(i({ref:e},m),{},{components:a})):n.createElement(s,i({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=u;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:l,i[1]=p;for(var d=2;d<r;d++)i[d]=a[d];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},2244:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>N,frontMatter:()=>r,metadata:()=>p,toc:()=>d});var n=a(7462),l=(a(7294),a(3905));const r={},i="Database Schema",p={unversionedId:"internal/database-schema",id:"internal/database-schema",title:"Database Schema",description:"This chapter will explain the implementation details of QuickShop Hikari's database storage format.",source:"@site/i18n/pt-BR/docusaurus-plugin-content-docs/current/internal/database-schema.md",sourceDirName:"internal",slug:"/internal/database-schema",permalink:"/QuickShop-Hikari-Documents/pt-BR/docs/internal/database-schema",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/pt-BR",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Internal",permalink:"/QuickShop-Hikari-Documents/pt-BR/docs/category/internal"},next:{title:"About",permalink:"/QuickShop-Hikari-Documents/pt-BR/docs/category/about"}},o={},d=[{value:"Tables",id:"tables",level:2},{value:"<code>data</code>",id:"data",level:3},{value:"<code>shops</code>",id:"shops",level:3},{value:"<code>shop_map</code>",id:"shop_map",level:3},{value:"<code>messages</code>",id:"messages",level:3},{value:"<code>metadata</code>",id:"metadata",level:3},{value:"<code>player</code>",id:"player",level:3},{value:"<code>external_cache</code>",id:"external_cache",level:3},{value:"<code>log_purchase</code>",id:"log_purchase",level:3},{value:"<code>log_transaction</code>",id:"log_transaction",level:3},{value:"<code>log_changes</code>",id:"log_changes",level:3},{value:"<code>log_others</code>",id:"log_others",level:3}],m={toc:d};function N(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"database-schema"},"Database Schema"),(0,l.kt)("p",null,"This chapter will explain the implementation details of QuickShop Hikari's database storage format."),(0,l.kt)("h2",{id:"tables"},"Tables"),(0,l.kt)("p",null,"This section explains the database tables created by QuickShop-Hikari.",(0,l.kt)("br",{parentName:"p"}),"\n","Unless otherwise specified, the initial ",(0,l.kt)("inlineCode",{parentName:"p"},"qs_")," in table name is the table prefix.",(0,l.kt)("br",{parentName:"p"}),"\n","For the latest code definition for each table, see: ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/Ghost-chu/QuickShop-Hikari/blob/hikari/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/database/DataTables.java"},"DataTables.java")),(0,l.kt)("h3",{id:"data"},(0,l.kt)("inlineCode",{parentName:"h3"},"data")),(0,l.kt)("p",null,"This data table stores all the existing store data on this server or the store data that has been deleted but is still referenced in a specific form, and does not contain coordinate information.",(0,l.kt)("br",{parentName:"p"}),"\n","No matter what, a data record should not be modified after it is created, until it got deleted.",(0,l.kt)("br",{parentName:"p"}),"\n","Any new changes to the shop should create a new copy, apply the changes to the copy, and insert it as a new record."),(0,l.kt)("p",null,"Basiclly, Copy-on-write."),(0,l.kt)("p",null,"A data record only be deleted from the database when no any table references their ",(0,l.kt)("inlineCode",{parentName:"p"},"data_id"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,l.kt)("th",{parentName:"tr",align:null},"DataType"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED Primary Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Auto Increment"),(0,l.kt)("td",{parentName:"tr",align:null},"Record ID (aka. ",(0,l.kt)("inlineCode",{parentName:"td"},"data_id"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"owner"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(36) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The shop owner unique id (aka. UUID)")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"item"),(0,l.kt)("td",{parentName:"tr",align:null},"TEXT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"https://github.com/Ghost-chu/QuickShop-Hikari/blob/dc8a1b3da68f1c4367328b4647be77f8d4aa9468/quickshop-bukkit/src/main/java/com/ghostchu/quickshop/util/Util.java#L1039"},"YAML serialized")," ",(0,l.kt)("a",{parentName:"td",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/inventory/ItemStack.html"},"ItemStack")," for this shop data entry")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"INT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/Ghost-chu/QuickShop-Hikari/blob/dc8a1b3da68f1c4367328b4647be77f8d4aa9468/quickshop-api/src/main/java/com/ghostchu/quickshop/api/shop/ShopType.java#L12"},"shoptype id"),", Indicates the store type")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"currency"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(64)"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"The currency name for this shop data entry. NULL if using Vault or not supported")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"price"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(32,2) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The price per stack for this shop data entry")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"unlimited"),(0,l.kt)("td",{parentName:"tr",align:null},"BIT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates whether this store is an unlimited store, 0=Limited, 1=Unlimited")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"hologram"),(0,l.kt)("td",{parentName:"tr",align:null},"BIT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the suspension status of this store's display item, 0=Follow global settings, 1=Disabled")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tax_account"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(36)"),(0,l.kt)("td",{parentName:"tr",align:null},"NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"The uuid for tax account, If it is not NULL, tax will be paid to the specified account")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"permissions"),(0,l.kt)("td",{parentName:"tr",align:null},"MEDIUMTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty Json"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates the override status of the store player permission group, serilized to JSON string")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"extra"),(0,l.kt)("td",{parentName:"tr",align:null},"LONGTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"Empty Yaml"),(0,l.kt)("td",{parentName:"tr",align:null},"Used to store experimental settings of QuickShop Hikari or persistent data of other plugins")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inv_wrapper"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(255) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique identifier for InventoryWrapper for this shop data entry")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"inv_symbol_link"),(0,l.kt)("td",{parentName:"tr",align:null},"TEXT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Unique Inventory symbol used to pass to InventoryWrapper, for locating inventory")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"create_time"),(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Insert Time"),(0,l.kt)("td",{parentName:"tr",align:null},"Indicates when this store was created")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"benefit"),(0,l.kt)("td",{parentName:"tr",align:null},"MEDIUMTEXT"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Setup of Benefit Allocation after JSON Serialization")))),(0,l.kt)("h3",{id:"shops"},(0,l.kt)("inlineCode",{parentName:"h3"},"shops")),(0,l.kt)("p",null,"This table is used to store shop to shop data mapping, so that shop ID will not change when shop data changes.",(0,l.kt)("br",{parentName:"p"}),"\n","Multiple ",(0,l.kt)("inlineCode",{parentName:"p"},"shop_id")," can correspond to the same ",(0,l.kt)("inlineCode",{parentName:"p"},"data_id"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,l.kt)("th",{parentName:"tr",align:null},"DataType"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED Primary Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Auto Increment"),(0,l.kt)("td",{parentName:"tr",align:null},"Record ID (aka. ",(0,l.kt)("inlineCode",{parentName:"td"},"shop_id"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data_id"),(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Data Record ID (aka. ",(0,l.kt)("inlineCode",{parentName:"td"},"data_id"),")")))),(0,l.kt)("h3",{id:"shop_map"},(0,l.kt)("inlineCode",{parentName:"h3"},"shop_map")),(0,l.kt)("p",null,"This table is used to store shop_id to shop location in Bukkit mapping. At the same time, this is also the key record of loading the store into the game world."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,l.kt)("th",{parentName:"tr",align:null},"DataType"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"world"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(32) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The world name in Bukkit")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"x"),(0,l.kt)("td",{parentName:"tr",align:null},"INT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The block X position for this shop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"y"),(0,l.kt)("td",{parentName:"tr",align:null},"INT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The block Y position for this shop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"z"),(0,l.kt)("td",{parentName:"tr",align:null},"INT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The block Z position for this shop")))),(0,l.kt)("h3",{id:"messages"},(0,l.kt)("inlineCode",{parentName:"h3"},"messages")),(0,l.kt)("p",null,"This table is used to store offline messages."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,l.kt)("th",{parentName:"tr",align:null},"DataType"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED Primary Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Auto Increment"),(0,l.kt)("td",{parentName:"tr",align:null},"Record ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"receiver"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(36) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The unique id for receiver")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Insert Time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time that this message created")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"content"),(0,l.kt)("td",{parentName:"tr",align:null},"MEDIUMTEXT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Serialized ",(0,l.kt)("a",{parentName:"td",href:"https://docs.adventure.kyori.net/text.html"},"Adventure Component"))))),(0,l.kt)("h3",{id:"metadata"},(0,l.kt)("inlineCode",{parentName:"h3"},"metadata")),(0,l.kt)("p",null,"This table is used to store the metadata, e.g database schema version."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,l.kt)("th",{parentName:"tr",align:null},"DataType"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"key"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(255) NOT NULL Primary Key"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The key")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"value"),(0,l.kt)("td",{parentName:"tr",align:null},"LONGTEXT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The value")))),(0,l.kt)("h3",{id:"player"},(0,l.kt)("inlineCode",{parentName:"h3"},"player")),(0,l.kt)("p",null,"This table is used to store the player data, e.g locales."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,l.kt)("th",{parentName:"tr",align:null},"DataType"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uuid"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(36) NOT NULL Primary Key"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The player unique id")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"locale"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(255) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The player's client locale")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"cachedName"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(255) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The player's username last known")))),(0,l.kt)("h3",{id:"external_cache"},(0,l.kt)("inlineCode",{parentName:"h3"},"external_cache")),(0,l.kt)("p",null,"This table is stored cached shop space/stock for WebUI or what else other pure database apps."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,l.kt)("th",{parentName:"tr",align:null},"DataType"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shop"),(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED NOT NULL Primary Key"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The id of shop (aka. ",(0,l.kt)("inlineCode",{parentName:"td"},"shop_id"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stock"),(0,l.kt)("td",{parentName:"tr",align:null},"INT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The stock for this shop")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"space"),(0,l.kt)("td",{parentName:"tr",align:null},"INT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The space for this shop")))),(0,l.kt)("h3",{id:"log_purchase"},(0,l.kt)("inlineCode",{parentName:"h3"},"log_purchase")),(0,l.kt)("p",null,"This table records all history purchases activities on this server."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Column Name"),(0,l.kt)("th",{parentName:"tr",align:null},"DataType"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"id"),(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED Primary Key"),(0,l.kt)("td",{parentName:"tr",align:null},"Auto Increment"),(0,l.kt)("td",{parentName:"tr",align:null},"Record ID")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"time"),(0,l.kt)("td",{parentName:"tr",align:null},"DATETIME NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"Dataset Insert Time"),(0,l.kt)("td",{parentName:"tr",align:null},"The time that this purchase created")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shop"),(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The shop id (aka. ",(0,l.kt)("inlineCode",{parentName:"td"},"shop_id"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"data"),(0,l.kt)("td",{parentName:"tr",align:null},"INT UNSIGNED NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The data id (aka. ",(0,l.kt)("inlineCode",{parentName:"td"},"data_id"),")")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"buyer"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(36) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The purchaser unique id, In fact, it is more accurate to call it a purchaser, not only selling but also buying")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"type"),(0,l.kt)("td",{parentName:"tr",align:null},"VARCHAR(32) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"The ",(0,l.kt)("a",{parentName:"td",href:"https://github.com/Ghost-chu/QuickShop-Hikari/blob/dc8a1b3da68f1c4367328b4647be77f8d4aa9468/quickshop-api/src/main/java/com/ghostchu/quickshop/api/shop/ShopType.java#L12"},"ShopType")," enum name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"amount"),(0,l.kt)("td",{parentName:"tr",align:null},"INT NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Purchased stack amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"money"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(32,2) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"N/A"),(0,l.kt)("td",{parentName:"tr",align:null},"Total balance in this purchase")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"tax_amount"),(0,l.kt)("td",{parentName:"tr",align:null},"DECIMAL(32,2) NOT NULL"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"The tax in this purchase")))),(0,l.kt)("h3",{id:"log_transaction"},(0,l.kt)("inlineCode",{parentName:"h3"},"log_transaction")),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"log_changes"},(0,l.kt)("inlineCode",{parentName:"h3"},"log_changes")),(0,l.kt)("p",null,"TODO"),(0,l.kt)("h3",{id:"log_others"},(0,l.kt)("inlineCode",{parentName:"h3"},"log_others")),(0,l.kt)("p",null,"TODO"))}N.isMDXComponent=!0}}]);