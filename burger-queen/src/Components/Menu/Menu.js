import React, { useState } from "react";
import "./Menu.css";
import shopping from "../../img/car.png";
import { productsRequest, getToken } from "../API/fetch";
import { ProductsList } from "./ProductsList";

export function Menu() {
  let [myProducts, setMyProducts] = useState("");
  let [myPrices, setMyPrices] = useState("");
  let [add, setAdd] = useState("");
  let [remove, setRemove] = useState("");
  let [num, setNum] = useState("");
  const url = "http://localhost:8080/products";
  const token = getToken()

  const listProductsBreakfast = (e) => {
    e.preventDefault();

    productsRequest(url, token).then((res) => {
      if (res.length > 0) {
        let products = res.filter((prod) => prod.type === "Desayuno");
        ProductsList(products, setMyProducts, setMyPrices, setAdd, setRemove, setNum)
      } else {
        console.log("Error en la petición de Productos");
      }
    });
  };

  const listProductsLunch = (e) => {
    e.preventDefault();

    productsRequest(url, token).then((res) => {
      if (res.length > 0) {
        let products = res.filter((prod) => prod.type === "Almuerzo");
        ProductsList(products, setMyProducts, setMyPrices, setAdd, setRemove, setNum)
      } else {
        console.log("Error en la petición de Productos");
      }
    });
  };

  return (
    <div className="div-general">
      <div className="div-fund-menu">
        <div className="div-buttons">
          <button onClick={listProductsLunch}> Almuerzos </button>
          <button onClick={listProductsBreakfast}> Desayunos </button>
        </div>
        <div className="div-menu">
          <div className="options">
            <h3>Productos</h3>
            <h3>Precios</h3>
          </div>
          <div className="menu">
            <div className="product-name">{myProducts}</div>
            <div className="product-price">{myPrices}</div>
            <div className="menu-btn">
              <div className="add">{add}</div>
              <div className="product-qty">{num}</div>
              <div className="remove">{remove}</div>
            </div>
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
