import{j as e,B as o,T as r,c as i,a as s}from"./index-Cd8S1TC7.js";const l=({message:n,description:t,onButtonClick:a})=>e.jsxs(o,{textAlign:"center",children:[e.jsx(r,{sx:{fontSize:"2rem",fontWeight:"bold",color:"#ff4d4d",marginBottom:2,animation:"runningText 10s linear infinite",whiteSpace:"nowrap",position:"relative"},children:e.jsx("span",{style:{position:"absolute",animation:"move 10s linear infinite"},children:n})}),e.jsx(r,{sx:{marginBottom:3,color:"#666"},children:t}),e.jsx(i,{variant:"contained",color:"error",onClick:a,sx:{padding:"12px 24px",fontSize:"1rem"},children:"Go back Home"})]}),m=()=>{const n=s(),t=()=>{n("/")};return e.jsxs(o,{sx:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"100vh",backgroundColor:"#f5f5f5",textAlign:"center",overflow:"hidden"},children:[e.jsx(l,{message:"ERROR! SOMETHING WENT WRONG...",description:"We can't find this page. Try reloading the page or go back to the home page.",onButtonClick:t}),e.jsx("style",{children:`
          @keyframes runningText {
            0% {
              transform: translateX(100%);
            }
            100% {
              transform: translateX(-100%);
            }
          }

          @keyframes move {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-100%);
            }
          }
        `})]})};export{m as default};
