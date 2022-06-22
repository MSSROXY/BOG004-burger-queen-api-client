import { getToken, deleteRequest } from "../API/fetch";

export const ModalAdminProducts = ({setShowModalDelete,getProducts,product}) => {
  const hiddenModal = () => {
    setShowModalDelete(false);
  };
  const deleteUser = () => {
    const productId = product.id;
    const myUrl = "http://localhost:8080/products/" + productId;
    const myToken = getToken();
    deleteRequest(myUrl, myToken).then((res) => console.log(res));
    getProducts();
    setShowModalDelete(false);
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










