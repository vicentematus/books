import{S as N,J as H,K as V,L as m,M as J,N as P,U as c,O as h,P as x,f as C,Q,R as W,i as X,B,o as k,D as p,E as ee,T as re,V as ne,n as ae,m as q,W as K,z as M,X as U,p as te,Y as ie,Z as fe,_ as se,$ as ue,a0 as le,a as Z,a1 as _e,a2 as de,l as ve,a3 as ce,a4 as oe,a5 as be,b as $,a6 as ye,a7 as j,a8 as ge,a9 as he}from"./DR9YBir2.js";function I(r,t=null,b){if(typeof r!="object"||r===null||N in r)return r;const d=W(r);if(d!==H&&d!==V)return r;var f=new Map,_=X(r),o=m(0);_&&f.set("length",m(r.length));var g;return new Proxy(r,{defineProperty(s,e,n){(!("value"in n)||n.configurable===!1||n.enumerable===!1||n.writable===!1)&&Q();var i=f.get(e);return i===void 0?(i=m(n.value),f.set(e,i)):h(i,I(n.value,g)),!0},deleteProperty(s,e){var n=f.get(e);if(n===void 0)e in s&&f.set(e,m(c));else{if(_&&typeof e=="string"){var i=f.get("length"),a=Number(e);Number.isInteger(a)&&a<i.v&&h(i,a)}h(n,c),z(o)}return!0},get(s,e,n){var v;if(e===N)return r;var i=f.get(e),a=e in s;if(i===void 0&&(!a||(v=x(s,e))!=null&&v.writable)&&(i=m(I(a?s[e]:c,g)),f.set(e,i)),i!==void 0){var u=P(i);return u===c?void 0:u}return Reflect.get(s,e,n)},getOwnPropertyDescriptor(s,e){var n=Reflect.getOwnPropertyDescriptor(s,e);if(n&&"value"in n){var i=f.get(e);i&&(n.value=P(i))}else if(n===void 0){var a=f.get(e),u=a==null?void 0:a.v;if(a!==void 0&&u!==c)return{enumerable:!0,configurable:!0,value:u,writable:!0}}return n},has(s,e){var u;if(e===N)return!0;var n=f.get(e),i=n!==void 0&&n.v!==c||Reflect.has(s,e);if(n!==void 0||C!==null&&(!i||(u=x(s,e))!=null&&u.writable)){n===void 0&&(n=m(i?I(s[e],g):c),f.set(e,n));var a=P(n);if(a===c)return!1}return i},set(s,e,n,i){var w;var a=f.get(e),u=e in s;if(_&&e==="length")for(var v=n;v<a.v;v+=1){var R=f.get(v+"");R!==void 0?h(R,c):v in s&&(R=m(c),f.set(v+"",R))}a===void 0?(!u||(w=x(s,e))!=null&&w.writable)&&(a=m(void 0),h(a,I(n,g)),f.set(e,a)):(u=a.v!==c,h(a,I(n,g)));var y=Reflect.getOwnPropertyDescriptor(s,e);if(y!=null&&y.set&&y.set.call(i,n),!u){if(_&&typeof e=="string"){var S=f.get("length"),O=Number(e);Number.isInteger(O)&&O>=S.v&&h(S,O+1)}z(o)}return!0},ownKeys(s){P(o);var e=Reflect.ownKeys(s).filter(a=>{var u=f.get(a);return u===void 0||u.v!==c});for(var[n,i]of f)i.v!==c&&!(n in s)&&e.push(n);return e},setPrototypeOf(){J()}})}function z(r,t=1){h(r,r.v+t)}function we(r,t,b=!1){B&&k();var d=r,f=null,_=null,o=c,g=b?ee:0,s=!1;const e=(i,a=!0)=>{s=!0,n(a,i)},n=(i,a)=>{if(o===(o=i))return;let u=!1;if(B){const v=d.data===re;!!o===v&&(d=ne(),ae(d),q(!1),u=!0)}o?(f?K(f):a&&(f=M(()=>a(d))),_&&U(_,()=>{_=null})):(_?K(_):a&&(_=M(()=>a(d))),f&&U(f,()=>{f=null})),u&&q(!0)};p(()=>{s=!1,t(e),s||n(null,null)},g),B&&(d=te)}let A=!1;function Pe(r){var t=A;try{return A=!1,[r(),A]}finally{A=t}}const me={get(r,t){if(!r.exclude.includes(t))return r.props[t]},set(r,t){return!1},getOwnPropertyDescriptor(r,t){if(!r.exclude.includes(t)&&t in r.props)return{enumerable:!0,configurable:!0,value:r.props[t]}},has(r,t){return r.exclude.includes(t)?!1:t in r.props},ownKeys(r){return Reflect.ownKeys(r.props).filter(t=>!r.exclude.includes(t))}};function Ee(r,t,b){return new Proxy({props:r,exclude:t},me)}function G(r){for(var t=C,b=C;t!==null&&!(t.f&(oe|be));)t=t.parent;try{return $(t),r()}finally{$(b)}}function Ie(r,t,b,d){var Y;var f=(b&ye)!==0,_=!ve||(b&ce)!==0,o=(b&_e)!==0,g=(b&ge)!==0,s=!1,e;o?[e,s]=Pe(()=>r[t]):e=r[t];var n=N in r||de in r,i=o&&(((Y=x(r,t))==null?void 0:Y.set)??(n&&t in r&&(l=>r[t]=l)))||void 0,a=d,u=!0,v=!1,R=()=>(v=!0,u&&(u=!1,g?a=Z(d):a=d),a);e===void 0&&d!==void 0&&(i&&_&&ie(),e=R(),i&&i(e));var y;if(_)y=()=>{var l=r[t];return l===void 0?R():(u=!0,v=!1,l)};else{var S=G(()=>(f?j:he)(()=>r[t]));S.f|=fe,y=()=>{var l=P(S);return l!==void 0&&(a=void 0),l===void 0?a:l}}if(!(b&se))return y;if(i){var O=r.$$legacy;return function(l,E){return arguments.length>0?((!_||!E||O||s)&&i(E?y():l),l):y()}}var w=!1,F=!1,D=le(e),T=G(()=>j(()=>{var l=y(),E=P(D);return w?(w=!1,F=!0,E):(F=!1,D.v=l)}));return f||(T.equals=ue),function(l,E){if(arguments.length>0){const L=E?P(T):_&&o?I(l):l;return T.equals(L)||(w=!0,h(D,L),v&&a!==void 0&&(a=L),Z(()=>P(T))),l}return P(T)}}export{I as a,we as i,Ie as p,Ee as r};
