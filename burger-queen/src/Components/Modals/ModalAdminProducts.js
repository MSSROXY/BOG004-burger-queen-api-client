import { getToken, deleteRequest } from "../API/fetch";

export const ModalAdminProducts = ({ setShowModalProducts, product, getListOrdersAdmin }) => {
    const hiddenModal = () => {
        setShowModalProducts(false)
    };

const deleteProduct = () => {
 const productId = product.id;
 const myUrl = "http://localhost:8080/products/" + productId;
 console.log('soy la url', myUrl)
 const myToken = getToken();
 deleteRequest(myUrl, myToken).then((res) => console.log(res));
 getListOrdersAdmin()
 setShowModalProducts(false)
}

return (
    <div className="modal-background">
    <div className="container-modal">
      <h4>¿Está seguro que quiere eliminar el producto?</h4>
      <div className="container-buttons">
        <button className="btn-red" onClick={hiddenModal}>NO</button>
        <button className="btn-green" onClick={deleteProduct}>SI</button>
      </div>
    </div>
  </div>
)
}