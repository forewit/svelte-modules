import{S as v,i as E,s as T,k as M,l as R,m as U,h as u,p as k,n as x,b as d,I as y,o as S,w as z,a as L,q as C,y as q,D as j,c as A,r as H,z as B,E as D,A as N,g as O,d as P,B as W}from"../chunks/index.fce9d48b.js";import{b as $}from"../chunks/paths.ef5a175b.js";function F(c){let t;return{c(){t=M("main"),this.h()},l(a){t=R(a,"MAIN",{style:!0,class:!0}),U(t).forEach(u),this.h()},h(){k(t,"height","calc(100% - "+c[0]+"px)"),x(t,"class","svelte-z1uzu8")},m(a,r){d(a,t,r),c[3](t)},p(a,[r]){r&1&&k(t,"height","calc(100% - "+a[0]+"px)")},i:y,o:y,d(a){a&&u(t),c[3](null)}}}async function G(c){return await(await fetch(c)).text()}function J(c,t,a){let{markdownURL:r}=t,{offsetTop:m=0}=t,o;function l(s){var _;return`<style>${(_=s.match(/```css[\s\S]*?```/g))==null?void 0:_.map(n=>n.replace(/```css/,"").replace(/```/,"")).join("")}</style>`+s.replace(/```css[\s\S]*?```/g,"").split(`
`).map(n=>{var b,w;const f=(b=n.match(/\{(.+?)\}/))==null?void 0:b[1];if(n=n.replace(/\{(.+?)\}/,"").trim(),n.startsWith("#")){const g=((w=n.match(/^(#+)/))==null?void 0:w[0].length)||1,p=n.replace(/^(#+\s*)/,""),I=p.toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/(^-|-$)+/g,"");return`<h${g} id="${I}" ${f?`triggers="${f}"`:""}>${p}</h${g}>`}else{const g=n.match(/^!\[(.+?)\]\((.+?)\)$/),p=n.match(/^\[(.+?)\]\((.+?)\)$/);return g?`<img src="${$}${g[2]}" alt="${g[1]}" ${f?`triggers="${f}"`:""}/>`:p?`<a href="${$}${p[2]}" ${f?`triggers="${f}"`:""}>${p[1]}</a>`:`<p ${f?`triggers="${f}"`:""}>${n}</p>`}}).join("").replace(/!\[(.+?)\]\((.+?)\)/g,`<img src="${$}$2" alt="$1" />`).replace(/\[(.+?)\]\((.+?)\)/g,'<a href="$2">$1</a>')}function h(s){o&&s.forEach(i=>{var n;(((n=i.target.getAttribute("triggers"))==null?void 0:n.split(" "))||[]).forEach(f=>{o.classList.toggle(f,i.isIntersecting)})})}S(()=>{G(r).then(s=>{const i=l(s);a(1,o.innerHTML=i,o);const _=new IntersectionObserver(h,{root:o,rootMargin:"0px",threshold:.5});o.querySelectorAll("[triggers]").forEach(n=>_.observe(n))})});function e(s){z[s?"unshift":"push"](()=>{o=s,a(1,o)})}return c.$$set=s=>{"markdownURL"in s&&a(2,r=s.markdownURL),"offsetTop"in s&&a(0,m=s.offsetTop)},[m,o,r,e]}class K extends v{constructor(t){super(),E(this,t,J,F,T,{markdownURL:2,offsetTop:0})}}function Q(c){let t,a,r,m,o,l,h;return document.title=t=c[0].title,l=new K({props:{markdownURL:c[0].url,offsetTop:71}}),{c(){a=L(),r=M("a"),m=C("...back"),o=L(),q(l.$$.fragment),this.h()},l(e){j("svelte-tef83d",document.head).forEach(u),a=A(e),r=R(e,"A",{href:!0});var i=U(r);m=H(i,"...back"),i.forEach(u),o=A(e),B(l.$$.fragment,e),this.h()},h(){x(r,"href",$+"/blog")},m(e,s){d(e,a,s),d(e,r,s),D(r,m),d(e,o,s),N(l,e,s),h=!0},p(e,[s]){(!h||s&1)&&t!==(t=e[0].title)&&(document.title=t);const i={};s&1&&(i.markdownURL=e[0].url),l.$set(i)},i(e){h||(O(l.$$.fragment,e),h=!0)},o(e){P(l.$$.fragment,e),h=!1},d(e){e&&u(a),e&&u(r),e&&u(o),W(l,e)}}}function V(c,t,a){let{data:r}=t;return c.$$set=m=>{"data"in m&&a(0,r=m.data)},[r]}class Z extends v{constructor(t){super(),E(this,t,V,Q,T,{data:0})}}export{Z as default};
