import{Y as g,ar as p,j as o,L as h,a4 as u,B as c,U as f,ab as y,T as e,as as j}from"./index-MAXwa1rr.js";import{A as b,g as v}from"./loginUser-qquDbzei.js";import{C,a as k}from"./CardContent-BdfDTBoi.js";import{L as a}from"./ListItem-DIfbZ-2c.js";import{C as w}from"./CardActions-am_JsLfD.js";import"./TextField-f34vjU75.js";import"./Input-8EnjT49k.js";import"./isMuiElement-vA9tUvca.js";const B=(t,i)=>async(s,d,{router:n})=>{if("email"in i){const{error:r}=await t(i);r||n.navigate(`/auth/email-confirm/${i.email}`)}},L=()=>{const t=g(),[i,{data:s,isLoading:d,error:n}]=p(),r=(m,x)=>{t(B(i,{email:m,password:x}))},l=()=>{t(v())};return d?o.jsx(h,{}):(n&&console.log("eaefas: ",n),console.log("DATA",s),o.jsx(b,{onGoogleButtonClick:l,onAuthFormSubmit:r,authFormType:"SIGN_UP",errorCode:n}))},U=()=>o.jsx(u,{children:o.jsx(c,{component:"section",sx:{width:"100%",minHeight:"calc(100vh - 90px)",display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#f5f5f5",paddingInline:{xs:0,md:2}},children:o.jsx(f,{component:"div",sx:{maxWidth:"900px !important",paddingInline:{xs:0,sm:3}},children:o.jsx(y,{elevation:10,children:o.jsxs(C,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",flexDirection:"column",paddingBlock:3,paddingInline:{xs:0,md:3},gap:3,boxShadow:4,borderRadius:2},children:[o.jsxs(k,{sx:{flex:1},children:[o.jsx(e,{variant:"h4",component:"h1",gutterBottom:!0,sx:{color:"primary.main",fontWeight:"bold"},children:"Welcome to Our Platform"}),o.jsx(e,{variant:"body1",sx:{marginBottom:2,color:"text.secondary"},children:"Join our community to unlock exclusive features and benefits. Signing up is quick and easy!"}),o.jsx(e,{variant:"h5",component:"h2",sx:{marginTop:3,marginBottom:1,fontWeight:"bold",color:"primary.dark"},children:"Why Choose Us?"}),o.jsxs(j,{children:[o.jsx(a,{sx:{padding:0,marginBottom:1},children:o.jsx(e,{variant:"body2",sx:{color:"text.secondary"},children:"✅ Exclusive access to premium content."})}),o.jsx(a,{sx:{padding:0,marginBottom:1},children:o.jsx(e,{variant:"body2",sx:{color:"text.secondary"},children:"✅ Personalized recommendations tailored to your needs."})}),o.jsx(a,{sx:{padding:0},children:o.jsx(e,{variant:"body2",sx:{color:"text.secondary"},children:"✅ A growing community of like-minded individuals."})})]}),o.jsxs(c,{sx:{maxWidth:"400px",marginInline:"auto",marginBlock:"40px"},children:[o.jsx(e,{variant:"h6",sx:{fontWeight:700,color:"#d32f2f",mb:3},children:"🚨 Please Register with Google Login 🚨"}),o.jsx(e,{variant:"body1",sx:{mb:2,color:"#555"},children:"We're currently facing some delays with email confirmation. It might take up to an hour for the confirmation email to arrive."}),o.jsxs(e,{variant:"body1",sx:{mb:4,color:"#555"},children:["In the meantime, please use ",o.jsx("strong",{children:"Google Login"})," to proceed quickly and avoid waiting."]}),o.jsx(e,{variant:"body2",sx:{color:"#d32f2f",mb:5},children:"❗ Don't want to wait? Google Login is your best option! ❗"})]})]}),o.jsx(w,{sx:{flex:1,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",padding:2,borderRadius:2,fontWeight:"bold",color:"primary.dark"},children:o.jsx(L,{})})]})})})})});export{U as default};
