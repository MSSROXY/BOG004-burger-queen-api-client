import React from "react";
import "./Lunchs.css";
import { useNavigate } from "react-router-dom";
import  shopping  from "../../img/car.png";

export function SelectLunch() {
  const Navigate = useNavigate();

  const clickBreakfast = () => {
    Navigate("/Breakfast");
  };

  return (
    <div className="div-general">
      <div className="div-one-fund">
        <div className="container-buttons">
          <button className="btn-lunchs-one">Almuerzos</button>
          <button className="btn-lunchs-two">Desayunos</button>
        </div>
        <div className="div-menu">
          <div className="div-options">
            <h3>Productos</h3>
            <h3>Precios</h3>
          </div>
          <div className="name-client">
            <input
              className="input-client"
              type="text"
              placeholder="Ingrese nombre del cliente"
            ></input>
          </div>
        </div>
        <div className="send-order">
            <img className="img-car" src= {shopping}></img>
            <div className="counter"></div>
          <button className="btn-ok">OK</button>
          </div>
      </div>
    </div>
  );
}
