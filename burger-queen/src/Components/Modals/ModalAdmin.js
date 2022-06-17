import { getToken, deleteRequest } from "../API/fetch";
export const ModalAdmin = ({ setShowModal, user, getUsers }) => {
  const hiddenModal = () => {
    setShowModal(false);
  };
  const deleteUser = () => {
    const userId = user.id;
    const myUrl = "http://localhost:8080/users/" + userId;
    const myToken = getToken();
    deleteRequest(myUrl, myToken).then((res) => console.log(res));
    getUsers();
    setShowModal(false);
  };
  return (
    <div className="modal-background">
      <div className="container-modal">
        <h4>¿Está seguro que quiere eliminar el usuario?</h4>
        <div className="container-buttons">
          <button className="btn-red" onClick={hiddenModal}>
            NO
          </button>
          <button className="btn-green" onClick={deleteUser}>
            SI
          </button>
        </div>
      </div>
    </div>
  );
};
