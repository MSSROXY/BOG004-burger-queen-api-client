import { useEffect, useState } from "react";
import { getToken, getRequest } from "../API/fetch";
import { ModalDeleteConfirm } from "../Modals/ModalDeleteConfirm";
import { ModalEditData } from "../Modals/ModalEditData";
import { AddData } from "./AddData";

export const ProductCard = ({filterAdmin}) => {
  let [productList, setProductList] = useState([]);
  let [showModalDelete, setShowModalDelete] = useState(false);
  let [showModalEdit, setShowModalEdit] = useState(false);
  let [dataInfo, setDataInfo] = useState("");
  let [editInfo, setEditInfo] = useState("");
  const myUrl = "http://localhost:8080/products";
  const myToken = getToken();

  useEffect(() => {
    listData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const listData = () => {
    getRequest(myUrl, myToken).then((res) => setProductList(res));
  };
  const deleteAction = (product) => {
    setDataInfo(product);
    setShowModalDelete(true);
  };
  const editAction = (product) => {
    setEditInfo(product);
    setShowModalEdit(true);
  };

  return (
    <>
    <AddData filterAdmin={filterAdmin} listData={listData}/>
    <div className="div-container-cards">
      {productList.map((product) => (
        <div className="order-card" key={product.id}>
          <div className="client-info">
            <h3>{product.name}</h3>
          </div>
          <div className="client-products">
            <p><b>ID : </b>{product.id}</p>
            <p><b>Precio : </b>{product.price}</p>
            <p><b>Tipo : </b>{product.type}</p>
          </div>
          <div className="admin-footer">
            <button onClick={() => editAction(product)} className="btn-green">
              Editar
            </button>
            <button onClick={() => deleteAction(product)} className="btn-red">
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
