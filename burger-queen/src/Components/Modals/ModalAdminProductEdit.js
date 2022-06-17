import { useState } from "react";
import { getToken, editDataRequest } from "../API/fetch";

export const ModalAdminProductEdit = ({
  setShowModalEdit,
  getProducts,
  product,
}) => {
  let [productName, setProductName] = useState("");
  let [productPrice, setProductPrice] = useState("");
  let [productType, setProductType] = useState("")

  const closeModal = () => {
    setShowModalEdit(false);
  };
  const editProduct = () => {
    const productId = product.id;
    const myToken = getToken();
    const myUrl = "http://localhost:8080/products/" + productId;
    const myBody = {
      name: productName.length >0 ? productName : product.name,
      price: productPrice.length >0 ? productPrice : product.price,
      type: productType.length >0 ? productType : product.type
    }
    editDataRequest(myUrl, myToken, myBody).then((res) => console.log(res))
    setShowModalEdit(false);
    getProducts();

  };

  return (
    <div className="modal-background">
      <div className="container-modal">
        <h4>Editar información</h4>
        <div>
          <p>
            Producto :<textarea defaultValue={product.name} onChange={(e) => setProductName(e.target.value)}></textarea>
          </p>
          <p>
            Precio :<textarea defaultValue={product.price} onChange={(e) => setProductPrice(e.target.value)}></textarea>
          </p>
          <p>Tipo :</p>
          <select defaultValue={product.type} onChange={(e) => setProductType(e.target.value)} >
            <option>Almuerzo</option>
            <option>Desayuno</option>
          </select>
        </div>
        <div className="container-buttons">
          <button className="btn-red" onClick={closeModal}>
            Cancelar
          </button>
          <button className="btn-green" onClick={editProduct}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
