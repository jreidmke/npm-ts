import n,{useCallback as e,createContext as t,useMemo as r,createElement as o,useContext as i,useRef as c,useEffect as a,useState as s,useLayoutEffect as l,forwardRef as u,Children as d,isValidElement as p,cloneElement as h,Fragment as f}from"react";import"react-dom";function b(){return b=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n},b.apply(this,arguments)}function m(n,e,{checkForDefaultPrevented:t=!0}={}){return function(r){if(null==n||n(r),!1===t||!r.defaultPrevented)return null==e?void 0:e(r)}}function g(...n){return e=>n.forEach((n=>function(n,e){"function"==typeof n?n(e):null!=n&&(n.current=e)}(n,e)))}function v(...n){const e=n[0];if(1===n.length)return e;const t=()=>{const t=n.map((n=>({useScope:n(),scopeName:n.scopeName})));return function(n){const o=t.reduce(((e,{useScope:t,scopeName:r})=>({...e,...t(n)[`__scope${r}`]})),{});return r((()=>({[`__scope${e.scopeName}`]:o})),[o])}};return t.scopeName=e.scopeName,t}function w(n){const e=c(n);return a((()=>{e.current=n})),r((()=>(...n)=>{var t;return null===(t=e.current)||void 0===t?void 0:t.call(e,...n)}),[])}function y({prop:n,defaultProp:t,onChange:r=(()=>{})}){const[o,i]=function({defaultProp:n,onChange:e}){const t=s(n),[r]=t,o=c(r),i=w(e);return a((()=>{o.current!==r&&(i(r),o.current=r)}),[r,o,i]),t}({defaultProp:t,onChange:r}),l=void 0!==n,u=l?n:o,d=w(r);return[u,e((e=>{if(l){const t=e,r="function"==typeof e?t(n):e;r!==n&&d(r)}else i(e)}),[l,n,i,d])]}const x=Boolean(null===globalThis||void 0===globalThis?void 0:globalThis.document)?l:()=>{};const k=u(((n,e)=>{const{children:t,...r}=n,i=d.toArray(t),c=i.find(N);if(c){const n=c.props.children,t=i.map((e=>e===c?d.count(n)>1?d.only(null):p(n)?n.props.children:null:e));return o(S,b({},r,{ref:e}),p(n)?h(n,void 0,t):null)}return o(S,b({},r,{ref:e}),t)}));k.displayName="Slot";const S=u(((n,e)=>{const{children:t,...r}=n;return p(t)?h(t,{...P(r,t.props),ref:g(e,t.ref)}):d.count(t)>1?d.only(null):null}));S.displayName="SlotClone";const C=({children:n})=>o(f,null,n);function N(n){return p(n)&&n.type===C}function P(n,e){const t={...e};for(const r in e){const o=n[r],i=e[r];/^on[A-Z]/.test(r)?o&&i?t[r]=(...n)=>{i(...n),o(...n)}:o&&(t[r]=o):"style"===r?t[r]={...o,...i}:"className"===r&&(t[r]=[o,i].filter(Boolean).join(" "))}return{...n,...t}}const T=["a","button","div","h2","h3","img","label","li","nav","ol","p","span","svg","ul"].reduce(((n,e)=>{const t=u(((n,t)=>{const{asChild:r,...i}=n,c=r?k:e;return a((()=>{window[Symbol.for("radix-ui")]=!0}),[]),o(c,b({},i,{ref:t}))}));return t.displayName=`Primitive.${e}`,{...n,[e]:t}}),{}),[E,_]=function(n,e=[]){let c=[];const a=()=>{const e=c.map((n=>t(n)));return function(t){const o=(null==t?void 0:t[n])||e;return r((()=>({[`__scope${n}`]:{...t,[n]:o}})),[t,o])}};return a.scopeName=n,[function(e,a){const s=t(a),l=c.length;function u(e){const{scope:t,children:i,...c}=e,a=(null==t?void 0:t[n][l])||s,u=r((()=>c),Object.values(c));return o(a.Provider,{value:u},i)}return c=[...c,a],u.displayName=e+"Provider",[u,function(t,r){const o=(null==r?void 0:r[n][l])||s,c=i(o);if(c)return c;if(void 0!==a)return a;throw new Error(`\`${t}\` must be used within \`${e}\``)}]},v(a,...e)]}("Switch"),[O,A]=E("Switch"),B=u(((n,t)=>{const{__scopeSwitch:r,name:i,checked:a,defaultChecked:l,required:u,disabled:d,value:p="on",onCheckedChange:h,...f}=n,[v,w]=s(null),x=function(...n){return e(g(...n),n)}(t,(n=>w(n))),k=c(!1),S=!v||Boolean(v.closest("form")),[C=!1,N]=y({prop:a,defaultProp:l,onChange:h});return o(O,{scope:r,checked:C,disabled:d},o(T.button,b({type:"button",role:"switch","aria-checked":C,"aria-required":u,"data-state":R(C),"data-disabled":d?"":void 0,disabled:d,value:p},f,{ref:x,onClick:m(n.onClick,(n=>{N((n=>!n)),S&&(k.current=n.isPropagationStopped(),k.current||n.stopPropagation())}))})),S&&o(j,{control:v,bubbles:!k.current,name:i,value:p,checked:C,required:u,disabled:d,style:{transform:"translateX(-100%)"}}))})),j=n=>{const{control:e,checked:t,bubbles:i=!0,...l}=n,u=c(null),d=function(n){const e=c({value:n,previous:n});return r((()=>(e.current.value!==n&&(e.current.previous=e.current.value,e.current.value=n),e.current.previous)),[n])}(t),p=function(n){const[e,t]=s(void 0);return x((()=>{if(n){t({width:n.offsetWidth,height:n.offsetHeight});const e=new ResizeObserver((e=>{if(!Array.isArray(e))return;if(!e.length)return;const r=e[0];let o,i;if("borderBoxSize"in r){const n=r.borderBoxSize,e=Array.isArray(n)?n[0]:n;o=e.inlineSize,i=e.blockSize}else o=n.offsetWidth,i=n.offsetHeight;t({width:o,height:i})}));return e.observe(n,{box:"border-box"}),()=>e.unobserve(n)}t(void 0)}),[n]),e}(e);return a((()=>{const n=u.current,e=window.HTMLInputElement.prototype,r=Object.getOwnPropertyDescriptor(e,"checked").set;if(d!==t&&r){const e=new Event("click",{bubbles:i});r.call(n,t),n.dispatchEvent(e)}}),[d,t,i]),o("input",b({type:"checkbox","aria-hidden":!0,defaultChecked:t},l,{tabIndex:-1,ref:u,style:{...n.style,...p,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function R(n){return n?"checked":"unchecked"}const $=B,z=u(((n,e)=>{const{__scopeSwitch:t,...r}=n,i=A("SwitchThumb",t);return o(T.span,b({"data-state":R(i.checked),"data-disabled":i.disabled?"":void 0},r,{ref:e}))}));!function(n,e){void 0===e&&(e={});var t=e.insertAt;if(n&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===t&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=n:o.appendChild(document.createTextNode(n))}}('button {\n    all: unset;\n}\n\n.SwitchRoot {\n    position: relative;\n    margin-left: 1.5rem;\n    margin-right: 1.5rem;\n    border-radius: 9999px;\n    border-width: 1px;\n    background-image: linear-gradient(to right, var(--tw-gradient-stops));\n    --tw-gradient-from: #a5f3fc;\n    --tw-gradient-to: rgb(165 243 252 / 0);\n    --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);\n    --tw-gradient-to: #3b82f6;\n    width: 42px;\n    height: 25px;\n}\n\n.SwitchThumb {\n    display: block;\n    border-radius: 9999px;\n    --tw-bg-opacity: 1;\n    background-color: rgb(96 165 250 / var(--tw-bg-opacity));\n    width: 21px;\n    height: 21px;\n    transition: transform 100ms;\n    transform: translateX(2px);\n    will-change: transform;\n}\n\n.SwitchThumb[data-state="checked"] {\n    --tw-bg-opacity: 1;\n    background-color: rgb(255 255 255 / var(--tw-bg-opacity));\n    transform: translateX(19px);\n}\n/* button {\n    all: unset;\n}\n\n.SwitchRoot {\n    width: 42px;\n    height: 25px;\n    background-color: black;\n    border-radius: 9999px;\n    position: relative;\n    box-shadow: 0 2px 10px black;\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\n.SwitchRoot:focus {\n    box-shadow: 0 0 0 2px black;\n}\n.SwitchRoot[data-state="checked"] {\n    background-color: black;\n}\n\n.SwitchThumb {\n    display: block;\n    width: 21px;\n    height: 21px;\n    background-color: white;\n    border-radius: 9999px;\n    box-shadow: 0 2px 2px black;\n    transition: transform 100ms;\n    transform: translateX(2px);\n    will-change: transform;\n}\n.SwitchThumb[data-state="checked"] {\n    transform: translateX(19px);\n} */\n');var X=function(){return n.createElement($,{className:"SwitchRoot",id:"airplane-mode"},n.createElement(z,{className:"SwitchThumb"}))};export{X as Switch};
//# sourceMappingURL=index.js.map
