const Mn=!1;var Ln=Array.isArray,$t=Array.prototype.indexOf,qn=Array.from,Yn=Object.defineProperty,ct=Object.getOwnPropertyDescriptor,Zt=Object.getOwnPropertyDescriptors,jn=Object.prototype,Bn=Array.prototype,zt=Object.getPrototypeOf;const Hn=()=>{};function Un(t){return t()}function Et(t){for(var n=0;n<t.length;n++)t[n]()}const y=2,yt=4,J=8,ut=16,R=32,P=64,H=128,w=256,U=512,v=1024,S=2048,N=4096,b=8192,W=16384,Jt=32768,gt=65536,Vn=1<<17,Wt=1<<19,mt=1<<20,vt=Symbol("$state"),Gn=Symbol("legacy props"),Kn=Symbol("");function Tt(t){return t===this.v}function Xt(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function $n(t,n){return t!==n}function At(t){return!Xt(t,this.v)}function Qt(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function nn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function rn(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function Zn(){throw new Error("https://svelte.dev/e/hydration_failed")}function zn(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Jn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function Wn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function en(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function an(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}let X=!1;function Xn(){X=!0}const Qn=1,tr=2,nr=16,rr=1,er=2,ar=4,lr=8,sr=16,ur=1,or=2,ln="[",sn="[!",un="]",xt={},fr=Symbol(),ir="http://www.w3.org/2000/svg";function Rt(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function on(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let o=null;function pt(t){o=t}function _r(t,n){return fn().set(t,n),n}function cr(t,n=!1,r){o={p:o,c:null,e:null,m:!1,s:t,x:null,l:null},X&&!n&&(o.l={s:null,u:null,r1:[],r2:ot(!1)})}function vr(t){const n=o;if(n!==null){const s=n.e;if(s!==null){var r=f,e=u;n.e=null;try{for(var l=0;l<s.length;l++){var a=s[l];$(a.effect),K(a.reaction),Pt(a.fn)}}finally{$(r),K(e)}}o=n.p,n.m=!0}return{}}function Q(){return!X||o!==null&&o.l===null}function fn(t){return o===null&&on(),o.c??(o.c=new Map(_n(o)||void 0))}function _n(t){let n=t.p;for(;n!==null;){const r=n.c;if(r!==null)return r;n=n.p}return null}function ot(t,n){var r={f:0,v:t,reactions:null,equals:Tt,rv:0,wv:0};return r}function pr(t){return Dt(ot(t))}function cn(t,n=!1){var e;const r=ot(t);return n||(r.equals=At),X&&o!==null&&o.l!==null&&((e=o.l).s??(e.s=[])).push(r),r}function hr(t,n=!1){return Dt(cn(t,n))}function Dt(t){return u!==null&&!E&&u.f&y&&(A===null?Rn([t]):A.push(t)),t}function vn(t,n){return u!==null&&!E&&Q()&&u.f&(y|ut)&&(A===null||!A.includes(t))&&an(),pn(t,n)}function pn(t,n){return t.equals(n)||(t.v,t.v=n,t.wv=Ht(),St(t,S),Q()&&f!==null&&f.f&v&&!(f.f&(R|P))&&(x===null?Dn([t]):x.push(t))),n}function St(t,n){var r=t.reactions;if(r!==null)for(var e=Q(),l=r.length,a=0;a<l;a++){var s=r[a],i=s.f;i&S||!e&&s===f||(m(s,n),i&(v|w)&&(i&y?St(s,N):rt(s)))}}let I=!1;function dr(t){I=t}let g;function q(t){if(t===null)throw Rt(),xt;return g=t}function wr(){return q(C(g))}function Er(t){if(I){if(C(g)!==null)throw Rt(),xt;g=t}}function yr(t=1){if(I){for(var n=t,r=g;n--;)r=C(r);g=r}}function gr(){for(var t=0,n=g;;){if(n.nodeType===8){var r=n.data;if(r===un){if(t===0)return n;t-=1}else(r===ln||r===sn)&&(t+=1)}var e=C(n);n.remove(),n=e}}var ht,hn,dn,kt,It;function mr(){if(ht===void 0){ht=window,hn=document,dn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype;kt=ct(n,"firstChild").get,It=ct(n,"nextSibling").get,t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__styles=null,t.__e=void 0,Text.prototype.__t=void 0}}function et(t=""){return document.createTextNode(t)}function at(t){return kt.call(t)}function C(t){return It.call(t)}function Tr(t,n){if(!I)return at(t);var r=at(g);if(r===null)r=g.appendChild(et());else if(n&&r.nodeType!==3){var e=et();return r==null||r.before(e),q(e),e}return q(r),r}function Ar(t,n){if(!I){var r=at(t);return r instanceof Comment&&r.data===""?C(r):r}return g}function xr(t,n=1,r=!1){let e=I?g:t;for(var l;n--;)l=e,e=C(e);if(!I)return e;var a=e==null?void 0:e.nodeType;if(r&&a!==3){var s=et();return e===null?l==null||l.after(s):e.before(s),q(s),s}return q(e),e}function Rr(t){t.textContent=""}function Ot(t){var n=y|S,r=u!==null&&u.f&y?u:null;return f===null||r!==null&&r.f&w?n|=w:f.f|=mt,{ctx:o,deps:null,effects:null,equals:Tt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:r??f}}function Dr(t){const n=Ot(t);return n.equals=At,n}function Nt(t){var n=t.effects;if(n!==null){t.effects=null;for(var r=0;r<n.length;r+=1)O(n[r])}}function wn(t){for(var n=t.parent;n!==null;){if(!(n.f&y))return n;n=n.parent}return null}function En(t){var n,r=f;$(wn(t));try{Nt(t),n=Vt(t)}finally{$(r)}return n}function Ct(t){var n=En(t),r=(D||t.f&w)&&t.deps!==null?N:v;m(t,r),t.equals(n)||(t.v=n,t.wv=Ht())}function bt(t){f===null&&u===null&&nn(),u!==null&&u.f&w&&f===null&&tn(),it&&Qt()}function yn(t,n){var r=n.last;r===null?n.last=n.first=t:(r.next=t,t.prev=r,n.last=t)}function F(t,n,r,e=!0){var l=f,a={ctx:o,deps:null,nodes_start:null,nodes_end:null,f:t|S,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(r)try{nt(a),a.f|=Jt}catch(_){throw O(a),_}else n!==null&&rt(a);var s=r&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(mt|H))===0;if(!s&&e&&(l!==null&&yn(a,l),u!==null&&u.f&y)){var i=u;(i.effects??(i.effects=[])).push(a)}return a}function Sr(t){const n=F(J,null,!1);return m(n,v),n.teardown=t,n}function kr(t){bt();var n=f!==null&&(f.f&R)!==0&&o!==null&&!o.m;if(n){var r=o;(r.e??(r.e=[])).push({fn:t,effect:f,reaction:u})}else{var e=Pt(t);return e}}function Ir(t){return bt(),ft(t)}function Or(t){const n=F(P,t,!0);return(r={})=>new Promise(e=>{r.outro?Tn(n,()=>{O(n),e(void 0)}):(O(n),e(void 0))})}function Pt(t){return F(yt,t,!1)}function Nr(t,n){var r=o,e={effect:null,ran:!1};r.l.r1.push(e),e.effect=ft(()=>{t(),!e.ran&&(e.ran=!0,vn(r.l.r2,!0),Pn(n))})}function Cr(){var t=o;ft(()=>{if(Kt(t.l.r2)){for(var n of t.l.r1){var r=n.effect;r.f&v&&m(r,N),M(r)&&nt(r),n.ran=!1}t.l.r2.v=!1}})}function ft(t){return F(J,t,!0)}function br(t,n=[],r=Ot){const e=n.map(r);return gn(()=>t(...e.map(Kt)))}function gn(t,n=0){return F(J|ut|n,t,!0)}function Pr(t,n=!0){return F(J|R,t,!0,n)}function Ft(t){var n=t.teardown;if(n!==null){const r=it,e=u;wt(!0),K(null);try{n.call(null)}finally{wt(r),K(e)}}}function Mt(t,n=!1){var r=t.first;for(t.first=t.last=null;r!==null;){var e=r.next;r.f&P?r.parent=null:O(r,n),r=e}}function mn(t){for(var n=t.first;n!==null;){var r=n.next;n.f&R||O(n),n=r}}function O(t,n=!0){var r=!1;if((n||t.f&Wt)&&t.nodes_start!==null){for(var e=t.nodes_start,l=t.nodes_end;e!==null;){var a=e===l?null:C(e);e.remove(),e=a}r=!0}Mt(t,n&&!r),z(t,0),m(t,W);var s=t.transitions;if(s!==null)for(const _ of s)_.stop();Ft(t);var i=t.parent;i!==null&&i.first!==null&&Lt(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function Lt(t){var n=t.parent,r=t.prev,e=t.next;r!==null&&(r.next=e),e!==null&&(e.prev=r),n!==null&&(n.first===t&&(n.first=e),n.last===t&&(n.last=r))}function Tn(t,n){var r=[];qt(t,r,!0),An(r,()=>{O(t),n&&n()})}function An(t,n){var r=t.length;if(r>0){var e=()=>--r||n();for(var l of t)l.out(e)}else n()}function qt(t,n,r){if(!(t.f&b)){if(t.f^=b,t.transitions!==null)for(const s of t.transitions)(s.is_global||r)&&n.push(s);for(var e=t.first;e!==null;){var l=e.next,a=(e.f&gt)!==0||(e.f&R)!==0;qt(e,n,a?r:!1),e=l}}}function Fr(t){Yt(t,!0)}function Yt(t,n){if(t.f&b){t.f^=b,t.f&v||(t.f^=v),M(t)&&(m(t,S),rt(t));for(var r=t.first;r!==null;){var e=r.next,l=(r.f&gt)!==0||(r.f&R)!==0;Yt(r,l?n:!1),r=e}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let Y=[],lt=[];function jt(){var t=Y;Y=[],Et(t)}function xn(){var t=lt;lt=[],Et(t)}function Mr(t){Y.length===0&&queueMicrotask(jt),Y.push(t)}function dt(){Y.length>0&&jt(),lt.length>0&&xn()}let B=!1,V=!1,G=null,k=!1,it=!1;function wt(t){it=t}let L=[];let u=null,E=!1;function K(t){u=t}let f=null;function $(t){f=t}let A=null;function Rn(t){A=t}let c=null,d=0,x=null;function Dn(t){x=t}let Bt=1,Z=0,D=!1;function Ht(){return++Bt}function M(t){var p;var n=t.f;if(n&S)return!0;if(n&N){var r=t.deps,e=(n&w)!==0;if(r!==null){var l,a,s=(n&U)!==0,i=e&&f!==null&&!D,_=r.length;if(s||i){var T=t,j=T.parent;for(l=0;l<_;l++)a=r[l],(s||!((p=a==null?void 0:a.reactions)!=null&&p.includes(T)))&&(a.reactions??(a.reactions=[])).push(T);s&&(T.f^=U),i&&j!==null&&!(j.f&w)&&(T.f^=w)}for(l=0;l<_;l++)if(a=r[l],M(a)&&Ct(a),a.wv>t.wv)return!0}(!e||f!==null&&!D)&&m(t,v)}return!1}function Sn(t,n){for(var r=n;r!==null;){if(r.f&H)try{r.fn(t);return}catch{r.f^=H}r=r.parent}throw B=!1,t}function kn(t){return(t.f&W)===0&&(t.parent===null||(t.parent.f&H)===0)}function tt(t,n,r,e){if(B){if(r===null&&(B=!1),kn(n))throw t;return}r!==null&&(B=!0);{Sn(t,n);return}}function Ut(t,n,r=!0){var e=t.reactions;if(e!==null)for(var l=0;l<e.length;l++){var a=e[l];a.f&y?Ut(a,n,!1):n===a&&(r?m(a,S):a.f&v&&m(a,N),rt(a))}}function Vt(t){var _t;var n=c,r=d,e=x,l=u,a=D,s=A,i=o,_=E,T=t.f;c=null,d=0,x=null,D=(T&w)!==0&&(E||!k||u===null),u=T&(R|P)?null:t,A=null,pt(t.ctx),E=!1,Z++;try{var j=(0,t.fn)(),p=t.deps;if(c!==null){var h;if(z(t,d),p!==null&&d>0)for(p.length=d+c.length,h=0;h<c.length;h++)p[d+h]=c[h];else t.deps=p=c;if(!D)for(h=d;h<p.length;h++)((_t=p[h]).reactions??(_t.reactions=[])).push(t)}else p!==null&&d<p.length&&(z(t,d),p.length=d);if(Q()&&x!==null&&!E&&p!==null&&!(t.f&(y|N|S)))for(h=0;h<x.length;h++)Ut(x[h],t);return l!==null&&Z++,j}finally{c=n,d=r,x=e,u=l,D=a,A=s,pt(i),E=_}}function In(t,n){let r=n.reactions;if(r!==null){var e=$t.call(r,t);if(e!==-1){var l=r.length-1;l===0?r=n.reactions=null:(r[e]=r[l],r.pop())}}r===null&&n.f&y&&(c===null||!c.includes(n))&&(m(n,N),n.f&(w|U)||(n.f^=U),Nt(n),z(n,0))}function z(t,n){var r=t.deps;if(r!==null)for(var e=n;e<r.length;e++)In(t,r[e])}function nt(t){var n=t.f;if(!(n&W)){m(t,v);var r=f,e=o,l=k;f=t,k=!0;try{n&ut?mn(t):Mt(t),Ft(t);var a=Vt(t);t.teardown=typeof a=="function"?a:null,t.wv=Bt;var s=t.deps,i}catch(_){tt(_,t,r,e||t.ctx)}finally{k=l,f=r}}}function On(){try{rn()}catch(t){if(G!==null)tt(t,G,null);else throw t}}function Gt(){var t=k;try{var n=0;for(k=!0;L.length>0;){n++>1e3&&On();var r=L,e=r.length;L=[];for(var l=0;l<e;l++){var a=Cn(r[l]);Nn(a)}}}finally{V=!1,k=t,G=null}}function Nn(t){var n=t.length;if(n!==0)for(var r=0;r<n;r++){var e=t[r];if(!(e.f&(W|b)))try{M(e)&&(nt(e),e.deps===null&&e.first===null&&e.nodes_start===null&&(e.teardown===null?Lt(e):e.fn=null))}catch(l){tt(l,e,null,e.ctx)}}}function rt(t){V||(V=!0,queueMicrotask(Gt));for(var n=G=t;n.parent!==null;){n=n.parent;var r=n.f;if(r&(P|R)){if(!(r&v))return;n.f^=v}}L.push(n)}function Cn(t){for(var n=[],r=t;r!==null;){var e=r.f,l=(e&(R|P))!==0,a=l&&(e&v)!==0;if(!a&&!(e&b)){if(e&yt)n.push(r);else if(l)r.f^=v;else{var s=u;try{u=r,M(r)&&nt(r)}catch(T){tt(T,r,null,r.ctx)}finally{u=s}}var i=r.first;if(i!==null){r=i;continue}}var _=r.parent;for(r=r.next;r===null&&_!==null;)r=_.next,_=_.parent}return n}function bn(t){var n;for(dt();L.length>0;)V=!0,Gt(),dt();return n}async function Lr(){await Promise.resolve(),bn()}function Kt(t){var n=t.f,r=(n&y)!==0;if(u!==null&&!E){A!==null&&A.includes(t)&&en();var e=u.deps;t.rv<Z&&(t.rv=Z,c===null&&e!==null&&e[d]===t?d++:c===null?c=[t]:(!D||!c.includes(t))&&c.push(t))}else if(r&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&!(a.f&w)&&(l.f^=w)}return r&&(l=t,M(l)&&Ct(l)),t.v}function Pn(t){var n=E;try{return E=!0,t()}finally{E=n}}const Fn=-7169;function m(t,n){t.f=t.f&Fn|n}function qr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(vt in t)st(t);else if(!Array.isArray(t))for(let n in t){const r=t[n];typeof r=="object"&&r&&vt in r&&st(r)}}}function st(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let e in t)try{st(t[e],n)}catch{}const r=zt(t);if(r!==Object.prototype&&r!==Array.prototype&&r!==Map.prototype&&r!==Set.prototype&&r!==Date.prototype){const e=Zt(r);for(let l in e){const a=e[l].get;if(a)try{a.call(t)}catch{}}}}}export{hn as $,Kt as A,qr as B,Ot as C,Tr as D,Er as E,gn as F,gt as G,ln as H,Hn as I,O as J,yr as K,Wt as L,Xn as M,Xt as N,Ar as O,br as P,xr as Q,jn as R,vt as S,Bn as T,ot as U,Wn as V,fr as W,vn as X,ct as Y,Jn as Z,zt as _,C as a,Ln as a0,cn as a1,Sr as a2,Yn as a3,zn as a4,Vn as a5,Dr as a6,ar as a7,At as a8,lr as a9,tr as aA,pn as aB,qt as aC,An as aD,Qn as aE,nr as aF,Mn as aG,_r as aH,Nr as aI,hr as aJ,Cr as aK,ir as aL,on as aM,Gn as aa,X as ab,er as ac,rr as ad,sr as ae,K as af,$ as ag,u as ah,Mr as ai,dn as aj,ur as ak,or as al,Kn as am,Zt as an,Tn as ao,Pt as ap,ft as aq,bn as ar,pr as as,Lr as at,sn as au,gr as av,Fr as aw,Q as ax,$n as ay,b as az,xt as b,q as c,g as d,un as e,Rt as f,at as g,wr as h,mr as i,Zn as j,Rr as k,qn as l,Or as m,et as n,Pr as o,I as p,cr as q,o as r,dr as s,f as t,vr as u,Ir as v,kr as w,Et as x,Pn as y,Un as z};
