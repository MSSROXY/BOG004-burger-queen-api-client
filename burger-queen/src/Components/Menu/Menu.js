import React, { useState } from "react";
import "./Menu.css";
import shopping from "../../img/car.png";
import { ProductsList } from "./ProductsList";
import {Modal} from "../../Components/Modals/Modal"

export function Menu() {
  let [filter, setFilter] = useState("Almuerzo");

  let [order, setOrder] = useState([]);
  let [price, setPrice] = useState(0);

 

  const addProduct = (product) => {
    product.quantity = 0;
    setOrder((currentOrder) => [...currentOrder, product]);
    setPrice((price += product.price));
    const total = order.reduce((previusValue, currentValue) => parseInt(previusValue) + parseInt(currentValue), 0);
    console.log('Hola soy tu total', total)
    // console.log(price);
    // console.log(order); 
  };
  const removeProduct = (product) => {
    setPrice((price -= product.price));
    setOrder((currentOrder) => [
      ...currentOrder,
      currentOrder.splice(currentOrder.indexOf(product), 1),
    ]);
    console.log(price);
    console.log(order);
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
          <Modal>
          {order.map((item) => (
              <>
                <h2>{item.name}</h2>
              </>
            ))}
          </Modal>
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
