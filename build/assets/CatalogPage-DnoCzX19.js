import{g as Ze,f as He,s as K,h as yt,r as St,i as g,k as ut,j as s,l as ie,m as U,n as et,o as xe,p as kt,q as wt,t as Xe,v as Ae,w as qe,x as at,y as ze,z as H,A as Ne,C as Qe,D as Je,E as Fe,F as dt,G as pt,H as Ct,I as se,J as Pt,B as ft,T as Me,K as Lt,M as Rt,P as jt,Q as ye,R as $t,S as It,U as Tt}from"./index-BvJZQbNX.js";import At from"./ErrorPage-rGtsp8Ld.js";import{C as zt,P as rt}from"./CatalogSkeleton-Dcwvyc8W.js";import{u as mt}from"./useAppContext-D-fm53ag.js";import{T as Ft,F as Mt,I as Et,S as Nt}from"./TextField-RcmpPNxT.js";import{G as _e}from"./Grid2-k7sn84fE.js";import{u as Bt}from"./Input-D7SAsF1s.js";import"./pagination-BJz2Z--w.js";import"./CardContent-B44DPLBy.js";import"./CardMedia-Dfb_-IqU.js";import"./CardActions-CEsjn_20.js";import"./isMuiElement-B7ApoS6i.js";const Vt={border:0,clip:"rect(0 0 0 0)",height:"1px",margin:"-1px",overflow:"hidden",padding:0,position:"absolute",whiteSpace:"nowrap",width:"1px"};function Ot(e){return Ze("PrivateSwitchBase",e)}He("PrivateSwitchBase",["root","checked","disabled","input","edgeStart","edgeEnd"]);const Dt=e=>{const{classes:t,checked:r,disabled:o,edge:i}=e,p={root:["root",r&&"checked",o&&"disabled",i&&`edge${U(i)}`],input:["input"]};return et(p,Ot,t)},Ut=K(yt)({padding:9,borderRadius:"50%",variants:[{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:({edge:e,ownerState:t})=>e==="start"&&t.size!=="small",style:{marginLeft:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}},{props:({edge:e,ownerState:t})=>e==="end"&&t.size!=="small",style:{marginRight:-12}}]}),Wt=K("input",{shouldForwardProp:St})({cursor:"inherit",position:"absolute",opacity:0,width:"100%",height:"100%",top:0,left:0,margin:0,padding:0,zIndex:1}),Yt=g.forwardRef(function(t,r){const{autoFocus:o,checked:i,checkedIcon:p,className:y,defaultChecked:f,disabled:d,disableFocusRipple:x=!1,edge:h=!1,icon:w,id:C,inputProps:W,inputRef:F,name:I,onBlur:A,onChange:Y,onFocus:G,readOnly:u,required:k=!1,tabIndex:_,type:le,value:ee,...pe}=t,[ce,re]=ut({controlled:i,default:!!f,name:"SwitchBase",state:"checked"}),z=Bt(),Q=j=>{G&&G(j),z&&z.onFocus&&z.onFocus(j)},m=j=>{A&&A(j),z&&z.onBlur&&z.onBlur(j)},b=j=>{if(j.nativeEvent.defaultPrevented)return;const N=j.target.checked;re(N),Y&&Y(j,N)};let P=d;z&&typeof P>"u"&&(P=z.disabled);const J=le==="checkbox"||le==="radio",L={...t,checked:ce,disabled:P,disableFocusRipple:x,edge:h},Z=Dt(L);return s.jsxs(Ut,{component:"span",className:ie(Z.root,y),centerRipple:!0,focusRipple:!x,disabled:P,tabIndex:null,role:void 0,onFocus:Q,onBlur:m,ownerState:L,ref:r,...pe,children:[s.jsx(Wt,{autoFocus:o,checked:i,defaultChecked:f,className:Z.input,disabled:P,id:J?C:void 0,name:I,onChange:b,readOnly:u,ref:F,required:k,ownerState:L,tabIndex:_,type:le,...le==="checkbox"&&ee===void 0?{}:{value:ee},...W}),ce?p:w]})});function Gt(e,t,r=(o,i)=>o===i){return e.length===t.length&&e.every((o,i)=>r(o,t[i]))}const Kt=2;function me(e,t,r,o,i){return r===1?Math.min(e+t,i):Math.max(e-t,o)}function gt(e,t){return e-t}function ot(e,t){const{index:r}=e.reduce((o,i,p)=>{const y=Math.abs(t-i);return o===null||y<o.distance||y===o.distance?{distance:y,index:p}:o},null)??{};return r}function je(e,t){if(t.current!==void 0&&e.changedTouches){const r=e;for(let o=0;o<r.changedTouches.length;o+=1){const i=r.changedTouches[o];if(i.identifier===t.current)return{x:i.clientX,y:i.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function Ee(e,t,r){return(e-t)*100/(r-t)}function Xt(e,t,r){return(r-t)*e+t}function qt(e){if(Math.abs(e)<1){const r=e.toExponential().split("e-"),o=r[0].split(".")[1];return(o?o.length:0)+parseInt(r[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function _t(e,t,r){const o=Math.round((e-r)/t)*t+r;return Number(o.toFixed(qt(t)))}function nt({values:e,newValue:t,index:r}){const o=e.slice();return o[r]=t,o.sort(gt)}function $e({sliderRef:e,activeIndex:t,setActive:r}){var i,p,y;const o=Ae(e.current);(!((i=e.current)!=null&&i.contains(o.activeElement))||Number((p=o==null?void 0:o.activeElement)==null?void 0:p.getAttribute("data-index"))!==t)&&((y=e.current)==null||y.querySelector(`[type="range"][data-index="${t}"]`).focus()),r&&r(t)}function Ie(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?Gt(e,t):!1}const Qt={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Jt=e=>e;let Te;function st(){return Te===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Te=CSS.supports("touch-action","none"):Te=!0),Te}function Zt(e){const{"aria-labelledby":t,defaultValue:r,disabled:o=!1,disableSwap:i=!1,isRtl:p=!1,marks:y=!1,max:f=100,min:d=0,name:x,onChange:h,onChangeCommitted:w,orientation:C="horizontal",rootRef:W,scale:F=Jt,step:I=1,shiftStep:A=10,tabIndex:Y,value:G}=e,u=g.useRef(void 0),[k,_]=g.useState(-1),[le,ee]=g.useState(-1),[pe,ce]=g.useState(!1),re=g.useRef(0),[z,Q]=ut({controlled:G,default:r??d,name:"Slider"}),m=h&&((a,n,l)=>{const v=a.nativeEvent||a,S=new v.constructor(v.type,v);Object.defineProperty(S,"target",{writable:!0,value:{value:n,name:x}}),h(S,n,l)}),b=Array.isArray(z);let P=b?z.slice().sort(gt):[z];P=P.map(a=>a==null?d:xe(a,d,f));const J=y===!0&&I!==null?[...Array(Math.floor((f-d)/I)+1)].map((a,n)=>({value:d+I*n})):y||[],L=J.map(a=>a.value),[Z,j]=g.useState(-1),N=g.useRef(null),B=kt(W,N),fe=a=>n=>{var v;const l=Number(n.currentTarget.getAttribute("data-index"));at(n.target)&&j(l),ee(l),(v=a==null?void 0:a.onFocus)==null||v.call(a,n)},Be=a=>n=>{var l;at(n.target)||j(-1),ee(-1),(l=a==null?void 0:a.onBlur)==null||l.call(a,n)},Se=(a,n)=>{const l=Number(a.currentTarget.getAttribute("data-index")),v=P[l],S=L.indexOf(v);let c=n;if(J&&I==null){const R=L[L.length-1];c>R?c=R:c<L[0]?c=L[0]:c=c<v?L[S-1]:L[S+1]}if(c=xe(c,d,f),b){i&&(c=xe(c,P[l-1]||-1/0,P[l+1]||1/0));const R=c;c=nt({values:P,newValue:c,index:l});let O=l;i||(O=c.indexOf(R)),$e({sliderRef:N,activeIndex:O})}Q(c),j(l),m&&!Ie(c,z)&&m(a,c,l),w&&w(a,c)},Ve=a=>n=>{var l;if(["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","PageUp","PageDown","Home","End"].includes(n.key)){n.preventDefault();const v=Number(n.currentTarget.getAttribute("data-index")),S=P[v];let c=null;if(I!=null){const R=n.shiftKey?A:I;switch(n.key){case"ArrowUp":c=me(S,R,1,d,f);break;case"ArrowRight":c=me(S,R,p?-1:1,d,f);break;case"ArrowDown":c=me(S,R,-1,d,f);break;case"ArrowLeft":c=me(S,R,p?1:-1,d,f);break;case"PageUp":c=me(S,A,1,d,f);break;case"PageDown":c=me(S,A,-1,d,f);break;case"Home":c=d;break;case"End":c=f;break}}else if(J){const R=L[L.length-1],O=L.indexOf(S),T=[p?"ArrowRight":"ArrowLeft","ArrowDown","PageDown","Home"],X=[p?"ArrowLeft":"ArrowRight","ArrowUp","PageUp","End"];T.includes(n.key)?O===0?c=L[0]:c=L[O-1]:X.includes(n.key)&&(O===L.length-1?c=R:c=L[O+1])}c!=null&&Se(n,c)}(l=a==null?void 0:a.onKeyDown)==null||l.call(a,n)};wt(()=>{var a;o&&N.current.contains(document.activeElement)&&((a=document.activeElement)==null||a.blur())},[o]),o&&k!==-1&&_(-1),o&&Z!==-1&&j(-1);const Oe=a=>n=>{var l;(l=a.onChange)==null||l.call(a,n),Se(n,n.target.valueAsNumber)},ge=g.useRef(void 0);let te=C;p&&C==="horizontal"&&(te+="-reverse");const ue=({finger:a,move:n=!1})=>{const{current:l}=N,{width:v,height:S,bottom:c,left:R}=l.getBoundingClientRect();let O;te.startsWith("vertical")?O=(c-a.y)/S:O=(a.x-R)/v,te.includes("-reverse")&&(O=1-O);let T;if(T=Xt(O,d,f),I)T=_t(T,I,d);else{const ve=ot(L,T);T=L[ve]}T=xe(T,d,f);let X=0;if(b){n?X=ge.current:X=ot(P,T),i&&(T=xe(T,P[X-1]||-1/0,P[X+1]||1/0));const ve=T;T=nt({values:P,newValue:T,index:X}),i&&n||(X=T.indexOf(ve),ge.current=X)}return{newValue:T,activeIndex:X}},oe=Xe(a=>{const n=je(a,u);if(!n)return;if(re.current+=1,a.type==="mousemove"&&a.buttons===0){ne(a);return}const{newValue:l,activeIndex:v}=ue({finger:n,move:!0});$e({sliderRef:N,activeIndex:v,setActive:_}),Q(l),!pe&&re.current>Kt&&ce(!0),m&&!Ie(l,z)&&m(a,l,v)}),ne=Xe(a=>{const n=je(a,u);if(ce(!1),!n)return;const{newValue:l}=ue({finger:n,move:!0});_(-1),a.type==="touchend"&&ee(-1),w&&w(a,l),u.current=void 0,M()}),de=Xe(a=>{if(o)return;st()||a.preventDefault();const n=a.changedTouches[0];n!=null&&(u.current=n.identifier);const l=je(a,u);if(l!==!1){const{newValue:S,activeIndex:c}=ue({finger:l});$e({sliderRef:N,activeIndex:c,setActive:_}),Q(S),m&&!Ie(S,z)&&m(a,S,c)}re.current=0;const v=Ae(N.current);v.addEventListener("touchmove",oe,{passive:!0}),v.addEventListener("touchend",ne,{passive:!0})}),M=g.useCallback(()=>{const a=Ae(N.current);a.removeEventListener("mousemove",oe),a.removeEventListener("mouseup",ne),a.removeEventListener("touchmove",oe),a.removeEventListener("touchend",ne)},[ne,oe]);g.useEffect(()=>{const{current:a}=N;return a.addEventListener("touchstart",de,{passive:st()}),()=>{a.removeEventListener("touchstart",de),M()}},[M,de]),g.useEffect(()=>{o&&M()},[o,M]);const De=a=>n=>{var S;if((S=a.onMouseDown)==null||S.call(a,n),o||n.defaultPrevented||n.button!==0)return;n.preventDefault();const l=je(n,u);if(l!==!1){const{newValue:c,activeIndex:R}=ue({finger:l});$e({sliderRef:N,activeIndex:R,setActive:_}),Q(c),m&&!Ie(c,z)&&m(n,c,R)}re.current=0;const v=Ae(N.current);v.addEventListener("mousemove",oe,{passive:!0}),v.addEventListener("mouseup",ne)},ke=Ee(b?P[0]:d,d,f),Ue=Ee(P[P.length-1],d,f)-ke,V=(a={})=>{const n=qe(a),l={onMouseDown:De(n||{})},v={...n,...l};return{...a,ref:B,...v}},he=a=>n=>{var v;(v=a.onMouseOver)==null||v.call(a,n);const l=Number(n.currentTarget.getAttribute("data-index"));ee(l)},we=a=>n=>{var l;(l=a.onMouseLeave)==null||l.call(a,n),ee(-1)},Ce=(a={})=>{const n=qe(a),l={onMouseOver:he(n||{}),onMouseLeave:we(n||{})};return{...a,...n,...l}},Pe=a=>({pointerEvents:k!==-1&&k!==a?"none":void 0});let be;return C==="vertical"&&(be=p?"vertical-rl":"vertical-lr"),{active:k,axis:te,axisProps:Qt,dragging:pe,focusedThumbIndex:Z,getHiddenInputProps:(a={})=>{const n=qe(a),l={onChange:Oe(n||{}),onFocus:fe(n||{}),onBlur:Be(n||{}),onKeyDown:Ve(n||{})},v={...n,...l};return{tabIndex:Y,"aria-labelledby":t,"aria-orientation":C,"aria-valuemax":F(f),"aria-valuemin":F(d),name:x,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":e.step??void 0,disabled:o,...a,...v,style:{...Vt,direction:p?"rtl":"ltr",width:"100%",height:"100%",writingMode:be}}},getRootProps:V,getThumbProps:Ce,marks:J,open:le,range:b,rootRef:B,trackLeap:Ue,trackOffset:ke,values:P,getThumbStyle:Pe}}const Ht=e=>!e||!ze(e);function ea(e){return Ze("MuiSlider",e)}const q=He("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),ta=e=>{const{open:t}=e;return{offset:ie(t&&q.valueLabelOpen),circle:q.valueLabelCircle,label:q.valueLabelLabel}};function aa(e){const{children:t,className:r,value:o}=e,i=ta(e);return t?g.cloneElement(t,{className:ie(t.props.className)},s.jsxs(g.Fragment,{children:[t.props.children,s.jsx("span",{className:ie(i.offset,r),"aria-hidden":!0,children:s.jsx("span",{className:i.circle,children:s.jsx("span",{className:i.label,children:o})})})]})):null}function it(e){return e}const ra=K("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,t[`color${U(r.color)}`],r.size!=="medium"&&t[`size${U(r.size)}`],r.marked&&t.marked,r.orientation==="vertical"&&t.vertical,r.track==="inverted"&&t.trackInverted,r.track===!1&&t.trackFalse]}})(H(({theme:e})=>({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",WebkitTapHighlightColor:"transparent","@media print":{colorAdjust:"exact"},[`&.${q.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${q.dragging}`]:{[`& .${q.thumb}, & .${q.track}`]:{transition:"none"}},variants:[...Object.entries(e.palette).filter(Ne()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),{props:{orientation:"horizontal"},style:{height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}}},{props:{orientation:"horizontal",size:"small"},style:{height:2}},{props:{orientation:"horizontal",marked:!0},style:{marginBottom:20}},{props:{orientation:"vertical"},style:{height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}}},{props:{orientation:"vertical",size:"small"},style:{width:2}},{props:{orientation:"vertical",marked:!0},style:{marginRight:44}}]}))),oa=K("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38,variants:[{props:{orientation:"horizontal"},style:{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:"inverted"},style:{opacity:1}}]}),na=K("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(H(({theme:e})=>({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest}),variants:[{props:{size:"small"},style:{border:"none"}},{props:{orientation:"horizontal"},style:{height:"inherit",top:"50%",transform:"translateY(-50%)"}},{props:{orientation:"vertical"},style:{width:"inherit",left:"50%",transform:"translateX(-50%)"}},{props:{track:!1},style:{display:"none"}},...Object.entries(e.palette).filter(Ne()).map(([t])=>({props:{color:t,track:"inverted"},style:{...e.vars?{backgroundColor:e.vars.palette.Slider[`${t}Track`],borderColor:e.vars.palette.Slider[`${t}Track`]}:{backgroundColor:Qe(e.palette[t].main,.62),borderColor:Qe(e.palette[t].main,.62),...e.applyStyles("dark",{backgroundColor:Je(e.palette[t].main,.5)}),...e.applyStyles("dark",{borderColor:Je(e.palette[t].main,.5)})}}}))]}))),sa=K("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.thumb,t[`thumbColor${U(r.color)}`],r.size!=="medium"&&t[`thumbSize${U(r.size)}`]]}})(H(({theme:e})=>({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest}),"&::before":{position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&.${q.disabled}`]:{"&:hover":{boxShadow:"none"}},variants:[{props:{size:"small"},style:{width:12,height:12,"&::before":{boxShadow:"none"}}},{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-50%, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 50%)"}},...Object.entries(e.palette).filter(Ne()).map(([t])=>({props:{color:t},style:{[`&:hover, &.${q.focusVisible}`]:{...e.vars?{boxShadow:`0px 0px 0px 8px rgba(${e.vars.palette[t].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 8px ${Fe(e.palette[t].main,.16)}`},"@media (hover: none)":{boxShadow:"none"}},[`&.${q.active}`]:{...e.vars?{boxShadow:`0px 0px 0px 14px rgba(${e.vars.palette[t].mainChannel} / 0.16)`}:{boxShadow:`0px 0px 0px 14px ${Fe(e.palette[t].main,.16)}`}}}}))]}))),ia=K(aa,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(H(({theme:e})=>({zIndex:1,whiteSpace:"nowrap",...e.typography.body2,fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem",variants:[{props:{orientation:"horizontal"},style:{transform:"translateY(-100%) scale(0)",top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"},[`&.${q.valueLabelOpen}`]:{transform:"translateY(-100%) scale(1)"}}},{props:{orientation:"vertical"},style:{transform:"translateY(-50%) scale(0)",right:"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"},[`&.${q.valueLabelOpen}`]:{transform:"translateY(-50%) scale(1)"}}},{props:{size:"small"},style:{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"}},{props:{orientation:"vertical",size:"small"},style:{right:"20px"}}]}))),la=K("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>dt(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:r}=e;return[t.mark,r&&t.markActive]}})(H(({theme:e})=>({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor",variants:[{props:{orientation:"horizontal"},style:{top:"50%",transform:"translate(-1px, -50%)"}},{props:{orientation:"vertical"},style:{left:"50%",transform:"translate(-50%, 1px)"}},{props:{markActive:!0},style:{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8}}]}))),ca=K("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>dt(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(H(({theme:e})=>({...e.typography.body2,color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap",variants:[{props:{orientation:"horizontal"},style:{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}}},{props:{orientation:"vertical"},style:{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}}},{props:{markLabelActive:!0},style:{color:(e.vars||e).palette.text.primary}}]}))),ua=e=>{const{disabled:t,dragging:r,marked:o,orientation:i,track:p,classes:y,color:f,size:d}=e,x={root:["root",t&&"disabled",r&&"dragging",o&&"marked",i==="vertical"&&"vertical",p==="inverted"&&"trackInverted",p===!1&&"trackFalse",f&&`color${U(f)}`,d&&`size${U(d)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",d&&`thumbSize${U(d)}`,f&&`thumbColor${U(f)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return et(x,ea,y)},da=({children:e})=>e,pa=g.forwardRef(function(t,r){const o=pt({props:t,name:"MuiSlider"}),i=Ct(),{"aria-label":p,"aria-valuetext":y,"aria-labelledby":f,component:d="span",components:x={},componentsProps:h={},color:w="primary",classes:C,className:W,disableSwap:F=!1,disabled:I=!1,getAriaLabel:A,getAriaValueText:Y,marks:G=!1,max:u=100,min:k=0,name:_,onChange:le,onChangeCommitted:ee,orientation:pe="horizontal",shiftStep:ce=10,size:re="medium",step:z=1,scale:Q=it,slotProps:m,slots:b,tabIndex:P,track:J="normal",value:L,valueLabelDisplay:Z="off",valueLabelFormat:j=it,...N}=o,B={...o,isRtl:i,max:u,min:k,classes:C,disabled:I,disableSwap:F,orientation:pe,marks:G,color:w,size:re,step:z,shiftStep:ce,scale:Q,track:J,valueLabelDisplay:Z,valueLabelFormat:j},{axisProps:fe,getRootProps:Be,getHiddenInputProps:Se,getThumbProps:Ve,open:Oe,active:ge,axis:te,focusedThumbIndex:ue,range:oe,dragging:ne,marks:de,values:M,trackOffset:De,trackLeap:ke,getThumbStyle:Ue}=Zt({...B,rootRef:r});B.marked=de.length>0&&de.some($=>$.label),B.dragging=ne,B.focusedThumbIndex=ue;const V=ua(B),he=(b==null?void 0:b.root)??x.Root??ra,we=(b==null?void 0:b.rail)??x.Rail??oa,Ce=(b==null?void 0:b.track)??x.Track??na,Pe=(b==null?void 0:b.thumb)??x.Thumb??sa,be=(b==null?void 0:b.valueLabel)??x.ValueLabel??ia,Le=(b==null?void 0:b.mark)??x.Mark??la,a=(b==null?void 0:b.markLabel)??x.MarkLabel??ca,n=(b==null?void 0:b.input)??x.Input??"input",l=(m==null?void 0:m.root)??h.root,v=(m==null?void 0:m.rail)??h.rail,S=(m==null?void 0:m.track)??h.track,c=(m==null?void 0:m.thumb)??h.thumb,R=(m==null?void 0:m.valueLabel)??h.valueLabel,O=(m==null?void 0:m.mark)??h.mark,T=(m==null?void 0:m.markLabel)??h.markLabel,X=(m==null?void 0:m.input)??h.input,ve=se({elementType:he,getSlotProps:Be,externalSlotProps:l,externalForwardedProps:N,additionalProps:{...Ht(he)&&{as:d}},ownerState:{...B,...l==null?void 0:l.ownerState},className:[V.root,W]}),ht=se({elementType:we,externalSlotProps:v,ownerState:B,className:V.rail}),bt=se({elementType:Ce,externalSlotProps:S,additionalProps:{style:{...fe[te].offset(De),...fe[te].leap(ke)}},ownerState:{...B,...S==null?void 0:S.ownerState},className:V.track}),We=se({elementType:Pe,getSlotProps:Ve,externalSlotProps:c,ownerState:{...B,...c==null?void 0:c.ownerState},className:V.thumb}),vt=se({elementType:be,externalSlotProps:R,ownerState:{...B,...R==null?void 0:R.ownerState},className:V.valueLabel}),Ye=se({elementType:Le,externalSlotProps:O,ownerState:B,className:V.mark}),Ge=se({elementType:a,externalSlotProps:T,ownerState:B,className:V.markLabel}),xt=se({elementType:n,getSlotProps:Se,externalSlotProps:X,ownerState:B});return s.jsxs(he,{...ve,children:[s.jsx(we,{...ht}),s.jsx(Ce,{...bt}),de.filter($=>$.value>=k&&$.value<=u).map(($,E)=>{const Ke=Ee($.value,k,u),Re=fe[te].offset(Ke);let ae;return J===!1?ae=M.includes($.value):ae=J==="normal"&&(oe?$.value>=M[0]&&$.value<=M[M.length-1]:$.value<=M[0])||J==="inverted"&&(oe?$.value<=M[0]||$.value>=M[M.length-1]:$.value>=M[0]),s.jsxs(g.Fragment,{children:[s.jsx(Le,{"data-index":E,...Ye,...!ze(Le)&&{markActive:ae},style:{...Re,...Ye.style},className:ie(Ye.className,ae&&V.markActive)}),$.label!=null?s.jsx(a,{"aria-hidden":!0,"data-index":E,...Ge,...!ze(a)&&{markLabelActive:ae},style:{...Re,...Ge.style},className:ie(V.markLabel,Ge.className,ae&&V.markLabelActive),children:$.label}):null]},E)}),M.map(($,E)=>{const Ke=Ee($,k,u),Re=fe[te].offset(Ke),ae=Z==="off"?da:be;return s.jsx(ae,{...!ze(ae)&&{valueLabelFormat:j,valueLabelDisplay:Z,value:typeof j=="function"?j(Q($),E):j,index:E,open:Oe===E||ge===E||Z==="on",disabled:I},...vt,children:s.jsx(Pe,{"data-index":E,...We,className:ie(V.thumb,We.className,ge===E&&V.active,ue===E&&V.focusVisible),style:{...Re,...Ue(E),...We.style},children:s.jsx(n,{"data-index":E,"aria-label":A?A(E):p,"aria-valuenow":Q($),"aria-labelledby":f,"aria-valuetext":Y?Y(Q($),E):y,value:M[E],...xt})})},E)})]})});function fa(e){return Ze("MuiSwitch",e)}const D=He("MuiSwitch",["root","edgeStart","edgeEnd","switchBase","colorPrimary","colorSecondary","sizeSmall","sizeMedium","checked","disabled","input","thumb","track"]),ma=e=>{const{classes:t,edge:r,size:o,color:i,checked:p,disabled:y}=e,f={root:["root",r&&`edge${U(r)}`,`size${U(o)}`],switchBase:["switchBase",`color${U(i)}`,p&&"checked",y&&"disabled"],thumb:["thumb"],track:["track"],input:["input"]},d=et(f,fa,t);return{...t,...d}},ga=K("span",{name:"MuiSwitch",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.root,r.edge&&t[`edge${U(r.edge)}`],t[`size${U(r.size)}`]]}})({display:"inline-flex",width:34+12*2,height:14+12*2,overflow:"hidden",padding:12,boxSizing:"border-box",position:"relative",flexShrink:0,zIndex:0,verticalAlign:"middle","@media print":{colorAdjust:"exact"},variants:[{props:{edge:"start"},style:{marginLeft:-8}},{props:{edge:"end"},style:{marginRight:-8}},{props:{size:"small"},style:{width:40,height:24,padding:7,[`& .${D.thumb}`]:{width:16,height:16},[`& .${D.switchBase}`]:{padding:4,[`&.${D.checked}`]:{transform:"translateX(16px)"}}}}]}),ha=K(Yt,{name:"MuiSwitch",slot:"SwitchBase",overridesResolver:(e,t)=>{const{ownerState:r}=e;return[t.switchBase,{[`& .${D.input}`]:t.input},r.color!=="default"&&t[`color${U(r.color)}`]]}})(H(({theme:e})=>({position:"absolute",top:0,left:0,zIndex:1,color:e.vars?e.vars.palette.Switch.defaultColor:`${e.palette.mode==="light"?e.palette.common.white:e.palette.grey[300]}`,transition:e.transitions.create(["left","transform"],{duration:e.transitions.duration.shortest}),[`&.${D.checked}`]:{transform:"translateX(20px)"},[`&.${D.disabled}`]:{color:e.vars?e.vars.palette.Switch.defaultDisabledColor:`${e.palette.mode==="light"?e.palette.grey[100]:e.palette.grey[600]}`},[`&.${D.checked} + .${D.track}`]:{opacity:.5},[`&.${D.disabled} + .${D.track}`]:{opacity:e.vars?e.vars.opacity.switchTrackDisabled:`${e.palette.mode==="light"?.12:.2}`},[`& .${D.input}`]:{left:"-100%",width:"300%"}})),H(({theme:e})=>({"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:Fe(e.palette.action.active,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[...Object.entries(e.palette).filter(Ne(["light"])).map(([t])=>({props:{color:t},style:{[`&.${D.checked}`]:{color:(e.vars||e).palette[t].main,"&:hover":{backgroundColor:e.vars?`rgba(${e.vars.palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:Fe(e.palette[t].main,e.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${D.disabled}`]:{color:e.vars?e.vars.palette.Switch[`${t}DisabledColor`]:`${e.palette.mode==="light"?Qe(e.palette[t].main,.62):Je(e.palette[t].main,.55)}`}},[`&.${D.checked} + .${D.track}`]:{backgroundColor:(e.vars||e).palette[t].main}}}))]}))),ba=K("span",{name:"MuiSwitch",slot:"Track",overridesResolver:(e,t)=>t.track})(H(({theme:e})=>({height:"100%",width:"100%",borderRadius:14/2,zIndex:-1,transition:e.transitions.create(["opacity","background-color"],{duration:e.transitions.duration.shortest}),backgroundColor:e.vars?e.vars.palette.common.onBackground:`${e.palette.mode==="light"?e.palette.common.black:e.palette.common.white}`,opacity:e.vars?e.vars.opacity.switchTrack:`${e.palette.mode==="light"?.38:.3}`}))),va=K("span",{name:"MuiSwitch",slot:"Thumb",overridesResolver:(e,t)=>t.thumb})(H(({theme:e})=>({boxShadow:(e.vars||e).shadows[1],backgroundColor:"currentColor",width:20,height:20,borderRadius:"50%"}))),xa=g.forwardRef(function(t,r){const o=pt({props:t,name:"MuiSwitch"}),{className:i,color:p="primary",edge:y=!1,size:f="medium",sx:d,...x}=o,h={...o,color:p,edge:y,size:f},w=ma(h),C=s.jsx(va,{className:w.thumb,ownerState:h});return s.jsxs(ga,{className:ie(w.root,i),sx:d,ownerState:h,children:[s.jsx(ha,{type:"checkbox",icon:C,checkedIcon:C,ref:r,ownerState:h,...x,classes:{...w,root:w.switchBase}}),s.jsx(ba,{className:w.track,ownerState:h})]})}),ya=Pt(s.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),Sa=({isFetching:e,ref:t,callback:r,canLoad:o})=>{const i=g.useRef(null);g.useEffect(()=>{if(e||!t.current)return;i.current&&i.current.disconnect();const p=y=>{y[0].isIntersecting&&o&&r()};return i.current=new IntersectionObserver(p,{threshold:0}),i.current.observe(t.current),()=>{i.current&&i.current.disconnect()}},[e,t,r,o])},ka=({countOfProducts:e,currentPage:t,setCanLoad:r,pageLimit:o})=>{g.useEffect(()=>{e&&e.count&&r(t<e.count/o)},[e,t])},wa=()=>s.jsxs(ft,{display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",sx:{mt:4,textAlign:"center"},children:[s.jsx(Me,{variant:"h4",gutterBottom:!0,children:"No Products Found"}),s.jsx(Me,{variant:"body1",color:"text.secondary",children:"We couldn't find any products matching your search criteria. Please try adjusting your filters or search terms."})]}),tt=g.createContext(void 0),lt=9,Ca=()=>{const e=mt(tt),{isWantToFilter:t,debouncedSearch:r,searchParams:o}=e,i=!!(o.get("price")||o.get("category")),[p,y]=g.useState(1),f=g.useRef(null),[d,x]=g.useState(!0),{data:h,isLoading:w,error:C,isFetching:W}=Lt({page:p,productsCount:lt}),{data:F}=Rt(),I=g.useMemo(()=>{var u;return{category:o.get("category"),name:r.toUpperCase()??void 0,price:o.get("price")?(u=o.get("price"))==null?void 0:u.split(",").map(k=>Number(k)):void 0}},[r,o,t]),{data:A,isLoading:Y,isFetching:G}=jt({options:I});if(Sa({canLoad:d,isFetching:W,ref:f,callback:()=>{y(u=>u+1)}}),ka({countOfProducts:F,currentPage:p,setCanLoad:x,pageLimit:lt}),w||Y||G)return s.jsx(zt,{});if(C)return s.jsx(At,{});if(h&&!t&&!i){const{products:u}=h;return s.jsxs(s.Fragment,{children:[s.jsx(rt,{products:u}),s.jsx("div",{ref:f,style:{height:"50px",position:"absolute",bottom:"-100px",width:"1px"}})]})}if(t&&A||A&&i)return A.length===0?s.jsx(wa,{}):s.jsx(rt,{productsValues:A})},Pa=()=>{const e=mt(tt),{debouncedPrice:t,debouncedSearch:r,category:o,priceRange:i,search:p,setCategory:y,setPriceRange:f,setSearch:d,setIsWantToFilter:x,isPriceFilterActive:h,setIsPriceFilterActive:w,searchParams:C,setSearchParams:W}=e,[F,I]=g.useState(!!C.get("price")),A=(u,k)=>{const _=new URLSearchParams(C.toString());_.set(u,k),W(_)},Y=u=>{const k=new URLSearchParams(C.toString());k.delete(u),W(k)},G=C.get("category");return g.useEffect(()=>{const u=new URLSearchParams(C.toString());r&&u.set("name",`${r.toUpperCase()}`),(h||F)&&u.set("price",`${t.toString()}`),!h&&!F&&u.delete("price"),W(u)},[t,h,C,F]),s.jsxs(s.Fragment,{children:[s.jsx(Ft,{label:"Search for products",variant:"outlined",fullWidth:!0,value:p,onChange:u=>{d(u.target.value),u.target.value===""&&!h&&!o?x(!1):x(!0)},InputProps:{endAdornment:s.jsx(ya,{})},sx:{marginBottom:"2rem"}}),s.jsxs(_e,{container:!0,spacing:2,sx:{marginBottom:"2rem"},children:[s.jsx(_e,{size:{xs:10,md:5},sx:{width:"100%"},children:s.jsxs(Mt,{fullWidth:!0,children:[s.jsx(Et,{children:"Category"}),s.jsxs(Nt,{value:G??o,onChange:u=>{u.target.value==="All Categories"?(y(""),Y("category"),!h&&!p&&x(h)):(x(!0),y(u.target.value),A("category",u.target.value))},label:"Category",children:[s.jsx(ye,{value:"All Categories",children:"All Categories"}),s.jsx(ye,{value:"Men",children:"Men"}),s.jsx(ye,{value:"Women",children:"Women"}),s.jsx(ye,{value:"OutsideCategory",children:"Outside category"}),s.jsx(ye,{value:"Unisex",children:"Unisex"})]})]})}),s.jsxs(_e,{size:{xs:10,md:"grow"},sx:{display:"grid",width:"100%",gridTemplateColumns:"repeat(2, 1fr)"},children:[s.jsx(Me,{gutterBottom:!0,children:"Price Range"}),s.jsxs(ft,{sx:{display:"flex",justifyContent:"end"},children:[" ",s.jsx($t,{title:"Toggle price filter",children:s.jsx(xa,{checked:h||F,onChange:(u,k)=>{if(w(k),I(k),o||p){x(!0);return}x(k)}})})]}),s.jsx(pa,{value:i,onChange:(u,k)=>{f(k),x(!0)},valueLabelDisplay:"auto",valueLabelFormat:u=>`$${u}`,min:0,max:1e3,disabled:!h&&!F,sx:{gridColumn:"1 / 3"}})]})]})]})},ct=(e,t)=>{const[r,o]=g.useState(e);return g.useEffect(()=>{const i=setTimeout(()=>{o(e)},t);return()=>{clearTimeout(i)}},[e,t]),r},La=()=>{var G;const[e,t]=g.useState(!1),[r,o]=g.useState(""),[i,p]=g.useState(""),[y,f]=g.useState(!1),d=ct(r,900),[x,h]=g.useState(!1),[w,C]=It(),W=w.get("price")?((G=w.get("price"))==null?void 0:G.split(",").map(u=>Number(u)))||[0,300]:[0,300],[F,I]=g.useState(W),A=ct(F,500),Y={search:r,setSearch:o,category:i,setCategory:p,priceRange:F,setPriceRange:I,isWantToFilter:e,setIsWantToFilter:t,isOutsideCategory:y,setIsOutsideCategory:f,debouncedPrice:A,debouncedSearch:d,isPriceFilterActive:x,setIsPriceFilterActive:h,searchParams:w,setSearchParams:C};return s.jsxs(tt.Provider,{value:Y,children:[s.jsx(Pa,{}),s.jsx(Ca,{})]})},Va=()=>s.jsxs(Tt,{sx:{paddingBlock:"2rem",position:"relative"},children:[s.jsx(Me,{variant:"h4",gutterBottom:!0,children:"Catalog"}),s.jsx(La,{})]});export{Va as default};
