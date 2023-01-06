"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7818],{3905:(e,t,i)=>{i.d(t,{Zo:()=>u,kt:()=>m});var o=i(7294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,o)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,o,n=function(e,t){if(null==e)return{};var i,o,n={},r=Object.keys(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)i=r[o],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var i=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(i),m=n,d=p["".concat(l,".").concat(m)]||p[m]||h[m]||r;return i?o.createElement(d,a(a({ref:t},u),{},{components:i})):o.createElement(d,a({ref:t},u))}));function m(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=i.length,a=new Array(r);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<r;c++)a[c]=i[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,i)}p.displayName="MDXCreateElement"},8399:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var o=i(7462),n=(i(7294),i(3905));const r={},a="GreifPrevention",s={unversionedId:"compat-modules/griefprevention",id:"compat-modules/griefprevention",title:"GreifPrevention",description:"GreifPrevention compatibility module added compaitibility with GF.",source:"@site/i18n/ko-KR/docusaurus-plugin-content-docs/current/compat-modules/griefprevention.md",sourceDirName:"compat-modules",slug:"/compat-modules/griefprevention",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/compat-modules/griefprevention",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/ko-KR",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"EliteMobs",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/compat-modules/elitemobs"},next:{title:"Lands",permalink:"/QuickShop-Hikari-Documents/ko-KR/docs/compat-modules/lands"}},l={},c=[{value:"How does it work",id:"how-does-it-work",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:c};function h(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"greifprevention"},"GreifPrevention"),(0,n.kt)("p",null,"GreifPrevention compatibility module added compaitibility with GF."),(0,n.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,n.kt)("p",null,"This module allow QuickShop-Hikari check if player have permission to create or use QuickShop in specific region."),(0,n.kt)("p",null,"And delete shops when claim removed, untrusted, unclimed, expired, resized or subclaim created."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"#Should we prevent the creation of a shop or trade with a shop outside GriefPrevention's area?\nwhitelist-mode: true\n#Which check does a player need to pass to create a shop?\n#Available fields:\n#BUILD = The player must have the ability to build in the target claim.\n#INVENTORY = The player must be able to access containers.\n#ACCESS = The Player must have the ability to access the target claim.\ncreate: INVENTORY\n#Which checks does a player need to pass to trade with a shop?\n#You can use multiple checks at the same time.\n#Priority: UP > DOWN\n#Available fields:\n#BUILD = The player must have the ability to build in the target claim.\n#INVENTORY = The player must be able to access containers.\n#ACCESS = The Player must have the ability to access the target claim.\ntrade: [ ]\n#Should QuickShop delete shops if the trust permission of the shop owner has been changed on the claim/subclaim?\n#Removes a shop if the shop owner no longer has permission to build a shop there.\n#Never removes a shop of the claim owner.\ndelete-on-claim-trust-changed: true\n#Should QuickShop delete shops if the claim/subclaim has been unclaimed?\n#Removes all the shops that were inside the claim/subclaim that was unclaimed.\n#Never removes a shop of the claim owner when unclaiming a subclaim.\ndelete-on-claim-unclaimed: true\n#Should QuickShop delete shops if the claim has been expired?\n#Removes all the shops that were inside the claim.\ndelete-on-claim-expired: true\n#Should QuickShop delete shops if claim/subclaim has been resized?\n#Removes a shop that the old claim contains but the new claim doesn't.\n#Removes a shop if the shop was inside the subclaim but now it is outside the subclaim.\n#Removes a shop if the shop was outside the subclaim but now it is inside the subclaim.\n#Never removes a shop of the claim owner when resizing a subclaim.\ndelete-on-claim-resized: true\n#Should Quickshop delete shops if a subclaim has been created?\n#If a subclaim is created that will contain, initially, shops from others players, then we will remove them.\n#Because they won't have, initially, permission to create a shop in that subclaim.\n#Never removes a shop of the claim owner.\ndelete-on-subclaim-created: true\n")))}h.isMDXComponent=!0}}]);