"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{5212:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var n=r(7896),o=(r(2784),r(876));const a={sidebar_position:1},l="Getting started",p={unversionedId:"getting-started",id:"getting-started",title:"Getting started",description:"This package is dedicated to any GraphQL developer who wants to add a security layer to their API, in a simple and efficient way.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/graphql-armor/docs/getting-started",draft:!1,editUrl:"https://github.com/Escape-Technologies/graphql-armor/blob/main/services/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Supported Engines",permalink:"/graphql-armor/docs/supported-engines"}},i={},s=[{value:"Installation",id:"installation",level:2},{value:"Usage",id:"usage",level:2},{value:"Apollo Server",id:"apollo-server",level:3},{value:"GraphQL Yoga",id:"graphql-yoga",level:3},{value:"Envelop",id:"envelop",level:3}],c={toc:s},u="wrapper";function m(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting started"),(0,o.kt)("p",null,"This package is dedicated to any ",(0,o.kt)("strong",{parentName:"p"},"GraphQL developer")," who wants to add a security layer to their API, in a simple and efficient way."),(0,o.kt)("p",null,"GraphQL Armor mainly focused on limiting the impact of malicious ",(0,o.kt)("strong",{parentName:"p"},"GraphQL operations"),"."),(0,o.kt)("p",null,"You can find more information about the upcoming features on our ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Escape-Technologies/graphql-armor/issues"},"issues page"),"."),(0,o.kt)("p",null,"If you need help or want to discuss about the project, you can hop in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Escape-Technologies/graphql-armor/discussions"},"project discussions"),"."),(0,o.kt)("h2",{id:"installation"},"Installation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install -S @escape.tech/graphql-armor\n\n# yarn\nyarn add @escape.tech/graphql-armor\n")),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("p",null,"We provided ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/Escape-Technologies/graphql-armor/tree/main/examples"},"some examples")," to help you get started with GraphQL Armor."),(0,o.kt)("p",null,"We will detail the usage of GraphQL Armor in the following sections:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#apollo-server"},"Apollo Server")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#graphql-yoga"},"GraphQL Yoga")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#envelop"},"Envelop"))),(0,o.kt)("h3",{id:"apollo-server"},"Apollo Server"),(0,o.kt)("p",null,"If you do not use plugins and validations rules, we recommend you to proceed with the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApolloArmor } from '@escape.tech/graphql-armor';\n\ninterface AppContext {\n    token?: string;\n}\n\nconst armor = new ApolloArmor();\n\nconst server = new ApolloServer<AppContext>({\n  typeDefs,\n  resolvers,\n  ...armor.protect()\n});\n")),(0,o.kt)("p",null,"Otherwise, if you already have some plugins or validation rules, we recommend you to proceed this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { ApolloArmor } from '@escape.tech/graphql-armor';\n\ninterface AppContext {\n    token?: string;\n}\n\nconst armor = new ApolloArmor();\nconst protection = armor.protect()\n\nconst server = new ApolloServer<AppContext>({\n  typeDefs,\n  resolvers,\n  ...protection,\n  plugins: [...protection.plugins, myPlugin1, myPlugin2 ]\n  validationRules: [, ...protection.validationRules, myRule1, myRule2 ]\n});\n")),(0,o.kt)("h3",{id:"graphql-yoga"},"GraphQL Yoga"),(0,o.kt)("p",null,"If you do not use plugins and validations rules, we recommend you to proceed with the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { EnvelopArmor } from '@escape.tech/graphql-armor';\n\nconst armor = new EnvelopArmor();\nconst protection = armor.protect()\n\nasync function main() {\n  const server = createServer({\n    schema,\n    plugins: [...protection.plugins],\n  });\n  await server.start();\n}\n\nmain();\n")),(0,o.kt)("p",null,"Otherwise, if you already have some plugins or validation rules, we recommend you to proceed this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { EnvelopArmorPlugin } from '@escape.tech/graphql-armor';\n\nasync function main() {\n  const server = createServer({\n    schema,\n    plugins: [EnvelopArmorPlugin()],\n  });\n  await server.start();\n}\n\nmain();\n")),(0,o.kt)("h3",{id:"envelop"},"Envelop"),(0,o.kt)("p",null,"If you do not use plugins and validations rules, we recommend you to proceed with the following example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { EnvelopArmor } from '@escape.tech/graphql-armor';\n\nconst armor = new EnvelopArmor();\nconst protection = armor.protect()\n\nconst getEnveloped = envelop({\n  plugins: [otherPlugins, ...protection.plugins],\n});\n")),(0,o.kt)("p",null,"Otherwise, if you already have some plugins or validation rules, we recommend you to proceed this way:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"import { EnvelopArmorPlugin } from '@escape.tech/graphql-armor';\n\nconst getEnveloped = envelop({\n  plugins: [otherPlugins, EnvelopArmorPlugin()],\n});\n")))}m.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>g});var n=r(2784);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),s=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,g=u["".concat(i,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(g,l(l({ref:t},c),{},{components:r})):n.createElement(g,l({ref:t},c))}));function g(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[u]="string"==typeof e?e:o,l[1]=p;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);