import{_ as L}from"./DialogCloseBtn-5bcfb014.js";import{al as j,r as O,am as x,$ as N,s as $,o as d,c as D,w as t,d as e,g as w,a4 as U,i as f,j as _,aV as q,x as b,G as S,A as C,f as g,e as V,H as h,ad as P,ae as R,p as A,a as M,aU as E,aG as G,a6 as H,m as F,l as z}from"./index-6f3c4197.js";import{V as B,a as k}from"./VList-e7b3e0e3.js";import{V as J}from"./VDivider-8c007220.js";import{V as K,a as v}from"./VRow-31f1bb8d.js";import{V as Q}from"./VDialog-8dfbab8f.js";import{V as W,a as X}from"./VToolbar-94627374.js";import{V as Y}from"./VSpacer-392bdc72.js";import"./dialog-transition-4228480a.js";const I=j("order",()=>{const l=O({}),i=O({});async function r(){try{const{data:s}=await x.get("/orders");l.value=s.data.sort((a,m)=>m.id-a.id)}catch(s){return Promise.reject(s)}}async function p(s){try{const{data:a}=await x.get(`/orders/${s}/order_details`);i.value=a.data}catch(a){return Promise.reject(a)}}return{orderList:l,orderDetail:i,getOrder:r,getOrderDetail:p}});const T=l=>(P("data-v-f341a24e"),l=l(),R(),l),Z=T(()=>V("div",null,"Date",-1)),ee=T(()=>V("div",null,"Method",-1)),te={__name:"OrderDetailDialog",props:{targerOrder:{type:Object,required:!0},isDialogVisible:{type:Boolean,required:!0}},emits:["submit","update:isDialogVisible"],setup(l,{emit:i}){const r=l,p=I(),s=y=>{i("update:isDialogVisible",y)},a=$(()=>r.targerOrder.payment_status==="paid"?"success":"error"),m=$(()=>{if(r.targerOrder.payment_method==="credit_card")return"mdi-credit-card";if(r.targerOrder.payment_method==="bank-transfer")return"mdi-bank-transfer";if(r.targerOrder.payment_method==="cash_on_delivery")return"mdi-cash"});return(y,o)=>{const n=L;return d(),D(Q,{width:500,"model-value":r.isDialogVisible,"onUpdate:modelValue":s},{default:t(()=>[e(n,{onClick:o[0]||(o[0]=c=>s(!1))}),e(w,{class:"pa-5"},{default:t(()=>[e(U,null,{default:t(()=>[f(" Order: "+_(r.targerOrder.order_no),1)]),_:1}),e(q,null,{default:t(()=>[f(" Detail ")]),_:1}),e(B,null,{default:t(()=>[(d(!0),b(S,null,C(g(p).orderDetail,c=>(d(),b(S,{key:c.id},[e(k,{title:c.race_name,subtitle:`x ${c.quantity}`},{append:t(()=>[V("div",null,_(`$${c.subtotal_price}`),1)]),_:2},1032,["title","subtitle"]),e(J)],64))),128)),e(k,null,{default:t(()=>[e(K,null,{default:t(()=>[e(v,{cols:"4"},{default:t(()=>[Z,V("div",null,_(new Date(r.targerOrder.created_at).toLocaleDateString()),1)]),_:1}),e(v,{cols:"4",class:"text-center"},{default:t(()=>[ee,e(h,{color:g(a)},{default:t(()=>[f(_(g(m)),1)]),_:1},8,["color"])]),_:1}),e(v,{cols:"4",class:"d-flex align-center justify-end"},{default:t(()=>[V("div",null,"Total : $"+_(r.targerOrder.total_price),1)]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1},8,["model-value"])}}},re=N(te,[["__scopeId","data-v-f341a24e"]]),pe={__name:"order",setup(l){const i=I(),r=A(),p=M(),s=E(),a=O(!1),m=O({});G(async()=>{try{const{status:o,order:n}=s.query;o&&n&&(r.message=`Order_No: ${n} Status:${o}`,r.isShow=!0,r.timeout=1e4,r.noticeType(o==="SUCCESS")),p.replace("/order"),await i.getOrder()}catch{p.replace("/login")}});async function y(o){try{await i.getOrderDetail(o.id),m.value=o,a.value=!0}catch{}}return(o,n)=>{const c=re;return d(),b("div",null,[e(w,{class:"mx-auto"},{default:t(()=>[e(W,{color:"primary"},{default:t(()=>[e(X,null,{default:t(()=>[f("Order History")]),_:1}),e(Y)]),_:1}),e(B,null,{default:t(()=>[(d(!0),b(S,null,C(g(i).orderList,u=>(d(),D(k,{key:u.id,title:`Order No : ${u.order_no}`,subtitle:`Status : ${u.payment_status}`},{prepend:t(()=>[e(H,null,{default:t(()=>[u.payment_status==="paid"?(d(),D(h,{key:0,color:"success"},{default:t(()=>[f(_("mdi-clipboard-text"))]),_:1})):(d(),D(h,{key:1,color:"error"},{default:t(()=>[f(_("mdi-error"))]),_:1}))]),_:2},1024)]),append:t(()=>[e(F,{onClick:ae=>y(u),color:"grey-lighten-1",icon:"mdi-receipt-text-check-outline",variant:"text"},null,8,["onClick"])]),_:2},1032,["title","subtitle"]))),128))]),_:1})]),_:1}),e(c,{isDialogVisible:g(a),"onUpdate:isDialogVisible":n[0]||(n[0]=u=>z(a)?a.value=u:null),targerOrder:g(m)},null,8,["isDialogVisible","targerOrder"])])}}};export{pe as default};
