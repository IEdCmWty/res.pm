import{a6 as N,a7 as $,a8 as C,u as P,a9 as G,d as y,aa as _,ab as g,ac as A,o as V,ad as Z,ae as z,v as F,_ as M,t as j,af as H,ag as J,ah as Q,ai as W,Y,e as X,aj as p,ak as k,V as B,al as ee,am as re,an as ne,ao as ae,ap as te,aq as ie}from"./CYFBLm4t.js";import{s as ue,g as fe}from"./fUrPDlQt.js";function O(e,a=null,v){if(typeof e!="object"||e===null||N in e)return e;const l=z(e);if(l!==$&&l!==C)return e;var u=new Map,c=F(e),w=P(0);c&&u.set("length",P(e.length));var m;return new Proxy(e,{defineProperty(f,r,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Z();var i=u.get(r);return i===void 0?(i=P(n.value),u.set(r,i)):g(i,O(n.value,m)),!0},deleteProperty(f,r){var n=u.get(r);if(n===void 0)r in f&&u.set(r,P(_));else{if(c&&typeof r=="string"){var i=u.get("length"),t=Number(r);Number.isInteger(t)&&t<i.v&&g(i,t)}g(n,_),K(w)}return!0},get(f,r,n){var o;if(r===N)return e;var i=u.get(r),t=r in f;if(i===void 0&&(!t||(o=A(f,r))!=null&&o.writable)&&(i=P(O(t?f[r]:_,m)),u.set(r,i)),i!==void 0){var s=y(i);return s===_?void 0:s}return Reflect.get(f,r,n)},getOwnPropertyDescriptor(f,r){var n=Reflect.getOwnPropertyDescriptor(f,r);if(n&&"value"in n){var i=u.get(r);i&&(n.value=y(i))}else if(n===void 0){var t=u.get(r),s=t==null?void 0:t.v;if(t!==void 0&&s!==_)return{enumerable:!0,configurable:!0,value:s,writable:!0}}return n},has(f,r){var s;if(r===N)return!0;var n=u.get(r),i=n!==void 0&&n.v!==_||Reflect.has(f,r);if(n!==void 0||V!==null&&(!i||(s=A(f,r))!=null&&s.writable)){n===void 0&&(n=P(i?O(f[r],m):_),u.set(r,n));var t=y(n);if(t===_)return!1}return i},set(f,r,n,i){var S;var t=u.get(r),s=r in f;if(c&&r==="length")for(var o=n;o<t.v;o+=1){var I=u.get(o+"");I!==void 0?g(I,_):o in f&&(I=P(_),u.set(o+"",I))}t===void 0?(!s||(S=A(f,r))!=null&&S.writable)&&(t=P(void 0),g(t,O(n,m)),u.set(r,t)):(s=t.v!==_,g(t,O(n,m)));var b=Reflect.getOwnPropertyDescriptor(f,r);if(b!=null&&b.set&&b.set.call(i,n),!s){if(c&&typeof r=="string"){var h=u.get("length"),x=Number(r);Number.isInteger(x)&&x>=h.v&&g(h,x+1)}K(w)}return!0},ownKeys(f){y(w);var r=Reflect.ownKeys(f).filter(t=>{var s=u.get(t);return s===void 0||s.v!==_});for(var[n,i]of u)i.v!==_&&!(n in f)&&r.push(n);return r},setPrototypeOf(){G()}})}function K(e,a=1){g(e,e.v+a)}let E=!1,U=Symbol();function _e(e,a,v){const l=v[a]??(v[a]={store:null,source:j(void 0),unsubscribe:M});if(l.store!==e&&!(U in v))if(l.unsubscribe(),l.store=e??null,e==null)l.source.v=void 0,l.unsubscribe=M;else{var u=!0;l.unsubscribe=ue(e,c=>{u?l.source.v=c:g(l.source,c)}),u=!1}return e&&U in v?fe(e):y(l.source)}function ce(){const e={};function a(){H(()=>{for(var v in e)e[v].unsubscribe();J(e,U,{enumerable:!1,value:!0})})}return[e,a]}function se(e){var a=E;try{return E=!1,[e(),E]}finally{E=a}}const le={get(e,a){if(!e.exclude.includes(a))return e.props[a]},set(e,a){return!1},getOwnPropertyDescriptor(e,a){if(!e.exclude.includes(a)&&a in e.props)return{enumerable:!0,configurable:!0,value:e.props[a]}},has(e,a){return e.exclude.includes(a)?!1:a in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(a=>!e.exclude.includes(a))}};function oe(e,a,v){return new Proxy({props:e,exclude:a},le)}function be(e,a,v,l){var q;var u=(v&te)!==0,c=!ne||(v&ae)!==0,w=(v&ee)!==0,m=(v&ie)!==0,f=!1,r;w?[r,f]=se(()=>e[a]):r=e[a];var n=N in e||re in e,i=w&&(((q=A(e,a))==null?void 0:q.set)??(n&&a in e&&(d=>e[a]=d)))||void 0,t=l,s=!0,o=!1,I=()=>(o=!0,s&&(s=!1,m?t=B(l):t=l),t);r===void 0&&l!==void 0&&(i&&c&&Q(),r=I(),i&&i(r));var b;if(c)b=()=>{var d=e[a];return d===void 0?I():(s=!0,o=!1,d)};else{var h=(u?Y:X)(()=>e[a]);h.f|=W,b=()=>{var d=y(h);return d!==void 0&&(t=void 0),d===void 0?t:d}}if(!(v&p))return b;if(i){var x=e.$$legacy;return function(d,R){return arguments.length>0?((!c||!R||x||f)&&i(R?b():d),d):b()}}var S=!1,L=j(r),D=Y(()=>{var d=b(),R=y(L);return S?(S=!1,R):L.v=d});return u||(D.equals=k),function(d,R){if(arguments.length>0){const T=R?y(D):c&&w?O(d):d;return D.equals(T)||(S=!0,g(L,T),o&&t!==void 0&&(t=T),B(()=>y(D))),d}return y(D)}}export{O as a,ce as b,be as p,oe as r,_e as s};
