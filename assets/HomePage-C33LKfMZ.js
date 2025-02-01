import{j as e,B as o,T as r,c,ak as d,Z as m,a4 as x}from"./index-MAXwa1rr.js";import{C as l,P as p}from"./CatalogSkeleton-8yHIWUGg.js";import{G as i}from"./Grid2-8fct_JcX.js";import{C as h}from"./CardContent-BdfDTBoi.js";import"./pagination-dA6yBTGl.js";import"./CardMedia-D2dp03Pn.js";import"./CardActions-am_JsLfD.js";import"./isMuiElement-vA9tUvca.js";const u="/assets/HomePageBackground-ByTD14XP.jpg",n=({text:t,background:s="#008AE1"})=>t.split(" ").map(a=>e.jsxs("span",{children:[e.jsx("span",{style:{background:s,paddingInline:"5px",borderRadius:"5px"},children:a})," "]},crypto.randomUUID())),g="Welcome to MockEShop",f="Discover the best deals on your favorite products. Convenient, fast, and secure shopping all in one place.",j="From electronics to fashion, our platform offers a wide range of products at unbeatable prices. Shop now and enjoy exclusive offers, fast delivery, and top-notch customer service. Join us today!",y=()=>e.jsxs(o,{children:[e.jsx(r,{variant:"h2",sx:{mb:3,fontSize:{xs:"2rem",sm:"2.8rem",md:"4rem"},fontWeight:"bold",letterSpacing:"1.5px",lineHeight:"1.2",textTransform:"uppercase"},children:e.jsx(n,{text:g})}),e.jsx(r,{variant:"h5",sx:{mb:4,fontSize:{xs:"1rem",sm:"1.125rem",md:"1.375rem"},fontWeight:300,maxWidth:"650px",lineHeight:"1.6"},children:e.jsx(n,{background:"#0072D2",text:f})}),e.jsx(r,{variant:"body1",sx:{mb:6,fontSize:{xs:"0.875rem",sm:"1rem",md:"1.125rem"},fontWeight:400,maxWidth:"700px",lineHeight:"1.7"},children:e.jsx(n,{background:"#0072D2",text:j})})]}),v=()=>e.jsxs(o,{component:"section",sx:{width:"100%",height:"100vh",maxWidth:"100vw",display:"flex",position:"absolute",marginTop:"50px",left:0,top:0,flexDirection:"column",justifyContent:"center",alignItems:"start",backgroundImage:`url("${u}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat",color:"white",px:3,py:5},children:[e.jsx(y,{}),e.jsx(c,{variant:"contained",size:"large",color:"primary",sx:{boxShadow:6,px:4,py:2,fontSize:"1.1rem"},children:"Start Shopping"})]}),b=()=>{const{data:t,isLoading:s}=d();return s?e.jsx(l,{skeletonsCount:3}):t?e.jsxs(o,{children:[e.jsx(r,{variant:"h4",sx:{mb:4,textAlign:"center",color:"#212121",fontSize:{xs:"1.5rem",sm:"2rem",md:"2.5rem"}},children:"Trending Products"}),e.jsx(i,{container:!0,spacing:4,justifyContent:"center",children:t?e.jsx(p,{productsValues:t}):e.jsx(r,{children:"Error by fetching Product"})})]}):e.jsxs(e.Fragment,{children:[" ",e.jsx(o,{sx:{marginTop:"100vh"},children:e.jsx(r,{variant:"h4",gutterBottom:!0,children:"We have some problem with loading preview products"})})]})},S=({featureDescription:t})=>e.jsxs(h,{sx:{borderRadius:2,boxShadow:2,padding:3,maxHeight:"280px",display:"flex",flexDirection:"column",backgroundColor:"#fafafa",minHeight:"300px"},children:[e.jsx(r,{variant:"h6",sx:{color:"#1976d2",fontWeight:600,fontSize:{xs:"1.125rem",sm:"1.25rem",md:"1.5rem"},mb:1},children:t.title}),e.jsx(r,{variant:"body2",color:"text.secondary",sx:{fontSize:{xs:"0.875rem",sm:"1rem",md:"1.125rem"},lineHeight:1.6},children:t.description})]}),T=[{title:"Affordable Prices",description:"Competitive prices without compromising quality."},{title:"Fast Delivery",description:"Get your orders delivered fast and reliably."},{title:"Secure Payments",description:"Your data is safe with us. Shop confidently."},{title:"Customer Support",description:"24/7 support to assist you whenever you need."}],P=()=>e.jsxs(o,{children:[e.jsx(r,{variant:"h4",sx:{mb:4,textAlign:"center",color:"#212121",fontSize:{xs:"1.5rem",sm:"2rem",md:"2.5rem"}},children:"Why Shop With Us?"}),e.jsx(i,{container:!0,spacing:4,justifyContent:"center",children:T.map((t,s)=>e.jsx(i,{size:{xs:12,sm:6,md:3},children:e.jsx(S,{featureDescription:t})},s))})]}),w=()=>e.jsxs(o,{sx:{width:"100%",minHeight:"100vh",overflowY:"auto",backgroundColor:"#f9f9f9"},children:[e.jsx(v,{}),e.jsxs(o,{sx:{padding:6,marginTop:"100vh"},children:[e.jsx(b,{}),e.jsx(m,{sx:{my:6}}),e.jsx(P,{})]})]}),R=()=>e.jsx(x,{children:e.jsx(w,{})});export{R as default};
