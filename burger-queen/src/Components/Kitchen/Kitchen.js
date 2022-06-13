import React, { useState } from "react";
import "./Kitchen.css"
import { OrderCard } from "./OrderCard";

export const Kitchen = () => {
  let [filterOrder, setFilterOrder] = useState("");


  const listPending = () => {
    setFilterOrder("pending");
  };

  const listDelivered = () => {
    setFilterOrder("delivered");
  };

  return (
    <div className="div-general">
      <div className="div-fund-menu">
        <div className="div-buttons">
          <button onClick={listPending}> Pendientes </button>
          <button onClick={listDelivered}> Listos </button>
        </div>
        <div className="div-orders">
          <OrderCard filterOrder={filterOrder} />
        </div>
      </div>
    </div>
  );
};
