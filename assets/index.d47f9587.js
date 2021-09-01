var e,t,l=Object.defineProperty,r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,n=Object.prototype.propertyIsEnumerable,o=(e,t,r)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,i=(e,t)=>{for(var l in t||(t={}))a.call(t,l)&&o(e,l,t[l]);if(r)for(var l of r(t))n.call(t,l)&&o(e,l,t[l]);return e};import{c as s,a as c,p as m,b as d,d as u,e as p,u as h,f as v,r as f,R as g,g as E,I as x,h as b,P as y,i as w,j as _}from"./vendor.6eb69ebd.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const l of e)if("childList"===l.type)for(const e of l.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const k=s({name:"globals",initialState:{darkMode:null!=(t=null==(e=null==window?void 0:window.matchMedia("(prefers-color-scheme: dark)"))?void 0:e.matches)&&t},reducers:{toggleDarkMode(e){e.darkMode=!e.darkMode}}}),N={},L=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`/web-infra/${e}`)in N)return;N[e]=!0;const t=e.endsWith(".css"),l=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${l}`))return;const r=document.createElement("link");return r.rel=t?"stylesheet":"modulepreload",t||(r.as="script",r.crossOrigin=""),r.href=e,document.head.appendChild(r),t?new Promise(((e,t)=>{r.addEventListener("load",e),r.addEventListener("error",t)})):void 0}))).then((()=>e())):e()},O={"./docs/au début.mdx":()=>L((()=>import("./au début.a79e5abc.js")),["assets/au début.a79e5abc.js","assets/vendor.6eb69ebd.js","assets/esm.9e7577c4.js"]),"./docs/cli.mdx":()=>L((()=>import("./cli.64b11fe4.js")),["assets/cli.64b11fe4.js","assets/vendor.6eb69ebd.js","assets/esm.9e7577c4.js"]),"./docs/create app.mdx":()=>L((()=>import("./create app.509d1f18.js")),["assets/create app.509d1f18.js","assets/vendor.6eb69ebd.js","assets/esm.9e7577c4.js"]),"./docs/eslint config.mdx":()=>L((()=>import("./eslint config.edb5506b.js")),["assets/eslint config.edb5506b.js","assets/vendor.6eb69ebd.js","assets/esm.9e7577c4.js"]),"./docs/prettier config.mdx":()=>L((()=>import("./prettier config.8904c573.js")),["assets/prettier config.8904c573.js","assets/vendor.6eb69ebd.js","assets/esm.9e7577c4.js"])};for(const Z in O){const e=Z.replace("./docs/","").replace(".mdx","").toLowerCase().split(" ").join("-");O[e]=O[Z],delete O[Z]}const P=window.location.hash.slice(1),M=s({name:"routes",initialState:{route:decodeURIComponent(P)||Object.keys(O)[0]},reducers:{setRoute(e,t){e.route=t.payload}}}),j=d({reducer:m({key:"root",version:1,storage:p,whitelist:["globals"]},c({globals:k.reducer,routes:M.reducer})),middleware:e=>e({serializableCheck:!1}),devTools:!1}),z=u(j),I=()=>v(),V=h,A=i(i({},k.actions),M.actions);var T,C,R,D,S,U,B;function G(){return(G=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function F(e){return f.exports.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 286.3 286.3"},e),T||(T=f.exports.createElement("circle",{cx:143.15,cy:143.15,r:143.15,fill:"#fff"})),C||(C=f.exports.createElement("path",{fill:"none",d:"M64.65 50.65h185v185h-185z"})),R||(R=f.exports.createElement("path",{d:"M175.65 93.78L94.34 70.91a8.83 8.83 0 00-7.7 1.42 8.52 8.52 0 00-3.49 6.9V227a8.59 8.59 0 003.34 6.8 8.81 8.81 0 005.42 1.86 9 9 0 002-.24l81.31-19.1a8.66 8.66 0 006.74-8.42V102.1a8.71 8.71 0 00-6.31-8.32z",fill:"#172d72"})),D||(D=f.exports.createElement("path",{d:"M231 88.52a8.73 8.73 0 00-6.37-8.3L121.18 51a8.82 8.82 0 00-7.7 1.41 8.54 8.54 0 00-3.48 6.9v112.12a8.54 8.54 0 003.34 6.8 8.81 8.81 0 005.42 1.86 8.68 8.68 0 002.07-.25l103.61-24.58a8.66 8.66 0 006.72-8.44z",fill:"#00aeef"})),S||(S=f.exports.createElement("path",{d:"M175.65 93.78L110 75.31v96.12a8.54 8.54 0 003.34 6.8 8.81 8.81 0 005.42 1.86 8.68 8.68 0 002.07-.25L182 165.32V102.1a8.71 8.71 0 00-6.35-8.32z",fill:"#3d3fea"})))}function H(){return(H=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e}).apply(this,arguments)}function $(e){return f.exports.createElement("svg",H({className:"pingcap_name_logo_svg__icon",viewBox:"0 0 4465 1024",xmlns:"http://www.w3.org/2000/svg",width:872.07,height:200},e),U||(U=f.exports.createElement("defs",null,f.exports.createElement("style",null))),B||(B=f.exports.createElement("path",{d:"M3338.03 653.643l-1.294 2.116a234.367 234.367 0 01-79.807 76.163 214.033 214.033 0 01-109.309 31.618 218.147 218.147 0 01-165.373-75.459 254.936 254.936 0 01-66.173-180.3 251.292 251.292 0 0168.289-171.015 211.565 211.565 0 01158.909-71.58c83.568-.823 146.685 33.733 192.759 105.783l1.293 2.115h.705l54.42-33.615a303.126 303.126 0 00-89.68-95.792 280.677 280.677 0 00-155.501-47.015 272.92 272.92 0 00-207.804 88.505c-57.828 59.474-87.095 135.402-87.095 225.67a326.633 326.633 0 0086.037 226.375 271.626 271.626 0 00205.688 93.206h2.939a284.32 284.32 0 00245.063-143.16zm405.617-449.106h-73.813l-274.33 614.127h87.565l84.743-204.16h.118l29.972-63.705h-.118l110.484-259.285L3816.52 550.8h-155.383l-28.326 63.705h208.862l85.566 204.16h77.222l-260.813-614.127zm662.199 56.183a220.028 220.028 0 00-152.797-55.477H4055v613.421h72.403V271.415h129.29a144.217 144.217 0 0194.028 32.793 105.783 105.783 0 0142.901 81.218 108.016 108.016 0 01-38.552 94.029 135.99 135.99 0 01-94.852 35.26h-74.988v64.528h86.742a194.052 194.052 0 00135.637-52.304 169.017 169.017 0 0057.945-127.291 173.366 173.366 0 00-59.708-138.928zm-2696.634-44.076h72.402v72.402h-72.402zm0 162.2h72.402v440.76h-72.402zm1090.501 396.92V586.177a224.612 224.612 0 00-71.344-169.84 229.666 229.666 0 00-332.745 3.173 233.78 233.78 0 00-65.703 165.844 237.893 237.893 0 0071.344 172.19 221.32 221.32 0 00169.958 68.171 225.67 225.67 0 00159.967-71.697v29.972m0 0a137.635 137.635 0 01-47.015 104.137 157.616 157.616 0 01-110.484 45.016 161.847 161.847 0 01-98.495-32.91 151.152 151.152 0 01-52.186-61.354l-55.478 32.088a212.623 212.623 0 0057.946 70.522 237.776 237.776 0 00141.043 49.717h10.344a238.01 238.01 0 00151.504-53.831 178.185 178.185 0 0071.697-144.335v-17.278m-70.522-184.766a170.545 170.545 0 01-49.013 117.536 149.506 149.506 0 01-113.422 48.66 158.791 158.791 0 01-117.536-48.778 164.55 164.55 0 01-50.423-118.359 166.431 166.431 0 0145.604-119.887 158.321 158.321 0 01113.657-54.89h8.698a148.448 148.448 0 01113.187 50.541 165.961 165.961 0 0149.366 124.941zM1580.392 260.72a220.145 220.145 0 00-152.797-55.477h-198.4v613.421h72.401V271.415h129.29a143.864 143.864 0 0194.03 32.793 105.783 105.783 0 0142.9 81.218 107.898 107.898 0 01-38.434 94.029 136.342 136.342 0 01-94.97 35.26h-74.988v64.528h86.742a194.052 194.052 0 00135.167-51.481 168.194 168.194 0 0058.65-128.114 173.719 173.719 0 00-59.59-138.928zm485.543 91.09a195.933 195.933 0 00-145.158 58.768 203.103 203.103 0 00-57.71 147.39v258.58h69.816V552.446a126.94 126.94 0 0139.375-94.03 128.35 128.35 0 0194.03-39.256 124.941 124.941 0 0191.677 39.257 126.94 126.94 0 0139.963 94.029v265.279h70.521v-258.58a203.22 203.22 0 00-58.768-147.743 194.64 194.64 0 00-143.746-59.59zM818.758 211.59a51.48 51.48 0 00-37.612-49.13L213.446 2.021a52.186 52.186 0 00-45.604 8.346 50.776 50.776 0 00-20.687 40.902v83.098l-80.982-22.92a52.304 52.304 0 00-45.487 8.463A50.54 50.54 0 000 160.814v811.94a50.658 50.658 0 0019.746 40.198A52.069 52.069 0 0051.834 1024a53.244 53.244 0 0011.753-1.41l446.638-104.96a51.246 51.246 0 0039.845-49.953V636.718l229.783-54.537a51.48 51.48 0 0039.845-49.953zm-775.74-41.256a16.455 16.455 0 016.582-13.046 17.278 17.278 0 019.991-3.291 15.515 15.515 0 014.584.705l83.098 23.507v489.186a51.598 51.598 0 0051.833 51.246 52.656 52.656 0 0012.46-1.646l295.603-70.521v211.565a21.392 21.392 0 01-16.573 20.804L63.352 979.219a16.338 16.338 0 01-14.104-3.056A16.102 16.102 0 0142.9 963.82zm153.62 500.822a16.808 16.808 0 01-6.347-12.929l-.587-468.029 301.48 84.861a21.51 21.51 0 0115.632 20.569v307.945l-296.073 70.522a16.808 16.808 0 01-14.105-2.939zm315.585-434.061l-322.52-90.856V61.261a15.985 15.985 0 016.583-13.047 16.338 16.338 0 0114.457-2.703l549.246 155.265a21.627 21.627 0 0115.75 20.452V522.59a21.039 21.039 0 01-16.455 20.687l-209.45 50.07V286.46a51.598 51.598 0 00-37.611-49.365z"})))}var q={nav:[{title:"AU DÉBUT",children:[{title:"Get started",level:2,route:"get-started"},{title:"How to read documentation",level:2,route:"how-to-read-documentation"},{title:"Design Principles",level:2,route:"design-principles"}],level:0,route:"au-début"},{title:"CLI",children:[],level:0,route:"cli"},{title:"CREATE APP",children:[],level:0,route:"create-app"},{title:"ESLINT CONFIG",children:[{title:"Introduction",level:2,route:"introduction"},{title:"Usage",level:2,route:"usage"},{title:"Philosophy",level:2,route:"philosophy"}],level:0,route:"eslint-config"},{title:"PRETTIER CONFIG",children:[{title:"Introduction",level:2,route:"introduction"},{title:"Usage",level:2,route:"usage"}],level:0,route:"prettier-config"}]};const W=({title:e,route:t,items:l,className:r,style:a,level:n})=>{const o=I(),i=V((e=>e.routes.route)),s=f.exports.useCallback((()=>{o(A.setRoute(t))}),[t]),c=f.exports.useMemo((()=>i.startsWith(t)),[t,i]),m=f.exports.useMemo((()=>0===n||i.includes(t)),[n,t,i]);return g.createElement("li",null,g.createElement("div",null,g.createElement("a",{href:"#"+t,onClick:s,style:a,className:E("flex flex-col py-5px hover:font-bold",m&&"font-bold",r)},e),c&&l&&g.createElement("ul",null,l.map((e=>g.createElement(W,{title:e.title,route:[t,e.route].join("."),level:e.level,key:e.route,style:{marginLeft:20*(e.level-1)+"px"}}))))))},K=()=>g.createElement("ul",{className:"py-15px"},q.nav.map((e=>g.createElement(W,{key:e.title,title:e.title,items:e.children,route:e.route,level:e.level})))),Y=()=>{const e=I(),t=V((e=>e.globals.darkMode));return g.createElement("div",{className:"relative w-270px flex-grow-0 flex-shrink-0"},g.createElement("div",{className:E("site-nav transition",t?"bg-dark-gray5 text-white":"bg-white text-dark-gray1")},g.createElement("div",{className:"site-nav-title"},g.createElement($,null)),g.createElement("div",{className:"site-nav-divider"}),g.createElement("div",{className:"site-nav-button",onClick:()=>e(A.toggleDarkMode())},t?g.createElement(x,null):g.createElement(b,null),g.createElement("span",{className:"ml-4"},t?"Light Theme":"Dark Theme")),g.createElement("div",{className:"site-nav-divider"}),g.createElement(K,null),g.createElement("small",{className:"flex items-center px-15px"},g.createElement("span",{className:"flex items-center mr-2"},"© ",(new Date).getFullYear(),g.createElement(F,{className:"mx-5px",height:14,width:14}),g.createElement("a",{href:"https://pingcap.com/",className:"hover:underline",target:"_blank"},"PingCAP")),g.createElement("a",{href:"https://github.com/ti-fe/web-infra",target:"_blank",className:"hover:underline"},"View on GitHub"))))},J=()=>{const e=V((e=>e.routes.route)).split(".")[0],t=f.exports.useMemo((()=>f.exports.lazy(O[e])),[e]);return g.createElement("main",{className:"site-main-content flex-1 px-40px py-15px"},g.createElement(f.exports.Suspense,{fallback:"loading..."},g.createElement(t,null)))};function Q(){const e=V((e=>e.globals.darkMode));return g.createElement("div",{className:E("min-h-100vh transition",e?"dark-theme":"light-theme",e?"bg-dark-gray4 text-white":"bg-light-100 text-dark-gray1")},g.createElement("div",{className:"flex flex-row max-w-1100px min-h-100vh m-auto"},g.createElement(Y,null),g.createElement(J,null)))}function X(){return g.createElement(y,{store:j},g.createElement(w,{loading:null,persistor:z},g.createElement(Q,null)))}_.render(g.createElement(g.StrictMode,null,g.createElement(X,null)),document.getElementById("app"));export{A as a,I as u};
