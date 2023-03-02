"use strict";(self.webpackChunkdigital_agency_doc=self.webpackChunkdigital_agency_doc||[]).push([[240],{9613:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(9496);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(a),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||r;return a?n.createElement(m,i(i({ref:t},u),{},{components:a})):n.createElement(m,i({ref:t},u))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[f]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<r;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},7732:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var n=a(4778),o=(a(9496),a(9613));const r={sidebar_position:3},i="Localisation",l={unversionedId:"features/localisation",id:"features/localisation",title:"Localisation",description:"The website template supports localisation. You can add your own localisation files to the src/features/awesome-feature/locales/ folder. The localisation files are in the JSON format.",source:"@site/docs/features/localisation.md",sourceDirName:"features",slug:"/features/localisation",permalink:"/docs/features/localisation",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Dark Mode",permalink:"/docs/features/dark-mode"},next:{title:"Deployment",permalink:"/docs/deployment"}},s={},c=[{value:"Adding a new language",id:"adding-a-new-language",level:2},{value:"Localisation file",id:"localisation-file",level:2},{value:"Configuration",id:"configuration",level:2}],u={toc:c},f="wrapper";function p(e){let{components:t,...a}=e;return(0,o.kt)(f,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"localisation"},"Localisation"),(0,o.kt)("p",null,"The website template supports localisation. You can add your own localisation files to the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/awesome-feature/locales/<ISO_639-1_CODE>")," folder. The localisation files are in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," format."),(0,o.kt)("p",null,"Behind the scene of the localisation feature, we are using the ",(0,o.kt)("a",{parentName:"p",href:"https://react.i18next.com/"},"react-i18next")," library. You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://formatjs.io/docs/react-intl/"},"react-i18next documentation")," for more information."),(0,o.kt)("h2",{id:"adding-a-new-language"},"Adding a new language"),(0,o.kt)("p",null,"To add a new language, you can create a new folder in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/awesome-feature/locales")," folder. The folder name should be the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes"},"ISO 639-1 code")," of the language. For example, if you want to add the French language, you can create a folder named ",(0,o.kt)("inlineCode",{parentName:"p"},"fr")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/awesome-feature/locales")," folder."),(0,o.kt)("p",null,"Then, you can add the localisation files to the folder. You can name anything for the localisation files. For example, if you want to add the French language for homepage, you can create a file named ",(0,o.kt)("inlineCode",{parentName:"p"},"homepage.json")," in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/awesome-feature/locales/fr")," folder."),(0,o.kt)("p",null,"Next, export the localisation files in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/awesome-feature/locales/index.ts")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"src/features/awesome-feature/index.ts")," file. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// src/features/awesome-feature/locales/index.ts\nexport * from "./fr";\n\n// src/features/awesome-feature/index.ts\nexport * from "./locales";\n')),(0,o.kt)("p",null,"Lastly, you can update the configuration in the ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configs/locales.ts"),". For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'import { fr as homepage } from "features/awesome-feature";\n\nexport const localeConfig = {\n  // Other configurations\n  resources: {\n    // Other languages\n    fr: {\n      ...homepage,\n    },\n  },\n};\n\nexport const languages = {\n  // Other languages\n  fr: "Fran\xe7ais", // The name of the language to be displayed in the language switcher\n};\n')),(0,o.kt)("h2",{id:"localisation-file"},"Localisation file"),(0,o.kt)("p",null,"The localisation files are in the ",(0,o.kt)("a",{parentName:"p",href:"https://www.json.org/json-en.html"},"JSON")," format. The structure of the localisation files is as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "value"\n}\n')),(0,o.kt)("h2",{id:"configuration"},"Configuration"),(0,o.kt)("p",null,"If you want to change the default configuration of the localisation feature, you can modify the configuration at ",(0,o.kt)("inlineCode",{parentName:"p"},"src/configs/locale.ts"),"."),(0,o.kt)("p",null,"You can refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://formatjs.io/docs/react-intl/"},"react-i18next documentation")," for more information."))}p.isMDXComponent=!0}}]);