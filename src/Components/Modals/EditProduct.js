import { useState } from "react";
import { getToken, editDataRequest } from "../API/fetch";

export const EditProduct = ({ setShowModalEdit, editInfo, listData }) => {
  let [productName, setProductName] = useState("");
  let [productPrice, setProductPrice] = useState();
  let [productType, setProductType] = useState("");

  const hideModalEdit = () => {
    setShowModalEdit(false);
  };

  const editAction = () => {
    const myToken = getToken();
    const myUrl = "http://localhost:8080/products/" + editInfo.id;
    const myBody = {
      name: productName.length > 0 ? productName : editInfo.name,
      price:
        productPrice > 0 ? parseInt(productPrice) : parseInt(editInfo.price),
      type: productType.length > 0 ? productType : editInfo.type,
    };
    editDataRequest(myUrl, myToken, myBody).then((res) => console.log(res));
    setShowModalEdit(false);
    listData();
  };

  return (
    <div className="container-edit">
      <p>
        <b>Producto : </b>
        <input
          defaultValue={editInfo.name}
          onChange={(e) => setProductName(e.target.value)}
        ></input>
      </p>
      <p>
        <b>Precio : </b>
        <input
          defaultValue={editInfo.price}
          onChange={(e) => setProductPrice(e.target.value)}
        ></input>
      </p>
      <p>
        <b>Tipo : </b>
        <select
          defaultValue={editInfo.type}
          onChange={(e) => setProductType(e.target.value)}
        >
          <option>Almuerzo</option>
          <option>Desayuno</option>
        </select>
      </p>
      <div className="admin-footer">
        <button onClick={editAction} className="btn-red">
          Guardar
        </button>
        <button onClick={hideModalEdit} className="btn-green">
          Cancelar
        </button>
      </div>
    </div>
  );
};
