"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7810],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var u=n.createContext({}),i=function(e){var r=n.useContext(u),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=i(e.components);return n.createElement(u.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},h=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),h=i(t),d=o,m=h["".concat(u,".").concat(d)]||h[d]||c[d]||a;return t?n.createElement(m,s(s({ref:r},l),{},{components:t})):n.createElement(m,s({ref:r},l))}));function d(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=h;var p={};for(var u in r)hasOwnProperty.call(r,u)&&(p[u]=r[u]);p.originalType=e,p.mdxType="string"==typeof e?e:o,s[1]=p;for(var i=2;i<a;i++)s[i]=t[i];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4248:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>i});var n=t(7462),o=(t(7294),t(3905));const a={},s="Shop Purger",p={unversionedId:"modules/shops/shop-purger",id:"modules/shops/shop-purger",title:"Shop Purger",description:"Shop Purger allow server administrator purge the shops if the player in idle or banned.",source:"@site/i18n/uk-UA/docusaurus-plugin-content-docs/current/modules/shops/shop-purger.md",sourceDirName:"modules/shops",slug:"/modules/shops/shop-purger",permalink:"/QuickShop-Hikari-Documents/uk-UA/docs/modules/shops/shop-purger",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/uk-UA",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shop Fees",permalink:"/QuickShop-Hikari-Documents/uk-UA/docs/modules/shops/shop-fees"},next:{title:"Shop Search",permalink:"/QuickShop-Hikari-Documents/uk-UA/docs/modules/shops/shop-search"}},u={},i=[{value:"Configuration",id:"configuration",level:2}],l={toc:i};function c(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"shop-purger"},"Shop Purger"),(0,o.kt)("p",null,"Shop Purger allow server administrator purge the shops if the player in idle or banned."),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Shops purger\n# Will purge all shops that owner offline x days while use command or server startup\npurge:\n  enabled: false\n  #Whether to purge shops automatically when server started.\n  at-server-startup: true\n  #Whether to export a backup file for recovery before each purge.\n  backup: true\n  # The days that player offline before shop got purged.\n  days: 60\n  # At this moment, QuickShop only compatible with Vanilla banning system (e.g Essentials using).\n  banned: true\n  # At this moment, QuickShop only compatible with Vanilla OP system, LuckPerms may need add in future.\n  skip-op: true\n  # When shop purged by server, should we return the create-fee back to players?\n  return-create-fee: true\n")),(0,o.kt)("p",null,"Ban auto purge currently only supportd Vanilla banning system, it doesn't support 3rd-party ban management like Litebans, AdvancedBan."))}c.isMDXComponent=!0}}]);