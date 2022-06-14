import React, { useEffect, useState } from "react";
import "./select.css";
import kitchen from "../../img/kitchen.png";
import table from "../../img/tables.png";
import logo from "../../img/logoburger.png";
import admin from "../../img/admin.png";
import { useNavigate } from "react-router-dom";
import { getUser } from "../API/fetch";
import signOut from "../../img/signOut.png";

export function SelectWaiterOrChef() {
  const navigate = useNavigate();
  let [adminOption, setAdminOption] = useState("");

  const logOut = () => {
    navigate("/")
  }

  const clickKitchen = () => {
    navigate("/Kitchen");
  };
  const clickTables = () => {
    navigate("/Menu");
  };
  const clickAdmin = () => {
    navigate("/");
  };

  useEffect(() => {
    JSON.parse(getUser()).roles.admin === true ? setAdminOption(true) : setAdminOption(false)
  }, []);

  return (
    <div className="div-general" data-testid="enter-select">
      <div className="btn-logOut">
      <button onClick={logOut}><img alt="logOut" src={signOut}/></button>
      </div>
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
        {adminOption ? (
          <div className="div-fund-admin">
            <button className="btn-select" onClick={clickAdmin}>
              <img src={admin} alt="Admin" className="img-admin" />
            </button>
          </div>
        ) : (
          false
        )}
      </div>
    </div>
  );
}
