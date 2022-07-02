import { useEffect, useState } from "react";
import { getToken, getRequest } from "../API/fetch";
import { ModalDeleteConfirm } from "../Modals/ModalDeleteConfirm";
import { ModalEditData } from "../Modals/ModalEditData";
import { AddData } from "./AddData";

export const UserCard = ({filterAdmin}) => {
  let [userList, setUserList] = useState([]);
  let [showModalDelete, setShowModalDelete] = useState(false);
  let [showModalEdit, setShowModalEdit] = useState(false);
  let [dataInfo, setDataInfo] = useState("");
  let [editInfo, setEditInfo] = useState("");
  const myUrl = "http://localhost:8080/users";
  const myToken = getToken();

  useEffect(() => {
    listData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listData = () => {
    getRequest(myUrl, myToken).then((res) => setUserList(res));
  };
  const deleteAction = (user) => {
    setDataInfo(user);
    setShowModalDelete(true);
  };
  const editAction = (user) => {
    setEditInfo(user);
    setShowModalEdit(true);
  };

  return (
    <>
    <AddData filterAdmin={filterAdmin} listData={listData} />
    <div className="div-container-cards">
      {userList.map((user) => (
        <div className="order-card" key={user.id}>
          <div className="client-info">
            <h3>{user.name}</h3>
          </div>
          <div className="client-products">
            <p>
              <b>ID : </b>
              {user.id}
            </p>
            <p>
              <b>Email : </b>
              {user.email}
            </p>
            <p>
              <b>Rol : </b>
              {user.roles.admin === true ? "Administrador" : "Colaborador"}
            </p>
          </div>
          <div className="admin-footer">
            <button onClick={() => editAction(user)} className="btn-green">
              Editar
            </button>
            <button onClick={() => deleteAction(user)} className="btn-red">
              Eliminar
            </button>
          </div>
          {showModalDelete ? (
            <ModalDeleteConfirm
              setShowModalDelete={setShowModalDelete}
              dataInfo={dataInfo}
              listData={listData}
            />
          ) : (
            false
          )}
          {showModalEdit ? (
            <ModalEditData
              setShowModalEdit={setShowModalEdit}
              editInfo={editInfo}
              listData={listData}
            />
          ) : (
            false
          )}
        </div>
      ))}
    </div>
    </>
  );
};
