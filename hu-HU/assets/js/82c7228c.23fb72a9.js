"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4564],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var u=n.createContext({}),s=function(e){var t=n.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=s(a),h=o,g=p["".concat(u,".").concat(h)]||p[h]||d[h]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,l=new Array(i);l[0]=p;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},8305:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>r,toc:()=>s});var n=a(7462),o=(a(7294),a(3905));const i={},l="Localization",r={unversionedId:"modules/localization",id:"modules/localization",title:"Localization",description:"QuickShop-Hikari use client-language to display for players. All translations offered by volunteers on Crowdin.",source:"@site/i18n/hu-HU/docusaurus-plugin-content-docs/current/modules/localization.md",sourceDirName:"modules",slug:"/modules/localization",permalink:"/QuickShop-Hikari-Documents/hu-HU/docs/modules/localization",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/hu-HU",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ItemStack Loader",permalink:"/QuickShop-Hikari-Documents/hu-HU/docs/modules/itemstack-loader"},next:{title:"Multi Currency",permalink:"/QuickShop-Hikari-Documents/hu-HU/docs/modules/multi-currency"}},u={},s=[{value:"Crowdin Project",id:"crowdin-project",level:2},{value:"Crowdin OTA",id:"crowdin-ota",level:2},{value:"Customize Translations",id:"customize-translations",level:2},{value:"Get the original file from Github",id:"get-the-original-file-from-github",level:3},{value:"Override the OTA translation",id:"override-the-ota-translation",level:3},{value:"Make it work",id:"make-it-work",level:3},{value:"Updating",id:"updating",level:3},{value:"DEBUG: How I can know which locale code that Minecraft using?",id:"debug-how-i-can-know-which-locale-code-that-minecraft-using",level:3},{value:"Force to use single language",id:"force-to-use-single-language",level:2},{value:"Change the default game language",id:"change-the-default-game-language",level:2}],c={toc:s};function d(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"localization"},"Localization"),(0,o.kt)("p",null,"QuickShop-Hikari use client-language to display for players. All translations offered by volunteers on Crowdin."),(0,o.kt)("h2",{id:"crowdin-project"},"Crowdin Project"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/quickshop-hikari"},(0,o.kt)("img",{parentName:"a",src:"https://badges.crowdin.net/quickshop-hikari/localized.svg",alt:"Crowdin"}))),(0,o.kt)("p",null,"To help translate QuickShop-Hikari, please visit our ",(0,o.kt)("a",{parentName:"p",href:"https://crowdin.com/project/quickshop-hikari"},"Crowdin Homepage"),"."),(0,o.kt)("h2",{id:"crowdin-ota"},"Crowdin OTA"),(0,o.kt)("p",null,"QuickShop-Hikari will auto update translations from Crowdin via Crowdin OTA, all directly local changes will overrided when you reload QuickShop-Hikari or restart your server."),(0,o.kt)("p",null,"Your installation will keep translations up-to-date without any touch."),(0,o.kt)("h2",{id:"customize-translations"},"Customize Translations"),(0,o.kt)("p",null,"Because all local changes will lost on restart or reload, it's impossible to edit original file directly, you must use our Translation Override system to instead."),(0,o.kt)("h3",{id:"get-the-original-file-from-github"},"Get the original file from Github"),(0,o.kt)("p",null,"Before using the override system, You must get the original translation file from the Github (because the local override file is an empty file by default)."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/Ghost-chu/QuickShop-Hikari/tree/hikari/crowdin/lang"},"Click Here")),(0,o.kt)("p",null,"Search your locale and click in, then download the translation."),(0,o.kt)("h3",{id:"override-the-ota-translation"},"Override the OTA translation"),(0,o.kt)("p",null,"Go to your locale OTA override folder:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"MINECRAFT_SERVER_ROOT/plugins/QuickShop-Hikari/override/LOCALE_CODE/messages.yml")),(0,o.kt)("p",null,"You should find a blank YAML format file, open it."),(0,o.kt)("p",null,"Copy the key and values from the original translation to override the file, then you can edit it what you want."),(0,o.kt)("p",null,"You can copy the entire content directly, or keep the structure and copy and modify parts of it. Translation keys that are not overridden will be overridden with the value provided by Crowdin OTA."),(0,o.kt)("p",null,"Translation support ",(0,o.kt)("a",{parentName:"p",href:"https://docs.adventure.kyori.net/minimessage/"},"MiniMessage")," syntax."),(0,o.kt)("h3",{id:"make-it-work"},"Make it work"),(0,o.kt)("p",null,"Save and execute command ",(0,o.kt)("inlineCode",{parentName:"p"},"/qs reload")," to make it works."),(0,o.kt)("h3",{id:"updating"},"Updating"),(0,o.kt)("p",null,"The override file won't automatically update, you must do it by yourself once our translation have new update."),(0,o.kt)("h3",{id:"debug-how-i-can-know-which-locale-code-that-minecraft-using"},"DEBUG: How I can know which locale code that Minecraft using?"),(0,o.kt)("p",null,"Type ",(0,o.kt)("inlineCode",{parentName:"p"},"/qs debug")," in-game to turn on the debug mode, re-join the server or change the client language, the server console should print the locale code that you using."),(0,o.kt)("h2",{id:"force-to-use-single-language"},"Force to use single language"),(0,o.kt)("p",null,"If your server is not facing players across the world, or if you want to disable specific languages on your server, you can set it in config.yml."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Choose which languages should be enabled\n#Any client connect to server that using disabled language, will fallback to game-language option there\n#Set to - '*' to enable all available languages\n#The language files will automatically update thorough Crowdin OTA system, you can translate it there:\n#https://crowdin.com/project/quickshop-hikari\n#If you want custom the language file, use language override system:\n#https://github.com/Ghost-chu/QuickShop-Hikari/wiki/Use-translation-override-system\nenabled-languages:\n  - '*'\n")),(0,o.kt)("p",null,"For example, to allow ",(0,o.kt)("inlineCode",{parentName:"p"},"zh-CN")," language only on the server, you can set it to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"enabled-languages:\n  - 'zh-CN'\n")),(0,o.kt)("p",null,"Or multiple languages:"),(0,o.kt)("p",null,"For example, to allow ",(0,o.kt)("inlineCode",{parentName:"p"},"zh-CN")," language only on the server, you can set it to:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"enabled-languages:\n  - 'zh-CN'\n  - 'zh-HK'\n  - 'zh-TW'\n")),(0,o.kt)("h2",{id:"change-the-default-game-language"},"Change the default game language"),(0,o.kt)("p",null,"In some cases QuickShop-Hikari needs to use the global default language, you can use this option to modify the default global language."),(0,o.kt)("p",null,"Although in the vast majority of cases QuickShop-Hikari will not use this option, you can still configure it (if you want) and we recommend keeping the default value."),(0,o.kt)("p",null,"The comments in config.yml may outdated."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Set it to default will use your system language.\n#You can find the valid language code in your client language settings, like en_us\ngame-language: default\n")))}d.isMDXComponent=!0}}]);