import{S as A,i as z,s as S,k as b,q as N,l as y,m as C,r as O,h as m,n as w,b as k,E as g,M as q,I as p,N as V,C as j,a as I,y as B,c as L,z as E,A as D,F,G,H as J,g as $,d as v,B as T,o as K,w as Q,u as W,v as X,O as Y,f as Z,J as x,e as H,P as tt}from"../chunks/index.0763452e.js";import{w as et}from"../chunks/index.b26f5d06.js";function st(a){let t,n,s,l;return{c(){t=b("button"),n=N("×"),this.h()},l(e){t=y(e,"BUTTON",{class:!0});var i=C(t);n=O(i,"×"),i.forEach(m),this.h()},h(){w(t,"class","remove-card-button svelte-1jm72ar")},m(e,i){k(e,t,i),g(t,n),s||(l=q(t,"click",a[1]),s=!0)},p,i:p,o:p,d(e){e&&m(t),s=!1,l()}}}function nt(a){const t=V();return[t,()=>t("click")]}class at extends A{constructor(t){super(),z(this,t,nt,st,S,{})}}function rt(a){let t,n,s,l,e,i;const f=a[5].default,r=j(f,a,a[4],null);return s=new at({}),s.$on("click",a[6]),{c(){t=b("div"),r&&r.c(),n=I(),B(s.$$.fragment),this.h()},l(o){t=y(o,"DIV",{class:!0});var d=C(t);r&&r.l(d),n=L(d),E(s.$$.fragment,d),d.forEach(m),this.h()},h(){w(t,"class","card svelte-z26kpo")},m(o,d){k(o,t,d),r&&r.m(t,null),g(t,n),D(s,t,null),a[7](t),l=!0,e||(i=q(t,"dragstart",a[3]),e=!0)},p(o,[d]){r&&r.p&&(!l||d&16)&&F(r,f,o,o[4],l?J(f,o[4],d,null):G(o[4]),null)},i(o){l||($(r,o),$(s.$$.fragment,o),l=!0)},o(o){v(r,o),v(s.$$.fragment,o),l=!1},d(o){o&&m(t),r&&r.d(o),T(s),a[7](null),e=!1,i()}}}function lt(a,t,n){let{$$slots:s={},$$scope:l}=t,{card:e}=t,{removeCard:i}=t,f;K(()=>{n(2,f.draggable=!0,f)});function r(_){_.dataTransfer&&_.dataTransfer.setData("text/plain",e.id.toString())}const o=()=>i(e.id);function d(_){Q[_?"unshift":"push"](()=>{f=_,n(2,f)})}return a.$$set=_=>{"card"in _&&n(0,e=_.card),"removeCard"in _&&n(1,i=_.removeCard),"$$scope"in _&&n(4,l=_.$$scope)},[e,i,f,r,l,s,o,d]}class it extends A{constructor(t){super(),z(this,t,lt,rt,S,{card:0,removeCard:1})}}function ot(a){let t,n,s,l;return{c(){t=b("button"),n=N("+"),this.h()},l(e){t=y(e,"BUTTON",{class:!0});var i=C(t);n=O(i,"+"),i.forEach(m),this.h()},h(){w(t,"class","add-card-button svelte-1kccyri")},m(e,i){k(e,t,i),g(t,n),s||(l=q(t,"click",a[1]),s=!0)},p,i:p,o:p,d(e){e&&m(t),s=!1,l()}}}function ct(a){const t=V();return[t,()=>t("click")]}class ut extends A{constructor(t){super(),z(this,t,ct,ot,S,{})}}function P(a,t,n){const s=a.slice();return s[5]=t[n],s}function R(a,t){let n,s,l;return s=new it({props:{card:t[5],removeCard:t[4]}}),{key:a,first:null,c(){n=H(),B(s.$$.fragment),this.h()},l(e){n=H(),E(s.$$.fragment,e),this.h()},h(){this.first=n},m(e,i){k(e,n,i),D(s,e,i),l=!0},p(e,i){t=e;const f={};i&2&&(f.card=t[5]),s.$set(f)},i(e){l||($(s.$$.fragment,e),l=!0)},o(e){v(s.$$.fragment,e),l=!1},d(e){e&&m(n),T(s,e)}}}function ft(a){let t,n,s,l,e=[],i=new Map,f,r,o,d=a[1];const _=u=>u[5].id;for(let u=0;u<d.length;u+=1){let c=P(a,d,u),h=_(c);i.set(h,e[u]=R(h,c))}return r=new ut({}),r.$on("click",a[3]),{c(){t=b("div"),n=b("h3"),s=N(a[0]),l=I();for(let u=0;u<e.length;u+=1)e[u].c();f=I(),B(r.$$.fragment),this.h()},l(u){t=y(u,"DIV",{class:!0});var c=C(t);n=y(c,"H3",{class:!0});var h=C(n);s=O(h,a[0]),h.forEach(m),l=L(c);for(let M=0;M<e.length;M+=1)e[M].l(c);f=L(c),E(r.$$.fragment,c),c.forEach(m),this.h()},h(){w(n,"class","svelte-1uxazww"),w(t,"class","list svelte-1uxazww")},m(u,c){k(u,t,c),g(t,n),g(n,s),g(t,l);for(let h=0;h<e.length;h+=1)e[h]&&e[h].m(t,null);g(t,f),D(r,t,null),o=!0},p(u,[c]){(!o||c&1)&&W(s,u[0]),c&18&&(d=u[1],X(),e=Y(e,c,_,1,u,d,i,t,tt,R,f,P),Z())},i(u){if(!o){for(let c=0;c<d.length;c+=1)$(e[c]);$(r.$$.fragment,u),o=!0}},o(u){for(let c=0;c<e.length;c+=1)v(e[c]);v(r.$$.fragment,u),o=!1},d(u){u&&m(t);for(let c=0;c<e.length;c+=1)e[c].d();T(r)}}}function dt(a,t,n){let s,{title:l=""}=t;const e=et([]);x(a,e,r=>n(1,s=r));function i(){e.update(r=>[...r,{id:Date.now()}])}function f(r){e.update(o=>o.filter(d=>d.id!==r))}return a.$$set=r=>{"title"in r&&n(0,l=r.title)},[l,s,e,i,f]}class U extends A{constructor(t){super(),z(this,t,dt,ft,S,{title:0})}}function _t(a){let t,n,s,l;return t=new U({props:{title:"List A"}}),s=new U({props:{title:"Another list (B)"}}),{c(){B(t.$$.fragment),n=I(),B(s.$$.fragment)},l(e){E(t.$$.fragment,e),n=L(e),E(s.$$.fragment,e)},m(e,i){D(t,e,i),k(e,n,i),D(s,e,i),l=!0},p,i(e){l||($(t.$$.fragment,e),$(s.$$.fragment,e),l=!0)},o(e){v(t.$$.fragment,e),v(s.$$.fragment,e),l=!1},d(e){T(t,e),e&&m(n),T(s,e)}}}class gt extends A{constructor(t){super(),z(this,t,null,_t,S,{})}}export{gt as default};
