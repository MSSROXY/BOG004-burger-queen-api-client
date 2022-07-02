import { useState } from "react";
import addProduct from "../../img/addProduct.png";
import addUser from "../../img/addUser.png";
import { ModalAddData } from "../Modals/ModalAddData";

export const AddData = ({ filterAdmin, listData }) => {
  let [showModal, setShowModal] = useState(false);
  const addDataAction = () => {
    setShowModal(true);
  };

  return (
    <section className="welcome">
      <h3>Bienvenido Administrador</h3>
      {showModal ? <ModalAddData setShowModal={setShowModal} filterAdmin={filterAdmin} listData={listData}/> : false}
      {filterAdmin === "products" ? (
        <button onClick={addDataAction}>
          <img src={addProduct} alt="agregar-producto"></img>
        </button>
      ) : (
        <button onClick={addDataAction}>
          <img src={addUser} alt="agregar-usuario"></img>
        </button>
      )}
    </section>
  );
};
