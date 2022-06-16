import { useState } from "react";
import { userRegisterRequest, getToken } from "../API/fetch";

export const ModalRegister = ({ setShowModal }) => {
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userPassword, setUserPassword] = useState("");
  let [userRol, setUserRol] = useState();

  const hiddenModal = () => {
    setShowModal(false);
  };

  const userRegister = () => {
    const myToken = getToken();
    const myUrl = "http://localhost:8080/users";
    const myBody = {
      name: userName,
      email: userEmail,
      password: userPassword,
      roles: {
        admin: userRol === "Administrador" ? true : false,
      },
    };
    userRegisterRequest(myUrl, myToken, myBody).then(res => console.log(res))
  };
  return (
    <div className="modal-background">
      <div className="container-modal">
        <h4>Nuevo Usuario</h4>
        <div className="div-register">
          <p>
            Nombre:{" "}
            <input
              placeholder="name"
              onChange={(e) => setUserName(e.target.value)}
            ></input>
          </p>
          <p>
            Correo:{" "}
            <input
              placeholder="Correo"
              onChange={(e) => setUserEmail(e.target.value)}
            ></input>
          </p>
          <p>
            Contraseña:{" "}
            <input
              placeholder="Contraseña"
              type="password"
              onChange={(e) => setUserPassword(e.target.value)}
            ></input>
          </p>
          <p>
            Rol:
            <select onChange={(e) => setUserRol(e.target.value)}>
              <option>Administrador</option>
              <option>Colaborador</option>
            </select>
          </p>
        </div>
        <div className="container-buttons">
          <button className="btn-red" onClick={hiddenModal}>
            Cancelar
          </button>
          <button className="btn-green" onClick={userRegister}>
            Guardar
          </button>
        </div>
      </div>
    </div>
  );
};
