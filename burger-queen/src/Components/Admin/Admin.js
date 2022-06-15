import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import backimg from "../../img/backimg.png"
import { getUsersRequest,getToken } from "../API/fetch";
import { UserCard } from "./UserCard";
import "./Admin.css";

export const Admin = () => {
    let [users, setUsers] = useState([]);
  let url = "http://localhost:8080/users";
  let myToken = getToken();

  const navigate = useNavigate();
  const back = () => {
    navigate("/select");
};

    useEffect(() => {
      getUsers()
    }, []);

    const getUsers = () => getUsersRequest(url, myToken).then((res) => setUsers(res));


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
            <button> Usuarios </button>
            <button> Productos </button>
          </div>
        </div>
        <div className="div-orders">
          {users.map((user) => (
                <UserCard user={user} getUsers={getUsers}/>
          ))}
        </div>
      </div>
    </div>
  );
};