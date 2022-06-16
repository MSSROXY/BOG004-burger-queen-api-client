import { useState } from "react";
import { editUserDataRequest, getToken } from "../API/fetch";

export const ModalUserEdit = ({ user, setShowModalEdit, getUsers }) => {
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userRol, setUserRol] = useState(user.roles.admin === true ? "Administrador" : "Colaborador");

  const closeModal = () => {
    setShowModalEdit(false);
  };

  const editUser = () => {
    const myToken = getToken();
    const myUrl = "http://localhost:8080/users/" + user.id;

    const myBody = {
      name: userName.length > 0 ? userName : user.name,
      email: userEmail.length > 0 ? userEmail : user.email,
      roles: {
        admin: userRol === "Administrador" ? true : false,
      },
    };
    editUserDataRequest(myUrl, myToken, myBody).then((res) => console.log(res));
    setShowModalEdit(false);
    getUsers();
  };

  return (
    <div className="modal-background">
      <div className="container-modal">
        <h4>Editar información</h4>
        <div>
          <p>
            Nombre :
            <textarea
              onChange={(e) => setUserName(e.target.value)}
              defaultValue={user.name}
            ></textarea>
          </p>
          <p>
            Email :
            <textarea
              onChange={(e) => console.log(setUserEmail(e.target.value))}
              defaultValue={user.email}></textarea>
          </p>
          <p>Rol :</p>
          <select
            defaultValue={
              user.roles.admin === true ? "Administrador" : "Colaborador"
            }
            onChange={(e) => setUserRol(e.target.value)}
          >
            <option>Administrador</option>
            <option>Colaborador</option>
          </select>
        </div>
        <div className ="container-buttons">
          <button className="btn-red" onClick={closeModal}>Cancelar</button>
          <button className="btn-green" onClick={editUser}>Guardar</button>
        </div>
      </div>
    </div>
  );
};