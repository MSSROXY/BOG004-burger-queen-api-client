import {useState} from "react";
import { userRegisterRequest, getToken} from "../API/fetch";




export const ModalRegister = ({ setShowModal }) => {

    const hiddenModal = () => {
        setShowModal(false)
    }

const userRegister = () => {
    const myToken = getToken();
    const myUrl = "http://localhost:8080/users"
    const myBody = {

    }
}
  return (
    <div className="modal-background">
      <div className="container-modal">
        <h4>Nuevo Usuario</h4>
        <div className="div-register">
               <p>Nombre: <input placeholder="name"></input></p>
               <p>Correo: <input placeholder="Correo"></input></p>  
               <p>Contraseña: <input placeholder="Contraseña"></input></p>
               <p>Rol: 
                <select >
                    <option>Administrador</option>
                    <option>Colaborador</option>
                </select>
                </p>
                </div>
        <div className="container-buttons">
          <button className="btn-red" onClick={hiddenModal}>Cancelar</button>
          <button className="btn-green" onClick={userRegister}>Guardar</button>
        </div>
      </div>
    </div>
  );
};
