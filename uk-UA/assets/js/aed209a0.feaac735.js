"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[6372],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>k});var a=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=a.createContext({}),s=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(r),k=o,h=d["".concat(u,".").concat(k)]||d[k]||p[k]||n;return r?a.createElement(h,l(l({ref:t},c),{},{components:r})):a.createElement(h,l({ref:t},c))}));function k(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,l=new Array(n);l[0]=d;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var s=2;s<n;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3617:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>s});var a=r(7462),o=(r(7294),r(3905));const n={},l="Privacy",i={unversionedId:"about/privacy",id:"about/privacy",title:"Privacy",description:"When using the QuickShop Hikari service, we will send the necessary and partial optional data to the relevant service provider.",source:"@site/i18n/uk-UA/docusaurus-plugin-content-docs/current/about/privacy.md",sourceDirName:"about",slug:"/about/privacy",permalink:"/QuickShop-Hikari-Documents/uk-UA/docs/about/privacy",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/uk-UA",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Licenses",permalink:"/QuickShop-Hikari-Documents/uk-UA/docs/about/licenses"}},u={},s=[{value:"bStats",id:"bstats",level:2},{value:"Quit bStats Metrics",id:"quit-bstats-metrics",level:3},{value:"Rollbar Error Tracking",id:"rollbar-error-tracking",level:2},{value:"Quit Rollbar Error Tracking",id:"quit-rollbar-error-tracking",level:3},{value:"Paste",id:"paste",level:2},{value:"Updater",id:"updater",level:2},{value:"Donating",id:"donating",level:2}],c={toc:s};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"privacy"},"Privacy"),(0,o.kt)("p",null,"When using the QuickShop Hikari service, we will send the necessary and partial optional data to the relevant service provider."),(0,o.kt)("h2",{id:"bstats"},"bStats"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://bstats.org/"},"bStats.org")," to collect statistical indicators so that we can better improve our products."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://bstats.org/privacy-policy"},"bStats's Privacy Policy")),(0,o.kt)("p",null,"All data collected will be displayed on this page: ",(0,o.kt)("a",{parentName:"p",href:"https://bstats.org/plugin/bukkit/QuickShop-Hikari/14281"},"bStats - QuickShop-Hikari")),(0,o.kt)("h3",{id:"quit-bstats-metrics"},"Quit bStats Metrics"),(0,o.kt)("p",null,"To quit bStats metrics, you can disable bstats service in QuickShop-Hikari's configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Disallow QuickShop to send metrics data to bStats.\n#Please let the metrics enabled, it helps the author :).\ndisabled-metrics: false\n")),(0,o.kt)("p",null,"Note: The collected data won't deleted from bStats, to remove exists data, please contact bStats administrators.",(0,o.kt)("br",{parentName:"p"}),"\n","Note: We respect your bStats global settings, if you has been disabled bStats in global, we won't send any data to bStats."),(0,o.kt)("h2",{id:"rollbar-error-tracking"},"Rollbar Error Tracking"),(0,o.kt)("p",null,"We use ",(0,o.kt)("a",{parentName:"p",href:"https://rollbar.com/"},"Rollbar")," to collect error reports. All errors on your server which related to QuickShop-Hikari will be automaticlly submit to our Rollbar bin."),(0,o.kt)("p",null,"You can check Rollbar's Privacy Policy ",(0,o.kt)("a",{parentName:"p",href:"https://docs.rollbar.com/docs/privacy-policy"},"here"),"."),(0,o.kt)("p",null,"Including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time"),(0,o.kt)("li",{parentName:"ul"},"Error and StackTrace"),(0,o.kt)("li",{parentName:"ul"},"OS Name"),(0,o.kt)("li",{parentName:"ul"},"OS Arch"),(0,o.kt)("li",{parentName:"ul"},"OS Version"),(0,o.kt)("li",{parentName:"ul"},"System CPU Cores"),(0,o.kt)("li",{parentName:"ul"},"Java Version"),(0,o.kt)("li",{parentName:"ul"},"Server/Bukkit Build Version"),(0,o.kt)("li",{parentName:"ul"},"Server Players"),(0,o.kt)("li",{parentName:"ul"},"Online Mode"),(0,o.kt)("li",{parentName:"ul"},"Your QuickShop-Hikari unique ID")),(0,o.kt)("h3",{id:"quit-rollbar-error-tracking"},"Quit Rollbar Error Tracking"),(0,o.kt)("p",null,"To quit Rollbar Error Tracking, you can disable rollbar service in QuickShop-Hikari's configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Should QS be allowed to automatically report errors to the author?\n# It will also create a paste for data-recovery or debug when the server boots up.\nauto-report-errors: true\n")),(0,o.kt)("p",null,"Note: The collected data won't deleted from Rollbar, to remove exists data, please contact QuickShop-Hikari developer."),(0,o.kt)("h2",{id:"paste"},"Paste"),(0,o.kt)("p",null,"When you creating a paste by ",(0,o.kt)("inlineCode",{parentName:"p"},"/qs paste")," command, you data will upload to ",(0,o.kt)("a",{parentName:"p",href:"https://bytebin.lucko.me/"},"Lucko's Bytebin"),".",(0,o.kt)("br",{parentName:"p"}),"\n","To avoid data uploading, you can create local paste by using command ",(0,o.kt)("inlineCode",{parentName:"p"},"/qs paste file"),", the paste will save to your local disk without uploading."),(0,o.kt)("p",null,"The Paste Viewer hosting on Github Pages, access the uploaded data through CloudFlare Worker."),(0,o.kt)("p",null,"While we generating your Paste, we will censor your sensitive data, Don't send your Paste to anyone you don't trust."),(0,o.kt)("h2",{id:"updater"},"Updater"),(0,o.kt)("p",null,"For checking update, QuickShop-Hikari will request CodeMC.io's Nexus for checking updates."),(0,o.kt)("p",null,"To disable update checker, you can turn it off by adjust the configuration:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Should QS be allowed to check for updates?\nupdater: false\n")),(0,o.kt)("h2",{id:"donating"},"Donating"),(0,o.kt)("p",null,"When you donating on ko-fi.com, ko-fi will collect your personal data, click ",(0,o.kt)("a",{parentName:"p",href:"https://more.ko-fi.com/privacy"},"here")," to check ko-fi's privacy policy."),(0,o.kt)("p",null,"Your personal data will also send to Ghost_chu's web server for showcase your name on our supporter list, including:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time"),(0,o.kt)("li",{parentName:"ul"},"Your Ko-fi username."),(0,o.kt)("li",{parentName:"ul"},"Donation Type"),(0,o.kt)("li",{parentName:"ul"},"Is public"),(0,o.kt)("li",{parentName:"ul"},"Message ID"),(0,o.kt)("li",{parentName:"ul"},"Message"),(0,o.kt)("li",{parentName:"ul"},"Kofi Transaction ID"),(0,o.kt)("li",{parentName:"ul"},"Tier Name")),(0,o.kt)("p",null,"The data collected is stored in the territory of the People's Republic of China and is managed in accordance with the relevant laws and regulations of the server location (Beijing).",(0,o.kt)("br",{parentName:"p"}),"\n","To remove your data, please contact QuickShop-Hikari developer."),(0,o.kt)("p",null,"The data below will show up for everyone at ",(0,o.kt)("a",{parentName:"p",href:"https://quickshop-kofi-proxy.ghostchu.workers.dev/"},"here"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Time"),(0,o.kt)("li",{parentName:"ul"},"Type"),(0,o.kt)("li",{parentName:"ul"},"Your Ko-fi username")),(0,o.kt)("p",null,"If you donation has been set to private, it won't show up."))}p.isMDXComponent=!0}}]);