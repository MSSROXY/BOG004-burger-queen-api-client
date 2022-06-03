import React, { useState } from "react";
import "./Menu.css";
import shopping from "../../img/car.png";
import { ProductsList } from "./ProductsList";

export function Menu() {
  let [filter, setFilter] = useState("");
  let [order, setOrder] = useState([]);
  let [price, setPrice] = useState(0);

  const addProduct = (product) => {
    if (order.find(({ id }) => id === product.id)) {
      console.log('quantityyyy',product.quantity)
      let findIndex = order.findIndex(({ id }, index) => id === product.id);
      console.log("cumplio con el findddd", findIndex);
      order[findIndex] = { ...product, quantity: product.quantity + 1};
      // const newOrder = order.map((element) => {
      //   if (element.id === product.id) {
      //     return {
      //       ...element,
      //       quantity: element.quantity + 1,
      //     };
      //   } else {
      //     console.log("no cumplio con el ifff");
      //     return element;
      //   }
      // });
      setOrder(order);
      console.log("orderrrrr", order);
    } else {
      order.push({ ...product, quantity: 1 });
      setOrder(order);
      console.log('producto nuevooo')
    }
    console.log("esto es el order", order);
    setPrice((price += product.price));
  };
  const removeProduct = (product) => {
    setPrice((price -= product.price));
    setOrder((currentOrder) => [
      ...currentOrder,
      currentOrder.splice(currentOrder.indexOf(product), 1),
    ]);
  };

  const listLunch = () => {
    setFilter("Almuerzo");
  };
  const listBreakfast = () => {
    setFilter("Desayuno");
  };
  return (
    <div className="div-general">
      <div className="div-fund-menu">
        <div className="div-buttons">
          <button onClick={listLunch}> Almuerzos </button>
          <button onClick={listBreakfast}> Desayunos </button>
        </div>
        <div className="div-menu">
          <div className="options">
            <h3>Productos</h3>
            <h3>Precios</h3>
          </div>
          <div className="menu">
            <ProductsList
              filter={filter}
              addProduct={addProduct}
              removeProduct={removeProduct}
            />
            {order.map((item) => (
              <>
                <p>{item.name}</p>
              </>
            ))}
          </div>
          <div className="client-name">
            <input placeholder="Ingrese nombre de cliente" required></input>
          </div>
        </div>
        <div className="div-order">
          <div className="resume">
            <img className="img-car" src={shopping} alt="Carrito"></img>
            <h3> $ {price}</h3>
            <button type="submit">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
