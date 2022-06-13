import React, { useState } from "react";
import "./Menu.css";
import shopping from "../../img/car.png";
import { ProductsList } from "./ProductsList";
import { ModalTicket } from "../../Components/Modals/ModalTicket";

export function Menu() {
  let [filter, setFilter] = useState("Almuerzo");
  let [order, setOrder] = useState([]);
  let [price, setPrice] = useState(0);
  let [clientName, setClientName] = useState("");
  let [clientTable, setClientTable] = useState("");
  let [modalOpen, setModalOpen] = useState(false);

  const addProduct = (product) => {
    if (order.find(({ id }) => id === product.id)) {
      let findItem = order.findIndex(({ id }) => id === product.id);
      order[findItem].quantity++;
    } else {
      order.push({ ...product, quantity: 1 });
      setOrder(order);
    }
    setPrice((price += product.price));
  };
  const removeProduct = (product) => {
    let findItem = order.findIndex(({ id }) => id === product.id);
    if (order[findItem].quantity > 1) {
      order[findItem].quantity--;
    } else {
      order.splice(findItem, 1);
    }
    setPrice((price -= product.price));
  };

  const listLunch = () => {
    setFilter("Almuerzo");
  };
  const listBreakfast = () => {
    setFilter("Desayuno");
  };
  const showModal = () => {
    if(order.length === 0){
     alert('DEBE INGRESAR PRODUCTOS')
    }else{
      setModalOpen(true);
    }
  
  };

  return (
    <div className="div-general">
      <div className="div-fund-menu">
        <div className="div-buttons">
          <button onClick={listLunch}> Almuerzos </button>
          <button onClick={listBreakfast}> Desayunos </button>
        </div>
        <div className="div-menu">
          <div className="options">
            <h3>Productos</h3>
            <h3>Precios</h3>
          </div>
          <div className="menu">
            <ProductsList
              filter={filter}
              addProduct={addProduct}
              removeProduct={removeProduct}
              order={order}
            />
          </div>
          {modalOpen ? (
            <ModalTicket setModalOpen={setModalOpen} order={order} clientName={clientName} clientTable={clientTable}>
              {order.map((item) => (
                <div key={item.id}>
                  <p>
                    {item.name} x {item.quantity}
                  </p>
                </div>
              ))}
            </ModalTicket>
          ) : (
            false
          )}

          <div className="client-name">
            <input
              placeholder="Ingrese nombre de cliente"
              type="text"
              value={clientName}
              onChange={(e) => setClientName(e.target.value)}
              required
            ></input>
            <select
              placeholder="Mesa"
              onChange={(e) => setClientTable(e.target.value)}
              value={clientTable}
              required
            >
              <option value="">Mesa</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>
        </div>
        <div className="div-order">
          <div className="resume">
            <img className="img-car" src={shopping} alt="Carrito"></img>
            <h3> $ {price}</h3>
            <button type="submit" onClick={showModal}>
              OK
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
