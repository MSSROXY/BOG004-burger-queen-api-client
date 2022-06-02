import React, { useState } from "react";
import "./Menu.css";
import shopping from "../../img/car.png";
import { ProductsList } from "./ProductsList";

export function Menu() {
  let [filter, setFilter] = useState("Almuerzo");

  let [order, setOrder] = useState([]);
  let [price, setPrice] = useState(0);

  const addProduct = (product) => {
    setOrder((currentOrder) => [...currentOrder, product]);
    setPrice((price += product.price));
    console.log(price);
    console.log(order);
  };
  const removeProduct = (product) => {
    setPrice((price -= product.price));
    console.log(price);
    if (order.includes(product)) {
      setOrder((currentOrder) => [...currentOrder.splice(currentOrder.indexOf(product), 1)])
      console.log(order);
    }
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
            {order.map(item => (
              <>
                <h2>{item.name}</h2>
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
            <h3> {price}</h3>
            <button type="submit">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
