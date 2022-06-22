import { useState } from "react";
import { userRegisterRequest, getToken } from "../API/fetch";



export const ModalAddProduct = ({setShowModalProduct , getProducts}) => {
    let [productName, setProductName] = useState("");
    let [productPrice, setProductPrice] = useState("");
    let [productType, setProductType] = useState("");

    const hiddenModal = () => {
        setShowModalProduct(false);
      };

      const productRegister = () => {
        const myToken = getToken();
        const myUrl = "http://localhost:8080/products";
        const myBody = {
          name: productName,
          price: productPrice,
          type: productType
        }
        userRegisterRequest(myUrl, myToken, myBody).then((res) => console.log(res))
        getProducts();
        setShowModalProduct(false);

    }

    return (
        <div className="modal-background">
        <div className="container-modal">
          <h4>Nuevo Producto</h4>
          <div className="div-register">
            <p>
              Nombre:{" "}
              <input
                placeholder="name" onChange={(e) => setProductName(e.target.value)}
              ></input>
            </p>
            <p>
              Precio:{" "}
              <input
                placeholder="Precio" onChange={(e) => setProductPrice(e.target.value)}
              ></input>
            </p>
            <p>
              Tipo:
              <select onChange={(e) => setProductType(e.target.value)}>
                <option>Almuerzo</option>
                <option>Desayuno</option>
              </select>
            </p>
          </div>
          <div className="container-buttons">
            <button className="btn-red" onClick={hiddenModal}>
              Cancelar
            </button>
            <button className="btn-green" onClick={productRegister}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    )
};