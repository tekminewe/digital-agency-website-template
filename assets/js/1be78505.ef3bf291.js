"use strict";(self.webpackChunkdigital_agency_doc=self.webpackChunkdigital_agency_doc||[]).push([[514,245],{9883:(e,t,a)=>{a.r(t),a.d(t,{default:()=>ge});var n=a(9496),l=a(5924),o=a(7567),r=a(9693),c=a(5840),i=a(8050),s=a(3405),d=a(5674),m=a(2095),u=a(2685),b=a(5342),p=a(7865);const h={backToTopButton:"backToTopButton_Kzpt",backToTopButtonShow:"backToTopButtonShow_SQpo"};function E(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[a,l]=(0,n.useState)(!1),o=(0,n.useRef)(!1),{startScroll:r,cancelScroll:c}=(0,b.Ct)();return(0,b.RF)(((e,a)=>{let{scrollY:n}=e;const r=a?.scrollY;r&&(o.current?o.current=!1:n>=r?(c(),l(!1)):n<t?l(!1):n+window.innerHeight<document.documentElement.scrollHeight&&l(!0))})),(0,p.S)((e=>{e.location.hash&&(o.current=!0,l(!1))})),{shown:a,scrollToTop:()=>r(0)}}({threshold:300});return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",r.k.common.backToTopButton,h.backToTopButton,e&&h.backToTopButtonShow),type:"button",onClick:t})}var g=a(3442),f=a(4389),v=a(1848),k=a(843),_=a(4778);function C(e){return n.createElement("svg",(0,_.Z)({width:"20",height:"20","aria-hidden":"true"},e),n.createElement("g",{fill:"#7a7a7a"},n.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),n.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const S={collapseSidebarButton:"collapseSidebarButton_p9pI",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_uk2b"};function y(e){let{onClick:t}=e;return n.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,l.Z)("button button--secondary button--outline",S.collapseSidebarButton),onClick:t},n.createElement(C,{className:S.collapseSidebarButtonIcon}))}var I=a(6705),N=a(1497);const T=Symbol("EmptyContext"),w=n.createContext(T);function x(e){let{children:t}=e;const[a,l]=(0,n.useState)(null),o=(0,n.useMemo)((()=>({expandedItem:a,setExpandedItem:l})),[a]);return n.createElement(w.Provider,{value:o},t)}var Z=a(7737),B=a(4144),L=a(8785),A=a(4353);function H(e){let{categoryLabel:t,onClick:a}=e;return n.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:t}),type:"button",className:"clean-btn menu__caret",onClick:a})}function F(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{items:m,label:u,collapsible:b,className:p,href:h}=t,{docs:{sidebar:{autoCollapseCategories:E}}}=(0,v.L)(),g=function(e){const t=(0,A.Z)();return(0,n.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(t),f=(0,i._F)(t,o),k=(0,B.Mg)(h,o),{collapsed:C,setCollapsed:S}=(0,Z.u)({initialState:()=>!!b&&(!f&&t.collapsed)}),{expandedItem:y,setExpandedItem:I}=function(){const e=(0,n.useContext)(w);if(e===T)throw new N.i6("DocSidebarItemsExpandedStateProvider");return e}(),x=function(e){void 0===e&&(e=!C),I(e?null:s),S(e)};return function(e){let{isActive:t,collapsed:a,updateCollapsed:l}=e;const o=(0,N.D9)(t);(0,n.useEffect)((()=>{t&&!o&&a&&l(!1)}),[t,o,a,l])}({isActive:f,collapsed:C,updateCollapsed:x}),(0,n.useEffect)((()=>{b&&null!=y&&y!==s&&E&&S(!0)}),[b,y,s,S,E]),n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemCategory,r.k.docs.docSidebarItemCategoryLevel(c),"menu__list-item",{"menu__list-item--collapsed":C},p)},n.createElement("div",{className:(0,l.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},n.createElement(L.Z,(0,_.Z)({className:(0,l.Z)("menu__link",{"menu__link--sublist":b,"menu__link--sublist-caret":!h&&b,"menu__link--active":f}),onClick:b?e=>{a?.(t),h?x(!1):(e.preventDefault(),x())}:()=>{a?.(t)},"aria-current":k?"page":void 0,"aria-expanded":b?!C:void 0,href:b?g??"#":g},d),u),h&&b&&n.createElement(H,{categoryLabel:u,onClick:e=>{e.preventDefault(),x()}})),n.createElement(Z.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:C},n.createElement(q,{items:m,tabIndex:C?-1:0,onItemClick:a,activePath:o,level:c+1})))}var M=a(8991),P=a(1548);const W={menuExternalLink:"menuExternalLink_gcex"};function D(e){let{item:t,onItemClick:a,activePath:o,level:c,index:s,...d}=e;const{href:m,label:u,className:b,autoAddBaseUrl:p}=t,h=(0,i._F)(t,o),E=(0,M.Z)(m);return n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(c),"menu__list-item",b),key:u},n.createElement(L.Z,(0,_.Z)({className:(0,l.Z)("menu__link",!E&&W.menuExternalLink,{"menu__link--active":h}),autoAddBaseUrl:p,"aria-current":h?"page":void 0,to:m},E&&{onClick:a?()=>a(t):void 0},d),u,!E&&n.createElement(P.Z,null)))}const R={menuHtmlItem:"menuHtmlItem_qrwv"};function V(e){let{item:t,level:a,index:o}=e;const{value:c,defaultStyle:i,className:s}=t;return n.createElement("li",{className:(0,l.Z)(r.k.docs.docSidebarItemLink,r.k.docs.docSidebarItemLinkLevel(a),i&&[R.menuHtmlItem,"menu__list-item"],s),key:o,dangerouslySetInnerHTML:{__html:c}})}function z(e){let{item:t,...a}=e;switch(t.type){case"category":return n.createElement(F,(0,_.Z)({item:t},a));case"html":return n.createElement(V,(0,_.Z)({item:t},a));default:return n.createElement(D,(0,_.Z)({item:t},a))}}function j(e){let{items:t,...a}=e;return n.createElement(x,null,t.map(((e,t)=>n.createElement(z,(0,_.Z)({key:t,item:e,index:t},a)))))}const q=(0,n.memo)(j),K={menu:"menu_J18w",menuWithAnnouncementBar:"menuWithAnnouncementBar_nL2V"};function G(e){let{path:t,sidebar:a,className:o}=e;const c=function(){const{isActive:e}=(0,I.nT)(),[t,a]=(0,n.useState)(e);return(0,b.RF)((t=>{let{scrollY:n}=t;e&&a(0===n)}),[e]),e&&t}();return n.createElement("nav",{"aria-label":(0,u.I)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,l.Z)("menu thin-scrollbar",K.menu,c&&K.menuWithAnnouncementBar,o)},n.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(q,{items:a,activePath:t,level:1})))}const U={sidebar:"sidebar_H_01",sidebarWithHideableNavbar:"sidebarWithHideableNavbar_Ezn7",sidebarHidden:"sidebarHidden_FCDn",sidebarLogo:"sidebarLogo_NiAm"};function X(e){let{path:t,sidebar:a,onCollapse:o,isHidden:r}=e;const{navbar:{hideOnScroll:c},docs:{sidebar:{hideable:i}}}=(0,v.L)();return n.createElement("div",{className:(0,l.Z)(U.sidebar,c&&U.sidebarWithHideableNavbar,r&&U.sidebarHidden)},c&&n.createElement(k.Z,{tabIndex:-1,className:U.sidebarLogo}),n.createElement(G,{path:t,sidebar:a}),i&&n.createElement(y,{onClick:o}))}const Y=n.memo(X);var J=a(6189),O=a(1265);const Q=e=>{let{sidebar:t,path:a}=e;const o=(0,O.e)();return n.createElement("ul",{className:(0,l.Z)(r.k.docs.docSidebarMenu,"menu__list")},n.createElement(q,{items:t,activePath:a,onItemClick:e=>{"category"===e.type&&e.href&&o.toggle(),"link"===e.type&&o.toggle()},level:1}))};function $(e){return n.createElement(J.Zo,{component:Q,props:e})}const ee=n.memo($);function te(e){const t=(0,f.i)(),a="desktop"===t||"ssr"===t,l="mobile"===t;return n.createElement(n.Fragment,null,a&&n.createElement(Y,e),l&&n.createElement(ee,e))}const ae={expandButton:"expandButton_qXFi",expandButtonIcon:"expandButtonIcon__XmD"};function ne(e){let{toggleSidebar:t}=e;return n.createElement("div",{className:ae.expandButton,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t},n.createElement(C,{className:ae.expandButtonIcon}))}const le={docSidebarContainer:"docSidebarContainer_ldoy",docSidebarContainerHidden:"docSidebarContainerHidden_fGbK",sidebarViewport:"sidebarViewport_TwFD"};function oe(e){let{children:t}=e;const a=(0,d.V)();return n.createElement(n.Fragment,{key:a?.name??"noSidebar"},t)}function re(e){let{sidebar:t,hiddenSidebarContainer:a,setHiddenSidebarContainer:o}=e;const{pathname:c}=(0,g.TH)(),[i,s]=(0,n.useState)(!1),d=(0,n.useCallback)((()=>{i&&s(!1),o((e=>!e))}),[o,i]);return n.createElement("aside",{className:(0,l.Z)(r.k.docs.docSidebarContainer,le.docSidebarContainer,a&&le.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(le.docSidebarContainer)&&a&&s(!0)}},n.createElement(oe,null,n.createElement("div",{className:(0,l.Z)(le.sidebarViewport,i&&le.sidebarViewportHidden)},n.createElement(te,{sidebar:t,path:c,onCollapse:d,isHidden:i}),i&&n.createElement(ne,{toggleSidebar:d}))))}function ce(e){return n.createElement("div",null,n.createElement("div",{style:{marginBottom:"1rem"}},n.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4412421169773097",crossorigin:"anonymous"}),n.createElement("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4412421169773097","data-ad-slot":"5064107887","data-ad-format":"auto","data-full-width-responsive":"true"}),n.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");")),n.createElement(re,e))}const ie={docMainContainer:"docMainContainer_baW4",docMainContainerEnhanced:"docMainContainerEnhanced_lsKp",docItemWrapperEnhanced:"docItemWrapperEnhanced_lcNt"};function se(e){let{hiddenSidebarContainer:t,children:a}=e;const o=(0,d.V)();return n.createElement("main",{className:(0,l.Z)(ie.docMainContainer,(t||!o)&&ie.docMainContainerEnhanced)},n.createElement("div",{className:(0,l.Z)("container padding-top--md padding-bottom--lg",ie.docItemWrapper,t&&ie.docItemWrapperEnhanced)},a))}function de(e){return n.createElement("div",null,n.createElement("div",{style:{marginBottom:"1rem"}},n.createElement("script",{async:!0,src:"https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4412421169773097",crossorigin:"anonymous"}),n.createElement("ins",{class:"adsbygoogle",style:{display:"block"},"data-ad-client":"ca-pub-4412421169773097","data-ad-slot":"5064107887","data-ad-format":"auto","data-full-width-responsive":"true"}),n.createElement("script",null,"(adsbygoogle = window.adsbygoogle || []).push(",");")),n.createElement(se,e))}const me={docPage:"docPage_GWs5",docsWrapper:"docsWrapper_h_X8"};function ue(e){let{children:t}=e;const a=(0,d.V)(),[l,o]=(0,n.useState)(!1);return n.createElement(m.Z,{wrapperClassName:me.docsWrapper},n.createElement(E,null),n.createElement("div",{className:me.docPage},a&&n.createElement(ce,{sidebar:a.items,hiddenSidebarContainer:l,setHiddenSidebarContainer:o}),n.createElement(de,{hiddenSidebarContainer:l},t)))}function be(e){return n.createElement(n.Fragment,null,n.createElement(ue,e))}var pe=a(6134),he=a(2173);function Ee(e){const{versionMetadata:t}=e;return n.createElement(n.Fragment,null,n.createElement(he.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),n.createElement(o.d,null,t.noIndex&&n.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function ge(e){const{versionMetadata:t}=e,a=(0,i.hI)(e);if(!a)return n.createElement(pe.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=a;return n.createElement(n.Fragment,null,n.createElement(Ee,e),n.createElement(o.FG,{className:(0,l.Z)(r.k.wrapper.docsPages,r.k.page.docsDocPage,e.versionMetadata.className)},n.createElement(s.q,{version:t},n.createElement(d.b,{name:m,items:u},n.createElement(be,null,c)))))}},6134:(e,t,a)=>{a.r(t),a.d(t,{default:()=>c});var n=a(9496),l=a(2685),o=a(7567),r=a(2095);function c(){return n.createElement(n.Fragment,null,n.createElement(o.d,{title:(0,l.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),n.createElement(r.Z,null,n.createElement("main",{className:"container margin-vert--xl"},n.createElement("div",{className:"row"},n.createElement("div",{className:"col col--6 col--offset-3"},n.createElement("h1",{className:"hero__title"},n.createElement(l.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),n.createElement("p",null,n.createElement(l.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},3405:(e,t,a)=>{a.d(t,{E:()=>c,q:()=>r});var n=a(9496),l=a(1497);const o=n.createContext(null);function r(e){let{children:t,version:a}=e;return n.createElement(o.Provider,{value:a},t)}function c(){const e=(0,n.useContext)(o);if(null===e)throw new l.i6("DocsVersionProvider");return e}}}]);