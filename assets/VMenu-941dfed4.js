import{I as S,J as M,ag as w,ah as D,ai as O,K as x,s as v,r as m,b4 as I,b7 as f,a0 as j,N as g,L as k,aj as V,d as p,a_ as A,ak as N,b0 as R}from"./index-4d7bce60.js";import{V as T}from"./dialog-transition-5a768d73.js";const J=S()({name:"VMenu",props:{id:String,...M(w({closeDelay:250,closeOnContentClick:!0,locationStrategy:"connected",openDelay:300,scrim:!1,scrollStrategy:"reposition",transition:{component:T}}),["absolute"])},emits:{"update:modelValue":a=>!0},setup(a,P){let{slots:o}=P;const t=D(a,"modelValue"),{scopeId:y}=O(),C=x(),i=v(()=>a.id||`v-menu-${C}`),u=m(),e=I(f,null),s=m(0);R(f,{register(){++s.value},unregister(){--s.value},closeParents(){setTimeout(()=>{s.value||(t.value=!1,e==null||e.closeParents())},40)}}),j(t,l=>{l?e==null||e.register():e==null||e.unregister()});function b(){e==null||e.closeParents()}const h=v(()=>g({"aria-haspopup":"menu","aria-expanded":String(t.value),"aria-owns":i.value},a.activatorProps));return k(()=>{const[l]=V.filterProps(a);return p(V,g({ref:u,class:["v-menu",a.class],style:a.style},l,{modelValue:t.value,"onUpdate:modelValue":r=>t.value=r,absolute:!0,activatorProps:h.value,"onClick:outside":b},y),{activator:o.activator,default:function(){for(var r=arguments.length,c=new Array(r),n=0;n<r;n++)c[n]=arguments[n];return p(A,{root:!0},{default:()=>{var d;return[(d=o.default)==null?void 0:d.call(o,...c)]}})}})}),N({id:i,ΨopenChildren:s},u)}});export{J as V};
