import{S as N,i as V,s as w,C as z,k as b,q as E,a as j,l as v,m as g,r as A,h as m,c as $,n as _,J as h,b as L,D as n,E as B,F as K,G as M,g as O,d as P,I as Q}from"../chunks/index.d6bf803a.js";import{p as R}from"../chunks/stores.fc2d32ef.js";import{b as q}from"../chunks/paths.e94cd12c.js";function T(o){let s,l,p,d,r,i,C,f,H,S,c,k,y,u;const D=o[2].default,t=z(D,o,o[1],null);return{c(){s=b("nav"),l=b("a"),p=E("Home"),d=j(),r=b("a"),i=E("logs"),C=j(),f=b("a"),H=E("trello"),S=j(),c=b("a"),k=E("board"),y=j(),t&&t.c(),this.h()},l(e){s=v(e,"NAV",{class:!0});var a=g(s);l=v(a,"A",{href:!0,class:!0});var F=g(l);p=A(F,"Home"),F.forEach(m),d=$(a),r=v(a,"A",{href:!0,class:!0});var G=g(r);i=A(G,"logs"),G.forEach(m),C=$(a),f=v(a,"A",{href:!0,class:!0});var I=g(f);H=A(I,"trello"),I.forEach(m),S=$(a),c=v(a,"A",{href:!0,class:!0});var J=g(c);k=A(J,"board"),J.forEach(m),a.forEach(m),y=$(e),t&&t.l(e),this.h()},h(){_(l,"href",q+"/"),_(l,"class","svelte-jydn31"),h(l,"selected",o[0].url.pathname==="{base}/"),_(r,"href",q+"/logs"),_(r,"class","svelte-jydn31"),h(r,"selected",o[0].url.pathname==="{base}/logs"),_(f,"href",q+"/trello"),_(f,"class","svelte-jydn31"),h(f,"selected",o[0].url.pathname==="{base}/trello"),_(c,"href",q+"/board"),_(c,"class","svelte-jydn31"),h(c,"selected",o[0].url.pathname==="{base}/board"),_(s,"class","svelte-jydn31")},m(e,a){L(e,s,a),n(s,l),n(l,p),n(s,d),n(s,r),n(r,i),n(s,C),n(s,f),n(f,H),n(s,S),n(s,c),n(c,k),L(e,y,a),t&&t.m(e,a),u=!0},p(e,[a]){(!u||a&1)&&h(l,"selected",e[0].url.pathname==="{base}/"),(!u||a&1)&&h(r,"selected",e[0].url.pathname==="{base}/logs"),(!u||a&1)&&h(f,"selected",e[0].url.pathname==="{base}/trello"),(!u||a&1)&&h(c,"selected",e[0].url.pathname==="{base}/board"),t&&t.p&&(!u||a&2)&&B(t,D,e,e[1],u?M(D,e[1],a,null):K(e[1]),null)},i(e){u||(O(t,e),u=!0)},o(e){P(t,e),u=!1},d(e){e&&m(s),e&&m(y),t&&t.d(e)}}}function U(o,s,l){let p;Q(o,R,i=>l(0,p=i));let{$$slots:d={},$$scope:r}=s;return o.$$set=i=>{"$$scope"in i&&l(1,r=i.$$scope)},[p,r,d]}class Z extends N{constructor(s){super(),V(this,s,U,T,w,{})}}export{Z as default};