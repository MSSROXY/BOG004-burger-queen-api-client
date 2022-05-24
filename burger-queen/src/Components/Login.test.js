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
      <loginRequest/>
    </Router>
  );
  const emailInput = screen.getByPlaceholderText("Email")
  const passInput = screen.getByPlaceholderText("Password")
  fireEvent.change(emailInput, { target: { value: "ayuda@gmail.com" } });
  fireEvent.change(passInput, { target: { value: "12345678" } });
  const btnLogin = screen.getAllByText("INGRESAR");
  fireEvent.click(btnLogin);
  let errorMsg;
  await waitFor( () => errorMsg = screen.getByIdTest('login-error-message'));
  debug()
  expect(errorMsg.textContent).toBe("Usuario no encontrado")
});
