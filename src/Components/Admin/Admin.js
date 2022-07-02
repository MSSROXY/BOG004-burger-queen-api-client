import { useNavigate } from "react-router-dom";
import { useState } from "react";
import backimg from "../../img/backimg.png";
import "./Admin.css";
import { UserCard } from "./UserCard";
import { ProductCard } from "./ProductCard";

export const Admin = () => {
  const navigate = useNavigate();
  let [filterAdmin, setFilterAdmin] = useState("");

  const back = () => {
    navigate("/select");
  };

  const listUsers = () => {
    setFilterAdmin("users");
  };
  const listProducts = () => {
    setFilterAdmin("products");
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
            <button onClick={listUsers}> Usuarios </button>
            <button onClick={listProducts}> Productos </button>
          </div>
        </div>
        <div className="div-orders">
          {filterAdmin === "products" ? (
            <ProductCard filterAdmin={filterAdmin} />
          ) : (
            <UserCard filterAdmin={filterAdmin} />
          )}
        </div>
      </div>
    </div>
  );
};
