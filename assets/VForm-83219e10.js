import{g as p,h as v}from"./VTextField-0db26578.js";import{I as b,ao as h,r as y,L as R,d as V,ak as F}from"./index-6f3c4197.js";const g=b()({name:"VForm",props:{...h(),...p()},emits:{"update:modelValue":n=>!0,submit:n=>!0},setup(n,i){let{slots:r,emit:f}=i;const o=v(n),s=y();function l(t){t.preventDefault(),o.reset()}function u(t){const a=t,e=o.validate();a.then=e.then.bind(e),a.catch=e.catch.bind(e),a.finally=e.finally.bind(e),f("submit",a),a.defaultPrevented||e.then(c=>{var m;let{valid:d}=c;d&&((m=s.value)==null||m.submit())}),a.preventDefault()}return R(()=>{var t;return V("form",{ref:s,class:["v-form",n.class],style:n.style,novalidate:!0,onReset:l,onSubmit:u},[(t=r.default)==null?void 0:t.call(r,o)])}),F(o,s)}});export{g as V};
