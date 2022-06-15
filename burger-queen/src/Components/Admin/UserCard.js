import React, { useState } from "react";
import {ModalAdmin} from "../Modals/ModalAdmin.js"

export const UserCard = ({ user, getUsers }) => {
  let [showModal, setShowModal] = useState(false)
  const editUser = (user) => {
    const userId = user.id;
    console.log(userId);
  };
  const openModal = () => {
    setShowModal(true)
  };

  return (
    <div key={user.id} className="user-card">
      <h5>Nombre : {user.name}</h5>
      <h5>Id : {user.id}</h5>
      <h5>Email : {user.email}</h5>
      <h5>
        Rol: {user.roles.admin === true ? "Administrador" : "Colaborador"}
      </h5>
      <div className="user-footer">
        <button onClick={() => editUser(user)} className="btn-green">
          Editar
        </button>
        <button onClick={openModal} className="btn-red">
          Eliminar
        </button>
      </div>
      {showModal ? <ModalAdmin setShowModal={setShowModal} user={user} getUsers={getUsers}/> : false}
    </div>
  );
};
