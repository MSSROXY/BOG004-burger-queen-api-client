import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../img/logoburger.png";
import { loginRequest } from "./API/fetch";

export function UserLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/login";
    const data = {
      email: username,
      password: password,
    };
    loginRequest(url, data)
      .then((res) => {
        localStorage.setItem("userToken", res.accessToken);
        Navigate("/Select");

      })
      .catch((error) => error);
  };

  return (
    <div className="div-login">
      <div className="div-logo">
        <img src={logo} alt="Logo BQ" className="logo-img" />
      </div>

      <form className="form-login" onSubmit={handleSubmit}>
        <h1>Iniciar Sesión</h1>

        <input
          className="email"
          placeholder="Ingresa tu correo electronico"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          className="password"
          type="password"
          placeholder="Ingresa tu contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="btn-login">INGRESAR</button>
      </form>
    </div>
  );
}
