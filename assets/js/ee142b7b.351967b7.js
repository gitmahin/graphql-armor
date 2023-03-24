"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[842],{876:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(2784);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),h=a,d=s["".concat(i,".").concat(h)]||s[h]||m[h]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=h;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9887:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var n=r(7896),a=(r(2784),r(876));const o={},l="Max Depth",p={unversionedId:"plugins/max-depth",id:"plugins/max-depth",title:"Max Depth",description:"Limit the depth of a GraphQL document.",source:"@site/docs/plugins/max-depth.md",sourceDirName:"plugins",slug:"/plugins/max-depth",permalink:"/graphql-armor/docs/plugins/max-depth",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/plugins/max-depth.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Max Aliases",permalink:"/graphql-armor/docs/plugins/max-aliases"},next:{title:"Max Directives",permalink:"/graphql-armor/docs/plugins/max-directives"}},i={},c=[{value:"Configuring for GraphQL Armor",id:"configuring-for-graphql-armor",level:2},{value:"Standalone usage",id:"standalone-usage",level:2},{value:"Installation",id:"installation",level:3},{value:"With <code>@graphql/graphql-js</code>",id:"with-graphqlgraphql-js",level:3},{value:"With <code>@envelop/core</code> from <code>@the-guild-org</code>",id:"with-envelopcore-from-the-guild-org",level:3}],u={toc:c},s="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(s,(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"max-depth"},"Max Depth"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Limit")," the ",(0,a.kt)("strong",{parentName:"p"},"depth")," of a GraphQL document."),(0,a.kt)("p",null,"It is used to prevent too large queries that could lead to overfetching or ",(0,a.kt)("strong",{parentName:"p"},"DOS attack"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#configuring-for-graphql-armor"},"Configurating through GraphQL Armor")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#standalone-usage"},"Standalone usage"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#installation"},"Installation")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#with-graphqlgraphql-js"},"With ",(0,a.kt)("inlineCode",{parentName:"a"},"@graphql/graphql-js"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"#with-envelopcore-from-the-guild-org"},"With ",(0,a.kt)("inlineCode",{parentName:"a"},"@envelop/core")," from ",(0,a.kt)("inlineCode",{parentName:"a"},"@the-guild-org")))))),(0,a.kt)("h2",{id:"configuring-for-graphql-armor"},"Configuring for GraphQL Armor"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"GraphQLArmor({\n  maxDepth: {\n    // Toogle the plugin | default: true\n    enabled?: boolean,\n    \n    // Directives threshold | default: 6\n    n?: int,\n\n    // Ignore the depth of introspection queries | default: true\n    ignoreIntrospection?: boolean,\n\n    // Callbacks that are ran whenever a Query is accepted\n    onAccept?: GraphQLArmorAcceptCallback[],\n\n    // Callbacks that are ran whenever a Query is rejected\n    onReject?: GraphQLArmorRejectCallback[],\n\n    // Do you want to propagate the rejection to the client? | default: true\n    propagateOnRejection?: boolean,\n  }\n})\n")),(0,a.kt)("h2",{id:"standalone-usage"},"Standalone usage"),(0,a.kt)("h3",{id:"installation"},"Installation"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you want to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"maxDepth")," plugin out of GraphQL Armor, you can install it from npm:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# npm\nnpm install @escape.tech/graphql-armor-max-depth\n\n# yarn\nyarn add @escape.tech/graphql-armor-max-depth\n")),(0,a.kt)("h3",{id:"with-graphqlgraphql-js"},"With ",(0,a.kt)("inlineCode",{parentName:"h3"},"@graphql/graphql-js")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { maxDepthRule } from '@escape.tech/graphql-armor-max-depth';\n")),(0,a.kt)("h3",{id:"with-envelopcore-from-the-guild-org"},"With ",(0,a.kt)("inlineCode",{parentName:"h3"},"@envelop/core")," from ",(0,a.kt)("inlineCode",{parentName:"h3"},"@the-guild-org")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"import { envelop } from '@envelop/core';\nimport { maxDepthPlugin } from '@escape.tech/graphql-armor-max-depth';\n\nconst getEnveloped = envelop({\n  plugins: [\n    // ... other plugins ...\n    maxDepthPlugin({\n        n: 6,\n    }),\n  ]\n});\n")))}m.isMDXComponent=!0}}]);