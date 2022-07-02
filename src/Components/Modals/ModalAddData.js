import { useState } from "react";
import { getToken, newDataRequest } from "../API/fetch";

export const ModalAddData = ({ setShowModal, filterAdmin, listData }) => {
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [userRol, setUserRol] = useState("Administrador");
  let [productName, setProductName] = useState("");
  let [productPrice, setProductPrice] = useState("");
  let [productType, setProductType] = useState("Almuerzo");

  const hideModal = () => {
    setShowModal(false);
  };
  const myToken = getToken();
  const myUrlUsers = "http://localhost:8080/users";
  const myBodyUsers = {
    name: userName,
    email: userEmail,
    password: userPassword,
    roles: {
      admin: userRol === "Administrador" ? true : false,
    },
  };
  const myUrlProducts = "http://localhost:8080/products";
  const myBodyProducts = {
    name: productName,
    price: parseInt(productPrice),
    type: productType,
  };
  const register = () => {
    if (filterAdmin === "products") {
        newDataRequest(myUrlProducts, myToken, myBodyProducts).then((res) =>
        console.log(res)
      );
    } else {
      newDataRequest(myUrlUsers, myToken, myBodyUsers).then((res) =>
        console.log(res)
      );
    }
    setShowModal(false);
    listData();
  };
  return (
    <div className="modal-background">
      <div className="container-modal">
        {filterAdmin === "products" ? (
          <div className="container-edit">
            <h3>Agregar producto</h3>
            <p>
              Nombre :{" "}
              <input
                placeholder="Jugo de naranja"
                onChange={(e) => setProductName(e.target.value)}
              ></input>
            </p>
            <p>
              Precio :{" "}
              <input
                placeholder="Precio"
                onChange={(e) => setProductPrice(e.target.value)}
              ></input>
            </p>
            <p>
              Tipo :
              <select onChange={(e) => setProductType(e.target.value)}>
                <option>Almuerzo</option>
                <option>Desayuno</option>
              </select>
            </p>
          </div>
        ) : (
          <div className="container-edit">
            <h3>Agregar usuario</h3>
            <p>
              Nombre:{" "}
              <input
                placeholder="Grace Hooper"
                onChange={(e) => setUserName(e.target.value)}
              ></input>
            </p>
            <p>
              Correo:{" "}
              <input
                placeholder="grace.hooper@systers.xyz"
                onChange={(e) => setUserEmail(e.target.value)}
              ></input>
            </p>
            <p>
              Contraseña:{" "}
              <input
                placeholder="GRhoo35-"
                type="password"
                onChange={(e) => setUserPassword(e.target.value)}
              ></input>
            </p>
            <p>
              Rol :
              <select onChange={(e) => setUserRol(e.target.value)}>
                <option>Administrador</option>
                <option>Colaborador</option>
              </select>
            </p>
          </div>
        )}
        <div className="admin-footer">
          <button className="btn-red" onClick={hideModal}>
            Cancelar
          </button>
          <button className="btn-green" onClick={register}>
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
};
