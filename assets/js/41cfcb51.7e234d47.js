"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[6303],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),p=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return a.createElement(m.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,m=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),c=p(n),u=r,f=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return n?a.createElement(f,i(i({ref:t},l),{},{components:n})):a.createElement(f,i({ref:t},l))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s[c]="string"==typeof e?e:r,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4505:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const o={},i=void 0,s={unversionedId:"podman-manifest/podman-manifest-annotate",id:"podman-manifest/podman-manifest-annotate",title:"podman-manifest-annotate",description:"% podman-manifest-annotate 1",source:"@site/docs/podman-manifest/podman-manifest-annotate.md",sourceDirName:"podman-manifest",slug:"/podman-manifest/podman-manifest-annotate",permalink:"/website-new/docs/podman-manifest/podman-manifest-annotate",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-manifest/podman-manifest-annotate.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-manifest-add",permalink:"/website-new/docs/podman-manifest/podman-manifest-add"},next:{title:"podman-manifest-create",permalink:"/website-new/docs/podman-manifest/podman-manifest-create"}},m={},p=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--arch</strong>",id:"--arch",level:4},{value:"<strong>--os</strong>",id:"--os",level:4},{value:"<strong>--os-features</strong>",id:"--os-features",level:4},{value:"EXAMPLE",id:"example",level:2},{value:"SEE ALSO",id:"see-also",level:2}],l={toc:p},c="wrapper";function d(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"% podman-manifest-annotate 1"),(0,r.kt)("h2",{id:"name"},"NAME"),(0,r.kt)("p",null,"podman","-","manifest","-","annotate - Add or update information about an entry in a manifest list or image index"),(0,r.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"podman manifest annotate")," ","[",(0,r.kt)("em",{parentName:"p"},"options"),"]"," ",(0,r.kt)("em",{parentName:"p"},"listnameorindexname")," ",(0,r.kt)("em",{parentName:"p"},"imagemanifestdigest")),(0,r.kt)("h2",{id:"description"},"DESCRIPTION"),(0,r.kt)("p",null,"Adds or updates information about an image included in a manifest list or image index."),(0,r.kt)("h2",{id:"options"},"OPTIONS"),(0,r.kt)("p",null,"@@option annotation.manifest"),(0,r.kt)("h4",{id:"--arch"},(0,r.kt)("strong",{parentName:"h4"},"--arch")),(0,r.kt)("p",null,"Override the architecture which the list or index records as a requirement for\nthe image. This is usually automatically retrieved from the image's\nconfiguration information, so it is rarely necessary to use this option."),(0,r.kt)("p",null,"@@option features"),(0,r.kt)("h4",{id:"--os"},(0,r.kt)("strong",{parentName:"h4"},"--os")),(0,r.kt)("p",null,"Override the OS which the list or index records as a requirement for the image.\nThis is usually automatically retrieved from the image's configuration\ninformation, so it is rarely necessary to use this option."),(0,r.kt)("h4",{id:"--os-features"},(0,r.kt)("strong",{parentName:"h4"},"--os-features")),(0,r.kt)("p",null,"Specify the OS features list which the list or index records as requirements\nfor the image. This option is rarely used."),(0,r.kt)("p",null,"@@option os-version"),(0,r.kt)("p",null,"@@option variant.manifest"),(0,r.kt)("h2",{id:"example"},"EXAMPLE"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"podman manifest annotate --arch arm64 --variant v8 mylist:v11 sha256:59eec8837a4d942cc19a52b8c09ea75121acc38114a2c68b98983ce9356b8610\n07ec8dc22b5dba3a33c60b68bce28bbd2b905e383fdb32a90708fa5eeac13a07: sha256:59eec8837a4d942cc19a52b8c09ea75121acc38114a2c68b98983ce9356b8610\n")),(0,r.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("a",{parentName:"strong",href:"/website-new/docs/podman-manifest/"},"podman-manifest(1)"))))}d.isMDXComponent=!0}}]);