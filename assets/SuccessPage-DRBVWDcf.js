import{j as r,B as i,T as o,a5 as c,e as l,L as p,a3 as y,a4 as w}from"./index-MAXwa1rr.js";import{u as v}from"./api-Dggc4mL1.js";import L from"./ErrorPage-B6EbZhvD.js";import{C as S,a as b}from"./CardContent-BdfDTBoi.js";const B=()=>{const{data:e,isLoading:d,error:m}=v(),x=window.location.hash,t=new URLSearchParams(x.replace("#","")),n=t.get("error"),h=t.get("error_description");if(n)return console.log("SFDGKHLJFTGSHLPRTK: ",n),r.jsxs(i,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"background.default",padding:2,flexGrow:1},children:[r.jsx(o,{variant:"h3",sx:{marginBottom:2,fontWeight:"bold",color:"#333"},children:"😞 Oops! Something went wrong."}),r.jsx(o,{variant:"h6",sx:{marginBottom:4,color:"#555"},children:h||"An unknown error occurred. Please try again later."}),r.jsx(c,{component:l,to:"/",color:"primary",children:"Go to Home"})]});if(d)return r.jsx(p,{});if(m)return r.jsx(L,{});if(e){const{user:a}=e;if(a){const{email:g,user_metadata:{name:s,avatar_url:u},last_sign_in_at:j,created_at:f}=a;return r.jsxs(i,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",backgroundColor:"background.default",padding:2,flexGrow:1},children:[r.jsx(o,{variant:"h3",sx:{marginBottom:2,fontWeight:"bold",color:"#333"},children:"Hooray! You've successfully registered!"}),r.jsx(o,{variant:"h6",sx:{marginBottom:4,color:"#555"},children:"Welcome to our system!"}),r.jsx(y,{src:u,alt:s,sx:{width:100,height:100,mx:"auto",marginBottom:3}}),r.jsx(S,{sx:{width:"100%",maxWidth:400,marginBottom:3,boxShadow:3},children:r.jsxs(b,{children:[r.jsx(o,{variant:"h5",sx:{mt:2},children:s}),r.jsxs(o,{variant:"body2",children:[r.jsx("strong",{children:"Email:"})," ",g]}),r.jsxs(o,{variant:"body2",children:[r.jsx("strong",{children:"Joined:"})," ",new Date(f).toLocaleDateString()]}),r.jsxs(o,{variant:"body2",children:[r.jsx("strong",{children:"Last Signed In:"})," ",new Date(j??0).toLocaleString()]})]})}),r.jsx(c,{component:l,to:"/",color:"primary",children:"Go to Home"})]})}}return null},P=()=>r.jsx(w,{children:r.jsx(B,{})});export{P as default};
