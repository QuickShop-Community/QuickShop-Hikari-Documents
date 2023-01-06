"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[8834],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),c=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(u,".").concat(d)]||h[d]||p[d]||a;return r?o.createElement(m,i(i({ref:t},l),{},{components:r})):o.createElement(m,i({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9659:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(7462),n=(r(7294),r(3905));const a={},i="Network and Proxy",s={unversionedId:"modules/networking",id:"modules/networking",title:"Network and Proxy",description:"Most of QuickShop-Hikari web requests doesn't use system proxy.",source:"@site/i18n/es-ES/docusaurus-plugin-content-docs/current/modules/networking.md",sourceDirName:"modules",slug:"/modules/networking",permalink:"/QuickShop-Hikari-Documents/es-ES/docs/modules/networking",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/es-ES",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Multi Currency",permalink:"/QuickShop-Hikari-Documents/es-ES/docs/modules/multi-currency"},next:{title:"notifaction-system",permalink:"/QuickShop-Hikari-Documents/es-ES/docs/modules/notifaction-system"}},u={},c=[{value:"User-Agent",id:"user-agent",level:2},{value:"Use HTTP proxy",id:"use-http-proxy",level:2},{value:"Set proxy JVM flag",id:"set-proxy-jvm-flag",level:2},{value:"Without authentication",id:"without-authentication",level:3},{value:"With Basic authentication",id:"with-basic-authentication",level:3},{value:"Disable SSL verify",id:"disable-ssl-verify",level:2}],l={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"network-and-proxy"},"Network and Proxy"),(0,n.kt)("p",null,"Most of QuickShop-Hikari web requests doesn't use system proxy."),(0,n.kt)("h2",{id:"user-agent"},"User-Agent"),(0,n.kt)("p",null,"User-Agent are unchangeable, it force hardcoded as:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"QuickShop/<fork-name> - <version> Java/<java-version>\n")),(0,n.kt)("p",null,"It looks like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-plain"},"QuickShop/Hikari - 3.4.0.2 Java/17.0.3\n")),(0,n.kt)("h2",{id:"use-http-proxy"},"Use HTTP proxy"),(0,n.kt)("p",null,"In most cases, you won't need this, but in some countries, you might not access our cloud services like CrowdinOTA or Paste."),(0,n.kt)("p",null,"To configure http proxy, you need to add the arguments in your JVM startup command line."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"java -Xmx4G ... <JVM FLAG> ... -jar server.jar nogui\n")),(0,n.kt)("h2",{id:"set-proxy-jvm-flag"},"Set proxy JVM flag"),(0,n.kt)("h3",{id:"without-authentication"},"Without authentication"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"-Dcom.ghostchu.quickshop.QuickShop.proxyHost=<host> -Dcom.ghostchu.quickshop.QuickShop.proxyPort=<port>\n")),(0,n.kt)("h3",{id:"with-basic-authentication"},"With Basic authentication"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"-Dcom.ghostchu.quickshop.QuickShop.proxyHost=<host> -Dcom.ghostchu.quickshop.QuickShop.proxyPort=<port> -Dcom.ghostchu.quickshop.QuickShop.proxyUsername=<user> -Dcom.ghostchu.quickshop.QuickShop.proxyPassword=<password>\n")),(0,n.kt)("h2",{id:"disable-ssl-verify"},"Disable SSL verify"),(0,n.kt)("p",null,"To force ignore the SSL errors, you can add this startup flags to disable SSL verify."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"-Dcom.ghostchu.quickshop.QuickShop.verifySSL=false\n")))}p.isMDXComponent=!0}}]);