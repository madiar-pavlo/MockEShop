import{j as e,B as a,ab as l,T as o,ah as x}from"./index-4tuIeHbz.js";const p=({cartItems:r,cantDelete:t})=>{const n=r==null?void 0:r.reduce((i,s)=>i+s.price,0).toFixed(2);return e.jsx(e.Fragment,{children:e.jsx(a,{display:"flex",flexDirection:"column",children:e.jsxs(l,{elevation:3,sx:{p:3},children:[e.jsx(o,{variant:"h6",gutterBottom:!0,children:"Order Details"}),r.map(i=>e.jsx(x,{cartItem:i,withoutCloseIcon:t},i.id)),e.jsxs(o,{variant:"overline",fontSize:"20px",sx:{mt:2},children:[e.jsx("strong",{children:"Total:"})," $",n]})]})})})};export{p as O};
