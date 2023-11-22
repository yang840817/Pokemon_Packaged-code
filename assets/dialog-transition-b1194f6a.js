import{N as P,d as y,$ as q,ag as u,br as p,bJ as A,bs as v,bK as B,bq as C}from"./index-0eafe3de.js";const F=P()({name:"VDialogTransition",props:{target:Object},setup(g,i){let{slots:e}=i;const o={onBeforeEnter(t){t.style.pointerEvents="none",t.style.visibility="hidden"},async onEnter(t,d){var c;await new Promise(n=>requestAnimationFrame(n)),await new Promise(n=>requestAnimationFrame(n)),t.style.visibility="";const{x:s,y:a,sx:h,sy:l,speed:r}=x(g.target,t),f=p(t,[{transform:`translate(${s}px, ${a}px) scale(${h}, ${l})`,opacity:0},{}],{duration:225*r,easing:A});(c=w(t))==null||c.forEach(n=>{p(n,[{opacity:0},{opacity:0,offset:.33},{}],{duration:225*2*r,easing:v})}),f.finished.then(()=>d())},onAfterEnter(t){t.style.removeProperty("pointer-events")},onBeforeLeave(t){t.style.pointerEvents="none"},async onLeave(t,d){var c;await new Promise(n=>requestAnimationFrame(n));const{x:s,y:a,sx:h,sy:l,speed:r}=x(g.target,t);p(t,[{},{transform:`translate(${s}px, ${a}px) scale(${h}, ${l})`,opacity:0}],{duration:125*r,easing:B}).finished.then(()=>d()),(c=w(t))==null||c.forEach(n=>{p(n,[{},{opacity:0,offset:.2},{opacity:0}],{duration:125*2*r,easing:v})})},onAfterLeave(t){t.style.removeProperty("pointer-events")}};return()=>g.target?y(u,q({name:"dialog-transition"},o,{css:!1}),e):y(u,{name:"dialog-transition"},e)}});function w(g){var e;const i=(e=g.querySelector(":scope > .v-card, :scope > .v-sheet, :scope > .v-list"))==null?void 0:e.children;return i&&[...i]}function x(g,i){const e=g.getBoundingClientRect(),o=C(i),[t,d]=getComputedStyle(i).transformOrigin.split(" ").map($=>parseFloat($)),[s,a]=getComputedStyle(i).getPropertyValue("--v-overlay-anchor-origin").split(" ");let h=e.left+e.width/2;s==="left"||a==="left"?h-=e.width/2:(s==="right"||a==="right")&&(h+=e.width/2);let l=e.top+e.height/2;s==="top"||a==="top"?l-=e.height/2:(s==="bottom"||a==="bottom")&&(l+=e.height/2);const r=e.width/o.width,f=e.height/o.height,c=Math.max(1,r,f),n=r/c||0,b=f/c||0,m=o.width*o.height/(window.innerWidth*window.innerHeight),E=m>.12?Math.min(1.5,(m-.12)*10+1):1;return{x:h-(t+o.left),y:l-(d+o.top),sx:n,sy:b,speed:E}}export{F as V};
