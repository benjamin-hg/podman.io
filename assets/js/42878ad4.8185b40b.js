"use strict";(self.webpackChunkpodman=self.webpackChunkpodman||[]).push([[7627],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),l=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(s.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(n),u=o,f=m["".concat(s,".").concat(u)]||m[u]||d[u]||a;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,p=new Array(a);p[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[m]="string"==typeof e?e:o,p[1]=i;for(var l=2;l<a;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2770:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={},p=void 0,i={unversionedId:"podman-top",id:"podman-top",title:"podman-top",description:"% podman-top 1",source:"@site/docs/podman-top.md",sourceDirName:".",slug:"/podman-top",permalink:"/website-new/docs/podman-top",draft:!1,editUrl:"https://github.com/containers/website-new/docs/podman-top.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"podman-tag",permalink:"/website-new/docs/podman-tag"},next:{title:"podman-unmount",permalink:"/website-new/docs/podman-unmount"}},s={},l=[{value:"NAME",id:"name",level:2},{value:"SYNOPSIS",id:"synopsis",level:2},{value:"DESCRIPTION",id:"description",level:2},{value:"OPTIONS",id:"options",level:2},{value:"<strong>--help</strong>, <strong>-h</strong>",id:"--help--h",level:4},{value:"FORMAT DESCRIPTORS",id:"format-descriptors",level:2},{value:"EXAMPLES",id:"examples",level:2},{value:"SEE ALSO",id:"see-also",level:2},{value:"HISTORY",id:"history",level:2}],c={toc:l},m="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"% podman-top 1"),(0,o.kt)("h2",{id:"name"},"NAME"),(0,o.kt)("p",null,"podman","-","top - Display the running processes of a container"),(0,o.kt)("h2",{id:"synopsis"},"SYNOPSIS"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman top")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"," ",(0,o.kt)("em",{parentName:"p"},"container")," ","[",(0,o.kt)("em",{parentName:"p"},"format-descriptors"),"]"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"podman container top")," ","[",(0,o.kt)("em",{parentName:"p"},"options"),"]"," ",(0,o.kt)("em",{parentName:"p"},"container")," ","[",(0,o.kt)("em",{parentName:"p"},"format-descriptors"),"]"),(0,o.kt)("h2",{id:"description"},"DESCRIPTION"),(0,o.kt)("p",null,"Display the running processes of the container. The ",(0,o.kt)("em",{parentName:"p"},"format-descriptors"),' are ps (1) compatible AIX format descriptors but extended to print additional information, such as the seccomp mode or the effective capabilities of a given process. The descriptors can either be passed as separated arguments or as a single comma-separated argument. Note that options and or flags of ps(1) can also be specified; in this case, Podman will fallback to executing ps with the specified arguments and flags in the container. Please use the "h',"*",'" descriptors to extract host-related information. For instance, ',(0,o.kt)("inlineCode",{parentName:"p"},"podman top $name hpid huser")," to display the PID and user of the processes in the host context."),(0,o.kt)("h2",{id:"options"},"OPTIONS"),(0,o.kt)("h4",{id:"--help--h"},(0,o.kt)("strong",{parentName:"h4"},"--help"),", ",(0,o.kt)("strong",{parentName:"h4"},"-h")),(0,o.kt)("p",null,"Print usage statement"),(0,o.kt)("p",null,"@@option latest"),(0,o.kt)("h2",{id:"format-descriptors"},"FORMAT DESCRIPTORS"),(0,o.kt)("p",null,"The following descriptors are supported in addition to the AIX format descriptors mentioned in ps (1):"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"args, capbnd, capeff, capinh, capprm, comm, etime, group, hgroup, hpid, huser, label, nice, pcpu, pgid, pid, ppid, rgroup, ruser, seccomp, state, time, tty, user, vsz")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"capbnd")),(0,o.kt)("p",null,"Set of bounding capabilities. See capabilities (7) for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"capeff")),(0,o.kt)("p",null,"Set of effective capabilities. See capabilities (7) for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"capinh")),(0,o.kt)("p",null,"Set of inheritable capabilities. See capabilities (7) for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"capprm")),(0,o.kt)("p",null,"Set of permitted capabilities. See capabilities (7) for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"hgroup")),(0,o.kt)("p",null,"The corresponding effective group of a container process on the host."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"hpid")),(0,o.kt)("p",null,"The corresponding host PID of a container process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"huser")),(0,o.kt)("p",null,"The corresponding effective user of a container process on the host."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"label")),(0,o.kt)("p",null,"Current security attributes of the process."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"seccomp")),(0,o.kt)("p",null,"Seccomp mode of the process (i.e., disabled, strict or filter). See seccomp (2) for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"state")),(0,o.kt)("p",null,"Process state codes (e.g, ",(0,o.kt)("strong",{parentName:"p"},"R")," for ",(0,o.kt)("em",{parentName:"p"},"running"),", ",(0,o.kt)("strong",{parentName:"p"},"S")," for ",(0,o.kt)("em",{parentName:"p"},"sleeping"),"). See proc(5) for more information."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"stime")),(0,o.kt)("p",null,'Process start time (e.g, "2019-12-09 10:50:36 +0100 CET).'),(0,o.kt)("h2",{id:"examples"},"EXAMPLES"),(0,o.kt)("p",null,"By default, ",(0,o.kt)("inlineCode",{parentName:"p"},"podman-top")," prints data similar to ",(0,o.kt)("inlineCode",{parentName:"p"},"ps -ef"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman top f5a62a71b07\nUSER   PID   PPID   %CPU    ELAPSED         TTY     TIME   COMMAND\nroot   1     0      0.000   20.386825206s   pts/0   0s     sh\nroot   7     1      0.000   16.386882887s   pts/0   0s     sleep\nroot   8     1      0.000   11.386886562s   pts/0   0s     vi\n")),(0,o.kt)("p",null,"The output can be controlled by specifying format descriptors as arguments after the container:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman top -l pid seccomp args %C\nPID   SECCOMP   COMMAND     %CPU\n1     filter    sh          0.000\n8     filter    vi /etc/    0.000\n")),(0,o.kt)("p",null,"Podman will fallback to executing ps(1) in the container if an unknown descriptor is specified."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"$ podman top -l -- aux\nUSER   PID   PPID   %CPU    ELAPSED             TTY   TIME   COMMAND\nroot   1     0      0.000   1h2m12.497061672s   ?     0s     sleep 100000\n")),(0,o.kt)("h2",{id:"see-also"},"SEE ALSO"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},(0,o.kt)("a",{parentName:"strong",href:"/website-new/docs/podman"},"podman(1)")),", ",(0,o.kt)("strong",{parentName:"p"},"ps(1)"),", ",(0,o.kt)("strong",{parentName:"p"},"seccomp(2)"),", ",(0,o.kt)("strong",{parentName:"p"},"proc(5)"),", ",(0,o.kt)("strong",{parentName:"p"},"capabilities(7)")),(0,o.kt)("h2",{id:"history"},"HISTORY"),(0,o.kt)("p",null,"July 2018, Introduce format descriptors by Valentin Rothberg ",(0,o.kt)("a",{parentName:"p",href:"mailto:vrothberg@suse.com"},"vrothberg@suse.com")),(0,o.kt)("p",null,"December 2017, Originally compiled by Brent Baude ",(0,o.kt)("a",{parentName:"p",href:"mailto:bbaude@redhat.com"},"bbaude@redhat.com")))}d.isMDXComponent=!0}}]);