import{o as s,x as _,G as g,A as w,c as f,a8 as b,a9 as $,aa as k,ab as C,ac as z,a as N,r as L,ad as R,e as t,B as u,d as o,f as e,E as v,ae as S,b as h,w as r,af as V,t as y,j as x,ag as B}from"./index-0eafe3de.js";import I from"./NavbarThemeSwitcher-1853ceed.js";import E from"./UserProfile-69e33cfd.js";import{V as H}from"./VSpacer-215534da.js";import"./VTooltip-bb2039f6.js";import"./oauth-15ca848f.js";import"./VMenu-2f0f037b.js";import"./dialog-transition-b1194f6a.js";import"./VList-9f694016.js";import"./VDivider-8158c71f.js";import"./VListItemAction-9f95a508.js";const W={class:"nav-items"},D={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(m){const l=i=>"children"in i?$:k;return(i,d)=>(s(),_("ul",W,[(s(!0),_(g,null,w(m.navItems,(a,c)=>(s(),f(b(l(a)),{key:c,item:a},null,8,["item"]))),128))]))}},T={class:"layout-navbar"},q={class:"navbar-content-container"},P={class:"layout-horizontal-nav"},j={class:"horizontal-nav-content-container"},A={class:"layout-page-content"},F={class:"layout-footer"},G={class:"footer-content-container"},Y={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(m){const{y:l}=C(),{width:i}=z(),d=N(),a=L(!1);d.beforeEach(()=>{a.value=!0}),d.afterEach(()=>{a.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:p}=R();return(n,M)=>(s(),_("div",{class:v(["layout-wrapper",e(c)(e(i),e(l))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(p)&&"header-blur"])},[t("div",T,[t("div",q,[u(n.$slots,"navbar")])]),t("div",P,[t("div",j,[o(e(D),{"nav-items":m.navItems},null,8,["nav-items"])])])],2),t("main",A,[n.$slots["content-loading"]?(s(),_(g,{key:0},[e(a)?u(n.$slots,"content-loading",{key:0}):u(n.$slots,"default",{key:1})],64)):u(n.$slots,"default",{key:1})]),t("footer",F,[t("div",G,[u(n.$slots,"footer")])])],2))}},J=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"}},{title:"Pokemon shop",to:{name:"shop"},icon:{icon:"tabler-file"}}],K={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},re={__name:"DefaultLayoutWithHorizontalNav",setup(m){const{appRouteTransition:l}=S();return(i,d)=>{const a=h("RouterLink"),c=h("RouterView");return s(),f(e(Y),{"nav-items":e(J)},{navbar:r(()=>[o(a,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[o(e(V),{nodes:e(y).app.logo},null,8,["nodes"]),t("h1",K,x(e(y).app.title),1)]),_:1}),o(H),o(I,{class:"me-2"}),o(E)]),footer:r(()=>[]),default:r(()=>[o(c,null,{default:r(({Component:p})=>[o(B,{name:e(l),mode:"out-in"},{default:r(()=>[(s(),f(b(p)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{re as default};
