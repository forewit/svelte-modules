import{S as b,i as k,s as w,k as h,l as u,m as p,h as d,n as $,b as E,E as S,I as _,o as x,w as T}from"../chunks/index.fce9d48b.js";import{b as g}from"../chunks/paths.0a5258b9.js";function C(o){let n,t,i=v(o[0])+"";return{c(){n=h("main"),t=h("article"),this.h()},l(e){n=u(e,"MAIN",{class:!0});var a=p(n);t=u(a,"ARTICLE",{});var c=p(t);c.forEach(d),a.forEach(d),this.h()},h(){$(n,"class","svelte-192idw")},m(e,a){E(e,n,a),S(n,t),t.innerHTML=i,o[2](n)},p(e,[a]){a&1&&i!==(i=v(e[0])+"")&&(t.innerHTML=i)},i:_,o:_,d(e){e&&d(n),o[2](null)}}}function v(o){return o.split(`
`).map(t=>{var i,e,a;if(t.startsWith("# ")){const c=((e=(i=t.match(/^#+/))==null?void 0:i[0])==null?void 0:e.length)||0,s=t.slice(c+1),l=L(s),r=(a=t.match(/\{(.+?)\}/))==null?void 0:a[1],f=r?s.replace(`{${r}}`,""):s;return`<h${c} id="${l}" ${r?`trigger-class="${r}"`:""}>${f}</h${c}>`}else if(t.startsWith("![")){const c=t.indexOf("]("),s=c+2,l=t.indexOf(")",s),r=t.slice(2,c);return`<img src="${t.slice(s,l)}" alt="${r}" />`}else return`<p>${t}</p>`}).join("")}function L(o){return o.replace(/\{.+?\}/g,"").replace(/\s+/g,"-").replace(/^-+|-+$/g,"").toLowerCase()}function y(o,n,t){let{markdown:i=`# Section 1 {-dark}
content for section 1
![leaf](${g}/images/leaf.svg)

# Section 2 {+dark}
content for section 2
![moon](${g}/images/moon.svg)

# Section 3 {-dark}
content for section 3
![sun](${g}/images/sun.svg)

# Section 4 
content for section 4`}=n,e;function a(s){s.forEach(l=>{let r=l.target.getAttribute("trigger-class")||"";console.log(r),r.split(" ").filter(m=>m).forEach(m=>{m.startsWith("+")?e.classList.add(m.slice(1)):m.startsWith("-")&&e.classList.remove(m.slice(1))})})}x(()=>{setTimeout(()=>{const s=new IntersectionObserver(a,{root:e,rootMargin:"0px 0px -30px 0px",threshold:1}),l=e.querySelectorAll("[trigger-class]");l==null||l.forEach(r=>{s.observe(r)})},0)});function c(s){T[s?"unshift":"push"](()=>{e=s,t(1,e)})}return o.$$set=s=>{"markdown"in s&&t(0,i=s.markdown)},[i,e,c]}class H extends b{constructor(n){super(),k(this,n,y,C,w,{markdown:0})}}export{H as default};
