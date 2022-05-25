import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../img/logoburger.png";
import { loginRequest } from "./API/fetch";

export function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/login";
    const data = {
      email: username,
      password: password,
    };
    loginRequest(url, data).then((res) => {
      if (res.accessToken) {
        if (res.user.roles.admin === true) {
          localStorage.setItem("userToken", res.accessToken);
          navigate("/Select");
        }
      } else {
        switch (res) {
          case "Email and password are required":
            setErrorMsg("❌ Correo y contraseña son requeridos ❌");
            break;
          case "Cannot find user":
            setErrorMsg("❌ Usuario no encontrado ❌");
            break;
          case "Password is too short":
            setErrorMsg("❌ La contraseña es demasiado corta ❌");
            break;
          case "Incorrect password":
            setErrorMsg("❌ La contraseña es incorrecta ❌");
            break;
          case "Email format is invalid":
            setErrorMsg("❌ El formato de correo es inválido ❌");
            break;
          default:
            break;
        }
      }
    });
  };

  return (
    <div className="div-general">
      <div className="div-logo">
        <img src={logo} alt="Logo BQ" className="logo-img" />
      </div>

      <form className="form-login" onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>

        <input
          className="email"
          placeholder="Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          data-testid="login-email-input"
        />
        <input
          className="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          data-testid="login-password-input"
        />
        {errorMsg && <h3 data-testid="login-error-message" className="errorMsg">
         {errorMsg} 
        </h3>}

        <button className="btn-login">INGRESAR</button>
      </form>
    </div>
  );
}
