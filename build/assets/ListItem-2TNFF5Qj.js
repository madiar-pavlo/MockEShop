import{f as C,g as N,s as h,i as a,G as w,at as y,j as r,l as b,n as U,z as Y,p as q,y as j}from"./index-BvJZQbNX.js";import{i as J}from"./isMuiElement-B7ApoS6i.js";function K(e){return N("MuiListItem",e)}C("MuiListItem",["root","container","dense","alignItemsFlexStart","divider","gutters","padding","secondaryAction"]);const O=C("MuiListItemButton",["root","focusVisible","dense","alignItemsFlexStart","disabled","divider","gutters","selected"]);function Q(e){return N("MuiListItemSecondaryAction",e)}C("MuiListItemSecondaryAction",["root","disableGutters"]);const W=e=>{const{disableGutters:t,classes:s}=e;return U({root:["root",t&&"disableGutters"]},Q,s)},X=h("div",{name:"MuiListItemSecondaryAction",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:s}=e;return[t.root,s.disableGutters&&t.disableGutters]}})({position:"absolute",right:16,top:"50%",transform:"translateY(-50%)",variants:[{props:({ownerState:e})=>e.disableGutters,style:{right:0}}]}),k=a.forwardRef(function(t,s){const o=w({props:t,name:"MuiListItemSecondaryAction"}),{className:n,...c}=o,p=a.useContext(y),i={...o,disableGutters:p.disableGutters},g=W(i);return r.jsx(X,{className:b(g.root,n),ownerState:i,ref:s,...c})});k.muiName="ListItemSecondaryAction";const Z=(e,t)=>{const{ownerState:s}=e;return[t.root,s.dense&&t.dense,s.alignItems==="flex-start"&&t.alignItemsFlexStart,s.divider&&t.divider,!s.disableGutters&&t.gutters,!s.disablePadding&&t.padding,s.hasSecondaryAction&&t.secondaryAction]},_=e=>{const{alignItems:t,classes:s,dense:o,disableGutters:n,disablePadding:c,divider:p,hasSecondaryAction:i}=e;return U({root:["root",o&&"dense",!n&&"gutters",!c&&"padding",p&&"divider",t==="flex-start"&&"alignItemsFlexStart",i&&"secondaryAction"],container:["container"]},K,s)},tt=h("div",{name:"MuiListItem",slot:"Root",overridesResolver:Z})(Y(({theme:e})=>({display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",width:"100%",boxSizing:"border-box",textAlign:"left",variants:[{props:({ownerState:t})=>!t.disablePadding,style:{paddingTop:8,paddingBottom:8}},{props:({ownerState:t})=>!t.disablePadding&&t.dense,style:{paddingTop:4,paddingBottom:4}},{props:({ownerState:t})=>!t.disablePadding&&!t.disableGutters,style:{paddingLeft:16,paddingRight:16}},{props:({ownerState:t})=>!t.disablePadding&&!!t.secondaryAction,style:{paddingRight:48}},{props:({ownerState:t})=>!!t.secondaryAction,style:{[`& > .${O.root}`]:{paddingRight:48}}},{props:{alignItems:"flex-start"},style:{alignItems:"flex-start"}},{props:({ownerState:t})=>t.divider,style:{borderBottom:`1px solid ${(e.vars||e).palette.divider}`,backgroundClip:"padding-box"}},{props:({ownerState:t})=>t.button,style:{transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),"&:hover":{textDecoration:"none",backgroundColor:(e.vars||e).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}}},{props:({ownerState:t})=>t.hasSecondaryAction,style:{paddingRight:48}}]}))),et=h("li",{name:"MuiListItem",slot:"Container",overridesResolver:(e,t)=>t.container})({position:"relative"}),nt=a.forwardRef(function(t,s){const o=w({props:t,name:"MuiListItem"}),{alignItems:n="center",children:c,className:p,component:i,components:g={},componentsProps:B={},ContainerComponent:L="li",ContainerProps:{className:F,...D}={},dense:S=!1,disableGutters:v=!1,disablePadding:E=!1,divider:T=!1,secondaryAction:A,slotProps:$={},slots:z={},...H}=o,R=a.useContext(y),I=a.useMemo(()=>({dense:S||R.dense||!1,alignItems:n,disableGutters:v}),[n,R.dense,S,v]),V=a.useRef(null),d=a.Children.toArray(c),P=d.length&&J(d[d.length-1],["ListItemSecondaryAction"]),f={...o,alignItems:n,dense:I.dense,disableGutters:v,disablePadding:E,divider:T,hasSecondaryAction:P},G=_(f),M=q(V,s),x=z.root||g.Root||tt,m=$.root||B.root||{},u={className:b(G.root,m.className,p),...H};let l=i||"li";return P?(l=!u.component&&!i?"div":l,L==="li"&&(l==="li"?l="div":u.component==="li"&&(u.component="div")),r.jsx(y.Provider,{value:I,children:r.jsxs(et,{as:L,className:b(G.container,F),ref:M,ownerState:f,...D,children:[r.jsx(x,{...m,...!j(x)&&{as:l,ownerState:{...f,...m.ownerState}},...u,children:d}),d.pop()]})})):r.jsx(y.Provider,{value:I,children:r.jsxs(x,{...m,as:l,ref:M,...!j(x)&&{ownerState:{...f,...m.ownerState}},...u,children:[d,A&&r.jsx(k,{children:A})]})})});export{nt as L};
