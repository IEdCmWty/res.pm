import{c as P,b as C,t as ve}from"../chunks/D0HpNlzU.js";import{ax as de,ay as he,N as _e,F as j,p as k,h as V,ao as ee,o as Y,d as I,W as me,A as c,a6 as pe,au as Le,av as z,c as F,s as $,e as Ee,aw as ae,l as ne,a0 as ye,a1 as be,U as J,az as M,t as X,aA as Ae,aB as Te,aC as ke,k as we,aD as xe,J as Ce,aE as Ie,aF as Pe,a as Re,aG as Ne,aH as Ue,q as te,aI as b,X as R,aJ as N,B as x,aK as re,O as U,u as se,P as De}from"../chunks/CbVtA98w.js";import{s as Oe}from"../chunks/Culs0eLX.js";import{n as le,p as G,a as ie,b as K,s as q,i as Be}from"../chunks/B9tnBASc.js";import"../chunks/DLtVLP0p.js";import{h as He}from"../chunks/CGjmqzHO.js";import{i as oe}from"../chunks/C2M-DiMP.js";import{s as fe,p as B,b as ue}from"../chunks/EeMZTxRE.js";import{b as ce,i as Se}from"../chunks/CkEW812R.js";import{g as $e}from"../chunks/DZ4Fult6.js";import{s as W}from"../chunks/D_S4bnKm.js";function Me(r,e,n){k&&V();var o=r,l=me,a,f=de()?he:_e;j(()=>{f(l,l=e())&&(a&&ee(a),a=Y(()=>n(o)))}),k&&(o=I)}function Ge(r,e){return e}function Ke(r,e,n,o){for(var l=[],a=e.length,f=0;f<a;f++)ke(e[f].e,l,!0);var d=a>0&&l.length===0&&n!==null;if(d){var _=n.parentNode;we(_),_.append(n),o.clear(),w(r,e[0].prev,e[a-1].next)}xe(l,()=>{for(var g=0;g<a;g++){var t=e[g];d||(o.delete(t.k),w(r,t.prev,t.next)),Ce(t.e,!d)}})}function qe(r,e,n,o,l,a=null){var f=r,d={flags:e,items:new Map,first:null};k&&V();var _=null,g=!1,t=pe(()=>{var h=n();return ye(h)?h:h==null?[]:ne(h)});j(()=>{var h=c(t),i=h.length;if(g&&i===0)return;g=i===0;let m=!1;if(k){var u=f.data===Le;u!==(i===0)&&(f=z(),F(f),$(!1),m=!0)}if(k){for(var L=null,v,s=0;s<i;s++){if(I.nodeType===8&&I.data===Ee){f=I,m=!0,$(!1);break}var p=h[s],A=o(p,s);v=ge(I,d,L,null,p,A,s,l,e,n),d.items.set(A,v),L=v}i>0&&F(z())}k||Ve(h,d,f,l,e,o,n),a!==null&&(i===0?_?ae(_):_=Y(()=>a(f)):_!==null&&ee(_,()=>{_=null})),m&&$(!0),c(t)}),k&&(f=I)}function Ve(r,e,n,o,l,a,f){var d=r.length,_=e.items,g=e.first,t=g,h,i=null,m=[],u=[],L,v,s,p;for(p=0;p<d;p+=1){if(L=r[p],v=a(L,p),s=_.get(v),s===void 0){var A=t?t.e.nodes_start:n;i=ge(A,e,i,i===null?e.first:i.next,L,v,p,o,l,f),_.set(v,i),m=[],u=[],t=i.next;continue}if(Ye(s,L,p),s.e.f&M&&ae(s.e),s!==t){if(h!==void 0&&h.has(s)){if(m.length<u.length){var y=u[0],E;i=y.prev;var T=m[0],D=m[m.length-1];for(E=0;E<m.length;E+=1)Z(m[E],y,n);for(E=0;E<u.length;E+=1)h.delete(u[E]);w(e,T.prev,D.next),w(e,i,T),w(e,D,y),t=y,i=D,p-=1,m=[],u=[]}else h.delete(s),Z(s,t,n),w(e,s.prev,s.next),w(e,s,i===null?e.first:i.next),w(e,i,s),i=s;continue}for(m=[],u=[];t!==null&&t.k!==v;)t.e.f&M||(h??(h=new Set)).add(t),u.push(t),t=t.next;if(t===null)continue;s=t}m.push(s),i=s,t=s.next}if(t!==null||h!==void 0){for(var O=h===void 0?[]:ne(h);t!==null;)t.e.f&M||O.push(t),t=t.next;var S=O.length;if(S>0){var H=null;Ke(e,O,H,_)}}X.first=e.first&&e.first.e,X.last=i&&i.e}function Ye(r,e,n,o){Te(r.v,e),r.i=n}function ge(r,e,n,o,l,a,f,d,_,g){var t=(_&Ie)!==0,h=(_&Pe)===0,i=t?h?be(l):J(l):l,m=_&Ae?J(f):f,u={i:m,v:i,k:a,a:null,e:null,prev:n,next:o};try{return u.e=Y(()=>d(r,i,m,g),k),u.e.prev=n&&n.e,u.e.next=o&&o.e,n===null?e.first=u:(n.next=u,n.e.next=u.e),o!==null&&(o.prev=u,o.e.prev=u.e),u}finally{}}function Z(r,e,n){for(var o=r.next?r.next.e.nodes_start:n,l=e?e.e.nodes_start:n,a=r.e.nodes_start;a!==o;){var f=Re(a);l.before(a),a=f}}function w(r,e,n){e===null?r.first=n:(e.next=n,e.e.next=n&&n.e),n!==null&&(n.prev=e,n.e.prev=e&&e.e)}function ze(r,e,n,o,l){var d;k&&V();var a=(d=e.$$slots)==null?void 0:d[n],f=!1;a===!0&&(a=e.children,f=!0),a===void 0||a(r,f?()=>o:o)}const Fe=Ne;function Je(r,e){return r.protocol!==e.protocol?e.href:e.password||e.username?"//"+[e.username,e.password].filter(Boolean).join(":")+"@"+e.host+e.pathname+e.search+e.hash:r.host!==e.host?"//"+e.host+e.pathname+e.search+e.hash:e.pathname+e.search+e.hash}const Q="paraglide:lang",Xe="paraglide_lang";function We(r,e,n){const o=new URL(n,e).pathname;return r.origin!==e.origin||!r.pathname.startsWith(o)}const Ze={},Qe=r=>{Ue(Ze,r)};var je=ve('<link rel="alternate">');function ea(r,e){te(e,!1);const[n,o]=ue(),l=()=>fe(K,"$page",n),a=N(),f=N(),d=N(),_=le(ce,new URL(l().url))||"/";let g=B(e,"availableLanguageTags",8),t=B(e,"strategy",8),h=B(e,"currentLang",8);const i=(v,s)=>{const p=[];for(const A of g()){const y=s.getLocalisedPath(v,A),E=q(y,_,void 0),T=new URL(E,new URL(l().url)).href;p.push(T)}return p};b(()=>l(),()=>{R(a,G(l().url.pathname,_)[0])}),b(()=>(x(t()),c(a),x(h())),()=>{R(f,t().getCanonicalPath(c(a),h()))}),b(()=>(c(f),x(t())),()=>{R(d,i(c(f),t()))}),re(),oe();var m=P(),u=U(m);{var L=v=>{var s=P(),p=U(s);qe(p,1,()=>c(d),Ge,(A,y,E)=>{var T=je();De(()=>{W(T,"hreflang",g()[E]),W(T,"href",c(y))}),C(A,T)}),C(v,s)};ie(u,v=>{g().length>=1&&v(L)})}C(r,m),se(),o()}const aa=(r,e)=>`${Xe}=${r};Path=${e};SameSite=lax;Max-Age=31557600`;function na(r,e){te(e,!1);const[n,o]=ue(),l=()=>fe(K,"$page",n),a=N(),f=N(),d=le(ce,new URL(l().url))||"/";let _=B(e,"languageTag",24,()=>{}),g=B(e,"i18n",8),t=N(0);function h(u,L){try{const v=new URL($e(K).url),[s,p]=G(v.pathname,d),A=g().strategy.getCanonicalPath(s,c(a)),y=new URL(v);y.pathname=q(A,d,p);const E=new URL(u,new URL(y));if(We(E,v,d)||g().config.exclude(E.pathname))return u;const T=L??c(a),[D,O]=G(E.pathname,d),S=g().strategy.getLocalisedPath(D,T),H=new URL(E);return H.pathname=q(S,d,O),Je(v,H)}catch{return u}}Qe({translateHref:h}),b(()=>(x(_()),x(g()),l()),()=>{R(a,_()??g().getLanguageFromUrl(l().url))}),b(()=>(x(g()),c(a)),()=>{g().config.runtime.setLanguageTag(c(a))}),b(()=>c(a),()=>{document.documentElement.lang=c(a)}),b(()=>(x(g()),c(a)),()=>{document.documentElement.dir=g().config.textDirection[c(a)]??"ltr"}),b(()=>(c(a),c(t)),()=>{c(a)&&R(t,c(t)+1)}),b(()=>(c(a),c(t),Q),()=>{c(a)&&(c(t)>1||Fe)&&Se(Q)}),b(()=>c(a),()=>{R(f,c(a))}),b(()=>c(a),()=>{document.cookie=aa(c(a),d)}),re(),oe();var i=P();He(u=>{var L=P(),v=U(L);{var s=p=>{ea(p,{get availableLanguageTags(){return g().config.runtime.availableLanguageTags},get strategy(){return g().strategy},get currentLang(){return c(a)}})};ie(v,p=>{g().config.seo.noAlternateLinks!==!0&&!g().config.exclude(l().url.pathname)&&p(s)})}C(u,L)});var m=U(i);Me(m,()=>c(f),u=>{var L=P(),v=U(L);ze(v,e,"default",{}),C(u,L)}),C(r,i),se(),o()}const ta=!0,ha=Object.freeze(Object.defineProperty({__proto__:null,prerender:ta},Symbol.toStringTag,{value:"Module"}));function _a(r,e){na(r,{i18n:Be,children:(n,o)=>{var l=P(),a=U(l);Oe(a,()=>e.children),C(n,l)},$$slots:{default:!0}})}export{_a as component,ha as universal};
