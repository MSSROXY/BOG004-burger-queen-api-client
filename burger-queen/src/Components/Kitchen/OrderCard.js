import React, { useEffect, useState } from "react";
import { listOrderRequest, getToken } from "../API/fetch";
import { OrderProducts } from "./OrderProducts";

export const OrderCard = ({ filterOrder }) => {
  let [orderData, setOrderData] = useState([]);
  let url = "http://localhost:8080/orders";
  let token = getToken();

  useEffect(() => {
    listOrderRequest(url, token).then((res) => {
      if (typeof res === "object" && res.length > 0) {
        setOrderData(res.filter((prod) => prod.status === filterOrder));
      } else console.log("Error en la petición de Productos");
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOrder]);

  return (
    <>
      {orderData.map((order) => (
        <div className="order-card" key={order.id}>
          <h3>{order.client}</h3>
          <OrderProducts order={order} />
          <div className="order-footer">
            {filterOrder === "pending" ? (
              <button>Listo</button>
            ) : (
              <button>Entregado</button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
