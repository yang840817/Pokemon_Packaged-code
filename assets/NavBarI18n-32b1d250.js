import{a0 as g,r as d,b as f,o as r,c as i,w as n,d as l,H as _,f as L,l as b,x as h,G as v,A as V,i as C,j as I,W as x}from"./index-6f3c4197.js";import{V as k}from"./VMenu-f96276e7.js";import{V as B,a as y,b as A}from"./VList-e7b3e0e3.js";import"./dialog-transition-4228480a.js";import"./VDivider-8c007220.js";const w={__name:"I18n",props:{languages:{type:Array,required:!0},location:{type:null,required:!1,default:"bottom end"}},emits:["change"],setup(c,{emit:u}){const t=c,{locale:o}=useI18n({useScope:"global"});g(o,s=>{document.documentElement.setAttribute("lang",s)});const a=d(["en"]);return(s,m)=>{const p=f("IconBtn");return r(),i(p,null,{default:n(()=>[l(_,{size:"26",icon:"tabler-language"}),l(k,{activator:"parent",location:t.location,offset:"14px"},{default:n(()=>[l(B,{selected:L(a),"onUpdate:selected":m[0]||(m[0]=e=>b(a)?a.value=e:null),"min-width":"175px"},{default:n(()=>[(r(!0),h(v,null,V(t.languages,e=>(r(),i(y,{key:e.i18nLang,value:e.i18nLang,onClick:E=>{o.value=e.i18nLang,s.$emit("change",e.i18nLang)}},{default:n(()=>[l(A,null,{default:n(()=>[C(I(e.label),1)]),_:2},1024)]),_:2},1032,["value","onClick"]))),128))]),_:1},8,["selected"])]),_:1},8,["location"])]),_:1})}}},R={__name:"NavBarI18n",setup(c){const{isAppRtl:u}=x(),t=[{label:"English",i18nLang:"en"},{label:"French",i18nLang:"fr"},{label:"Arabic",i18nLang:"ar"}],o=a=>{u.value=a==="ar"};return(a,s)=>(r(),i(w,{languages:t,onChange:o}))}};export{R as default};
