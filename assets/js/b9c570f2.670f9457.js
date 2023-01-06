"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4962],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>h});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var n=o.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=p(t),h=a,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||r;return t?o.createElement(d,s(s({ref:n},c),{},{components:t})):o.createElement(d,s({ref:n},c))}));function h(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,s=new Array(r);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<r;p++)s[p]=t[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7635:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const r={},s="Ranks",i={unversionedId:"modules/shops/ranks",id:"modules/shops/ranks",title:"Ranks",description:"QuickShop provides a ranks system to allow control the maximum shops that player can own.",source:"@site/docs/modules/shops/ranks.md",sourceDirName:"modules/shops",slug:"/modules/shops/ranks",permalink:"/QuickShop-Hikari-Documents/docs/modules/shops/ranks",draft:!1,editUrl:"https://github.com/Ghost-chu/QuickShop-Hikari-Documents/edit/master/docs/docs/modules/shops/ranks.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shop Protection",permalink:"/QuickShop-Hikari-Documents/docs/modules/shops/protection"},next:{title:"Batch remove shops",permalink:"/QuickShop-Hikari-Documents/docs/modules/shops/remove-shops"}},l={},p=[{value:"Permission based",id:"permission-based",level:2},{value:"Configuration",id:"configuration",level:2},{value:"Permission Node Generation",id:"permission-node-generation",level:2},{value:"Bypass permission",id:"bypass-permission",level:2}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"ranks"},"Ranks"),(0,a.kt)("p",null,"QuickShop provides a ranks system to allow control the maximum shops that player can own."),(0,a.kt)("h2",{id:"permission-based"},"Permission based"),(0,a.kt)("p",null,"This feature is permission based and permission will be generated dynamically."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Limits the amount of shops a player can create and own.\nlimits:\n  #Leave this as false if you're not using this feature! QuickShop will ignore the rest of this section.\n  use: true\n\n  #The default amount of shops a player can create.\n  default: 10\n\n  #Use old algorithm to calculate unlimited shops into limits.\n  old-algorithm: false\n\n  #Here you can bind the limit to specific permissions.\n  #Using the same format, you can add as many as you want!\n  ranks:\n    quickshoplol: # node parent\n      #Players with quickshop.example permission can create 20 shops.\n      supervip: 20 # node child\n")),(0,a.kt)("h2",{id:"permission-node-generation"},"Permission Node Generation"),(0,a.kt)("p",null,"In the example above, all players can own up to ",(0,a.kt)("inlineCode",{parentName:"p"},"10")," shops by default, BUT, a permission node ",(0,a.kt)("inlineCode",{parentName:"p"},"quickshoplol.supervip")," was defined that allow player who have that permission own up to ",(0,a.kt)("inlineCode",{parentName:"p"},"20")," shops."),(0,a.kt)("p",null,"Basiclly, a permission node generate by ",(0,a.kt)("inlineCode",{parentName:"p"},"<node parent>.<node child>"),", that mean you can replace the ",(0,a.kt)("inlineCode",{parentName:"p"},"quickshoplol")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"supervip")," etc to what you want."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"#Limits the amount of shops a player can create and own.\nlimits:\n  #Leave this as false if you're not using this feature! QuickShop will ignore the rest of this section.\n  use: true\n\n  #The default amount of shops a player can create.\n  default: 10\n\n  #Use old algorithm to calculate unlimited shops into limits.\n  old-algorithm: false\n\n  #Here you can bind the limit to specific permissions.\n  #Using the same format, you can add as many as you want!\n  ranks:\n    linustechtips: # node parent\n      #Players with quickshop.example permission can create 20 shops.\n      cotton: 12345 # node child\n")),(0,a.kt)("p",null,"In this example, the player who have ",(0,a.kt)("inlineCode",{parentName:"p"},"linustechtips.cotton")," permission can create up to ",(0,a.kt)("inlineCode",{parentName:"p"},"12345")," shops."),(0,a.kt)("h2",{id:"bypass-permission"},"Bypass permission"),(0,a.kt)("p",null,"QuickShop doesn't have limit bypass permission, but you could set the number to a number that big enough like 999999.",(0,a.kt)("br",{parentName:"p"}),"\n","When a player has multiple ranks, QuickShop will pick the biggest one (more shops)."))}u.isMDXComponent=!0}}]);