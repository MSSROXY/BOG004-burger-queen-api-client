import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backimg from "../../img/backimg.png";
import addUser from "../../img/addUser.png";
import { getUsersRequest, getToken, getUser } from "../API/fetch";
import { UserCard } from "./UserCard";
import { ModalRegister } from "../Modals/ModalRegister";
import "./Admin.css";
import { ProductCard } from "./ProductCard"

export const Admin = () => {
  let [changeView, setChangeView] = useState(true)
  let [users, setUsers] = useState([]);
  let [showModal , setShowModal] = useState(false);
  let url = "http://localhost:8080/users";
  let myToken = getToken();

  const navigate = useNavigate();
  const back = () => {
    navigate("/select");
  };

const viewUsers = () => {
  setChangeView(true)
}

const viewProducts = () => {
  setChangeView(false)
}


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
            <button onClick={openModalRegister}><img src={addUser} alt="addUser"></img></button>
          </div>
          <div className="div-container-cards">
            {changeView ? 
            (users.map((user) => (
              <UserCard user={user} getUsers={getUsers} />
            ))) : <ProductCard/> }
          
          </div> 
        {showModal ? <ModalRegister setShowModal={setShowModal} getUsers={getUsers}/> : false}
        </div>
      </div>
    </div>
  );
};
