"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[5828],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>y});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),m=c(n),y=o,d=m["".concat(u,".").concat(y)]||m[y]||s[y]||i;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function y(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,l[1]=a;for(var c=2;c<i;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>a,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const i={},l="\u591a\u5e01\u79cd\u652f\u6301",a={unversionedId:"modules/multi-currency",id:"modules/multi-currency",title:"\u591a\u5e01\u79cd\u652f\u6301",description:"QuickShop-Hikari\u652f\u6301\u4e00\u4e9b\u591a\u8d27\u5e01\u7ecf\u6d4e\u63d2\u4ef6\u6216\u6865\u63a5\u63d2\u4ef6\uff0c\u4f46\u5b83\u4eec\u4e0d\u662f\u5f00\u7bb1\u5373\u7528\u7684\uff0c\u60a8\u5fc5\u987b\u914d\u7f6e\u5b83\u4eec\u624d\u80fd\u751f\u6548\u3002",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/modules/multi-currency.md",sourceDirName:"modules",slug:"/modules/multi-currency",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/modules/multi-currency",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/zh-CN",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u672c\u5730\u5316",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/modules/localization"},next:{title:"\u7f51\u7edc\u548c\u4ee3\u7406",permalink:"/QuickShop-Hikari-Documents/zh-CN/docs/modules/networking"}},u={},c=[{value:"\u652f\u6301\u7684\u7ecf\u6d4e\u63d2\u4ef6",id:"\u652f\u6301\u7684\u7ecf\u6d4e\u63d2\u4ef6",level:2},{value:"\u5546\u5e97\u9ed8\u8ba4\u8d27\u5e01",id:"\u5546\u5e97\u9ed8\u8ba4\u8d27\u5e01",level:2},{value:"\u8bbe\u7f6e\u591a\u8d27\u5e01\u5907\u7528\u7b26\u53f7",id:"\u8bbe\u7f6e\u591a\u8d27\u5e01\u5907\u7528\u7b26\u53f7",level:2},{value:"\u66f4\u6539\u5546\u5e97\u7684\u8d27\u5e01",id:"\u66f4\u6539\u5546\u5e97\u7684\u8d27\u5e01",level:2},{value:"\u6301\u7eed\u8d39\u7528\u8d27\u5e01",id:"\u6301\u7eed\u8d39\u7528\u8d27\u5e01",level:2},{value:"\u5546\u5e97\u7a0e\u6536\u8d27\u5e01",id:"\u5546\u5e97\u7a0e\u6536\u8d27\u5e01",level:2}],p={toc:c};function s(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u591a\u5e01\u79cd\u652f\u6301"},"\u591a\u5e01\u79cd\u652f\u6301"),(0,o.kt)("p",null,"QuickShop-Hikari\u652f\u6301\u4e00\u4e9b\u591a\u8d27\u5e01\u7ecf\u6d4e\u63d2\u4ef6\u6216\u6865\u63a5\u63d2\u4ef6\uff0c\u4f46\u5b83\u4eec\u4e0d\u662f\u5f00\u7bb1\u5373\u7528\u7684\uff0c\u60a8\u5fc5\u987b\u914d\u7f6e\u5b83\u4eec\u624d\u80fd\u751f\u6548\u3002"),(0,o.kt)("h2",{id:"\u652f\u6301\u7684\u7ecf\u6d4e\u63d2\u4ef6"},"\u652f\u6301\u7684\u7ecf\u6d4e\u63d2\u4ef6"),(0,o.kt)("p",null,"QuickShop-Hikari\u5f53\u524d\u652f\u6301\u4ee5\u4e0b\u591a\u5e01\u79cd\u7ecf\u6d4e\u63d2\u4ef6\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"GemsEconomy"),(0,o.kt)("li",{parentName:"ul"},"TheNewEconomy"),(0,o.kt)("li",{parentName:"ul"},"CoinsEngine\n",(0,o.kt)("em",{parentName:"li"},"\x3c!--")," Any other economy plugin that support ","[","Reserve","]","(",(0,o.kt)("a",{parentName:"li",href:"https://www.spigotmc.org/resources/50739/)--%3E##"},"https://www.spigotmc.org/resources/50739/)--\x3e##")," \u542f\u7528\u591a\u8d27\u5e01\u652f\u6301")),(0,o.kt)("p",null,"\u8981\u542f\u7528\u591a\u5e01\u79cd\u529f\u80fd\uff0c\u60a8\u9700\u8981\u5c06 QuickShop \u7ecf\u6d4e\u5904\u7406\u5668\u914d\u7f6e\u4e3a\u652f\u6301\u7684\u6a21\u5f0f\uff0c\u8fd9\u53ef\u4ee5\u5728 config.yml \u4e2d\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# What economy provider should QuickShop use?\n# 0=Vault\n# 3=GemsEconomy with Multi-Currency on\n# 4=TNE with Multi-Currency on\n# 5=CoinsEngine with Multi-Currency on (experimental)\n# 6=Treasury with Multi-Currency on (experimental)\n# DO NOT TOUCH THIS IF YOU DON'T KNOW WHAT IT DOES. ASK FOR SUPPORT BEFORE TOUCHING THIS!\neconomy-type: 0\n")),(0,o.kt)("p",null,"Set ",(0,o.kt)("inlineCode",{parentName:"p"},"economy-type")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"3-6")," will enable the Multi-Currency feature.",(0,o.kt)("br",{parentName:"p"}),"\n","Note: Only one processor can be enabled in same time which mean once you choose ",(0,o.kt)("inlineCode",{parentName:"p"},"3-6"),", Vault will be disabled."),(0,o.kt)("h2",{id:"\u5546\u5e97\u9ed8\u8ba4\u8d27\u5e01"},"\u5546\u5e97\u9ed8\u8ba4\u8d27\u5e01"),(0,o.kt)("p",null,"\u60a8\u9700\u8981\u4e3a\u9ed8\u8ba4\u4f7f\u7528\u8bbe\u7f6e\u4e00\u79cd\u8d27\u5e01\uff08\u4f8b\u5982\u65b0\u5546\u5e97\u9ed8\u8ba4\u8d27\u5e01\uff09\uff0c\u5e76\u5728 config.yml \u4e2d\u8fdb\u884c\u914d\u7f6e\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# The currency used to create shops.\n# Set this to \"\" to use default currency.\n# Only required if you use multiple currencies.\ncurrency: ''\n")),(0,o.kt)("h2",{id:"\u8bbe\u7f6e\u591a\u8d27\u5e01\u5907\u7528\u7b26\u53f7"},"\u8bbe\u7f6e\u591a\u8d27\u5e01\u5907\u7528\u7b26\u53f7"),(0,o.kt)("p",null,"\u60a8\u53ef\u4ee5\u4e3a\u7b26\u53f7\u8bbe\u7f6e\u5907\u7528\u7b26\u53f7\uff0cQuickShop-Hikari\u5c06\u5728\u6587\u672c\u4e2d\u5bf9\u7279\u5b9a\u8d27\u5e01\u7684\u7b26\u53f7\u66ff\u6362\u4e3a\u5907\u7528\u7b26\u53f7\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"  # This setting is for multi-currency setups.\n  # If nothing matches in this list, it falls back to the name of currency itself.\n  alternate-currency-symbol-list:\n  - USD;$\n  - CNY;\uffe5\n")),(0,o.kt)("h2",{id:"\u66f4\u6539\u5546\u5e97\u7684\u8d27\u5e01"},"\u66f4\u6539\u5546\u5e97\u7684\u8d27\u5e01"),(0,o.kt)("p",null,"Looking at a quickshop, execute ",(0,o.kt)("inlineCode",{parentName:"p"},"/quickshop currency <new-currency>")," to change shop currency."),(0,o.kt)("h2",{id:"\u6301\u7eed\u8d39\u7528\u8d27\u5e01"},"\u6301\u7eed\u8d39\u7528\u8d27\u5e01"),(0,o.kt)("p",null,"OngoingFee will always use server scope default currency (",(0,o.kt)("inlineCode",{parentName:"p"},"currency"),")."),(0,o.kt)("h2",{id:"\u5546\u5e97\u7a0e\u6536\u8d27\u5e01"},"\u5546\u5e97\u7a0e\u6536\u8d27\u5e01"),(0,o.kt)("p",null,"Shop tax will use per-shop currency with global tax rate (cannot change yet).",(0,o.kt)("br",{parentName:"p"}),"\n","If you really want this feature, open a Feature Request on our Issue Tracker!"))}s.isMDXComponent=!0}}]);