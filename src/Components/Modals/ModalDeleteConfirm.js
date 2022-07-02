import { getToken, deleteRequest } from "../API/fetch";

export const ModalDeleteConfirm = ({ setShowModalDelete, dataInfo, listData }) => {
  const hideModalDelete = () => {
    setShowModalDelete(false);
  };

  const deleteAction = () => {
    let url = "";
    if (dataInfo.email !== undefined) {
      url = "http://localhost:8080/users/";
    } else url = "http://localhost:8080/products/";
    const myToken = getToken();
    let myUrl = url + dataInfo.id;
    deleteRequest(myUrl, myToken).then(res => console.log(res))
    listData();
    setShowModalDelete(false)
  };

  return (
    <div className="modal-background">
      <div className="container-modal">
        <h4>¿Está seguro que quiere eliminar?</h4>
        <div className="admin-footer">
          <button onClick={deleteAction} className="btn-red">SI</button>
          <button onClick={hideModalDelete} className="btn-green">NO</button>
        </div>
      </div>
    </div>
  );
};
