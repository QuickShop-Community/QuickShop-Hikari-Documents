"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7180],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=i,h=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return n?r.createElement(h,o(o({ref:t},c),{},{components:n})):r.createElement(h,o({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},812:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=n(7462),i=(n(7294),n(3905));const a={},o="Price Limiter",l={unversionedId:"modules/shops/price-system",id:"modules/shops/price-system",title:"Price Limiter",description:"QuickShop provide a price limiter allow you specific the item's min or max price on your server.",source:"@site/i18n/vi-VN/docusaurus-plugin-content-docs/current/modules/shops/price-system.md",sourceDirName:"modules/shops",slug:"/modules/shops/price-system",permalink:"/QuickShop-Hikari-Documents/vi-VN/docs/modules/shops/price-system",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/vi-VN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Per shop permission management",permalink:"/QuickShop-Hikari-Documents/vi-VN/docs/modules/shops/per-shop-perms-management"},next:{title:"Protection Checker",permalink:"/QuickShop-Hikari-Documents/vi-VN/docs/modules/shops/protection-checker"}},s={},p=[{value:"Enable the limiter",id:"enable-the-limiter",level:2},{value:"Define unspecified item price limit",id:"define-unspecified-item-price-limit",level:2},{value:"Create a rule",id:"create-a-rule",level:2},{value:"Permission",id:"permission",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"price-limiter"},"Price Limiter"),(0,i.kt)("p",null,"QuickShop provide a price limiter allow you specific the item's min or max price on your server."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"price-restricted",src:n(5406).Z,width:"1997",height:"831"})),(0,i.kt)("p",null,"To edit the limit rules, you need to open ",(0,i.kt)("inlineCode",{parentName:"p"},"price-restriction.yml")," file."),(0,i.kt)("h2",{id:"enable-the-limiter"},"Enable the limiter"),(0,i.kt)("p",null,"Limiter is disabled by default, you must turn it on before you edit the rules to make it works."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"enable: true\n")),(0,i.kt)("h2",{id:"define-unspecified-item-price-limit"},"Define unspecified item price limit"),(0,i.kt)("p",null,"You can limit all items maximum or minimum price that not match any rules."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"undefined: # This option not control by enable option, always enabled\n  min: 0.01 # Can be zero if you want player create a free shop\n  max: -1 # Actually this can be up to 1.7976931348623157E308\n")),(0,i.kt)("h2",{id:"create-a-rule"},"Create a rule"),(0,i.kt)("p",null,"All rules are under the ",(0,i.kt)("inlineCode",{parentName:"p"},"rules")," section in configuration."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"rules: # Rules set\n  example1: # Rules name, used for identifier and permission node (quickshop.price.restriction.bypass.<name>)\n    items: # Items in the rule (https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html), or the reference the item lookup table by adding @ before the name\n      - STONE_SWORD\n      - STONE_PICKAXE\n      - STONE_AXE\n      - STONE_SHOVEL\n      - STONE_HOE\n    currency: # Currency name, If your plugin doesn't support multi-currency (Vault API), this section won't be used\n      - '*'\n    min: 1.0 # Min price (double)\n    max: 50.0 # Max price (double)\n  example2:\n    items:\n      - GOLDEN_SWORD\n      - GOLDEN_PICKAXE\n      - GOLDEN_AXE\n      - GOLDEN_SHOVEL\n      - GOLDEN_HOE\n    currency:\n      - '*'\n    min: 10.0\n    max: 100.0\n  example3:\n    items:\n      - DIAMOND_SWORD\n      - DIAMOND_PICKAXE\n      - DIAMOND_AXE\n      - DIAMOND_SHOVEL\n      - DIAMOND_HOE\n    currency:\n      - '*'\n    min: 10.0\n    max: 100.0\n")),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"example1")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"example2")," are rule name, you can write any random name that you can read."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"items")," is a list that contains the items which you want limit to.",(0,i.kt)("br",{parentName:"p"}),"\n","The item name can be ",(0,i.kt)("a",{parentName:"p",href:"https://hub.spigotmc.org/javadocs/spigot/org/bukkit/Material.html"},"Bukkit Material Name")," or ",(0,i.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/vi-VN/docs/modules/item-ref"},"Item Reference")," tag."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"currency")," only works under ",(0,i.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/vi-VN/docs/modules/multi-currency"},"Multi Currency")," mode."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"min")," means the item minimal price.",(0,i.kt)("br",{parentName:"p"}),"\n","The ",(0,i.kt)("inlineCode",{parentName:"p"},"max")," means the item maxmium price."),(0,i.kt)("p",null,"All items in one rule set to share the same price limit, to give different price limit, you must create another rule."),(0,i.kt)("h2",{id:"permission"},"Permission"),(0,i.kt)("p",null,"The players who has ",(0,i.kt)("inlineCode",{parentName:"p"},"quickshop.price.restriction.bypass.<rule-name>")," can ignore that rule's limitation."))}m.isMDXComponent=!0},5406:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/price-restricted-ceaf5b15ae43c5e6ede7396c0b918815.png"}}]);