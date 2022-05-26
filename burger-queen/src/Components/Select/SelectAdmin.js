import React from "react";
import "./select.css";
import logo from "../../img/logoburger.png";
import kitchen from "../../img/kitchen.png";
import table from "../../img/tables.png";
import admin from "../../img/admin.png";
import { useNavigate } from "react-router-dom";

export function SelectAdmin() {
    const Navigate = useNavigate();

    const clickKitchen = () =>{
        Navigate("/");
    }

    const clickTables = () => {
        Navigate("/Lunchs");
    }

    const clickAdmin = () => {
        Navigate("/");
    }

  return (
    <div className="div-general" data-testid="enter-select">
      <div className="div-logo">
        <img src={logo} alt="Logo BQ" className="logo-img" />
      </div>

      <div className="container-button">
        <div className="div-fund-admin">
          <button className="btn-select" onClick={clickKitchen}>
            <img src={kitchen} alt="Kitchen" className="img-kitchen" />
          </button>
        </div>
        <div className="div-fund-admin">
          <button className="btn-select" onClick={clickTables}>
            <img src={table} alt="Tables" className="img-tables" />
          </button>
        </div>
        <div className="div-fund-admin">
          <button className="btn-select" onClick={clickAdmin}>
            <img src={admin} alt="Admin" className="img-admin" />
          </button>
        </div>
      </div>
    </div>
  );
}