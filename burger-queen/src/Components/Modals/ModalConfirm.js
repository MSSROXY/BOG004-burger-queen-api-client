import "./Modal.css";
import kitchen from "../../img/gifkitchen.gif"
import { useNavigate } from "react-router-dom";

export const ModalConfirm = ({ setModalOpen}) => {
    const Navigate = useNavigate();
    
  const hiddenModal = () => {
    setModalOpen(false)
    Navigate("/Select")
  };

  
  return (
    <div className="modal-background">
      <div className="container-modal">
        <img src={kitchen} alt="En preparación"></img>
        <h2>Pedido Confirmado</h2>
        <button onClick={hiddenModal}>LISTO!</button>
      </div>
    </div>
  );
};
