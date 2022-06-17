import React, { useState } from "react";
import "./Kitchen.css";
import { OrderCard } from "./OrderCard";
import { useNavigate } from "react-router-dom";
import backimg from "../../img/backimg.png";

export const Kitchen = () => {
  let [filterOrder, setFilterOrder] = useState("pending");
  const navigate = useNavigate();
  const back = () => {
    navigate("/select");
  };

  const listPending = () => {
    setFilterOrder("pending");
  };

  const listDelivered = () => {
    setFilterOrder("delivered");
  };

  return (
    <div className="div-general">
      <div className="div-fund-kitchen">
        <div className="div-btn-menu">
          <div className="btn-back">
            <button onClick={back}>
              <img alt="back" src={backimg} />
            </button>
          </div>
          <div className="div-buttons">
            <button onClick={listPending}> Pendientes </button>
            <button onClick={listDelivered}> Listos </button>
          </div>
        </div>
        <div className="div-orders">
          <div className="div-container-cards">
            <OrderCard filterOrder={filterOrder} />
          </div>
        </div>
      </div>
    </div>
  );
};
