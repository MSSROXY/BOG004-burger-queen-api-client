import React from "react";
import './Login.css';
import logo from "./img/logoBQ.png"

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
        <div className="container-login">
            <div className="div-logo">
                <img src={logo} alt="Logo BQ" className="logo-img"/>
            </div>
            <form className="form-login"></form>
        </div>
    )
}