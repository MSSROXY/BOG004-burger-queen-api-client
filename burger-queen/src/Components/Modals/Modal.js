import { useState } from "react";
import "./Modal.css";
import { ModalConfirm } from "./ModalConfirm";

export const Modal = ({ children, setModalOpen }) => {
  let [modalConfirm, setModalConfirm] = useState(false);

  const hiddenModal = () => {
    setModalOpen(false);
  };
  const showModalConfirm = () => {
    setModalConfirm(true);
  };

  return (
    <div className="modal-background">
      <div className="container-modal">
        <h2>Resumen del pedido</h2>
        {children}
        <h2>¿Confirmar Pedido?</h2>
        <div className="container-buttons">
        <button onClick={showModalConfirm}>SI</button>
        <button className="btn-red" onClick={hiddenModal}>NO</button>
        </div>
      </div>
      {modalConfirm ? <ModalConfirm setModalOpen={setModalOpen} /> : false}
    </div>
  );
};
