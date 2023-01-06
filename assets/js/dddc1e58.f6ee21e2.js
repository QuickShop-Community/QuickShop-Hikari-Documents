"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[8311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=o,d=h["".concat(s,".").concat(m)]||h[m]||c[m]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var p=2;p<i;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},866:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const i={},a="Installation",l={unversionedId:"setup/install",id:"setup/install",title:"Installation",description:"This page will walk you through the process of installing QuickShop-Hikari on your Spigot server.",source:"@site/i18n/en-US/docusaurus-plugin-content-docs/current/setup/install.md",sourceDirName:"setup",slug:"/setup/install",permalink:"/QuickShop-Hikari-Documents/docs/setup/install",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/edit/master/docs/docs/setup/install.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Setup",permalink:"/QuickShop-Hikari-Documents/docs/category/setup"},next:{title:"Permission",permalink:"/QuickShop-Hikari-Documents/docs/setup/permissions"}},s={},p=[{value:"Requirements",id:"requirements",level:2},{value:"Installing dependencies",id:"installing-dependencies",level:2},{value:"Installing QuickShop-Hikari",id:"installing-quickshop-hikari",level:2},{value:"Configure QuickShop to allow players to use it",id:"configure-quickshop-to-allow-players-to-use-it",level:2},{value:"All set! You are good to go!",id:"all-set-you-are-good-to-go",level:2}],u={toc:p};function c(e){let{components:t,...i}=e;return(0,o.kt)("wrapper",(0,r.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"installation"},"Installation"),(0,o.kt)("p",null,"This page will walk you through the process of installing QuickShop-Hikari on your Spigot server."),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/wiki/buildtools/"},"Spigot"),"-based Minecraft server (1.18.2 or higher, Java 17+)",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You can also use ",(0,o.kt)("a",{parentName:"li",href:"https://papermc.io/"},"Paper"),", which is a fork of Spigot for better compatibility, more features and higher performance."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/34315/"},"Vault")," for bridging the economy system between QuickShop and your economy plugins."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/1997"},"ProtocolLib")," for virtual display item, Per-player localization."),(0,o.kt)("li",{parentName:"ul"},"Any Vault compatible economy plugin, such as ",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/75669/"},"XConomy"),", If you have ",(0,o.kt)("a",{parentName:"li",href:"https://modrinth.com/plugin/essentialsx"},"EssentialsX"),", it will also works well."),(0,o.kt)("li",{parentName:"ul"},"A permission management plugin like ",(0,o.kt)("a",{parentName:"li",href:"https://luckperms.net/"},"LuckPerms"),".")),(0,o.kt)("p",null,"In this document, we assume that you are using the latest version of QuickShop-Hikari, ProtocolLib, XConomy, Vault and LuckPerms under Windows 11 operation system (Linux is basically the same)."),(0,o.kt)("h2",{id:"installing-dependencies"},"Installing dependencies"),(0,o.kt)("p",null,"Before installing QuickShop-Hikari, you should make sure that you have all dependencies installed, including ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/34315/"},"Vault"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/1997"},"ProtocolLib"),", ",(0,o.kt)("a",{parentName:"p",href:"https://www.spigotmc.org/resources/75669/"},"XConomy")," (or ",(0,o.kt)("a",{parentName:"p",href:"https://modrinth.com/plugin/essentialsx"},"EssentialsX")," if you want) and ",(0,o.kt)("a",{parentName:"p",href:"https://luckperms.net/"},"LuckPerms"),"!"),(0,o.kt)("p",null,"Download the plugins and drop them into ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," folder and you're all set!"),(0,o.kt)("h2",{id:"installing-quickshop-hikari"},"Installing QuickShop-Hikari"),(0,o.kt)("p",null,"Download the latest version of QuickShop-Hikari from ",(0,o.kt)("a",{parentName:"p",href:"https://modrinth.com/plugin/quickshop-hikari"},"Modrinth"),", if you find multiple files that have ",(0,o.kt)("inlineCode",{parentName:"p"},"Compat-")," prefix in file name, ignore them in this step.",(0,o.kt)("br",{parentName:"p"}),"\n","The only file you need to download should have a ",(0,o.kt)("strong",{parentName:"p"},"Primary")," tag like this in the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"download primary file",src:n(8384).Z,width:"903",height:"154"})),(0,o.kt)("p",null,"Drop the QuickShop jar into your ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," folder, start the server, then execute ",(0,o.kt)("inlineCode",{parentName:"p"},"qs")," in the console. If you properly installed the plugin, a command help page will pop-up like this in the image below:"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"console test",src:n(4583).Z,width:"1730",height:"954"})),(0,o.kt)("p",null,"If you see any errors in the output, you can read the FAQ section or join our ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/Bu3dVtmsD3"},"Discord")," support server and ask them in the ",(0,o.kt)("inlineCode",{parentName:"p"},"#qsh-support")," channel."),(0,o.kt)("h2",{id:"configure-quickshop-to-allow-players-to-use-it"},"Configure QuickShop to allow players to use it"),(0,o.kt)("p",null,"By default, players are unable to create shops."),(0,o.kt)("p",null,"To allow players to create and own shops, you must grant the necessary permissions to them."),(0,o.kt)("p",null,"Fortunately, for most of the users, all you need to do is to run a simple command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-mcfunction"},"/lp group default permission set quickshop.player true\n")),(0,o.kt)("p",null,"and you're done! Players are now able to create and use shops, they will also have access to other features."),(0,o.kt)("p",null,"For advanced permission setup, you can check ",(0,o.kt)("a",{parentName:"p",href:"/QuickShop-Hikari-Documents/docs/setup/permissions"},"here"),"."),(0,o.kt)("h2",{id:"all-set-you-are-good-to-go"},"All set! You are good to go!"),(0,o.kt)("p",null,"Now QuickShop-Hikari is running on your server, for more settings, check the navigation panel on the left and see different sections."))}c.isMDXComponent=!0},8384:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/download-primary-aab4713b7d248670919b176527ea372a.png"},4583:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/qs-command-test-4d9cd125d61f6ca84b69efbc0271f239.png"}}]);