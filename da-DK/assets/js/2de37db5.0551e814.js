"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[6852],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,q=d["".concat(u,".").concat(m)]||d[m]||c[m]||o;return r?a.createElement(q,i(i({ref:t},l),{},{components:r})):a.createElement(q,i({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={},i="Databases",s={unversionedId:"modules/datasource",id:"modules/datasource",title:"Databases",description:"QuickShop-Hikari support H2 and MySQL two types of databases.",source:"@site/i18n/da-DK/docusaurus-plugin-content-docs/current/modules/datasource.md",sourceDirName:"modules",slug:"/modules/datasource",permalink:"/QuickShop-Hikari-Documents/da-DK/docs/modules/datasource",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/da-DK",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Command Alias",permalink:"/QuickShop-Hikari-Documents/da-DK/docs/modules/cmd-alias"},next:{title:"Economy Formatter",permalink:"/QuickShop-Hikari-Documents/da-DK/docs/modules/economy-formatter"}},u={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Migrate",id:"migrate",level:2}],l={toc:p};function c(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,a.Z)({},l,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"databases"},"Databases"),(0,n.kt)("p",null,"QuickShop-Hikari support ",(0,n.kt)("inlineCode",{parentName:"p"},"H2")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"MySQL")," two types of databases."),(0,n.kt)("h2",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'#MySQL database settings.\ndatabase:\n  #false = use local SQLite database.\n  #true = use local/remote MySQL database.\n  mysql: false\n  # The database address. (Only required if mysql is true)\n  host: localhost\n  # The database port. (Only required if mysql is true)\n  port: 3306\n  # The database names. (Only required if mysql is true)\n  database: quickshop\n  # The database username. (Only required if mysql is true)\n  user: root\n  # The database password. (Only required if mysql is true)\n  password: passwd\n  # Set prefix to "none" to remove prefix (Both local and remote will be used).\n  prefix: "qs_"\n  # Should QuickShop use SSL for database connections?  (Only required if mysql is true)\n  usessl: false\n  # Properties for creating connections, you can add your own properties for datasource here. (Both local and remote will be used).\n  properties:\n    connection-timeout: 60000\n    validation-timeout: 3000\n    idle-timeout: 60000\n    login-timeout: 10\n    maxLifeTime: 60000\n    maximum-pool-size: 8\n    minimum-idle: 2\n    cachePrepStmts: true\n    prepStmtCacheSize: 250\n    prepStmtCacheSqlLimit: 2048\n    useUnicode: true\n    characterEncoding: utf8\n')),(0,n.kt)("h2",{id:"migrate"},"Migrate"),(0,n.kt)("p",null,"If you want to migrate your quickshop data from one type of database to another type, you can export your data then import them."),(0,n.kt)("p",null,"Execute the ",(0,n.kt)("inlineCode",{parentName:"p"},"/qs export")," command in console, quickshop will export a zip which include shop datas."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"exported data",src:r(4406).Z,width:"1237",height:"103"})),(0,n.kt)("p",null,"Stop your database, switch the datasource, and start the server.",(0,n.kt)("br",{parentName:"p"}),"\n","You may noticed all shops are gone, because new datasources had no data inside, we will restore them from export."),(0,n.kt)("p",null,"Rename that exported ZIP file to ",(0,n.kt)("inlineCode",{parentName:"p"},"recovery.zip"),", execute ",(0,n.kt)("inlineCode",{parentName:"p"},"/qs recovery")," and restart your server, all shops should back."))}c.isMDXComponent=!0},4406:(e,t,r)=>{r.d(t,{Z:()=>a});const a="data:image/png;base64,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"}}]);