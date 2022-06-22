import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backimg from "../../img/backimg.png";
import addUser from "../../img/addUser.png";
import addProduct from "../../img/addProduct.png";
import { getUsersRequest, getToken, productsRequest } from "../API/fetch";
import { UserCard } from "./UserCard";
import { ModalRegister } from "../Modals/ModalRegister";
import { ModalAddProduct } from "../Modals/ModalAddProduct";
import "./Admin.css";
import { ProductCard } from "./ProductCard";

export const Admin = () => {
  let [changeView, setChangeView] = useState(true);
  let [users, setUsers] = useState([]);
  let [products, setProducts] = useState([]);
  let [showModal, setShowModal] = useState(false);
  let [showModalProduct, setShowModalProduct] = useState(false);

  const navigate = useNavigate();
  const back = () => {
    navigate("/select");
  };

  const openModalRegisterProducts = () => {
    setShowModalProduct(true);
  };

  const viewUsers = () => {
    setChangeView(true);
  };

  const viewProducts = () => {
    setChangeView(false);
  };

  useEffect(() => {
    getUsers();
    getProducts();
  }, []);

  const getProducts = () => {
    const url = "http://localhost:8080/products";
    const myToken = getToken();
    productsRequest(url, myToken).then((res) => setProducts(res));
  };
  const getUsers = () => {
    const url = "http://localhost:8080/users";
    const myToken = getToken();
    getUsersRequest(url, myToken).then((res) => setUsers(res));
  };

  const openModalRegister = () => {
    setShowModal(true);
  };

  return (
    <div className="div-general">
      <div className="div-fund-kitchen">
        <div className="div-btn-menu">
          <div className="btn-back">
            <button onClick={back}>
              <img alt="back" src={backimg} />
            </button>
          </div>
          <div className="div-buttons">
            <button onClick={viewUsers}> Usuarios </button>
            <button onClick={viewProducts}> Productos </button>
          </div>
        </div>
        <div className="div-orders">
          <div className="div-header">
            <h2>Bienvenido Admin</h2>
            {changeView ? (
              <button onClick={openModalRegister}>
                <img src={addUser} alt="addUser"></img>
              </button>
            ) : (
              <button onClick={openModalRegisterProducts}>
                <img src={addProduct} alt="addProduct"></img>
              </button>
            )}
          </div>
          <div className="div-container-cards">
            {changeView
              ? users.map((user) => (
                  <UserCard user={user} getUsers={getUsers} />
                ))
              : products.map((product) => (
                  <ProductCard product={product} getProducts={getProducts} />
                ))}
          </div>
          {showModal ? (
            <ModalRegister setShowModal={setShowModal} getUsers={getUsers} />
          ) : (
            false
          )}
        </div>
        {showModalProduct ? (
          <ModalAddProduct
            setShowModalProduct={setShowModalProduct}
            getProducts={getProducts}
          />
        ) : (
          false
        )}
      </div>
    </div>
  );
};
