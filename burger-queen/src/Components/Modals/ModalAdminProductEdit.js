import { editDataRequest, getToken } from "../API/fetch";

export const ModalAdminProductEdit = ({ product, setShowModalEdit, getListOrdersAdmin }) => {


  const hiddenModal = () => {
    setShowModalEdit(false);
  };



  return (
    <div className="modal-background">
      <div className="container-modal">
        <h4>Editar información</h4>
        <div>
          <p>
            Producto : <textarea defaultValue={product.name}></textarea>
          </p>
          <p>
            Precio : <textarea defaultValue={product.price}></textarea>
          </p>
          <p>Tipo :</p>
          <select>
            <option>Almuerzo</option>
            <option>Desayuno</option>
          </select>
        </div>
        <div className="container-buttons">
          <button className="btn-red" onClick={hiddenModal}>
            Cancelar
          </button>
          <button className="btn-green">Guardar</button>
        </div>
      </div>
    </div>
  );
};
