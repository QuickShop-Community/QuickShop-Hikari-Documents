"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[3538],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=r.createContext({}),l=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=l(t),f=o,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||a;return t?r.createElement(m,i(i({ref:n},s),{},{components:t})):r.createElement(m,i({ref:n},s))}));function f(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=d;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=t[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},6711:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var r=t(7462),o=(t(7294),t(3905));const a={},i="In game sounds and effects",c={unversionedId:"modules/special-effect",id:"modules/special-effect",title:"In game sounds and effects",description:"When you typing and execute a quickshop command, you should hear the sounds like typewriter, it can be changed in config.yml.",source:"@site/i18n/de-DE/docusaurus-plugin-content-docs/current/modules/special-effect.md",sourceDirName:"modules",slug:"/modules/special-effect",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/special-effect",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/de-DE",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Performance Tweaking",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/performance-tweaking"},next:{title:"Transaction System",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/modules/transaction-system"}},u={},l=[{value:"Configuration",id:"configuration",level:2}],s={toc:l};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"in-game-sounds-and-effects"},"In game sounds and effects"),(0,o.kt)("p",null,"When you typing and execute a quickshop command, you should hear the sounds like typewriter, it can be changed in config.yml.",(0,o.kt)("br",{parentName:"p"}),"\n","It's not an important feature, but can have (why not :))."),(0,o.kt)("p",null,"Anyway, you can disable them if you dislike them."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"#Special in-game effect\neffect:\n  #Sound related\n  sound:\n    #Should we play sound while player trying tab completing?\n    ontabcomplete: true\n    #Should we play sound while player executing commands?\n    oncommand: true\n    #Should we play sound while player clicking shop container/sign?\n    onclick: true\n")))}p.isMDXComponent=!0}}]);