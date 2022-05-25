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
  const btnLogin = screen.getByText("INGRESAR");
  fireEvent.click(btnLogin);
  await waitFor( () => ("./select") = screen.getByTestId());
  debug()
  expect(textContent).toBe("./Select")
});

