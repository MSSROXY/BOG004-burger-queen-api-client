import React, { useState, useEffect } from "react";
import { getRequest, getToken } from "../API/fetch";
import { ProductsCounter } from "./ProductsCounter";

export const ProductsList = ({filter, addProduct, removeProduct, order}) => {
  let [data, setData] = useState([]);
  let url = "http://localhost:8080/products";
  let token = getToken();

  useEffect(() => {
    getRequest(url, token).then((res) => {
      if (typeof res === "object" && res.length >= 0) {
        setData(res.filter((prod) => prod.type === filter));
      } else console.log("Error en la petición de Productos");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filter]);

  return (
    <div className="list-products">
      {data.map((product) => (
        <div className="myProducts" key={product.id}>
          <p className="product-name">{product.name}</p>
          <p className="product-price">$ {product.price}</p>
          <ProductsCounter addProduct={addProduct} removeProduct={removeProduct} product={product} order={order}/>
        </div>
      ))}
    </div>
  );
};
