import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backimg from "../../img/backimg.png";
import addUser from "../../img/addUser.png";
import { getUsersRequest, getToken, getUser } from "../API/fetch";
import { UserCard } from "./UserCard";
import { ModalRegister } from "../Modals/ModalRegister";
import "./Admin.css";
import { ProductAdmin } from "./ProductAdmin"

export const Admin = () => {
  let[filterAdmin, setFilterAdmin] = useState("users")
  let [users, setUsers] = useState([]);
  let [showModal , setShowModal] = useState(false);
  let url = "http://localhost:8080/users";
  let myToken = getToken();

  const navigate = useNavigate();
  const back = () => {
    navigate("/select");
  };


  const listUsers = () => {
    setFilterAdmin("users");
  };

  const listProducts = () => {
    setFilterAdmin("products");
  };


  useEffect(() => {
    getUsers();
  }, []);

  const getUsers = () =>
    getUsersRequest(url, myToken).then((res) => setUsers(res));

  const openModalRegister = () => {
    setShowModal(true);
  }

  return (
    <div className="div-general">
      <div className="div-fund-menu">
        <div className="div-btn-kitchen">
          <div className="btn-back">
            <button onClick={back}>
              <img alt="back" src={backimg} />
            </button>
          </div>
          <div className="btn-kitchen">
            <button onClick={listUsers}> Usuarios </button>
            <button onClick={listProducts}> Productos </button>
          </div>
        </div>
        <div className="div-welcome">
          <div className="div-header">
            <h3>Bienvenido Admin!</h3>
            <button onClick={openModalRegister}><img src={addUser}></img></button>
          </div>
          <div className="div-orders">
            {users.map((user) => (
              <UserCard user={user} getUsers={getUsers} />
            ))}
          </div>
        {showModal ? <ModalRegister setShowModal={setShowModal} getUsers={getUsers}/> : false}
        </div>
        <div className="div-orders">
          <ProductAdmin filterAdmin={filterAdmin} />
        </div>
      </div>
    </div>
  );
};
