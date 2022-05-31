import React from "react";
import { Counter } from "./ProductsCounter";

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
        <Counter />
      </div>
    ))
  );
};
