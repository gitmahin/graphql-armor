"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[692],{876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>g});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(p,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(g,i(i({ref:t},s),{},{components:r})):n.createElement(g,i({ref:t},s))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8180:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=r(7896),a=(r(2784),r(876));const o={},i="Max Directives",l={unversionedId:"plugins/max-directives",id:"plugins/max-directives",title:"Max Directives",description:"Limit the number of directives in a GraphQL document.",source:"@site/docs/plugins/max-directives.md",sourceDirName:"plugins",slug:"/plugins/max-directives",permalink:"/graphql-armor/docs/plugins/max-directives",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/max-directives.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Max Depth",permalink:"/graphql-armor/docs/plugins/max-depth"},next:{title:"Max Tokens",permalink:"/graphql-armor/docs/plugins/max-tokens"}},p={},c=[{value:"Configuring for GraphQL Armor",id:"configuring-for-graphql-armor",level:2},{value:"Standalone usage",id:"standalone-usage",level:2},{value:"Installation",id:"installation",level:3},{value:"With <code>@graphql/graphql-js</code>",id:"with-graphqlgraphql-js",level:3},{value:"With <code>@envelop/core</code> from <code>@the-guild-org</code>",id:"with-envelopcore-from-the-guild-org",level:3}],s={toc:c},u="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"max-directives"},"Max Directives"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Limit")," the number of ",(0,a.kt)("strong",{parentName:"p"},"directives")," in a GraphQL document."),(0,a.kt)("p",null,"It is used to prevent ",(0,a.kt)("strong",{parentName:"p"},"DOS attack"),", ",(0,a.kt)("strong",{parentName:"p"},"heap overflow")," or ",(0,a.kt)("strong",{parentName:"p"},"server overloading"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuring-for-graphql-armor"},"Configurating through GraphQL Armor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#standalone-usage"},"Standalone usage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#with-graphqlgraphql-js"},"With ",(0,a.kt)("inlineCode",{parentName:"a"},"@graphql/graphql-js"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#with-envelopcore-from-the-guild-org"},"With ",(0,a.kt)("inlineCode",{parentName:"a"},"@envelop/core")," from ",(0,a.kt)("inlineCode",{parentName:"a"},"@the-guild-org")))))),(0,a.kt)("h2",{id:"configuring-for-graphql-armor"},"Configuring for GraphQL Armor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"GraphQLArmor({\n  maxDirectives: {\n    // Toogle the plugin | default: true\n    enabled?: boolean,\n    \n    // Directives threshold | default: 50\n    n?: int,\n\n    // Callbacks that are ran whenever a Query is accepted\n    onAccept?: GraphQLArmorAcceptCallback[],\n\n    // Callbacks that are ran whenever a Query is rejected\n    onReject?: GraphQLArmorRejectCallback[],\n\n    // Do you want to propagate the rejection to the client? | default: true\n    propagateOnRejection?: boolean,\n  }\n})\n")),(0,a.kt)("h2",{id:"standalone-usage"},"Standalone usage"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxDirectives")," plugin out of GraphQL Armor, you can install it from npm:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @escape.tech/graphql-armor-max-directives\n\n# yarn\nyarn add @escape.tech/graphql-armor-max-directives\n")),(0,a.kt)("h3",{id:"with-graphqlgraphql-js"},"With ",(0,a.kt)("inlineCode",{parentName:"h3"},"@graphql/graphql-js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { maxDirectivesRule } from '@escape.tech/graphql-armor-max-directives';\n")),(0,a.kt)("h3",{id:"with-envelopcore-from-the-guild-org"},"With ",(0,a.kt)("inlineCode",{parentName:"h3"},"@envelop/core")," from ",(0,a.kt)("inlineCode",{parentName:"h3"},"@the-guild-org")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { envelop } from '@envelop/core';\nimport { maxDirectivesPlugin } from '@escape.tech/graphql-armor-max-directives';\n\nconst getEnveloped = envelop({\n  plugins: [\n    // ... other plugins ...\n    maxDirectivesPlugin({\n        n: 50, // Number of directives allowed | Default: 50\n    }),\n  ]\n});\n")))}m.isMDXComponent=!0}}]);