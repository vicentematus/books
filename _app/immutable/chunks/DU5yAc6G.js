import{d as V,s as R,b as A,i as C,e as M,f as k,g as b,h as P,H as Y,j,k as T,m as g,n as O,o as q,p,q as B,r as $,t as z,v as W,w as F,x as G,y as J,z as K,A as Q,B as E,C as U,c as X}from"./CVwTveM8.js";import{a as Z}from"./DneQLNie.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,D=new Set;function m(r){var N;var e=this,n=e.ownerDocument,c=r.type,o=((N=r.composedPath)==null?void 0:N.call(r))||[],t=o[0]||r.target,d=0,_=r.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;u<=h&&(d=u)}if(t=o[d]||r.target,t!==e){V(r,"currentTarget",{configurable:!0,get(){return t||n}});var w=M,i=k;R(null),A(null);try{for(var a,s=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(C(l)){var[I,...L]=l;I.apply(t,[r,...L])}else l.call(t,r)}catch(y){a?s.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of s)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,R(w),A(i)}}}function sr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function tr(r,e){return H(r,e)}function ir(r,e){b(),e.intro=e.intro??!1;const n=e.target,c=E,o=p;try{for(var t=P(n);t&&(t.nodeType!==8||t.data!==Y);)t=j(t);if(!t)throw T;g(!0),O(t),q();const d=H(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==B)throw $(),T;return g(!1),d}catch(d){if(d===T)return e.recover===!1&&z(),b(),W(n),g(!1),tr(r,e);throw d}finally{g(c),O(o)}}const v=new Map;function H(r,{target:e,anchor:n,props:c={},events:o,context:t,intro:d=!0}){b();var _=new Set,u=i=>{for(var a=0;a<i.length;a++){var s=i[a];if(!_.has(s)){_.add(s);var f=rr(s);e.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};u(F(er)),D.add(u);var h=void 0,w=G(()=>{var i=n??e.appendChild(J());return K(()=>{if(t){Q({});var a=X;a.c=t}o&&(c.$$events=o),E&&Z(i,null),h=r(i,c)||{},E&&(k.nodes_end=p),t&&U()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var s=v.get(a);--s===0?(document.removeEventListener(a,m),v.delete(a)):v.set(a,s)}D.delete(u),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function or(r,e){const n=S.get(r);return n?(S.delete(r),n(e)):Promise.resolve()}export{ir as h,tr as m,sr as s,or as u};
