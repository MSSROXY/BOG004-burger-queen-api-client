import "./Modal.css";
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
        <h2>Pedido Confirmado</h2>
        <button onClick={hiddenModal}>LISTO!</button>
      </div>
    </div>
  );
};
