import { useState } from "react";
import { getToken, editDataRequest } from "../API/fetch";

export const EditUser = ({ setShowModalEdit, editInfo, listData }) => {
  let [userName, setUserName] = useState("");
  let [userEmail, setUserEmail] = useState("");
  let [userRol, setUserRol] = useState(
    editInfo.roles.admin === true ? "Administrador" : "Colaborador"
  );

  const hideModalEdit = () => {
    setShowModalEdit(false);
  };
  const editAction = () => {
    const myToken = getToken();
    const myUrl = "http://localhost:8080/users/" + editInfo.id;
    const myBody = {
      name: userName.length > 0 ? userName : editInfo.name,
      email: userEmail.length > 0 ? userEmail : editInfo.email,
      roles: {
        admin: userRol === "Administrador" ? true : false,
      },
    };
    editDataRequest(myUrl, myToken, myBody).then((res) => console.log(res));
    setShowModalEdit(false);
    listData();
  };

  return (
    <div className="container-edit">
      <p>
        <b>Nombre : </b>
        <input
          defaultValue={editInfo.name}
          onChange={(e) => setUserName(e.target.value)}
        ></input>
      </p>
      <p>
        <b>Email : </b>
        <input
          defaultValue={editInfo.email}
          onChange={(e) => setUserEmail(e.target.value)}
        ></input>
      </p>
      <p>
        <b>Rol : </b>
        <select
          defaultValue={
            editInfo.roles.admin === true ? "Administrador" : "Colaborador"
          }
          onChange={(e) => setUserRol(e.target.value)}
        >
          <option>Administrador</option>
          <option>Colaborador</option>
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
