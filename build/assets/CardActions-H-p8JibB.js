import{f as l,g as p,s as d,i as g,G as u,j as C,l as f,n as m}from"./index-4tuIeHbz.js";function y(s){return p("MuiCardActions",s)}l("MuiCardActions",["root","spacing"]);const A=s=>{const{classes:t,disableSpacing:a}=s;return m({root:["root",!a&&"spacing"]},y,t)},x=d("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(s,t)=>{const{ownerState:a}=s;return[t.root,!a.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),R=g.forwardRef(function(t,a){const o=u({props:t,name:"MuiCardActions"}),{disableSpacing:n=!1,className:r,...i}=o,e={...o,disableSpacing:n},c=A(e);return C.jsx(x,{className:f(c.root,r),ownerState:e,ref:a,...i})});export{R as C};
