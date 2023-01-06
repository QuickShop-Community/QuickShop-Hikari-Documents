"use strict";(self.webpackChunkquick_shop_hikari_documents=self.webpackChunkquick_shop_hikari_documents||[]).push([[4768],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var o=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,a=function(e,n){if(null==e)return{};var t,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)t=r[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=o.createContext({}),p=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return o.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},h=o.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(t),f=a,d=h["".concat(s,".").concat(f)]||h[f]||u[f]||r;return t?o.createElement(d,i(i({ref:n},c),{},{components:t})):o.createElement(d,i({ref:n},c))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=h;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}h.displayName="MDXCreateElement"},4502:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=t(7462),a=(t(7294),t(3905));const r={},i="Shop Fees",l={unversionedId:"modules/shops/shop-fees",id:"modules/shops/shop-fees",title:"Shop Fees",description:"QuickShop allow server administrator setup the shops fees for creating, changing prices.",source:"@site/docs/modules/shops/shop-fees.md",sourceDirName:"modules/shops",slug:"/modules/shops/shop-fees",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/modules/shops/shop-fees",draft:!1,editUrl:"https://crowdin.com/project/quickshop-hikari-documents/sr-Cyrl",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Shop Blocks",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/modules/shops/shop-blocks"},next:{title:"Shop Purger",permalink:"/QuickShop-Hikari-Documents/sr-Cyrl/docs/modules/shops/shop-purger"}},s={},p=[{value:"Configuration",id:"configuration",level:2},{value:"Creation fee",id:"creation-fee",level:2},{value:"Price changing fee",id:"price-changing-fee",level:2},{value:"Naming fee",id:"naming-fee",level:2},{value:"Ongoing Fee",id:"ongoing-fee",level:2},{value:"Tax",id:"tax",level:2},{value:"Configuration",id:"configuration-1",level:3},{value:"Transaction Tax",id:"transaction-tax",level:3},{value:"Tax Account",id:"tax-account",level:3}],c={toc:p};function u(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"shop-fees"},"Shop Fees"),(0,a.kt)("p",null,"QuickShop allow server administrator setup the shops fees for creating, changing prices."),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"shop:\n  #The cost to make a shop. Set to 0 for free.\n  cost: 10\n  #Should QS refund the player when their shops are deleted/removed/broken?\n  refund: false\n  # Should QS refund from the tax-account?\n  # refund is as much as possible, player may won't get all refund if the tax-account had no enough money.\n  refund-from-tax-account: false\n  #Should there be a fee for changing shop prices?\n  #This can help with endless price undercutting.\n  price-change-requires-fee: true\n  #The amount of this fee.\n  fee-for-price-change: 50\n  #Sets the name cost\n  name-fee: 0\n  #Sets the max length for shop naming\n  name-max-length: 32\n  #The shop ongoing fee.\n  #If the shop owner doesn't have enough money, the shop will automatically be removed.\n  ongoing-fee:\n    enable: false\n    #How often should the ongoing fee be due for payment?\n    ticks: 42000\n    #How much should the ongoing fee be?\n    cost-per-shop: 2\n    #Should we ignore unlimited shops?\n    ignore-unlimited: true\n")),(0,a.kt)("h2",{id:"creation-fee"},"Creation fee"),(0,a.kt)("p",null,"It is controlled by ",(0,a.kt)("inlineCode",{parentName:"p"},"shop.cost"),", set it to ",(0,a.kt)("inlineCode",{parentName:"p"},"0")," for free.",(0,a.kt)("br",{parentName:"p"}),"\n","You can refund the creation cost by turn on ",(0,a.kt)("inlineCode",{parentName:"p"},"shop.refund")," option, and if you want refund player from quickshop tax account, you can also turn on option ",(0,a.kt)("inlineCode",{parentName:"p"},"shop.refund-from-tax-account"),", but player may won't receive the refund if tax account run out of money."),(0,a.kt)("h2",{id:"price-changing-fee"},"Price changing fee"),(0,a.kt)("p",null,"To prevent player change their shops price too frequently, you can turn on price changing fee by turn on option ",(0,a.kt)("inlineCode",{parentName:"p"},"shop.price-change-requires-fee"),".",(0,a.kt)("br",{parentName:"p"}),"\n","After the option is enabled, player need to pay the tax account money that specficed by ",(0,a.kt)("inlineCode",{parentName:"p"},"shop.fee-for-price-change")," option everytime their changes."),(0,a.kt)("h2",{id:"naming-fee"},"Naming fee"),(0,a.kt)("p",null,"You can set that require player pay for naming their shop by set option ",(0,a.kt)("inlineCode",{parentName:"p"},"shop.name-fee")," to an non-zero number.",(0,a.kt)("br",{parentName:"p"}),"\n","Everytime player want to change their shop's name, player must pay for it."),(0,a.kt)("h2",{id:"ongoing-fee"},"Ongoing Fee"),(0,a.kt)("p",null,"To prevent players hold massive idle shops on your server, or keep the market balance, you can enable on-going fee.  "),(0,a.kt)("p",null,"When this feature enabled, player need to pay ",(0,a.kt)("inlineCode",{parentName:"p"},"shop.ongoing-fee.cost-per-shop"),"$ every ",(0,a.kt)("inlineCode",{parentName:"p"},"shop.ongoing-fee.ticks")," game ticks, for every single shop they're owned.  "),(0,a.kt)("p",null,"If player cannot afford the ongoing-fee, the shops will be deleted."),(0,a.kt)("h2",{id:"tax"},"Tax"),(0,a.kt)("p",null,"QuickShop provide a system that allow you to tax."),(0,a.kt)("h3",{id:"configuration-1"},"Configuration"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'#Tax amount (decimal)\n#Example: P1 buys $50 worth of stuff from P2.  Therefore, P1 loses $50, P2 gains $(1-0.05)*50, and the tax-account gains $(0.05)*50.\ntax: 0.05\n\n#The fake player where the tax money goes to.\n#Set this to "" to disable it (Taxing will still work but not deposit to any account)\ntax-account: tax\n\n# Disable taxes for unlimited shop\ntax-free-for-unlimited-shop: false\n\n#Whether to show taxes paid when selling to a shop\nshow-tax: false\n')),(0,a.kt)("h3",{id:"transaction-tax"},"Transaction Tax"),(0,a.kt)("p",null,"For every transaction, we will took some amount from transaction for tax, it controlled by option ",(0,a.kt)("inlineCode",{parentName:"p"},"tax"),".  "),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"1")," means ",(0,a.kt)("inlineCode",{parentName:"p"},"100%"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"0.05")," means ",(0,a.kt)("inlineCode",{parentName:"p"},"5%"),", you need convert the percentage to decimal format.  "),(0,a.kt)("p",null,"You can also turn on ",(0,a.kt)("inlineCode",{parentName:"p"},"show-tax")," to allow player see the taxes included in transaction."),(0,a.kt)("h3",{id:"tax-account"},"Tax Account"),(0,a.kt)("p",null,"By default, all tax were going to a account named ",(0,a.kt)("inlineCode",{parentName:"p"},"tax"),".",(0,a.kt)("br",{parentName:"p"}),"\n","Depends on the difference in economy plugins and the design of your server, default value may won't work well, and you might want change it."),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"tax-account")," accepts both player username and player's uuid."))}u.isMDXComponent=!0}}]);