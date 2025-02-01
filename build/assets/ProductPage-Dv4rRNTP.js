import{i as l,f as A,g as D,s as F,h as J,m as V,z as _,E as I,A as K,V as tt,G as Q,j as o,l as q,n as U,B as w,W as E,T as P,X as et,b as ot,a as rt,Y as st,Z as G,R as W,c as at,_ as nt,$ as lt,a0 as it,a1 as dt,L as ct}from"./index-4tuIeHbz.js";import Y from"./ErrorPage-BuVzo52d.js";import{u as O}from"./useAppContext-CVymBG4h.js";import{S as ut,N as pt,P as gt,a as xt}from"./pagination-CbjJwEZE.js";import{C as M}from"./CardMedia-US-qIGCA.js";import{C as ft,a as Ct}from"./CardContent-CChbncny.js";import{I as yt}from"./Input-Difq4lks.js";import{C as ht}from"./CardActions-H-p8JibB.js";function mt(t){return l.Children.toArray(t).filter(e=>l.isValidElement(e))}function bt(t){return D("MuiToggleButton",t)}const L=A("MuiToggleButton",["root","disabled","selected","standard","primary","secondary","sizeSmall","sizeMedium","sizeLarge","fullWidth"]),H=l.createContext({}),X=l.createContext(void 0);function vt(t,e){return e===void 0||t===void 0?!1:Array.isArray(e)?e.includes(t):t===e}const Bt=t=>{const{classes:e,fullWidth:r,selected:a,disabled:c,size:s,color:i}=t,n={root:["root",a&&"selected",c&&"disabled",r&&"fullWidth",`size${V(s)}`,i]};return U(n,bt,e)},jt=F(J,{name:"MuiToggleButton",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[e.root,e[`size${V(r.size)}`]]}})(_(({theme:t})=>({...t.typography.button,borderRadius:(t.vars||t).shape.borderRadius,padding:11,border:`1px solid ${(t.vars||t).palette.divider}`,color:(t.vars||t).palette.action.active,[`&.${L.disabled}`]:{color:(t.vars||t).palette.action.disabled,border:`1px solid ${(t.vars||t).palette.action.disabledBackground}`},"&:hover":{textDecoration:"none",backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.hoverOpacity})`:I(t.palette.text.primary,t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},variants:[{props:{color:"standard"},style:{[`&.${L.selected}`]:{color:(t.vars||t).palette.text.primary,backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.text.primary,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:I(t.palette.text.primary,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette.text.primaryChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette.text.primary,t.palette.action.selectedOpacity)}}}}},...Object.entries(t.palette).filter(K()).map(([e])=>({props:{color:e},style:{[`&.${L.selected}`]:{color:(t.vars||t).palette[e].main,backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette[e].main,t.palette.action.selectedOpacity),"&:hover":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / calc(${t.vars.palette.action.selectedOpacity} + ${t.vars.palette.action.hoverOpacity}))`:I(t.palette[e].main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?`rgba(${t.vars.palette[e].mainChannel} / ${t.vars.palette.action.selectedOpacity})`:I(t.palette[e].main,t.palette.action.selectedOpacity)}}}}})),{props:{fullWidth:!0},style:{width:"100%"}},{props:{size:"small"},style:{padding:7,fontSize:t.typography.pxToRem(13)}},{props:{size:"large"},style:{padding:15,fontSize:t.typography.pxToRem(15)}}]}))),Z=l.forwardRef(function(e,r){const{value:a,...c}=l.useContext(H),s=l.useContext(X),i=tt({...c,selected:vt(e.value,a)},e),n=Q({props:i,name:"MuiToggleButton"}),{children:g,className:x,color:f="standard",disabled:b=!1,disableFocusRipple:y=!1,fullWidth:u=!1,onChange:j,onClick:h,selected:m,size:S="medium",value:v,...R}=n,T={...n,color:f,disabled:b,disableFocusRipple:y,fullWidth:u,size:S},$=Bt(T),C=p=>{h&&(h(p,v),p.defaultPrevented)||j&&j(p,v)},B=s||"";return o.jsx(jt,{className:q(c.className,$.root,x,B),disabled:b,focusRipple:!y,ref:r,onClick:C,onChange:j,value:v,ownerState:T,"aria-pressed":m,...R,children:g})});function $t(t){return D("MuiToggleButtonGroup",t)}const d=A("MuiToggleButtonGroup",["root","selected","horizontal","vertical","disabled","grouped","groupedHorizontal","groupedVertical","fullWidth","firstButton","lastButton","middleButton"]),St=t=>{const{classes:e,orientation:r,fullWidth:a,disabled:c}=t,s={root:["root",r,a&&"fullWidth"],grouped:["grouped",`grouped${V(r)}`,c&&"disabled"],firstButton:["firstButton"],lastButton:["lastButton"],middleButton:["middleButton"]};return U(s,$t,e)},Tt=F("div",{name:"MuiToggleButtonGroup",slot:"Root",overridesResolver:(t,e)=>{const{ownerState:r}=t;return[{[`& .${d.grouped}`]:e.grouped},{[`& .${d.grouped}`]:e[`grouped${V(r.orientation)}`]},{[`& .${d.firstButton}`]:e.firstButton},{[`& .${d.lastButton}`]:e.lastButton},{[`& .${d.middleButton}`]:e.middleButton},e.root,r.orientation==="vertical"&&e.vertical,r.fullWidth&&e.fullWidth]}})(_(({theme:t})=>({display:"inline-flex",borderRadius:(t.vars||t).shape.borderRadius,variants:[{props:{orientation:"vertical"},style:{flexDirection:"column",[`& .${d.grouped}`]:{[`&.${d.selected} + .${d.grouped}.${d.selected}`]:{borderTop:0,marginTop:0}},[`& .${d.firstButton},& .${d.middleButton}`]:{borderBottomLeftRadius:0,borderBottomRightRadius:0},[`& .${d.lastButton},& .${d.middleButton}`]:{marginTop:-1,borderTop:"1px solid transparent",borderTopLeftRadius:0,borderTopRightRadius:0},[`& .${d.lastButton}.${L.disabled},& .${d.middleButton}.${L.disabled}`]:{borderTop:"1px solid transparent"}}},{props:{fullWidth:!0},style:{width:"100%"}},{props:{orientation:"horizontal"},style:{[`& .${d.grouped}`]:{[`&.${d.selected} + .${d.grouped}.${d.selected}`]:{borderLeft:0,marginLeft:0}},[`& .${d.firstButton},& .${d.middleButton}`]:{borderTopRightRadius:0,borderBottomRightRadius:0},[`& .${d.lastButton},& .${d.middleButton}`]:{marginLeft:-1,borderLeft:"1px solid transparent",borderTopLeftRadius:0,borderBottomLeftRadius:0},[`& .${d.lastButton}.${L.disabled},& .${d.middleButton}.${L.disabled}`]:{borderLeft:"1px solid transparent"}}}]}))),Pt=l.forwardRef(function(e,r){const a=Q({props:e,name:"MuiToggleButtonGroup"}),{children:c,className:s,color:i="standard",disabled:n=!1,exclusive:g=!1,fullWidth:x=!1,onChange:f,orientation:b="horizontal",size:y="medium",value:u,...j}=a,h={...a,disabled:n,fullWidth:x,orientation:b,size:y},m=St(h),S=l.useCallback((B,p)=>{if(!f)return;const N=u&&u.indexOf(p);let k;u&&N>=0?(k=u.slice(),k.splice(N,1)):k=u?u.concat(p):[p],f(B,k)},[f,u]),v=l.useCallback((B,p)=>{f&&f(B,u===p?null:p)},[f,u]),R=l.useMemo(()=>({className:m.grouped,onChange:g?v:S,value:u,size:y,fullWidth:x,color:i,disabled:n}),[m.grouped,g,v,S,u,y,x,i,n]),T=mt(c),$=T.length,C=B=>{const p=B===0,N=B===$-1;return p&&N?"":p?m.firstButton:N?m.lastButton:m.middleButton};return o.jsx(Tt,{role:"group",className:q(m.root,s),ref:r,ownerState:h,...j,children:o.jsx(H.Provider,{value:R,children:T.map((B,p)=>o.jsx(X.Provider,{value:C(p),children:B},p))})})}),z=l.createContext(void 0),Rt=({product:t})=>{const{swiperImageLoaded:e,setSwiperImageLoaded:r,colorImageLoaded:a,setColorImageLoaded:c,selectedVariant:s}=O(z);return o.jsx(w,{sx:{position:"relative",width:"clamp(290px, 51vw, 600px)",height:"auto",display:"flex"},children:s&&s.url?o.jsxs(w,{sx:{width:"clamp(300px, 51vw, 600px)"},children:[!e&&o.jsx(E,{variant:"rectangular",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),o.jsx(M,{component:"img",image:s.url,sx:{width:"100%",height:"100%",objectFit:"cover",borderRadius:"4px 4px 0 0",transition:"opacity 0.3s ease",opacity:a?1:0},onLoad:()=>c(!0)})]}):o.jsx(ut,{modules:[pt,gt],navigation:!0,pagination:{clickable:!0},children:t.image_urls.map((i,n)=>o.jsxs(xt,{children:[!e&&o.jsx(E,{variant:"rectangular",sx:{position:"absolute",top:0,left:0,width:"100%",height:"100%"}}),o.jsx(M,{component:"img",image:i,alt:t.name,sx:{objectFit:"cover",transition:"opacity 0.3s ease",opacity:e?1:0},onLoad:()=>{r(!0),c(!0)}})]},n))})})},It=({color:t,variant:e,...r})=>o.jsx(Z,{...r,value:e.color||"",sx:{width:40,height:40,borderRadius:"50%",backgroundColor:t,border:"2px solid #ccc",display:"flex",alignItems:"center",justifyContent:"center","&.Mui-selected":{backgroundColor:t,borderColor:"#000",transform:"scale(1.1)","&:hover":{backgroundColor:t,filter:"brightness(1.4)"}},"&:hover":{backgroundColor:t,filter:"brightness(1.4)"},"&.Mui-disabled":{pointerEvents:"all",borderColor:"#ddd",opacity:.5,cursor:"not-allowed","&:hover":{filter:"none"},"&::after":{content:'""',position:"absolute",top:"50%",left:"10%",right:"10%",height:"2px",backgroundColor:"#000",transform:"translateY(-50%) rotate(-45deg)",pointerEvents:"none"}}}}),Lt=({colorMap:t,variant:e})=>{const{onColorChange:r,selectedColor:a,colorImageLoaded:c,swiperImageLoaded:s,setIsColorNull:i,setColor:n}=O(z);l.useEffect(()=>{e.color?e.color&&(t[e==null?void 0:e.color]||n(e.color)):i(!0)},[e]);const g=l.useCallback(()=>{r(e)},[r,e]);if(e.color){const x=t[e==null?void 0:e.color];return o.jsx(It,{color:x,variant:e,onChange:()=>g(),selected:a===e.color,disabled:e.count===0||!c||!s})}},zt=l.memo(Lt),wt={Red:"#6E3E4C",Purple:"#393158",Ocean:"#2A5259",Olive:"#706944",Green:"#2D5D44"},Ot=({variants:t})=>{const{isColorNull:e,color:r,selectedVariant:a,setSelectedVariant:c}=O(z),s=a?"":o.jsx("span",{style:{color:"red"},children:"choose color please *"});return l.useEffect(()=>{if(r){const i=t.filter(g=>g.count>=1),n=i[i.length-1];c({url:n.variant_images_urls,id:n.id,count:n.count})}},[r]),o.jsxs(o.Fragment,{children:[o.jsx(P,{variant:"body1",gutterBottom:!0,children:e?"Available in one color":r?`Color: ${r}`:o.jsxs(o.Fragment,{children:["Color Variants: ",s]})}),e||r?"":o.jsx(w,{sx:{display:"flex",gap:1,flexWrap:"wrap",alignItems:"center"},children:t!=null&&t.length?t.map(i=>o.jsx(zt,{colorMap:wt,variant:i},i.id)):o.jsx(P,{variant:"body2",color:"textSecondary",children:"No color variants available."})})]})},Nt=({size:t})=>{const{selectedSize:e}=O(z);return o.jsxs(Z,{value:{id:t.id,count:t.count},selected:(e==null?void 0:e.id)===t.id,disabled:t.count===0,sx:{px:2,py:1,textTransform:"none",fontSize:"14px"},children:[t.size," (",t.count," left)"]})},kt=({sizes:t})=>{const{selectedSize:e,setSelectedSize:r}=O(z),a=e?"":o.jsx("span",{style:{color:"red"},children:"choose size please *"}),c=(s,i)=>{e?i.id===e.id?r(null):i.id!==e.id&&r(i):r(i)};return o.jsxs(o.Fragment,{children:[o.jsxs(P,{variant:"body1",gutterBottom:!0,children:["Select Size: ",a]}),o.jsx(Pt,{value:e,exclusive:!0,onChange:c,sx:{flexWrap:"wrap",gap:1},children:t.map(s=>o.jsx(Nt,{size:s},s.id))})]})},Vt=t=>async e=>{await e(et({insertCartItem:t}))},Gt=({sizes:t,product:e,variants:r})=>{const{selectedVariant:a,isColorNull:c,selectedSize:s,color:i,quantity:n,setQuantity:g}=O(z),{data:x,error:f}=ot(),b=rt(),[y,u]=l.useState(e.price.toFixed(2)),j=st();l.useEffect(()=>{},[a]),l.useEffect(()=>{u(n?(Number(e.price.toFixed(2))*Number(n)).toFixed(2):e.price.toFixed(2))},[n]);const h=s&&a?s.count>a.count?a.count:s.count:i?(s==null?void 0:s.count)??0:0,m=!n||!s||!a&&!c&&!i,S=n?"":o.jsx("span",{style:{color:"red"},children:"choose quantity please *"}),v=()=>{a&&s&&n&&j(Vt({product_size_id:s.id,product_variant_id:a.id,price:Number(n)*e.price,product_id:e.id,quantity:Number(n)}))};if(f)return o.jsx(Y,{});if(x){const{isAuth:R}=x;return o.jsx(w,{sx:{display:"flex",justifyContent:"center",height:"min-content",width:"100%"},children:o.jsxs(ft,{sx:{display:"flex",flexDirection:{xs:"column",md:"column",lg:"row"},width:{lg:"auto",md:"min-content",xs:"min-content"}},children:[o.jsx(Rt,{product:e})," ",o.jsxs(w,{sx:{display:"flex",flexDirection:"column"},children:[o.jsxs(Ct,{sx:{flex:1},children:[o.jsx(P,{variant:"h4",gutterBottom:!0,children:e.name}),o.jsxs(P,{variant:"h5",color:"primary",gutterBottom:!0,children:["$",y]}),o.jsx(P,{variant:"body1",color:"textSecondary",paragraph:!0,children:e.description??"No description available."}),o.jsxs(P,{variant:"body2",color:"textSecondary",children:["Category:"," ",e.category==="OutsideCategory"?"Outside Category":e==null?void 0:e.category]}),o.jsx(G,{sx:{my:2}}),o.jsx(Ot,{variants:r}),o.jsx(G,{sx:{my:2}}),o.jsx(kt,{sizes:t}),o.jsx(G,{sx:{my:2}}),o.jsxs(w,{children:[o.jsxs(P,{variant:"body1",gutterBottom:!0,children:["Select Quantity: ",S]}),o.jsx(W,{title:"To choose quantity please choose size and/or color",children:o.jsx(yt,{inputMode:"numeric",value:n,placeholder:`max. quantity: ${h}`,disabled:!h,onChange:T=>{const $=T.target.value,C=$==null?void 0:$.replace(/\D/g,"");Number(C)<=h?g(C):g(h.toString())}})})]})]}),o.jsx(ht,{sx:{display:"flex",justifyContent:"end"},children:o.jsx(W,{title:"To add product to cart you should choose product's color OR/AND variant",children:o.jsx("div",{children:o.jsx(at,{variant:"outlined",size:"large",onClick:()=>{R?v():b("/auth/login")},disabled:m,children:"Add to cart"})})})})]})]})})}},Et=()=>{const{productId:t,productGId:e}=nt(),[r,{data:a,isLoading:c,error:s}]=lt(),[i,{data:n,isLoading:g,error:x}]=it(),[f,{data:b,isLoading:y,error:u}]=dt();if(l.useEffect(()=>{t&&e&&(f({id:t}),i({id:t}),r({gID:`gid://shopify/Product/${e}`}))},[t,e]),c||g||y)return o.jsx(ct,{});if(x||s||u)return o.jsx(Y,{});if(n&&a&&b)return o.jsx(Gt,{product:n,variants:a,sizes:b})},Wt=()=>{const[t,e]=l.useState(null),[r,a]=l.useState(null),[c,s]=l.useState(null),[i,n]=l.useState(!1),[g,x]=l.useState(!1),[f,b]=l.useState(!1),[y,u]=l.useState(""),[j,h]=l.useState(!1),[m,S]=l.useState(!1),[v,R]=l.useState(""),$={selectedColor:t,setSelectedColor:e,selectedVariant:r,setSelectedVariant:a,swiperImageLoaded:i,setSwiperImageLoaded:n,colorImageLoaded:g,setColorImageLoaded:x,selectedSize:c,setSelectedSize:s,onColorChange:C=>{t===C.color&&(e(null),a(null)),t!==C.color&&(e(C.color),a({url:C.variant_images_urls,id:C.id,count:C.count}))},isColorNull:f,setIsColorNull:b,color:y,setColor:u,isVariantSelected:j,setIsVariantSelected:h,isSizeSelected:m,setIsSizeSelected:S,quantity:v,setQuantity:R};return o.jsx(z.Provider,{value:$,children:o.jsx(Et,{})})},Yt=()=>o.jsx(Wt,{});export{Yt as default};
