import React, {useState} from "react";
import "./Menu.css";
import shopping from "../../img/car.png";
import { userToken } from "../Login/Login";
import { productsRequest } from "../API/fetch";

export function Menu() {
  let [myProducts, setMyProducts] = useState('');


  const listProductsBreakfast = (e) =>{
    e.preventDefault();
    const url='http://localhost:8080/products'
    const token = userToken;
    
    productsRequest(url,token)
    .then(res => {
      if(res.length > 0){
        let products = res.filter(prod => prod.type === 'Desayuno');
        let eachProduct = products.map(prod => prod.name)
        setMyProducts(eachProduct)
      }
      else{
        console.log('Error en la petición de Productos')
      }
    })
  }

  const listProductsLunch = (e) =>{
    e.preventDefault();
    const url='http://localhost:8080/products'
    const token = userToken;
    
    productsRequest(url,token)
    .then(res => {
      if(res.length > 0){
        let products = res.filter(prod => prod.type === 'Almuerzo');
        let eachProduct = products.map(prod => prod.name)
        setMyProducts(eachProduct)
      }
      else{
        console.log('Error en la petición de Productos')
      }
    })
  }

  return (
    <div className="div-general">
      <div className="div-fund">
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
            <div>{myProducts}</div>
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
