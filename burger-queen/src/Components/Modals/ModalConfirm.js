import "./Modal.css";

export const ModalConfirm = ({ setModalOpen }) => {
  const hiddenModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="modal-background">
      <div className="container-modal">
        <h2>Pedido de xxx confirmado</h2>
        <button onClick={hiddenModal}>LISTO!</button>
      </div>
    </div>
  );
};
