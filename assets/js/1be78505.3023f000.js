"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[514,6],{4959:(e,t,n)=>{n.r(t),n.d(t,{default:()=>fe});var a=n(2784),l=n(6277),o=n(328),c=n(211),r=n(4925),i=n(4855),s=n(5663),d=n(4228),m=n(4799),u=n(1077),b=n(4126),p=n(2105);const h={backToTopButton:"backToTopButton_z1FD",backToTopButtonShow:"backToTopButtonShow_w1wE"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,l]=(0,a.useState)(!1),o=(0,a.useRef)(!1),{startScroll:c,cancelScroll:r}=(0,b.Ct)();return(0,b.RF)(((e,n)=>{let{scrollY:a}=e;const c=n?.scrollY;c&&(o.current?o.current=!1:a>=c?(r(),l(!1)):a<t?l(!1):a+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:n,scrollToTop:()=>c(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",c.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var f=n(7267),g=n(7963),k=n(7683),v=n(1881),_=n(7896);function C(e){return a.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const I={collapseSidebarButton:"collapseSidebarButton_Ftvb",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_c4WT"};function S(e){let{onClick:t}=e;return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",I.collapseSidebarButton),onClick:t},a.createElement(C,{className:I.collapseSidebarButtonIcon}))}var N=n(3717),T=n(6335);const Z=Symbol("EmptyContext"),x=a.createContext(Z);function B(e){let{children:t}=e;const[n,l]=(0,a.useState)(null),o=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:l})),[n]);return a.createElement(x.Provider,{value:o},t)}var y=n(8698),w=n(7661),L=n(9817),A=n(9741);function F(e){let{categoryLabel:t,onClick:n}=e;return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:n})}function M(e){let{item:t,onItemClick:n,activePath:o,level:r,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,k.L)(),f=function(e){const t=(0,A.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),g=(0,i._F)(t,o),v=(0,w.Mg)(h,o),{collapsed:C,setCollapsed:I}=(0,y.u)({initialState:()=>!!b&&(!g&&t.collapsed)}),{expandedItem:S,setExpandedItem:N}=function(){const e=(0,a.useContext)(x);if(e===Z)throw new T.i6("DocSidebarItemsExpandedStateProvider");return e}(),B=function(e){void 0===e&&(e=!C),N(e?null:s),I(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:l}=e;const o=(0,T.D9)(t);(0,a.useEffect)((()=>{t&&!o&&n&&l(!1)}),[t,o,n,l])}({isActive:g,collapsed:C,updateCollapsed:B}),(0,a.useEffect)((()=>{b&&null!=S&&S!==s&&E&&I(!0)}),[b,S,s,I,E]),a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemCategory,c.k.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":C},p)},a.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":v})},a.createElement(L.Z,(0,_.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":g}),onClick:b?e=>{n?.(t),h?B(!1):(e.preventDefault(),B())}:()=>{n?.(t)},"aria-current":v?"page":void 0,"aria-expanded":b?!C:void 0,href:b?f??"#":f},d),u),h&&b&&a.createElement(F,{categoryLabel:u,onClick:e=>{e.preventDefault(),B()}})),a.createElement(y.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},a.createElement(U,{items:m,tabIndex:C?-1:0,onItemClick:n,activePath:o,level:r+1})))}var H=n(1344),P=n(4442);const W={menuExternalLink:"menuExternalLink_xK2O"};function D(e){let{item:t,onItemClick:n,activePath:o,level:r,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,o),E=(0,H.Z)(m);return a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(r),"menu__list-item",b),key:u},a.createElement(L.Z,(0,_.Z)({className:(0,l.Z)("menu__link",!E&&W.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:n?()=>n(t):void 0},d),u,!E&&a.createElement(P.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_anEq"};function q(e){let{item:t,level:n,index:o}=e;const{value:r,defaultStyle:i,className:s}=t;return a.createElement("li",{className:(0,l.Z)(c.k.docs.docSidebarItemLink,c.k.docs.docSidebarItemLinkLevel(n),i&&[R.menuHtmlItem,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:r}})}function z(e){let{item:t,...n}=e;switch(t.type){case"category":return a.createElement(M,(0,_.Z)({item:t},n));case"html":return a.createElement(q,(0,_.Z)({item:t},n));default:return a.createElement(D,(0,_.Z)({item:t},n))}}function O(e){let{items:t,...n}=e;return a.createElement(B,null,t.map(((e,t)=>a.createElement(z,(0,_.Z)({key:t,item:e,index:t},n)))))}const U=(0,a.memo)(O),K={menu:"menu_qiME",menuWithAnnouncementBar:"menuWithAnnouncementBar_hRfJ"};function V(e){let{path:t,sidebar:n,className:o}=e;const r=function(){const{isActive:e}=(0,N.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return a.createElement("nav",{className:(0,l.Z)("menu thin-scrollbar",K.menu,r&&K.menuWithAnnouncementBar,o)},a.createElement("ul",{className:(0,l.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:n,activePath:t,level:1})))}const Y="sidebar_vJCc",J="sidebarWithHideableNavbar_Fo4g",G="sidebarHidden_vBKa",Q="sidebarLogo_nlll";function X(e){let{path:t,sidebar:n,onCollapse:o,isHidden:c}=e;const{navbar:{hideOnScroll:r},docs:{sidebar:{hideable:i}}}=(0,k.L)();return a.createElement("div",{className:(0,l.Z)(Y,r&&J,c&&G)},r&&a.createElement(v.Z,{tabIndex:-1,className:Q}),a.createElement(V,{path:t,sidebar:n}),i&&a.createElement(S,{onClick:o}))}const j=a.memo(X);var $=n(7548),ee=n(7136);const te=e=>{let{sidebar:t,path:n}=e;const o=(0,ee.e)();return a.createElement("ul",{className:(0,l.Z)(c.k.docs.docSidebarMenu,"menu__list")},a.createElement(U,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function ne(e){return a.createElement($.Zo,{component:te,props:e})}const ae=a.memo(ne);function le(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,l="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(j,e),l&&a.createElement(ae,e))}const oe={expandButton:"expandButton_qIqc",expandButtonIcon:"expandButtonIcon_aOpf"};function ce(e){let{toggleSidebar:t}=e;return a.createElement("div",{className:oe.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},a.createElement(C,{className:oe.expandButtonIcon}))}const re={docSidebarContainer:"docSidebarContainer_aIKW",docSidebarContainerHidden:"docSidebarContainerHidden_UIq3"};function ie(e){let{children:t}=e;const n=(0,d.V)();return a.createElement(a.Fragment,{key:n?.name??"noSidebar"},t)}function se(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:o}=e;const{pathname:r}=(0,f.TH)(),[i,s]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return a.createElement("aside",{className:(0,l.Z)(c.k.docs.docSidebarContainer,re.docSidebarContainer,n&&re.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(re.docSidebarContainer)&&n&&s(!0)}},a.createElement(ie,null,a.createElement(le,{sidebar:t,path:r,onCollapse:d,isHidden:i})),i&&a.createElement(ce,{toggleSidebar:d}))}const de={docMainContainer:"docMainContainer_fv3b",docMainContainerEnhanced:"docMainContainerEnhanced_wOQt",docItemWrapperEnhanced:"docItemWrapperEnhanced_DUiu"};function me(e){let{hiddenSidebarContainer:t,children:n}=e;const o=(0,d.V)();return a.createElement("main",{className:(0,l.Z)(de.docMainContainer,(t||!o)&&de.docMainContainerEnhanced)},a.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",de.docItemWrapper,t&&de.docItemWrapperEnhanced)},n))}const ue={docPage:"docPage_pOTq",docsWrapper:"docsWrapper_BqXd"};function be(e){let{children:t}=e;const n=(0,d.V)(),[l,o]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:ue.docsWrapper},a.createElement(E,null),a.createElement("div",{className:ue.docPage},n&&a.createElement(se,{sidebar:n.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),a.createElement(me,{hiddenSidebarContainer:l},t)))}var pe=n(2006),he=n(4390);function Ee(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(he.Z,{version:t.version,tag:(0,r.os)(t.pluginId,t.version)}),a.createElement(o.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function fe(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(pe.default,null);const{docElement:r,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(Ee,e),a.createElement(o.FG,{className:(0,l.Z)(c.k.wrapper.docsPages,c.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(be,null,r)))))}},2006:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(2784),l=n(1077),o=n(328),c=n(4799);function r(){return a.createElement(a.Fragment,null,a.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(c.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}}}]);