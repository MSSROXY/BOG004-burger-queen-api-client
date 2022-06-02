import React, { useState } from "react";
import "./Menu.css";
import shopping from "../../img/car.png";
import { ProductsList } from "./ProductsList";

export function Menu() {
  let [filter, setFilter] = useState("Almuerzo");

  let order = [];
  let [price, setPrice] = useState(0);

  const addProduct = (product) => {
    order.push(product)
    setPrice(price += product.price)
    console.log('AUMENTO',price)

  };
  const removeProduct = (product) => {
    if(order.includes(product)){
      order.splice(order.indexOf(product),1)
      setPrice(price -= product.price)
      console.log('DISMINUYO',price)
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
          </div>
          <div className="client-name">
            <input placeholder="Ingrese nombre de cliente" required></input>
          </div>
        </div>
        <div className="div-order">
          <div className="resume">
            <img className="img-car" src={shopping} alt="Carrito"></img>
            <h3> $40 </h3>
            <button type="submit">OK</button>
          </div>
        </div>
      </div>
    </div>
  );
}
