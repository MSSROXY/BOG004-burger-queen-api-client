import "./Modal.css";
import kitchen from "../../img/gifkitchen.gif";
import { useNavigate } from "react-router-dom";

export const ModalOrderConfirm = ({ setOpenModal }) => {
  const Navigate = useNavigate();

  const hiddeModal = () => {
    setOpenModal(false);
    Navigate("/Select");
  };

  return (
    <div className="modal-background">
      <div className="container-modal">
        <img src={kitchen} alt="En preparación"></img>
        <h3>Pedido Confirmado</h3>
        <div className="admin-footer">
          <button className="btn-green" onClick={hiddeModal}>
            LISTO
          </button>
        </div>
      </div>
    </div>
  );
};
