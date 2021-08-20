var e=Object.defineProperty,a=Object.defineProperties,t=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,l=(a,t,n)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):a[t]=n,o=(e,a)=>{for(var t in a||(a={}))s.call(a,t)&&l(e,t,a[t]);if(n)for(var t of n(a))r.call(a,t)&&l(e,t,a[t]);return e};import"./vendor.6eb69ebd.js";import{c as p}from"./esm.9e7577c4.js";const i={};function c(e){var l,c=e,{components:d}=c,m=((e,a)=>{var t={};for(var l in e)s.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&n)for(var l of n(e))a.indexOf(l)<0&&r.call(e,l)&&(t[l]=e[l]);return t})(c,["components"]);return p("wrapper",(l=o(o({},i),m),a(l,t({components:d,mdxType:"MDXLayout"}))),p("h1",null,"Web Infra"),p("p",null,"Web Infra is a collection of tools for building web based user interface. All tools are open sourced on GitHub and available as NPM packages under ",p("inlineCode",{parentName:"p"},"@ti-fe")," scope. You can navigate through sidebars to the left to learn the details of each package."),p("p",null,"It is built by PingCAP front-end team and optimized for it's internal collaboration workflows."),p("h2",null,"How to read documentation"),p("p",null,"To eliminate most of the type errors during build time and ship products with better quality to our end users, we wrote everything in ",p("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),", an open-source language made by Microsoft which builds on JavaScript with static type definitions and annotations, it can be statically analysed and compiled to plain JavaScript. ",p("em",{parentName:"p"},"You don't need to use TypeScript in order to use those tools"),"."),p("p",null,"This website, including all the code samples throughout this site are also written in TypeScript."),p("p",null,"TypeScript code looks just like modern ES2015+ code with additional type annotations, if you understand JavaScript, then you already understand most of the TypeScript code."),p("h3",null,"A few examples"),p("p",null,"Variables always have type signatures that typically appear after colons."),p("div",o({},{className:"shiki-twoslash-fragment"}),p("pre",o({parentName:"div"},{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#6A737D"}}),"// variables with type annotation")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"const"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"name"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"string"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),";")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"const"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"active"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"boolean"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),";"))))),p("pre",o({parentName:"div"},{className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#6A737D"}}),"// variables with type annotation")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"const"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"name"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"string"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),";")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"const"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"active"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"boolean"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),";")))))),p("p",null,"Interface can be used to describe the shape of objects."),p("div",o({},{className:"shiki-twoslash-fragment"}),p("pre",o({parentName:"div"},{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#6A737D"}}),"// interface to describe the shape of objects")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"interface"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"User"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#FFAB70"}}),"id"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"number")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#FFAB70"}}),"name"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"string")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#FFAB70"}}),"role"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"string")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"}"))))),p("pre",o({parentName:"div"},{className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#6A737D"}}),"// interface to describe the shape of objects")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"interface"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"User"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#E36209"}}),"id"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"number")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#E36209"}}),"name"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"string")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#E36209"}}),"role"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"string")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"}")))))),p("p",null,"All functions are annotated with what kinds of data they accept and what kinds of data they return."),p("div",o({},{className:"shiki-twoslash-fragment"}),p("pre",o({parentName:"div"},{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"function"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"updateUser"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"("),p("span",o({parentName:"div"},{style:{color:"#FFAB70"}}),"id"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"number"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),", "),p("span",o({parentName:"div"},{style:{color:"#FFAB70"}}),"data"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"Partial"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"<"),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"User"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),">)"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"Promise"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"<"),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"void"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"> {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#6A737D"}}),"// implementation")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"}"))))),p("pre",o({parentName:"div"},{className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"function"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"updateUser"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"("),p("span",o({parentName:"div"},{style:{color:"#E36209"}}),"id"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"number"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),", "),p("span",o({parentName:"div"},{style:{color:"#E36209"}}),"data"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"Partial"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"<"),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"User"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),">)"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"Promise"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"<"),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"void"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"> {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#6A737D"}}),"// implementation")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"}")))))),p("p",null,"Sometimes, we need to use a ",p("em",{parentName:"p"},"type variable")," to capture the type of the argument and reuse it later, this is always in all-caps."),p("p",null,"For example, a function that returns the same type of data it was provided:"),p("div",o({},{className:"shiki-twoslash-fragment"}),p("pre",o({parentName:"div"},{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"function"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"identity"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"<"),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),">("),p("span",o({parentName:"div"},{style:{color:"#FFAB70"}}),"arg"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),")"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"return"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," arg;")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"}"))))),p("pre",o({parentName:"div"},{className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"function"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"identity"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"<"),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),">("),p("span",o({parentName:"div"},{style:{color:"#E36209"}}),"arg"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),")"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"return"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," arg;")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"}")))))),p("p",null,"A class that holds a value:"),p("div",o({},{className:"shiki-twoslash-fragment"}),p("pre",o({parentName:"div"},{className:"shiki github-dark",style:{backgroundColor:"#24292e",color:"#e1e4e8"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"class"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"Box"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"<"),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"> {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"readonly"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"private"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#FFAB70"}}),"value"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"T")),p("div",o({parentName:"code"},{className:"line"})),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"constructor"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"("),p("span",o({parentName:"div"},{style:{color:"#FFAB70"}}),"value"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),") {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"    "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"this"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),".value "),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"="),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," value")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  }")),p("div",o({parentName:"code"},{className:"line"})),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"public"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"getValue"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"()"),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),":"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#B392F0"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"    "),p("span",o({parentName:"div"},{style:{color:"#F97583"}}),"return"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}})," "),p("span",o({parentName:"div"},{style:{color:"#79B8FF"}}),"this"),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),".value")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"  }")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#E1E4E8"}}),"}"))))),p("pre",o({parentName:"div"},{className:"shiki github-light",style:{backgroundColor:"#fff",color:"#24292e"}}),p("div",o({parentName:"pre"},{className:"language-id"}),"ts"),p("div",o({parentName:"pre"},{className:"code-container"}),p("code",{parentName:"div"},p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"class"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"Box"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"<"),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"> {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"readonly"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"private"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#E36209"}}),"value"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"T")),p("div",o({parentName:"code"},{className:"line"})),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"constructor"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"("),p("span",o({parentName:"div"},{style:{color:"#E36209"}}),"value"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),") {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"    "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"this"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),".value "),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"="),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," value")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  }")),p("div",o({parentName:"code"},{className:"line"})),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  "),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"public"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"getValue"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"()"),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),":"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#6F42C1"}}),"T"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," {")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"    "),p("span",o({parentName:"div"},{style:{color:"#D73A49"}}),"return"),p("span",o({parentName:"div"},{style:{color:"#24292E"}})," "),p("span",o({parentName:"div"},{style:{color:"#005CC5"}}),"this"),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),".value")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"  }")),p("div",o({parentName:"code"},{className:"line"}),p("span",o({parentName:"div"},{style:{color:"#24292E"}}),"}")))))),p("p",null,"For more resources about learning TypeScript, you can visit it's official page at ",p("a",o({parentName:"p"},{href:"https://www.typescriptlang.org/"}),"www.typescriptlang.org"),"."),p("h2",null,"Design Principles"))}c.isMDXComponent=!0;export{c as default};
