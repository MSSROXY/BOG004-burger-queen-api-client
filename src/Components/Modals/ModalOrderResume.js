import { useState } from "react";
import "./Modal.css";
import { ModalOrderConfirm } from "./ModalOrderConfirm";
import { getToken, getUser, newDataRequest } from "../API/fetch";

export const ModalOrderResume = ({ children, setOpenModal, order, clientName, clientTable }) => {
  let [modalConfirm, setModalConfirm] = useState(false);

  const hiddeModalConfirm = () => {
    setOpenModal(false);
  };
  const showModalConfirm = () => {
    setModalConfirm(true);

    const url = "http://localhost:8080/orders";
    const token = getToken();
    const myProducts = order.map((product) => {
      return {
        qty: product.quantity,
        product: {
          id: product.id,
          name: product.name,
          price: product.price,
          image: product.image,
          type: product.type,
          dateEntry: product.dateEntry,
        },
      };
    });

    
    const myUserId=JSON.parse(getUser()).id;
    const myData = {
      userId: myUserId,
      client: clientName,
      clientTable : clientTable,
      products: myProducts,
      status: "pending",
      dateEntry: new Date(),
    };
    
    newDataRequest(url,token,myData).then((res) => {
      console.log('soy respuestaaaa ',res)
    })
  };

  return (
    <div className="modal-background">
      <div className="container-modal">
        <h2>Resumen del pedido</h2>
        <p><b>Cliente : {clientName} </b></p>
        <p><b>Mesa : {clientTable} </b></p>
        {children}
        <h3>¿Confirmar pedido?</h3>
        <div className="admin-footer">
          <button className ="btn-green" onClick={showModalConfirm}>SI</button>
          <button className="btn-red" onClick={hiddeModalConfirm}>
            NO
          </button>
        </div>
      </div>
      {modalConfirm ? <ModalOrderConfirm setOpenModal={setOpenModal} /> : false}
    </div>
  );
};
