import React, { useState } from "react";
import mas from "../../img/mas.png";
import menos from "../../img/menos.png";

export const ProductsList = (
  products,
  setMyProducts,
  setMyPrices,
  setAdd,
  setRemove,
  setNum
) => {
  // let [qty, setQty] = useState(0)
  const addProduct = () => {
    console.log("click addddd");
  };
  const removeProduct = () => {
    console.log("click remooove");
  };

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
  setAdd(
    products.map((el) => (
      <button onClick={addProduct} key={el.id}>
        <img src={mas} alt="add"></img>
      </button>
    ))
  );
  setRemove(
    products.map((el) => (
      <button onClick={removeProduct} key={el.id}>
        <img src={menos} alt="remove"></img>
      </button>
    ))
  );
  setNum(
    products.map((el) => (
      <div className="myProduct" key={el.id}>
        0
      </div>
    ))
  );
};
