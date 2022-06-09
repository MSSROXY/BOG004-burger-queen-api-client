import "./Modal.css";
import { useNavigate } from "react-router-dom";
import gifkitchen from "../../img/gifkitchen.gif";

export const ModalConfirm = ({ setModalOpen}) => {
    const Navigate = useNavigate();
    
  const hiddenModal = () => {
    setModalOpen(false)
    Navigate("/Select")
  };

  
  return (
    <div className="modal-background">
      <div className="container-modal">
      <img className="img-cook" src={gifkitchen} alt="preparacion-pedido"/>
        <h2>Pedido Confirmado</h2>
        <button onClick={hiddenModal}>LISTO!</button>
      </div>
    </div>
  );
};
