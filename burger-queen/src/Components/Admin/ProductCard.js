import React, { useState } from "react";
import { ModalAdminProducts } from "../Modals/ModalAdminProducts";
import { ModalAdminProductEdit } from "../Modals/ModalAdminProductEdit";

export const ProductCard = ({product, getProducts}) => {
  let [showModalDelete, setShowModalDelete] = useState(false);
  let [showModalEdit, setShowModalEdit] = useState(false);

  const openModalEdit = () => {
    setShowModalEdit(true)
  };
  const openModalDelete = () => {
    setShowModalDelete(true)
  };
  return (
    <div key={product.id} className="order-card">
       <div className="user-info">
        <h4>Product : </h4>
        {product.name}
      </div>
      <div className="user-info">
        <h4>ID : </h4>
        {product.id}
      </div>
      <div className="user-info">
        <h4>Precio : </h4>
        {product.price}
      </div>
      <div className="user-info">
        <h4>Tipo : </h4>
        {product.type}
      </div>
      <div className="user-footer">
        <button className="btn-green" onClick={openModalEdit}>
          Editar
        </button>
        <button className="btn-red" onClick={openModalDelete}>
          Eliminar
        </button>
      </div>
      {showModalEdit ? <ModalAdminProductEdit setShowModalEdit={setShowModalEdit} getProducts={getProducts} product={product}/> : false}
      {showModalDelete ? <ModalAdminProducts setShowModalDelete={setShowModalDelete} getProducts={getProducts} product={product}/> : false}
    </div>
  )
};
