import React from "react";
import { ProductsCounter } from "./ProductsCounter";

export const ProductsList = (
  products,
  setMyProducts,
  setMyPrices,
  setNum,
) => {
  setMyProducts(
    products.map((el) => (
      <div className="myProduct" key={el.id}>
        {el.name}
      </div>
    ))
  );
  setMyPrices(
    products.map((el) => (
      <div className="myProduct" key={el.id}>
        $ {el.price}
      </div>

    ))
  );
  setNum(
    products.map((el) => (
      <div className="myProduct" key={el.id}>
        <ProductsCounter id={el.id} name={el.name}/>
      </div>
    ))
  );
};

// import React, { useState, useEffect } from "react";
// import { productsRequest, getToken } from "../API/fetch";
// import { ProductsCounter } from "./ProductsCounter";

// export const BreakfastProducts = () => {
//   let [data, setData] = useState([]);
//   let url = "http://localhost:8080/products";
//   let token = getToken();

//   useEffect(() => {
//     productsRequest(url, token).then((res) => {
//       if (typeof res === "object" && res.length > 0) {
//         setData(res.filter((prod) => prod.type === "Desayuno"));
//       } else console.log("Error en la petición de Productos");
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="list-products">
//       {data.map((product) => (
//         <div className="myProducts" key={product.id}>
//           <p className="product-name">{product.name}</p>
//           <p className="product-price">$ {product.price}</p>
//           <ProductsCounter id={product.id} name={product.name}/>
//         </div>
//       ))}
//     </div>
//   );
// };

// export const LunchProducts = () => {
//   let [data, setData] = useState([]);
//   let url = "http://localhost:8080/products";
//   let token = getToken();

//   useEffect(() => {
//     productsRequest(url, token).then((res) => {
//       if (typeof res === "object" && res.length > 0) {
//         setData(res.filter((prod) => prod.type === "Almuerzo"));
//       } else console.log("Error en la petición de Productos");
//     });
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   return (
//     <div className="list-products">
//       {data.map((product) => (
//         <div className="myProducts" key={product.id}>
//           <p className="product-name">{product.name}</p>
//           <p className="product-price">$ {product.price}</p>
//           <ProductsCounter id={product.id} name={product.name}/>
//         </div>
//       ))}
//     </div>
//   );
// };
