import{aa as H,ab as R,a3 as O,B as M,y as P,n as D,ac as T,ad as Y,ae as j,F as B,af as b,e as g,s as k,d as C,f as y,i as $,ag as q,ah as F,t as W,m as z,ai as G,aj as J,k as K,ak as Q,h as E,al as U,c as X}from"./ICsVsWpr.js";import{b as Z}from"./A8aW6wCL.js";const x=["touchstart","touchmove"];function aa(a){return x.includes(a)}const ra=new Set,A=new Set;function m(a){var N;var r=this,n=r.ownerDocument,c=a.type,o=((N=a.composedPath)==null?void 0:N.call(a))||[],e=o[0]||a.target,d=0,_=a.__root;if(_){var u=o.indexOf(_);if(u!==-1&&(r===document||r===window)){a.__root=r;return}var h=o.indexOf(r);if(h===-1)return;u<=h&&(d=u)}if(e=o[d]||a.target,e!==r){H(a,"currentTarget",{configurable:!0,get(){return e||n}});var w=P,i=D;R(null),O(null);try{for(var t,s=[];e!==null;){var f=e.assignedSlot||e.parentNode||e.host||null;try{var l=e["__"+c];if(l!==void 0&&!e.disabled)if(M(l)){var[L,...V]=l;L.apply(e,[a,...V])}else l.call(e,a)}catch(p){t?s.push(p):t=p}if(a.cancelBubble||f===r||f===null)break;e=f}if(t){for(let p of s)queueMicrotask(()=>{throw p});throw t}}finally{a.__root=r,delete a.currentTarget,R(w),O(i)}}}function sa(a,r){var n=r==null?"":typeof r=="object"?r+"":r;n!==(a.__t??(a.__t=a.nodeValue))&&(a.__t=n,a.nodeValue=n==null?"":n+"")}function ea(a,r){return I(a,r)}function ia(a,r){T(),r.intro=r.intro??!1;const n=r.target,c=E,o=y;try{for(var e=Y(n);e&&(e.nodeType!==8||e.data!==j);)e=B(e);if(!e)throw b;g(!0),k(e),C();const d=I(a,{...r,anchor:e});if(y===null||y.nodeType!==8||y.data!==$)throw q(),b;return g(!1),d}catch(d){if(d===b)return r.recover===!1&&F(),T(),W(n),g(!1),ea(a,r);throw d}finally{g(c),k(o)}}const v=new Map;function I(a,{target:r,anchor:n,props:c={},events:o,context:e,intro:d=!0}){T();var _=new Set,u=i=>{for(var t=0;t<i.length;t++){var s=i[t];if(!_.has(s)){_.add(s);var f=aa(s);r.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};u(z(ra)),A.add(u);var h=void 0,w=G(()=>{var i=n??r.appendChild(J());return K(()=>{if(e){Q({});var t=X;t.c=e}o&&(c.$$events=o),E&&Z(i,null),h=a(i,c)||{},E&&(D.nodes_end=y),e&&U()}),()=>{var f;for(var t of _){r.removeEventListener(t,m);var s=v.get(t);--s===0?(document.removeEventListener(t,m),v.delete(t)):v.set(t,s)}A.delete(u),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return S.set(h,w),h}let S=new WeakMap;function oa(a,r){const n=S.get(a);return n?(S.delete(a),n(r)):Promise.resolve()}export{ia as h,ea as m,sa as s,oa as u};
