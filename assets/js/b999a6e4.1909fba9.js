"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[927],{5428:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>p,toc:()=>c});var a=r(7896),n=(r(2784),r(876));const o={},i="Types",p={unversionedId:"api/types",id:"api/types",title:"Types",description:"Import types to configure GraphQL Armor from the @escape.tech/graphql-armor-types package or each plugin individually.",source:"@site/docs/api/types.md",sourceDirName:"api",slug:"/api/types",permalink:"/graphql-armor/docs/api/types",draft:!1,editUrl:"https://github.com/Escape-Technologies/graphql-armor/blob/main/services/docs/docs/api/types.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"API",permalink:"/graphql-armor/docs/category/api"},next:{title:"Configuration",permalink:"/graphql-armor/docs/category/configuration"}},l={},c=[{value:"Config",id:"config",level:2},{value:"Callbacks",id:"callbacks",level:2},{value:"Configuration",id:"configuration",level:3},{value:"GraphQLArmorAcceptCallback",id:"graphqlarmoracceptcallback",level:3},{value:"GraphQLArmorRejectCallback",id:"graphqlarmorrejectcallback",level:3},{value:"Plugins",id:"plugins",level:2}],s={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"types"},"Types"),(0,n.kt)("p",null,"Import types to configure GraphQL Armor from the ",(0,n.kt)("inlineCode",{parentName:"p"},"@escape.tech/graphql-armor-types")," package or each ",(0,n.kt)("a",{parentName:"p",href:"../category/plugins/"},"plugin")," individually."),(0,n.kt)("h2",{id:"config"},"Config"),(0,n.kt)("p",null,"The complete set of ",(0,n.kt)("a",{parentName:"p",href:"#plugins"},"configuration options")," is available in the ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLArmorConfig")," type and can be imported from the ",(0,n.kt)("inlineCode",{parentName:"p"},"@escape.tech/graphql-armor-types")," package:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export type ProtectionConfiguration = {\n  enabled?: boolean;\n};\n\nexport type GraphQLArmorConfig = {\n  blockFieldSuggestion?: ProtectionConfiguration & BlockFieldSuggestionsOptions;\n  costLimit?: ProtectionConfiguration & CostLimitOptions;\n  maxAliases?: ProtectionConfiguration & MaxAliasesOptions;\n  maxDepth?: ProtectionConfiguration & MaxDepthOptions;\n  maxDirectives?: ProtectionConfiguration & MaxDirectivesOptions;\n  maxTokens?: ProtectionConfiguration & MaxTokensOptions;\n};\n")),(0,n.kt)("h2",{id:"callbacks"},"Callbacks"),(0,n.kt)("h3",{id:"configuration"},"Configuration"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"export type GraphQLArmorCallbackConfiguration = {\n  onAccept?: GraphQLArmorAcceptCallback[];\n  onReject?: GraphQLArmorRejectCallback[];\n  propagateOnRejection?: boolean;\n};\n")),(0,n.kt)("h3",{id:"graphqlarmoracceptcallback"},"GraphQLArmorAcceptCallback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import type { ValidationContext } from 'graphql';\n\nexport type GraphQLArmorAcceptCallback = (ctx: ValidationContext | null, details: any) => void;\n")),(0,n.kt)("h3",{id:"graphqlarmorrejectcallback"},"GraphQLArmorRejectCallback"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import type { GraphQLError, ValidationContext } from 'graphql';\n\nexport type GraphQLArmorRejectCallback = (ctx: ValidationContext | null, error: GraphQLError) => void;\n")),(0,n.kt)("h2",{id:"plugins"},"Plugins"),(0,n.kt)("p",null,"Types to ",(0,n.kt)("a",{parentName:"p",href:"../category/configuration"},"configure")," each of the plugins are available from their respective packages and are used in ",(0,n.kt)("inlineCode",{parentName:"p"},"GraphQLArmorConfig"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-ts"},"import type { BlockFieldSuggestionsOptions } from '@escape.tech/graphql-armor-block-field-suggestions';\nimport type { CostLimitOptions } from '@escape.tech/graphql-armor-cost-limit';\nimport type { MaxAliasesOptions } from '@escape.tech/graphql-armor-max-aliases';\nimport type { MaxDepthOptions } from '@escape.tech/graphql-armor-max-depth';\nimport type { MaxDirectivesOptions } from '@escape.tech/graphql-armor-max-directives';\nimport type { MaxTokensOptions } from '@escape.tech/graphql-armor-max-tokens';\nimport type { GraphQLError, ValidationContext } from 'graphql';\n")))}u.isMDXComponent=!0},876:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var a=r(2784);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=c(r),g=n,f=m["".concat(l,".").concat(g)]||m[g]||u[g]||o;return r?a.createElement(f,i(i({ref:t},s),{},{components:r})):a.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[m]="string"==typeof e?e:n,i[1]=p;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"}}]);