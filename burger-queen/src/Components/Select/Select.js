import React from "react";
import "./select.css";
import kitchen from "../../img/kitchen.png";
import table from "../../img/tables.png";
import logo from "../../img/logoburger.png"
import { useNavigate } from "react-router-dom";

export function SelectWaiterOrChef() {
    const Navigate = useNavigate();

    const clickKitchen = () =>{
        Navigate("/");
    }

    const clickTables = () => {
        Navigate("/Menu");
    }

  return (
    <div className="div-general" data-testid="enter-select">
      <div className="div-logo">
        <img src={logo} alt="Logo BQ" className="logo-img" />
      </div>

      <div className="container-button">
        <div className="div-fund-select">
          <button className="btn-select" onClick={clickKitchen}>
            <img src={kitchen} alt="Kitchen" className="img-kitchen" />
          </button>
        </div>
        <div className="div-fund-select">
          <button className="btn-select" onClick={clickTables}>
            <img src={table} alt="Kitchen" className="img-tables" />
          </button>
        </div>
      </div>
    </div>
  );
}