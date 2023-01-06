"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[7790],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=p(t),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||a;return t?o.createElement(d,i(i({ref:n},c),{},{components:t})):o.createElement(d,i({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<a;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},9186:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var o=t(7462),r=(t(7294),t(3905));const a={},i="Ranks",s={unversionedId:"modules/shops/ranks",id:"modules/shops/ranks",title:"Ranks",description:"QuickShop provides a ranks system to allow control the maximum shops that player can own.",source:"@site/i18n/fr-FR/docusaurus-plugin-content-docs/current/modules/shops/ranks.md",sourceDirName:"modules/shops",slug:"/modules/shops/ranks",permalink:"/QuickShop-Hikari-Documents/fr-FR/docs/modules/shops/ranks",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/fr-FR",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shop Protection",permalink:"/QuickShop-Hikari-Documents/fr-FR/docs/modules/shops/protection"},next:{title:"Batch remove shops",permalink:"/QuickShop-Hikari-Documents/fr-FR/docs/modules/shops/remove-shops"}},l={},p=[{value:"Permission based",id:"permission-based",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Permission Node Generation",id:"permission-node-generation",level:2},{value:"Bypass permission",id:"bypass-permission",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ranks"},"Ranks"),(0,r.kt)("p",null,"QuickShop provides a ranks system to allow control the maximum shops that player can own."),(0,r.kt)("h2",{id:"permission-based"},"Permission based"),(0,r.kt)("p",null,"This feature is permission based and permission will be generated dynamically."),(0,r.kt)("h2",{id:"configuration"},"Configuration"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#Limits the amount of shops a player can create and own.\nlimits:\n  #Leave this as false if you're not using this feature! QuickShop will ignore the rest of this section.\n  use: true\n\n  #The default amount of shops a player can create.\n  default: 10\n\n  #Use old algorithm to calculate unlimited shops into limits.\n  old-algorithm: false\n\n  #Here you can bind the limit to specific permissions.\n  #Using the same format, you can add as many as you want!\n  ranks:\n    quickshoplol: # node parent\n      #Players with quickshop.example permission can create 20 shops.\n      supervip: 20 # node child\n")),(0,r.kt)("h2",{id:"permission-node-generation"},"Permission Node Generation"),(0,r.kt)("p",null,"In the example above, all players can own up to ",(0,r.kt)("inlineCode",{parentName:"p"},"10")," shops by default, BUT, a permission node ",(0,r.kt)("inlineCode",{parentName:"p"},"quickshoplol.supervip")," was defined that allow player who have that permission own up to ",(0,r.kt)("inlineCode",{parentName:"p"},"20")," shops."),(0,r.kt)("p",null,"Basiclly, a permission node generate by ",(0,r.kt)("inlineCode",{parentName:"p"},"<node parent>.<node child>"),", that mean you can replace the ",(0,r.kt)("inlineCode",{parentName:"p"},"quickshoplol")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"supervip")," etc to what you want."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"#Limits the amount of shops a player can create and own.\nlimits:\n  #Leave this as false if you're not using this feature! QuickShop will ignore the rest of this section.\n  use: true\n\n  #The default amount of shops a player can create.\n  default: 10\n\n  #Use old algorithm to calculate unlimited shops into limits.\n  old-algorithm: false\n\n  #Here you can bind the limit to specific permissions.\n  #Using the same format, you can add as many as you want!\n  ranks:\n    linustechtips: # node parent\n      #Players with quickshop.example permission can create 20 shops.\n      cotton: 12345 # node child\n")),(0,r.kt)("p",null,"In this example, the player who have ",(0,r.kt)("inlineCode",{parentName:"p"},"linustechtips.cotton")," permission can create up to ",(0,r.kt)("inlineCode",{parentName:"p"},"12345")," shops."),(0,r.kt)("h2",{id:"bypass-permission"},"Bypass permission"),(0,r.kt)("p",null,"QuickShop doesn't have limit bypass permission, but you could set the number to a number that big enough like 999999. When a player has multiple ranks, QuickShop will pick the biggest one (more shops)."))}u.isMDXComponent=!0}}]);