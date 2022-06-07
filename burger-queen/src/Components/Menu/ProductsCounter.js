import React, { useState, useEffect } from "react";
import add from "../../img/mas.png";
import remove from "../../img/menos.png";

export const ProductsCounter = (myOrder) => {
  let [counter, setCounter] = useState()

  const addProduct = () => {
    // setCounter(counter + 1);
    myOrder.addProduct(myOrder.product);
    let myItem = myOrder.order.findIndex(({ id }) => id === myOrder.product.id);
    setCounter(myOrder.order[myItem].quantity);
  };
  const removeProduct = () => {
    if (counter >= 1) {
      myOrder.removeProduct(myOrder.product);
      counter--;
    }
    setCounter(counter);
  };

  return (
    <div className="setQuantity">
      <button onClick={addProduct}>
        <img src={add} alt="Agregar"></img>
      </button>
      <p>{counter}</p>
      <button onClick={removeProduct}>
        <img src={remove} alt="Quitar"></img>
      </button>
    </div>
  );
};
