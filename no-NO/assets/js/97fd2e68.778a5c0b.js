"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7381],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var i=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=i.createContext({}),s=function(e){var t=i.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return i.createElement(a.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=s(n),k=o,d=h["".concat(a,".").concat(k)]||h[k]||u[k]||r;return n?i.createElement(d,l(l({ref:t},p),{},{components:n})):i.createElement(d,l({ref:t},p))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=h;var c={};for(var a in t)hasOwnProperty.call(t,a)&&(c[a]=t[a]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var s=2;s<r;s++)l[s]=n[s];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4857:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>s});var i=n(7462),o=(n(7294),n(3905));const r={},l="Protection Checker",c={unversionedId:"modules/shops/protection-checker",id:"modules/shops/protection-checker",title:"Protection Checker",description:"QuickShop use a util called Protection Checker to prevent players create shops at their had no build access positions (e.g Spawn).",source:"@site/i18n/no-NO/docusaurus-plugin-content-docs/current/modules/shops/protection-checker.md",sourceDirName:"modules/shops",slug:"/modules/shops/protection-checker",permalink:"/QuickShop-Hikari-Documents/no-NO/docs/modules/shops/protection-checker",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/no-NO",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Price Limiter",permalink:"/QuickShop-Hikari-Documents/no-NO/docs/modules/shops/price-system"},next:{title:"Shop Protection",permalink:"/QuickShop-Hikari-Documents/no-NO/docs/modules/shops/protection"}},a={},s=[{value:"How does it work?",id:"how-does-it-work",level:2},{value:"Side Effects",id:"side-effects",level:2},{value:"Resolve the plugin conflicting",id:"resolve-the-plugin-conflicting",level:2},{value:"Disable Protection Checker",id:"disable-protection-checker",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,i.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"protection-checker"},"Protection Checker"),(0,o.kt)("p",null,"QuickShop use a util called ",(0,o.kt)("inlineCode",{parentName:"p"},"Protection Checker")," to prevent players create shops at their had no build access positions (e.g Spawn)."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work?"),(0,o.kt)("p",null,"When player trying to create a shop at a location, QuickShop will create a new ",(0,o.kt)("em",{parentName:"p"},"fake")," ",(0,o.kt)("inlineCode",{parentName:"p"},"BlockBreakEvent")," to simulate player break blocks.",(0,o.kt)("br",{parentName:"p"}),"\n","If it is canceled by any plugin, QuickShop will refuse the shop creation."),(0,o.kt)("h2",{id:"side-effects"},"Side Effects"),(0,o.kt)("p",null,"Some plugins that imcompatitable with QuickShop will trigger the gadget in Player's hand or keeping block the shop creation."),(0,o.kt)("h2",{id:"resolve-the-plugin-conflicting"},"Resolve the plugin conflicting"),(0,o.kt)("p",null,"When a possible conflict detected by QuickShop and this operation triggered by Server administrator, the administrator will receive a message like the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"detected",src:n(9396).Z,width:"1968",height:"723"})),(0,o.kt)("p",null,"You can retrieve those infomations from the tips:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"PluginName (",(0,o.kt)("inlineCode",{parentName:"li"},"BreakTest"),")"),(0,o.kt)("li",{parentName:"ul"},"Plugin Listener Class Name (",(0,o.kt)("inlineCode",{parentName:"li"},"com.ghsotchu.test.breaktest.TestListener"),")")),(0,o.kt)("p",null,"To resolve the conflicting, you need configure the ignore list:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #The listener list to skip when protection-checking.\n  #Examples:\n  #- xx.xxx.xxx.xxxxx.BlockBreakListenerClass\n  #  This will skip calling the xx.xxx.xxx.xxxxx.BlockBreakListenerClass listener.\n  #\n  #- xx.xx.xxx.xxxxx\n  #  This will skip calling all listener that class name start with xx.xx.xxx.xxxxx.\n  #\n  #- @PluginName\n  #  This will skip calling all listeners registered by this plugin.\n  #\n  #- REGEX\n  #  It also supports regex.\n  protection-checking-listener-blacklist:\n    - ignored_listener\n")),(0,o.kt)("p",null,"You can use plugin name to block whole plugin to avoid that plugin receive our simulation events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'shop:\n  protection-checking-listener-blacklist:\n    - "@BreakTest"\n')),(0,o.kt)("p",null,"Or only block a listener to prevent target listener catch our simulation events:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'shop:\n  protection-checking-listener-blacklist:\n    - "com.ghsotchu.test.breaktest.TestListener"\n')),(0,o.kt)("h2",{id:"disable-protection-checker"},"Disable Protection Checker"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"We're extremely NOT-RECOMMEND you disable protection checker, bad players can use QuickShop to lock other player's chests even in Residence, Land, Island, WorldGuard Region, Town, Plot even your SpawnPoint!")),(0,o.kt)("p",null,"To disable protection checker, you can simple turn off the option in config.yml:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #Protection check\n  #This will send a FAKE BlockBreakEvent to check if you can break a block.\n  #This may conflict with some protection plugins!\n  #Integration checking will be checked after this, so disable it when it's conflicting with integration\n  #If you don't want this, then please disable it and use the integration below instead.\n  protection-checking: true\n")),(0,o.kt)("p",null,"Or only disable in specific worlds:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #The list of worlds in which protection checking is disabled.\n  protection-checking-blacklist:\n    - disabled_world\n")))}u.isMDXComponent=!0},9396:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/permission-checker-conflict-demo-4c6150e96dde785521542225abd74e7c.png"}}]);