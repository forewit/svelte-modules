import{S as E,i as w,s as b,C as D,k as h,a as k,D as C,l as _,h as u,c as I,m as v,n as f,p as d,E as y,b as g,F as L,G as M,H as S,g as T,d as V,o as $}from"../chunks/index.fcf5ccc2.js";function q(l){let o,r,t,i,n;const c=l[4].default,s=D(c,l,l[3],null);return{c(){o=h("meta"),r=k(),t=h("div"),i=h("div"),s&&s.c(),this.h()},l(e){const a=C("svelte-1xk05yi",document.head);o=_(a,"META",{name:!0,content:!0}),a.forEach(u),r=I(e),t=_(e,"DIV",{id:!0,style:!0,class:!0});var p=v(t);i=_(p,"DIV",{id:!0,class:!0});var m=v(i);s&&s.l(m),m.forEach(u),p.forEach(u),this.h()},h(){f(o,"name","viewport"),f(o,"content","width=device-width, user-scalable=0, initial-scale=1.0, maximum-scale=1.0, viewport-fit=cover"),f(i,"id","content"),f(i,"class","svelte-1yf7g91"),f(t,"id","main-grid"),d(t,"--notch-left",l[0]),d(t,"--notch-right",l[1]),d(t,"--notch-top",l[2]),f(t,"class","svelte-1yf7g91")},m(e,a){y(document.head,o),g(e,r,a),g(e,t,a),y(t,i),s&&s.m(i,null),n=!0},p(e,[a]){s&&s.p&&(!n||a&8)&&L(s,c,e,e[3],n?S(c,e[3],a,null):M(e[3]),null),(!n||a&1)&&d(t,"--notch-left",e[0]),(!n||a&2)&&d(t,"--notch-right",e[1]),(!n||a&4)&&d(t,"--notch-top",e[2])},i(e){n||(T(s,e),n=!0)},o(e){V(s,e),n=!1},d(e){u(o),e&&u(r),e&&u(t),s&&s.d(e)}}}function A(l,o,r){let{$$slots:t={},$$scope:i}=o,n=0,c=0,s=0;function e(){r(1,c=screen.orientation.type=="landscape-primary"?1:0),r(0,n=screen.orientation.type=="landscape-secondary"?1:0),r(2,s=screen.orientation.type=="portrait-primary"?1:0)}return $(()=>{screen.orientation.onchange=e,e()}),l.$$set=a=>{"$$scope"in a&&r(3,i=a.$$scope)},[n,c,s,i,t]}class G extends E{constructor(o){super(),w(this,o,A,q,b,{})}}export{G as default};