// import { supabase } from '@services/Supabase/supabaseClient';
// import { useEffect } from 'react';

// import { request, gql } from 'graphql-request';
// import { useGetAllProductsQuery } from '@entities/products/API/api';
// import { Product } from '@services/Supabase/supabase.types';

// interface IResponseProductVariantes {
//   node: {
//     price: {
//       amount: string;
//     };
//   };
// }

// interface IResponseProductImages {
//   node: {
//     url: string;
//   };
// }

// interface ICollection {
//   node: {
//     title: string;
//   };
// }

// interface IResponseProduct {
//   node: {
//     id: string;
//     title: string;
//     description: string;
//     images: {
//       edges: IResponseProductImages[];
//     };
//     variants: {
//       edges: IResponseProductVariantes[];
//     };
//     collections: {
//       edges: ICollection[];
//     };
//   };
// }

// interface IResponse {
//   products: {
//     edges: IResponseProduct[];
//   };
// }

// interface IProduct {
//   gID: string;
//   name: string;
//   description: string;
//   price: number;
//   image_urls: string[];
//   category: string;
// }

// type IProducts = IProduct[];

// const endpoint = 'https://mock.shop/api';

// type ProductVariantsById = {
//   node: {
//     id: string;
//     title: string;
//     image: {
//       url: string;
//     };
//   };
// };

// interface IResponseProductVariants {
//   product: {
//     variants: {
//       edges: ProductVariantsById[];
//     };
//   };
// }

// const getProductsQuery = gql`
//   {
//     products(first: 250) {
//       edges {
//         node {
//           id
//           title
//           description
//           images(first: 3) {
//             edges {
//               node {
//                 url
//               }
//             }
//           }
//           variants(first: 1) {
//             edges {
//               node {
//                 price {
//                   amount
//                   currencyCode
//                 }
//               }
//             }
//           }
//           collections(first: 1) {
//             edges {
//               node {
//                 title
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `;
// const lol = `      variants(first: 4) {
//         edges {
//           node {
//             id
//             title
//             image {
//               url
//             }
//           }
//         }
//       }`;

// const getProductVariantsQuery = (gID: string | null | undefined) =>
//   gql`
//   query {
//     product(id: "${gID}") {
//       images(first: 10){
//         edges{
//           node{
//           url
//           }
//         }
//       }
//       variants(first: 4) {
//         edges {
//           node {
//             id
//             title
//             image {
//               url
//             }
//           }
//         }
//       } 
//     }
//   }
// `;

// const ForDevRequirements = () => {
//   const { data, error } = useGetAllProductsQuery();

//   const getProductVariants = async (item1: Product | undefined) => {
//     const response: IResponseProductVariants = await request(
//       endpoint,
//       getProductVariantsQuery(item1?.gID)
//     );
//     const Data = response.product.variants.edges.map(({ node: item }) => {
//       const colors = item.title.split(' ');
//       const regex = /^\d+cm$/;
//       const isRegex = regex.test(item.title);
//       const isTitleIsSize = !isNaN(Number(colors[0]));
//       let color;

//       if (isTitleIsSize) {
//         color = null;
//       }
//       if (colors.length === 1 && !isTitleIsSize) {
//         color = colors[0];
//       }
//       if (isRegex) {
//         color = null;
//       }
//       if(!isRegex && !(colors.length === 1) && !isTitleIsSize) {
//         color = colors[2]
//       }
//       const image = item.image.url;

//       return {
//         color,
//         variant_images_urls: image,
//         count: Math.round(Math.random() * 21),
//         product_id: item1?.gID,
//       };
//     });

//     return Data;
//   };

//   useEffect(() => {
//     if (data) {
//       const getProductsVariantsAdapter = async () => {
//         let productVariants = [];
//         await Promise.all(
        //   data.map(async (item) => {
        //     const resp = await getProductVariants(item);

        //     productVariants.push(...resp);
        //   })
//         );
//         console.log(productVariants);
//         const { data1, error } = await supabase
//           .from('product_variants')
//           .insert(productVariants.map((i) => i));
//         console.log('data1: ', data1);
//         console.error('error: ', error);
//       };
//       getProductsVariantsAdapter();
//     }
//   }, [data]);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         const response: IResponse = await request(endpoint, getProductsQuery);
//         console.log('Mock Response:', response);
//         const products: IProducts = response.products.edges.map(
//           ({ node: product }) => ({
//             gID: product.id,
//             name: product.title,
//             description: product.description || 'No description',
//             price: Number(product.variants.edges[0].node.price.amount),
//             image_urls: product.images.edges.map((item) => item.node.url),
//             category: product.collections.edges[0]?.node.title ?? 'OutsideCategory',
//           })
//         );
//         const { data, error } = await supabase
//           .from('products')
//           .insert(products);
//         console.log('Data Supabase: ', data);
//         console.log('Error Supabase: ', error);
//         console.log('Products: ', products);
//       } catch (error) {
//         console.error('Error by response: ', error);
//       }
//     };
//     fetchProducts();
//   }, [data]);

//   return <></>;
// };
// export default ForDevRequirements;