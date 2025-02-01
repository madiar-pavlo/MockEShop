import{i,j as e,B as b,T as f,ab as P,c as L,ac as V,ad as w,ae as M,af as W,e as z,Y as k,ag as H,L as Y,a4 as $}from"./index-MAXwa1rr.js";import{O as R}from"./OrderDetails-nQ0a2yyF.js";import{u as x}from"./useAppContext-_vprPFQM.js";import{T as A}from"./TextField-f34vjU75.js";import{G as E}from"./Grid2-8fct_JcX.js";import{c as q,d as G}from"./api-BToLMZ6A.js";import J from"./ErrorPage-B6EbZhvD.js";import{C as Q,a as K}from"./CardContent-BdfDTBoi.js";import"./Input-8EnjT49k.js";import"./isMuiElement-vA9tUvca.js";const I=i.createContext(void 0),p=({label:t,name:a,...r})=>{const{formData:s,handleChange:o}=x(I);return e.jsx(A,{label:t,name:a,value:s[a],helperText:`* Please enter your ${t}`,onChange:o,fullWidth:!0,margin:"normal",sx:{"& .MuiFormHelperText-root":{transitionDuration:"0.2s",color:"red",opacity:s[a]?0:1}},...r})},O=i.createContext(void 0),S=({field:t,setField:a,setIsFieldCompleted:r,isFieldCompleted:s,fieldOptions:o})=>{const{setFormData:c}=x(I),{maxValueLength:l,dividingSign:n,divisionLength:C,label:u,name:m}=o,[d,h]=i.useState(!1),[F,v]=i.useState(Array(l).fill("0")),j=new RegExp(`(\\d{${C}})(?=\\d)`,"g"),D=`$1${n}`;i.useEffect(()=>{s?c(y=>({...y,[m]:t})):s||c(y=>({...y,[m]:""}))},[s]);const N=y=>{const g=y.target.value.replace(/\D/g,"").split(n).join("");g.length<=l&&(a(g.replace(j,D)),v(T=>T.map((_,B)=>B===g.length-1?g[g.length-1]:_))),g.length>=l?r(!0):r(!1)};return e.jsxs(b,{position:"relative",children:[e.jsx(f,{color:"#A2A2A2",sx:{transitionDuration:"0.25s",position:"absolute",top:"31.9px",left:"14.5px",opacity:d?"1":"0"},children:F.join("").replace(j,D)}),e.jsx(A,{onFocus:()=>h(!0),onBlur:()=>h(!1),onChange:N,label:u,name:m,value:t,fullWidth:!0,margin:"normal",helperText:`* Please enter your ${u}`,sx:{"& .MuiFormHelperText-root":{transitionDuration:"0.2s",color:"red",opacity:s?0:1}}})]})},U=()=>{const{cardNumber:t,setCardNumber:a,isCardNumberCompleted:r,setIsCardNumberCompleted:s}=x(O);return e.jsx(S,{setField:a,field:t,isFieldCompleted:r,setIsFieldCompleted:s,fieldOptions:{label:"Card Number",name:"cardNumber",dividingSign:"-",divisionLength:4,maxValueLength:16}})},X=()=>{const{cardExpDate:t,setCardExpDate:a,isCardExpCompleted:r,setIsCardExpCompleted:s}=x(O);return e.jsx(S,{setField:a,field:t,isFieldCompleted:r,setIsFieldCompleted:s,fieldOptions:{label:"Card Expiration Date (MM/YY)",name:"cardExpirationDate",dividingSign:"/",divisionLength:2,maxValueLength:4}})},Z=()=>{const{cardCvv:t,setCardCvv:a,isCardCvvCompleted:r,setIsCardCvvCompleted:s}=x(O);return e.jsx(S,{field:t,setField:a,isFieldCompleted:r,setIsFieldCompleted:s,fieldOptions:{label:"Card CVV",name:"cardCvv",dividingSign:"",divisionLength:3,maxValueLength:3}})},ee=()=>e.jsxs(e.Fragment,{children:[e.jsx(U,{}),e.jsx(X,{}),e.jsx(Z,{})]}),te=()=>{const[t,a]=i.useState(""),[r,s]=i.useState(""),[o,c]=i.useState(""),[l,n]=i.useState(!1),[C,u]=i.useState(!1),[m,d]=i.useState(!1),h={cardNumber:t,setCardNumber:a,cardExpDate:r,setCardExpDate:s,cardCvv:o,setCardCvv:c,isCardNumberCompleted:l,setIsCardNumberCompleted:n,isCardExpCompleted:C,setIsCardExpCompleted:u,isCardCvvCompleted:m,setIsCardCvvCompleted:d};return e.jsx(O.Provider,{value:h,children:e.jsx(ee,{})})},re=({handleSubmit:t})=>{const{formData:a}=x(I),r=Object.values(a).every(s=>s!=="");return e.jsxs(E,{container:!0,spacing:4,flexDirection:"row",marginTop:1,children:[e.jsx(E,{size:{xs:12,md:6},children:e.jsxs(P,{elevation:3,sx:{p:3},children:[e.jsx(f,{variant:"h6",gutterBottom:!0,children:"Your Information"}),e.jsxs(b,{component:"form",noValidate:!0,autoComplete:"off",children:[e.jsx(p,{label:"First Name",name:"firstName",placeholder:"Elon"}),e.jsx(p,{label:"Last Name",name:"lastName",placeholder:"Musk"}),e.jsx(p,{label:"Country",name:"country",placeholder:"Czech Republic"}),e.jsx(p,{label:"City",name:"city",placeholder:"Prague"}),e.jsx(p,{label:"Street",name:"street",placeholder:"Airmax 542"}),e.jsx(p,{label:"House Number",name:"houseNumber",placeholder:"5"})]})]})}),e.jsx(E,{size:{xs:12,md:6},children:e.jsxs(P,{elevation:3,sx:{p:3},style:{height:"100%"},children:[e.jsx(f,{variant:"h6",gutterBottom:!0,children:"Payment Information"}),e.jsxs(b,{component:"form",noValidate:!0,autoComplete:"off",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",paddingBlock:2,children:[e.jsx(p,{label:"Card Holder",name:"cardHolder",placeholder:"James Bond"}),e.jsx(te,{}),e.jsx(L,{variant:"contained",color:"primary",fullWidth:!0,sx:{mt:2},onClick:()=>t(),disabled:!r,children:"Submit Order"})]})]})})]})},ae=({order:t,orderItems:a,insertOrder:r,insertOrderItems:s})=>async(o,c,{router:l})=>{const{data:n}=await r(t);if(n){console.log("DATA: ",n);const u={insertOrderItems:a.map(d=>({...d,order_id:n.id}))},{error:m}=await s(u);m||(await o(V({deleteAllCartItemsId:a[0].user_id})),await Promise.all(a.map(async d=>{await o(w({sizeToChange:{quantity:d.quantity,sizeId:d.product_size_id}})),await o(M({variantToChange:{quantity:d.quantity,variantId:d.product_variant_id}}))})),l.navigate(`/order/success/${n.id}`))}},se=()=>e.jsx(b,{sx:{display:"flex",flexDirection:"column",alignItems:"center",gap:2,mt:4},children:e.jsx(Q,{sx:{width:"100%",maxWidth:400,textAlign:"center"},children:e.jsxs(K,{children:[e.jsx(W,{sx:{fontSize:60,color:"text.secondary"}}),e.jsx(f,{variant:"h6",gutterBottom:!0,children:"Your cart is empty"}),e.jsx(f,{variant:"body2",color:"text.secondary",children:"You cannot place an order with an empty cart. Please add some items first!"}),e.jsx(L,{component:z,to:"/catalog",variant:"contained",color:"primary",sx:{mt:2},children:"Go to Shop"})]})})}),oe=()=>{const{formData:t}=x(I),a=k(),{data:r}=H(),[s,{data:o,isLoading:c,error:l}]=q(),[n,{isLoading:C,error:u}]=G();i.useEffect(()=>{console.log("ORDER: ",o)},[o]);const m=()=>{if(console.log("Order submitted:",t),r){const d=r==null?void 0:r.reduce((v,j)=>v+j.price,0).toFixed(2),h={insertOrder:{city:t.city,country:t.country,first_name:t.firstName,last_name:t.lastName,house_number:Number(t.houseNumber),street:t.street,total_price:Number(d)}},F=r.map(v=>{const{id:j,created_at:D,...N}=v;return N});a(ae({order:h,orderItems:F,insertOrder:s,insertOrderItems:n}))}};if(C||c)return e.jsx(Y,{});if(l||u)return e.jsx(J,{});if(r)return r.length>0?e.jsxs(b,{p:4,children:[e.jsx(f,{variant:"h4",gutterBottom:!0,children:"Order Page"}),e.jsx(R,{cartItems:r}),e.jsx(re,{handleSubmit:m})]}):e.jsx(se,{})},ne=()=>{const[t,a]=i.useState({firstName:"",lastName:"",country:"",city:"",street:"",houseNumber:"",cardNumber:"",cardHolder:"",cardExpirationDate:"",cardCvv:""}),s={formData:t,setFormData:a,handleChange:o=>{const{name:c,value:l}=o.target;a(n=>({...n,[c]:l}))}};return e.jsx(I.Provider,{value:s,children:e.jsx(oe,{})})},ge=()=>e.jsx($,{children:e.jsx(ne,{})});export{ge as default};
