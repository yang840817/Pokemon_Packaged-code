import{o as s,x as _,G as g,A as $,c as f,Q as w,_ as b,R as k,S as C,T as z,a as N,r as R,U as S,e as t,B as u,d as a,f as e,E as v,W as L,b as h,w as r,X as V,t as y,j as x,Y as B}from"./index-6f3c4197.js";import I from"./NavbarThemeSwitcher-03df606e.js";import E from"./UserProfile-8d3ea83f.js";import{V as W}from"./VSpacer-392bdc72.js";import"./VTooltip-7a16e368.js";import"./formatters-1588bd0d.js";import"./oauth-7f6c6e6c.js";import"./VMenu-f96276e7.js";import"./dialog-transition-4228480a.js";import"./VList-e7b3e0e3.js";import"./VDivider-8c007220.js";import"./VListItemAction-fa404fa1.js";const H={class:"nav-items"},T={__name:"HorizontalNav",props:{navItems:{type:null,required:!0}},setup(m){const i=l=>"children"in l?b:k;return(l,d)=>(s(),_("ul",H,[(s(!0),_(g,null,$(m.navItems,(o,c)=>(s(),f(w(i(o)),{key:c,item:o},null,8,["item"]))),128))]))}},D={class:"layout-navbar"},q={class:"navbar-content-container"},P={class:"layout-horizontal-nav"},Y={class:"horizontal-nav-content-container"},j={class:"layout-page-content"},A={class:"layout-footer"},F={class:"footer-content-container"},G={__name:"HorizontalNavLayout",props:{navItems:{type:null,required:!0}},setup(m){const{y:i}=C(),{width:l}=z(),d=N(),o=R(!1);d.beforeEach(()=>{o.value=!0}),d.afterEach(()=>{o.value=!1});const{_layoutClasses:c,isNavbarBlurEnabled:p}=S();return(n,X)=>(s(),_("div",{class:v(["layout-wrapper",e(c)(e(l),e(i))])},[t("div",{class:v(["layout-navbar-and-nav-container",e(p)&&"header-blur"])},[t("div",D,[t("div",q,[u(n.$slots,"navbar")])]),t("div",P,[t("div",Y,[a(e(T),{"nav-items":m.navItems},null,8,["nav-items"])])])],2),t("main",j,[n.$slots["content-loading"]?(s(),_(g,{key:0},[e(o)?u(n.$slots,"content-loading",{key:0}):u(n.$slots,"default",{key:1})],64)):u(n.$slots,"default",{key:1})]),t("footer",A,[t("div",F,[u(n.$slots,"footer")])])],2))}},Q=[{title:"Home",to:{name:"index"},icon:{icon:"tabler-smart-home"}},{title:"Pokemon shop",to:{name:"shop"},icon:{icon:"tabler-file"}}],U={class:"app-title font-weight-bold leading-normal text-xl text-capitalize"},ie={__name:"DefaultLayoutWithHorizontalNav",setup(m){const{appRouteTransition:i}=L();return(l,d)=>{const o=h("RouterLink"),c=h("RouterView");return s(),f(e(G),{"nav-items":e(Q)},{navbar:r(()=>[a(o,{to:"/",class:"app-logo d-flex align-center gap-x-3"},{default:r(()=>[a(e(V),{nodes:e(y).app.logo},null,8,["nodes"]),t("h1",U,x(e(y).app.title),1)]),_:1}),a(W),a(I,{class:"me-2"}),a(E)]),footer:r(()=>[]),default:r(()=>[a(c,null,{default:r(({Component:p})=>[a(B,{name:e(i),mode:"out-in"},{default:r(()=>[(s(),f(w(p)))]),_:2},1032,["name"])]),_:1})]),_:1},8,["nav-items"])}}};export{ie as default};
