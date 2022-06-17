import React, { Fragment, useEffect, useState } from "react";
import { getToken } from "../API/fetch";
import { productsRequest } from "../API/fetch";
import { ModalAdminProducts } from "../Modals/ModalAdminProducts"

export const ProductCard = () => {
  let [showModalProducts, setShowModalProducts] = useState(false)
  let [products, setProducts] = useState([])
  let url = "http://localhost:8080/products";
  let myToken = getToken();

  const openModal = () => {
setShowModalProducts(true)
  }
  useEffect(() => {
    getListOrdersAdmin();
  }, []);

  const getListOrdersAdmin = () => {
    productsRequest(url, myToken).then((res) => setProducts(res));
  };

  return (
    <>
    {products.map(product => (
    <div className="order-card">
      <div className="user-info">
      <h4>Id: </h4> {product.id}
      </div>
      <div className="user-info">
      <h4>Nombre: </h4> {product.name}
      </div>
      <div className="user-info">
      <h4>Precio: </h4> ${product.price}
      </div>
      <div className="user-info">
      <h4>Tipo: </h4> {product.type}
      </div>
      <div className="user-footer">
        <button className="btn-green">
          Editar
        </button>
        <button className="btn-red" onClick={openModal}>
          Eliminar
        </button>
      </div>
      {showModalProducts ? <ModalAdminProducts product={product} setShowModalProducts={setShowModalProducts} getListOrdersAdmin={getListOrdersAdmin}/> : false}
    </div>
    ))}
    </>

  )
};
