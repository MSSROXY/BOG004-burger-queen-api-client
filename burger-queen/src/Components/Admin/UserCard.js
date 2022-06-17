import React, { useState } from "react";
import { ModalAdmin } from "../Modals/ModalAdmin.js";
import { ModalUserEdit } from "../Modals/ModalUserEdit.js";

export const UserCard = ({ user, getUsers }) => {
  let [showModal, setShowModal] = useState(false);
  let [showModalEdit, setShowModalEdit] = useState(false);

  const openModalEdit = () => {
    setShowModalEdit(true);
  };
  const openModal = () => {
    setShowModal(true);
  };

  return (
    <div key={user.id} className="order-card">
      <div className="user-info">
        <h4>Nombre : </h4>
        {user.name}
      </div>
      <div className="user-info">
        <h4>Id : </h4>
        {user.id}
      </div>
      <div className="user-info">
        <h4>Email : </h4>
        {user.email}
      </div>
      <div className="user-info">
        <h4>Rol : </h4>
        {user.roles.admin === true ? "Administrador" : "Colaborador"}{" "}
      </div>
      <div className="user-footer">
        <button onClick={openModalEdit} className="btn-green">
          Editar
        </button>
        <button onClick={openModal} className="btn-red">
          Eliminar
        </button>
      </div>
      {showModalEdit ? (
        <ModalUserEdit
          setShowModalEdit={setShowModalEdit}
          user={user}
          getUsers={getUsers}
        />
      ) : (
        false
      )}
      {showModal ? (
        <ModalAdmin
          setShowModal={setShowModal}
          user={user}
          getUsers={getUsers}
        />
      ) : (
        false
      )}
    </div>
  );
};
