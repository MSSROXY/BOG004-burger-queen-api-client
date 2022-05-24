import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import UserLogin from "./Login";

it("Componente Login", async () => {
  const history = createMemoryHistory();
  const { debug } = render(
    <Router location={history.location} navigator={history}>
      <UserLogin />
    </Router>
  );
  const emailInput = screen.getByPlaceholderText(
    "Ingresa tu correo electronico"
  )
  const passInput = screen.getByPlaceholderText("Ingresa tu contraseña")
  fireEvent.change(emailInput, { target: { value: "ayuda@gmail.com" } });
  fireEvent.change(passInput, { target: { value: "12345678" } });
  const btnLogin = screen.getAllByText("INGRESAR");
  fireEvent.click(btnLogin);
  let errorMsg;
//   await waitFor(() => (errorMsg = screen.getAllByTestId("login-error-message"))
//   debug()
//   console.log(errorMsg.textContent)
//   expect(errorMsg.textContent.toBe("Usuario no encontrado"))
});
