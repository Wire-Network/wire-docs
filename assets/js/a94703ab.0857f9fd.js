"use strict";(self.webpackChunkwire_docs=self.webpackChunkwire_docs||[]).push([[9048],{56808:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Ce});var a=n(96540),o=n(34164),s=n(69024),i=n(17559),l=n(44718),r=n(60609),c=n(21312),d=n(23104),m=n(75062);const u={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};var h=n(74848);function p(){const{shown:e,scrollToTop:t}=function(e){let{threshold:t}=e;const[n,o]=(0,a.useState)(!1),s=(0,a.useRef)(!1),{startScroll:i,cancelScroll:l}=(0,d.gk)();return(0,d.Mq)(((e,n)=>{let{scrollY:a}=e;const i=n?.scrollY;i&&(s.current?s.current=!1:a>=i?(l(),o(!1)):a<t?o(!1):a+window.innerHeight<document.documentElement.scrollHeight&&o(!0))})),(0,m.$)((e=>{e.location.hash&&(s.current=!0,o(!1))})),{shown:n,scrollToTop:()=>i(0)}}({threshold:300});return(0,h.jsx)("button",{"aria-label":(0,c.T)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,o.A)("clean-btn",i.G.common.backToTopButton,u.backToTopButton,e&&u.backToTopButtonShow),type:"button",onClick:t})}var b=n(53109),x=n(56347),j=n(24581),g=n(6342),f=n(28774),C=n(86025),A=n(44586),_=n(92303),k=n(95293);const v={themedComponent:"themedComponent_mlkZ","themedComponent--light":"themedComponent--light_NVdE","themedComponent--dark":"themedComponent--dark_xIcU"};function N(e){let{className:t,children:n}=e;const s=(0,_.A)(),{colorMode:i}=(0,k.G)();return(0,h.jsx)(h.Fragment,{children:(s?"dark"===i?["dark"]:["light"]:["light","dark"]).map((e=>{const s=n({theme:e,className:(0,o.A)(t,v.themedComponent,v[`themedComponent--${e}`])});return(0,h.jsx)(a.Fragment,{children:s},e)}))})}function S(e){const{sources:t,className:n,alt:a,...o}=e;return(0,h.jsx)(N,{className:n,children:e=>{let{theme:n,className:s}=e;return(0,h.jsx)("img",{src:t[n],alt:a,className:s,...o})}})}function T(e){let{logo:t,alt:n,imageClassName:a}=e;const o={light:(0,C.Ay)(t.src),dark:(0,C.Ay)(t.srcDark||t.src)},s=(0,h.jsx)(S,{className:t.className,sources:o,height:t.height,width:t.width,alt:n,style:t.style});return a?(0,h.jsx)("div",{className:a,children:s}):s}function I(e){const{siteConfig:{title:t}}=(0,A.A)(),{navbar:{title:n,logo:a}}=(0,g.p)(),{imageClassName:o,titleClassName:s,...i}=e,l=(0,C.Ay)(a?.href||"/"),r=n?"":t,c=a?.alt??r;return(0,h.jsxs)(f.A,{to:l,...i,...a?.target&&{target:a.target},children:[a&&(0,h.jsx)(T,{logo:a,alt:c,imageClassName:o}),null!=n&&(0,h.jsx)("b",{className:s,children:n})]})}function B(e){return(0,h.jsx)("svg",{width:"20",height:"20","aria-hidden":"true",...e,children:(0,h.jsxs)("g",{fill:"#7a7a7a",children:[(0,h.jsx)("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),(0,h.jsx)("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})]})})}const y={collapseSidebarButton:"collapseSidebarButton_PEFL",collapseSidebarButtonIcon:"collapseSidebarButtonIcon_kv0_"};function w(e){let{onClick:t}=e;return(0,h.jsx)("button",{type:"button",title:(0,c.T)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,o.A)("button button--secondary button--outline",y.collapseSidebarButton),onClick:t,children:(0,h.jsx)(B,{className:y.collapseSidebarButtonIcon})})}var L=n(65041),E=n(89532);const M=Symbol("EmptyContext"),H=a.createContext(M);function G(e){let{children:t}=e;const[n,o]=(0,a.useState)(null),s=(0,a.useMemo)((()=>({expandedItem:n,setExpandedItem:o})),[n]);return(0,h.jsx)(H.Provider,{value:s,children:t})}var W=n(41422),P=n(99169);function R(e){let{collapsed:t,categoryLabel:n,onClick:a}=e;return(0,h.jsx)("button",{"aria-label":t?(0,c.T)({id:"theme.DocSidebarItem.expandCategoryAriaLabel",message:"Expand sidebar category '{label}'",description:"The ARIA label to expand the sidebar category"},{label:n}):(0,c.T)({id:"theme.DocSidebarItem.collapseCategoryAriaLabel",message:"Collapse sidebar category '{label}'",description:"The ARIA label to collapse the sidebar category"},{label:n}),"aria-expanded":!t,type:"button",className:"clean-btn menu__caret",onClick:a})}function D(e){let{item:t,onItemClick:n,activePath:s,level:r,index:c,...d}=e;const{items:m,label:u,collapsible:p,className:b,href:x}=t,{docs:{sidebar:{autoCollapseCategories:j}}}=(0,g.p)(),C=function(e){const t=(0,_.A)();return(0,a.useMemo)((()=>e.href&&!e.linkUnlisted?e.href:!t&&e.collapsible?(0,l.Nr)(e):void 0),[e,t])}(t),A=(0,l.w8)(t,s),k=(0,P.ys)(x,s),{collapsed:v,setCollapsed:N}=(0,W.u)({initialState:()=>!!p&&(!A&&t.collapsed)}),{expandedItem:S,setExpandedItem:T}=function(){const e=(0,a.useContext)(H);if(e===M)throw new E.dV("DocSidebarItemsExpandedStateProvider");return e}(),I=function(e){void 0===e&&(e=!v),T(e?null:c),N(e)};return function(e){let{isActive:t,collapsed:n,updateCollapsed:o}=e;const s=(0,E.ZC)(t);(0,a.useEffect)((()=>{t&&!s&&n&&o(!1)}),[t,s,n,o])}({isActive:A,collapsed:v,updateCollapsed:I}),(0,a.useEffect)((()=>{p&&null!=S&&S!==c&&j&&N(!0)}),[p,S,c,N,j]),(0,h.jsxs)("li",{className:(0,o.A)(i.G.docs.docSidebarItemCategory,i.G.docs.docSidebarItemCategoryLevel(r),"menu__list-item",{"menu__list-item--collapsed":v},b),children:[(0,h.jsxs)("div",{className:(0,o.A)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k}),children:[(0,h.jsx)(f.A,{className:(0,o.A)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!x&&p,"menu__link--active":A}),onClick:p?e=>{n?.(t),x?I(!1):(e.preventDefault(),I())}:()=>{n?.(t)},"aria-current":k?"page":void 0,role:p&&!x?"button":void 0,"aria-expanded":p&&!x?!v:void 0,href:p?C??"#":C,...d,children:u}),x&&p&&(0,h.jsx)(R,{collapsed:v,categoryLabel:u,onClick:e=>{e.preventDefault(),I()}})]}),(0,h.jsx)(W.N,{lazy:!0,as:"ul",className:"menu__list",collapsed:v,children:(0,h.jsx)(Z,{items:m,tabIndex:v?-1:0,onItemClick:n,activePath:s,level:r+1})})]})}var F=n(16654),U=n(43186);const V={menuExternalLink:"menuExternalLink_NmtK"};function Y(e){let{item:t,onItemClick:n,activePath:a,level:s,index:r,...c}=e;const{href:d,label:m,className:u,autoAddBaseUrl:p}=t,b=(0,l.w8)(t,a),x=(0,F.A)(d);return(0,h.jsx)("li",{className:(0,o.A)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(s),"menu__list-item",u),children:(0,h.jsxs)(f.A,{className:(0,o.A)("menu__link",!x&&V.menuExternalLink,{"menu__link--active":b}),autoAddBaseUrl:p,"aria-current":b?"page":void 0,to:d,...x&&{onClick:n?()=>n(t):void 0},...c,children:[m,!x&&(0,h.jsx)(U.A,{})]})},m)}const K={menuHtmlItem:"menuHtmlItem_M9Kj"};function z(e){let{item:t,level:n,index:a}=e;const{value:s,defaultStyle:l,className:r}=t;return(0,h.jsx)("li",{className:(0,o.A)(i.G.docs.docSidebarItemLink,i.G.docs.docSidebarItemLinkLevel(n),l&&[K.menuHtmlItem,"menu__list-item"],r),dangerouslySetInnerHTML:{__html:s}},a)}function q(e){let{item:t,...n}=e;switch(t.type){case"category":return(0,h.jsx)(D,{item:t,...n});case"html":return(0,h.jsx)(z,{item:t,...n});default:return(0,h.jsx)(Y,{item:t,...n})}}function O(e){let{items:t,...n}=e;const a=(0,l.Y)(t,n.activePath);return(0,h.jsx)(G,{children:a.map(((e,t)=>(0,h.jsx)(q,{item:e,index:t,...n},t)))})}const Z=(0,a.memo)(O),$={menu:"menu_SIkG",menuWithAnnouncementBar:"menuWithAnnouncementBar_GW3s"};function J(e){let{path:t,sidebar:n,className:s}=e;const l=function(){const{isActive:e}=(0,L.M)(),[t,n]=(0,a.useState)(e);return(0,d.Mq)((t=>{let{scrollY:a}=t;e&&n(0===a)}),[e]),e&&t}();return(0,h.jsx)("nav",{"aria-label":(0,c.T)({id:"theme.docs.sidebar.navAriaLabel",message:"Docs sidebar",description:"The ARIA label for the sidebar navigation"}),className:(0,o.A)("menu thin-scrollbar",$.menu,l&&$.menuWithAnnouncementBar,s),children:(0,h.jsx)("ul",{className:(0,o.A)(i.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(Z,{items:n,activePath:t,level:1})})})}const Q="sidebar_njMd",X="sidebarWithHideableNavbar_wUlq",ee="sidebarHidden_VK0M",te="sidebarLogo_isFc";function ne(e){let{path:t,sidebar:n,onCollapse:a,isHidden:s}=e;const{navbar:{hideOnScroll:i},docs:{sidebar:{hideable:l}}}=(0,g.p)();return(0,h.jsxs)("div",{className:(0,o.A)(Q,i&&X,s&&ee),children:[i&&(0,h.jsx)(I,{tabIndex:-1,className:te}),(0,h.jsx)(J,{path:t,sidebar:n}),l&&(0,h.jsx)(w,{onClick:a})]})}const ae=a.memo(ne);var oe=n(75600),se=n(22069);const ie=e=>{let{sidebar:t,path:n}=e;const a=(0,se.M)();return(0,h.jsx)("ul",{className:(0,o.A)(i.G.docs.docSidebarMenu,"menu__list"),children:(0,h.jsx)(Z,{items:t,activePath:n,onItemClick:e=>{"category"===e.type&&e.href&&a.toggle(),"link"===e.type&&a.toggle()},level:1})})};function le(e){return(0,h.jsx)(oe.GX,{component:ie,props:e})}const re=a.memo(le);function ce(e){const t=(0,j.l)(),n="desktop"===t||"ssr"===t,a="mobile"===t;return(0,h.jsxs)(h.Fragment,{children:[n&&(0,h.jsx)(ae,{...e}),a&&(0,h.jsx)(re,{...e})]})}const de={expandButton:"expandButton_TmdG",expandButtonIcon:"expandButtonIcon_i1dp"};function me(e){let{toggleSidebar:t}=e;return(0,h.jsx)("div",{className:de.expandButton,title:(0,c.T)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,c.T)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:t,onClick:t,children:(0,h.jsx)(B,{className:de.expandButtonIcon})})}const ue={docSidebarContainer:"docSidebarContainer_YfHR",docSidebarContainerHidden:"docSidebarContainerHidden_DPk8",sidebarViewport:"sidebarViewport_aRkj"};function he(e){let{children:t}=e;const n=(0,r.t)();return(0,h.jsx)(a.Fragment,{children:t},n?.name??"noSidebar")}function pe(e){let{sidebar:t,hiddenSidebarContainer:n,setHiddenSidebarContainer:s}=e;const{pathname:l}=(0,x.zy)(),[r,c]=(0,a.useState)(!1),d=(0,a.useCallback)((()=>{r&&c(!1),!r&&(0,b.O)()&&c(!0),s((e=>!e))}),[s,r]);return(0,h.jsx)("aside",{className:(0,o.A)(i.G.docs.docSidebarContainer,ue.docSidebarContainer,n&&ue.docSidebarContainerHidden),onTransitionEnd:e=>{e.currentTarget.classList.contains(ue.docSidebarContainer)&&n&&c(!0)},children:(0,h.jsx)(he,{children:(0,h.jsxs)("div",{className:(0,o.A)(ue.sidebarViewport,r&&ue.sidebarViewportHidden),children:[(0,h.jsx)(ce,{sidebar:t,path:l,onCollapse:d,isHidden:r}),r&&(0,h.jsx)(me,{toggleSidebar:d})]})})})}const be={docMainContainer:"docMainContainer_TBSr",docMainContainerEnhanced:"docMainContainerEnhanced_lQrH",docItemWrapperEnhanced:"docItemWrapperEnhanced_JWYK"};function xe(e){let{hiddenSidebarContainer:t,children:n}=e;const a=(0,r.t)();return(0,h.jsx)("main",{className:(0,o.A)(be.docMainContainer,(t||!a)&&be.docMainContainerEnhanced),children:(0,h.jsx)("div",{className:(0,o.A)("container padding-top--md padding-bottom--lg",be.docItemWrapper,t&&be.docItemWrapperEnhanced),children:n})})}const je={docRoot:"docRoot_UBD9",docsWrapper:"docsWrapper_hBAB"};function ge(e){let{children:t}=e;const n=(0,r.t)(),[o,s]=(0,a.useState)(!1);return(0,h.jsxs)("div",{className:je.docsWrapper,children:[(0,h.jsx)(p,{}),(0,h.jsxs)("div",{className:je.docRoot,children:[n&&(0,h.jsx)(pe,{sidebar:n.items,hiddenSidebarContainer:o,setHiddenSidebarContainer:s}),(0,h.jsx)(xe,{hiddenSidebarContainer:o,children:t})]})]})}var fe=n(23363);function Ce(e){const t=(0,l.B5)(e);if(!t)return(0,h.jsx)(fe.A,{});const{docElement:n,sidebarName:a,sidebarItems:c}=t;return(0,h.jsx)(s.e3,{className:(0,o.A)(i.G.page.docsDocPage),children:(0,h.jsx)(r.V,{name:a,items:c,children:(0,h.jsx)(ge,{children:n})})})}},23363:(e,t,n)=>{n.d(t,{A:()=>l});n(96540);var a=n(34164),o=n(21312),s=n(51107),i=n(74848);function l(e){let{className:t}=e;return(0,i.jsx)("main",{className:(0,a.A)("container margin-vert--xl",t),children:(0,i.jsx)("div",{className:"row",children:(0,i.jsxs)("div",{className:"col col--6 col--offset-3",children:[(0,i.jsx)(s.A,{as:"h1",className:"hero__title",children:(0,i.jsx)(o.A,{id:"theme.NotFound.title",description:"The title of the 404 page",children:"Page Not Found"})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.A,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page",children:"We could not find what you were looking for."})}),(0,i.jsx)("p",{children:(0,i.jsx)(o.A,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page",children:"Please contact the owner of the site that linked you to the original URL and let them know their link is broken."})})]})})})}}}]);