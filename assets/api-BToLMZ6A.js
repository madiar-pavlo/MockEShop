import{a6 as s}from"./index-MAXwa1rr.js";const t=s.injectEndpoints({endpoints:r=>({insertOrder:r.mutation({query:e=>({method:"insertOrder",body:e})}),insertOrderItems:r.mutation({query:e=>({method:"insertOrderItems",body:e})}),getOrderById:r.query({query:e=>({method:"getOrderById",body:e})}),getOrders:r.query({query:()=>({method:"getOrders"})}),getOrderItems:r.query({query:e=>({method:"getOrderItems",body:e})})}),overrideExisting:!0}),{useLazyGetOrderByIdQuery:u,useLazyGetOrderItemsQuery:n,useGetOrdersQuery:o}=t,{useInsertOrderMutation:i,useInsertOrderItemsMutation:y}=t;t.endpoints;export{u as a,n as b,i as c,y as d,o as u};
