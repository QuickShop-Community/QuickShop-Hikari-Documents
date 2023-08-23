"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[5615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(g,l(l({ref:t},c),{},{components:n})):r.createElement(g,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},207:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));const i={},l="Plan Erweiterung",o={unversionedId:"addon/plan",id:"addon/plan",title:"Plan Erweiterung",description:"Die Plan Erweiterung erlaubt es Servereigent\xfcmern ihre letzten QuickShop-Hikari Aktivit\xe4ten auf dem Server zu zeigen.",source:"@site/i18n/de-DE/docusaurus-plugin-content-docs/current/addon/plan.md",sourceDirName:"addon",slug:"/addon/plan",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/addon/plan",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/de-DE",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"List Addon",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/addon/list"},next:{title:"Reforges Addon",permalink:"/QuickShop-Hikari-Documents/de-DE/docs/addon/reforges"}},u={},s=[{value:"Verfolgte Daten",id:"verfolgte-daten",level:2},{value:"Globale Reichweite",id:"globale-reichweite",level:2},{value:"Spielerbereich",id:"spielerbereich",level:2},{value:"Showcase",id:"showcase",level:2},{value:"\xdcbersetzung",id:"\xfcbersetzung",level:2}],c={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"plan-erweiterung"},"Plan Erweiterung"),(0,a.kt)("p",null,"Die Plan Erweiterung erlaubt es Servereigent\xfcmern ihre letzten QuickShop-Hikari Aktivit\xe4ten auf dem Server zu zeigen."),(0,a.kt)("h2",{id:"verfolgte-daten"},"Verfolgte Daten"),(0,a.kt)("p",null,"Gesammelte Daten k\xf6nnen ab Hikari v2.0.0.0 aufw\xe4rts angezeigt werden. Jedoch k\xf6nnen nur Versionen nach 3.6.0.0 Itemanzahl in Einkaufsverlauf richtig angezeigt werden."),(0,a.kt)("h2",{id:"globale-reichweite"},"Globale Reichweite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gesamtanzahl Shops"),(0,a.kt)("li",{parentName:"ul"},"Alle Shops (An eine Shop-Liste)"),(0,a.kt)("li",{parentName:"ul"},"Aktuelle Kaufverlauf (Inklusive gel\xf6schter oder ung\xfcltiger Shops). Nur letzte 365 Tage und 1'000 Zeilen werden gezeigt.")),(0,a.kt)("p",null,"Wegen Limitierungen in Plan k\xf6nnen wir keine weiteren Daten in der Liste hinzuf\xfcgen, da die maximale Anzahl en Spalten auf ",(0,a.kt)("inlineCode",{parentName:"p"},"5")," im Serverbereich begrenzt ist.",(0,a.kt)("br",{parentName:"p"}),"\n","Eine zus\xe4tzliche Plan Einschr\xe4nkung ist, dass die Listensortierung gest\xf6rt ist. Deshalb ist die angezeigte Ordnung nicht die aktuelle Ordnung."),(0,a.kt)("h2",{id:"spielerbereich"},"Spielerbereich"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Gesamtanzahl Shops"),(0,a.kt)("li",{parentName:"ul"},"Alle eigenen Shops (An eine Shop-Liste)"),(0,a.kt)("li",{parentName:"ul"},"Aktueller Kaufverlauf (Inklusive gel\xf6schter uoder ung\xfcltiger Shops). Nur letzte 365 Tage und 1'000 Zeilen werden gezeigt.")),(0,a.kt)("p",null,"Due the Plan limitations, We can't add more data into the list because the maxmium columns are hardcoded limited to ",(0,a.kt)("inlineCode",{parentName:"p"},"4")," in player scope.",(0,a.kt)("br",{parentName:"p"}),"\n","And still is Plan limitations, the list sorting is disturbed, so the display order is not the actual order."),(0,a.kt)("h2",{id:"showcase"},"Showcase"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Globale K\xe4ufe"),(0,a.kt)("th",{parentName:"tr",align:null},"Spielerk\xe4ufe"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/30802565/208290345-2aa32f74-8c0a-4d27-9f69-b72a3ad605f4.png"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/30802565/208110771-b8d3a1cc-3c07-449f-a2ad-1348eafa7134.png"}))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Globale Shops"),(0,a.kt)("th",{parentName:"tr",align:null},"Spielershops"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/30802565/208109812-4f040bfb-4342-4510-adee-928d9041fa60.png"})),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("img",{src:"https://user-images.githubusercontent.com/30802565/208110850-d59f4ec9-6c86-4a89-a2f9-87ced3d3d74e.png"}))))),(0,a.kt)("h2",{id:"\xfcbersetzung"},"\xdcbersetzung"),(0,a.kt)("p",null,"Aufgrund von Plan Einschr\xe4nkungen ist eine \xfcbersetzte Plan Erweiterung nicht m\xf6glich."))}p.isMDXComponent=!0}}]);