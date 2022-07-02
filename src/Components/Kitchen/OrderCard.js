import React, { useEffect, useState } from "react";
import {
  getRequest,
  getToken,
  editDataRequest,
  deleteRequest,
} from "../API/fetch";
import { OrderProducts } from "./OrderProducts";
import { OrderCurrentTime } from "./OrderCurrenTime";
import { OrderTotalTime } from "./OrderTotalTime";

export const OrderCard = ({ filterOrder }) => {
  let [orderData, setOrderData] = useState([]);
  let url = "http://localhost:8080/orders";
  let myToken = getToken();

  useEffect(() => {
    getAllOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOrder]);

  const getAllOrders = () => {
    getRequest(url, myToken).then((res) => {
      if (typeof res === "object" && res.length >= 0) {
        setOrderData(res.filter((prod) => prod.status === filterOrder));
      } else console.log("Error en la petición de ordenes");
    });
  };

  const changeToDelivered = (order) => {
    const myUrl = "http://localhost:8080/orders/" + order.id;
    const myData = {
      status: "delivered",
      dateProcessed: new Date(),
    };
    editDataRequest(myUrl, myToken, myData).then((res) => console.log(res));
    getAllOrders();
  };

  const deleteOrder = (order) => {
    const myUrl = "http://localhost:8080/orders/" + order.id;
    deleteRequest(myUrl, myToken).then((res) => console.log(res));
    getAllOrders();
  };

  return (
    <>
      {orderData.map((order) => (
        <div className="order-card" key={order.id}>
          <div className="client-info">
            <h3>Cliente : {order.client}</h3>
            <h3>Mesa : {order.clientTable}</h3>
          </div>
          <OrderProducts order={order} />
          <div className="order-footer">
            {filterOrder === "pending" ? (
              <OrderCurrentTime order={order} />
            ) : (
              <OrderTotalTime order={order} />
            )}
            {filterOrder === "pending" ? (
              <button
                onClick={() => {
                  changeToDelivered(order);
                }}
              >
                Listo
              </button>
            ) : (
              <button
                onClick={() => {
                  deleteOrder(order);
                }}
              >
                Entregado
              </button>
            )}
          </div>
        </div>
      ))}
    </>
  );
};
