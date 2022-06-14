import React, { useEffect, useState } from "react";
import {
  listOrderRequest,
  getToken,
  changeStatusRequest,
  deleteOrderRequest,
} from "../API/fetch";
import { OrderProducts } from "./OrderProducts";
import { OrderTime } from "./OrderTime";

export const OrderCard = ({ filterOrder }) => {
  let [orderData, setOrderData] = useState([]);
  let url = "http://localhost:8080/orders";
  let myToken = getToken();
  let [seconds, setSeconds] = useState(0);
  let [minutes, setMinutes] = useState(0);

  let timer;
  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setInterval(() => {
      setSeconds(seconds + 1);
      if (seconds === 59) {
        setMinutes(minutes + 1);
        setSeconds(0);
      }
    }, 1000);

    return () => clearInterval(timer);
  });

  useEffect(() => {
    getListOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterOrder]);

  const getListOrders = () => {
    listOrderRequest(url, myToken).then((res) => {
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
    changeStatusRequest(myUrl, myToken, myData).then((res) => console.log(res));
    getListOrders();
    clearInterval(timer);
  };

  const deleteOrder = (order) => {
    const myUrl = "http://localhost:8080/orders/" + order.id;
    deleteOrderRequest(myUrl, myToken).then((res) => console.log(res));
    getListOrders();
  };
  return (
    <>
      {orderData.map((order) => (
        <div className="order-card" key={order.id}>
          <h3>{order.client}</h3>
          <OrderProducts order={order} />
          <div className="order-footer">
            {filterOrder === "pending" ? (
              <h5>
                {minutes < 10 ? "0" + minutes : minutes}:
                {seconds < 10 ? "0" + seconds : seconds}
              </h5>
            ) : (
              <OrderTime order={order} />
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
