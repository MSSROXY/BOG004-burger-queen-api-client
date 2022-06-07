import { useState } from "react";
import "./Modal.css";


export const ModalConfirm = () => {

    let [closeModal, setCloseModal] = useState(false)
    
    const hiddenModal = () => {
        setCloseModal(true)
  }


return (
    <div className="modal-background">
        <div className="container-modal">
        <h2>Pedido de xxx confirmado</h2>
        <button onClick={hiddenModal}>LISTO!</button>
        </div>

    </div>
)
}