function S(){}function Z(t,e){for(const n in e)t[n]=e[n];return t}function K(t){return t()}function G(){return Object.create(null)}function $(t){t.forEach(K)}function Q(t){return typeof t=="function"}function xt(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function tt(t){return Object.keys(t).length===0}function et(t,...e){if(t==null)return S;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function wt(t,e,n){t.$$.on_destroy.push(et(e,n))}function $t(t,e,n,i){if(t){const r=R(t,e,n,i);return t[0](r)}}function R(t,e,n,i){return t[1]&&i?Z(n.ctx.slice(),t[1](i(e))):n.ctx}function vt(t,e,n,i){if(t[2]&&i){const r=t[2](i(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const o=[],s=Math.max(e.dirty.length,r.length);for(let u=0;u<s;u+=1)o[u]=e.dirty[u]|r[u];return o}return e.dirty|r}return e.dirty}function Et(t,e,n,i,r,o){if(r){const s=R(e,n,i,o);t.p(s,r)}}function Nt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let C=!1;function nt(){C=!0}function it(){C=!1}function rt(t,e,n,i){for(;t<e;){const r=t+(e-t>>1);n(r)<=i?t=r+1:e=r}return t}function st(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const c=[];for(let l=0;l<e.length;l++){const f=e[l];f.claim_order!==void 0&&c.push(f)}e=c}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let r=0;for(let c=0;c<e.length;c++){const l=e[c].claim_order,f=(r>0&&e[n[r]].claim_order<=l?r+1:rt(1,r,d=>e[n[d]].claim_order,l))-1;i[c]=n[f]+1;const _=f+1;n[_]=c,r=Math.max(_,r)}const o=[],s=[];let u=e.length-1;for(let c=n[r]+1;c!=0;c=i[c-1]){for(o.push(e[c-1]);u>=c;u--)s.push(e[u]);u--}for(;u>=0;u--)s.push(e[u]);o.reverse(),s.sort((c,l)=>c.claim_order-l.claim_order);for(let c=0,l=0;c<s.length;c++){for(;l<o.length&&s[c].claim_order>=o[l].claim_order;)l++;const f=l<o.length?o[l]:null;t.insertBefore(s[c],f)}}function ct(t,e){if(C){for(st(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function kt(t,e,n){C&&!n?ct(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function lt(t){t.parentNode&&t.parentNode.removeChild(t)}function At(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function ot(t){return document.createElement(t)}function B(t){return document.createTextNode(t)}function St(){return B(" ")}function Ct(){return B("")}function Mt(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function jt(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function ut(t){return Array.from(t.childNodes)}function at(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function W(t,e,n,i,r=!1){at(t);const o=(()=>{for(let s=t.claim_info.last_index;s<t.length;s++){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r||(t.claim_info.last_index=s),u}}for(let s=t.claim_info.last_index-1;s>=0;s--){const u=t[s];if(e(u)){const c=n(u);return c===void 0?t.splice(s,1):t[s]=c,r?c===void 0&&t.claim_info.last_index--:t.claim_info.last_index=s,u}}return i()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function ft(t,e,n,i){return W(t,r=>r.nodeName===e,r=>{const o=[];for(let s=0;s<r.attributes.length;s++){const u=r.attributes[s];n[u.name]||o.push(u.name)}o.forEach(s=>r.removeAttribute(s))},()=>i(e))}function Tt(t,e,n){return ft(t,e,n,ot)}function dt(t,e){return W(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>B(e),!0)}function Dt(t){return dt(t," ")}function Lt(t,e){e=""+e,t.data!==e&&(t.data=e)}function Ot(t,e,n,i){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function Pt(t,e,n){t.classList[n?"add":"remove"](e)}function _t(t,e,{bubbles:n=!1,cancelable:i=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,i,e),r}function Bt(t,e){const n=[];let i=0;for(const r of e.childNodes)if(r.nodeType===8){const o=r.textContent.trim();o===`HEAD_${t}_END`?(i-=1,n.push(r)):o===`HEAD_${t}_START`&&(i+=1,n.push(r))}else i>0&&n.push(r);return n}function Ht(t,e){return new t(e)}let E;function v(t){E=t}function H(){if(!E)throw new Error("Function called outside component initialization");return E}function qt(t){H().$$.on_mount.push(t)}function zt(t){H().$$.after_update.push(t)}function Ft(){const t=H();return(e,n,{cancelable:i=!1}={})=>{const r=t.$$.callbacks[e];if(r){const o=_t(e,n,{cancelable:i});return r.slice().forEach(s=>{s.call(t,o)}),!o.defaultPrevented}return!0}}const x=[],I=[];let w=[];const J=[],U=Promise.resolve();let O=!1;function V(){O||(O=!0,U.then(X))}function Gt(){return V(),U}function P(t){w.push(t)}const L=new Set;let b=0;function X(){if(b!==0)return;const t=E;do{try{for(;b<x.length;){const e=x[b];b++,v(e),ht(e.$$)}}catch(e){throw x.length=0,b=0,e}for(v(null),x.length=0,b=0;I.length;)I.pop()();for(let e=0;e<w.length;e+=1){const n=w[e];L.has(n)||(L.add(n),n())}w.length=0}while(x.length);for(;J.length;)J.pop()();O=!1,L.clear(),v(t)}function ht(t){if(t.fragment!==null){t.update(),$(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(P)}}function mt(t){const e=[],n=[];w.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),w=e}const A=new Set;let g;function It(){g={r:0,c:[],p:g}}function Jt(){g.r||$(g.c),g=g.p}function Y(t,e){t&&t.i&&(A.delete(t),t.i(e))}function pt(t,e,n,i){if(t&&t.o){if(A.has(t))return;A.add(t),g.c.push(()=>{A.delete(t),i&&(n&&t.d(1),i())}),t.o(e)}else i&&i()}const Kt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Qt(t,e){pt(t,1,1,()=>{e.delete(t.key)})}function Rt(t,e,n,i,r,o,s,u,c,l,f,_){let d=t.length,m=o.length,h=d;const M={};for(;h--;)M[t[h].key]=h;const N=[],j=new Map,T=new Map,q=[];for(h=m;h--;){const a=_(r,o,h),p=n(a);let y=s.get(p);y?i&&q.push(()=>y.p(a,e)):(y=l(p,a),y.c()),j.set(p,N[h]=y),p in M&&T.set(p,Math.abs(h-M[p]))}const z=new Set,F=new Set;function D(a){Y(a,1),a.m(u,f),s.set(a.key,a),f=a.first,m--}for(;d&&m;){const a=N[m-1],p=t[d-1],y=a.key,k=p.key;a===p?(f=a.first,d--,m--):j.has(k)?!s.has(y)||z.has(y)?D(a):F.has(k)?d--:T.get(y)>T.get(k)?(F.add(y),D(a)):(z.add(k),d--):(c(p,s),d--)}for(;d--;){const a=t[d];j.has(a.key)||c(a,s)}for(;m;)D(N[m-1]);return $(q),N}function Wt(t){t&&t.c()}function Ut(t,e){t&&t.l(e)}function yt(t,e,n,i){const{fragment:r,after_update:o}=t.$$;r&&r.m(e,n),i||P(()=>{const s=t.$$.on_mount.map(K).filter(Q);t.$$.on_destroy?t.$$.on_destroy.push(...s):$(s),t.$$.on_mount=[]}),o.forEach(P)}function gt(t,e){const n=t.$$;n.fragment!==null&&(mt(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function bt(t,e){t.$$.dirty[0]===-1&&(x.push(t),V(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Vt(t,e,n,i,r,o,s,u=[-1]){const c=E;v(t);const l=t.$$={fragment:null,ctx:[],props:o,update:S,not_equal:r,bound:G(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:G(),dirty:u,skip_bound:!1,root:e.target||c.$$.root};s&&s(l.root);let f=!1;if(l.ctx=n?n(t,e.props||{},(_,d,...m)=>{const h=m.length?m[0]:d;return l.ctx&&r(l.ctx[_],l.ctx[_]=h)&&(!l.skip_bound&&l.bound[_]&&l.bound[_](h),f&&bt(t,_)),d}):[],l.update(),f=!0,$(l.before_update),l.fragment=i?i(l.ctx):!1,e.target){if(e.hydrate){nt();const _=ut(e.target);l.fragment&&l.fragment.l(_),_.forEach(lt)}else l.fragment&&l.fragment.c();e.intro&&Y(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),it(),X()}v(c)}class Xt{$destroy(){gt(this,1),this.$destroy=S}$on(e,n){if(!Q(n))return S;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{const r=i.indexOf(n);r!==-1&&i.splice(r,1)}}$set(e){this.$$set&&!tt(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}export{yt as A,gt as B,$t as C,Bt as D,ct as E,Et as F,Nt as G,vt as H,S as I,wt as J,Pt as K,Mt as L,Ft as M,Rt as N,Qt as O,At as P,Kt as Q,Xt as S,St as a,kt as b,Dt as c,pt as d,Ct as e,Jt as f,Y as g,lt as h,Vt as i,zt as j,ot as k,Tt as l,ut as m,jt as n,qt as o,Ot as p,B as q,dt as r,xt as s,Gt as t,Lt as u,It as v,I as w,Ht as x,Wt as y,Ut as z};
