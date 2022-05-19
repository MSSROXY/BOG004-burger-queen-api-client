import React from "react";
import './Login.css';
import logo from "./img/logoburger.png"

// export class UserLogin extends React.Component {
//     render() {
//         return (
//         <div className= "container-login"> 
//         <h1>HOLAAAAAAA</h1>        
//         </div>
//         )
//     }
// }

export function UserLogin() {
    return (
        <div className="div-login">
            <div className="div-logo">
                <img src={logo} alt="Logo BQ" className="logo-img"/>
            </div>
            <form className="form-login">
                <h1>Iniciar Sesión</h1>
                <input className = "email" placeholder="Ingresa tu correo electronico"/>
                <input className = "password" type = "password" placeholder="Ingresa tu contraseña"/>
                <button className="btn-login">INGRESAR</button>
            </form>
        </div>
    )
}