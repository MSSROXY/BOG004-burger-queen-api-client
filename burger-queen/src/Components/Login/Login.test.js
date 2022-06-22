import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import { UserLogin } from "./Login";
import { SelectAdmin } from "../Select/Select";

describe("Componente Login", () => {
  it("Si el usuario ingresa un correo no registrado", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <UserLogin />
      </Router>
    );
    const emailInput = screen.getByTestId("login-email-input");
    const passInput = screen.getByTestId("login-password-input");
    fireEvent.change(emailInput, { target: { value: "hola@gmail.com" } });
    fireEvent.change(passInput, { target: { value: 123456 } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    let errorMsg;
    await waitFor(() => (errorMsg = screen.getByTestId("login-error-message")));
    expect(errorMsg.textContent).toBe("❌ Usuario no encontrado ❌");
  });

  it("Si el usuario ingresa un formato incorrecto", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <UserLogin />
      </Router>
    );
    const emailInput = screen.getByTestId("login-email-input");
    const passInput = screen.getByTestId("login-password-input");
    fireEvent.change(emailInput, { target: { value: "." } });
    fireEvent.change(passInput, { target: { value: 123456 } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    let errorMsg;
    await waitFor(() => (errorMsg = screen.getByTestId("login-error-message")));
    expect(errorMsg.textContent).toBe("❌ El formato de correo es inválido ❌");
  });

  it("Si el usuario no ingresa datos", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <UserLogin />
      </Router>
    );
    const emailInput = screen.getByTestId("login-email-input");
    const passInput = screen.getByTestId("login-password-input");
    fireEvent.change(emailInput, { target: { value: "" } });
    fireEvent.change(passInput, { target: { value: 0 } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    let errorMsg;
    await waitFor(() => (errorMsg = screen.getByTestId("login-error-message")));
    expect(errorMsg.textContent).toBe(
      "❌ Correo y contraseña son requeridos ❌"
    );
  });

  it("Usuario ingresa un correo no registrado", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <UserLogin />
      </Router>
    );
    const emailInput = screen.getByTestId("login-email-input");
    const passInput = screen.getByTestId("login-password-input");
    fireEvent.change(emailInput, { target: { value: "gisbel@prueba.com" } });
    fireEvent.change(passInput, { target: { value: 1223456 } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    let errorMsg;
    await waitFor(() => (errorMsg = screen.getByTestId("login-error-message")));
    expect(errorMsg.textContent).toBe("❌ Usuario no encontrado ❌");
  });

  it("Usuario ingresa contraseña muy corta", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <UserLogin />
      </Router>
    );
    const emailInput = screen.getByTestId("login-email-input");
    const passInput = screen.getByTestId("login-password-input");
    fireEvent.change(emailInput, { target: { value: "gisbel@prueba.com" } });
    fireEvent.change(passInput, { target: { value: 12 } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    let errorMsg;
    await waitFor(() => (errorMsg = screen.getByTestId("login-error-message")));
    expect(errorMsg.textContent).toBe("❌ La contraseña es demasiado corta ❌");
  });

  it("Usuario ingresa contraseña incorrecta", async () => {
    const history = createMemoryHistory();
    render(
      <Router location={history.location} navigator={history}>
        <UserLogin />
      </Router>
    );
    const emailInput = screen.getByTestId("login-email-input");
    const passInput = screen.getByTestId("login-password-input");
    fireEvent.change(emailInput, {
      target: { value: "grace.hopper@systers.xyz" },
    });
    fireEvent.change(passInput, { target: { value: 1234567890 } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    let errorMsg;
    await waitFor(() => (errorMsg = screen.getByTestId("login-error-message")));
    expect(errorMsg.textContent).toBe("❌ La contraseña es incorrecta ❌");
  });

  it("Usuario y contraseña correcta, admin es true", async () => {
    const history = createMemoryHistory();
    const route = "/Select";
    history.push(route);
    render(
      <Router location={history.location} navigator={history}>
        <UserLogin />
      </Router>
    );
    const emailInput = screen.getByTestId("login-email-input");
    const passInput = screen.getByTestId("login-password-input");
    fireEvent.change(emailInput, {
      target: { value: "grace.hopper@systers.xyz" },
    });
    fireEvent.change(passInput, { target: { value: 123456 } });
    const btnLogin = screen.getByText("INGRESAR");
    fireEvent.click(btnLogin);
    let adminSelect;
    await waitFor(() => (adminSelect = screen.getByTestId("enter-select")));
    expect(adminSelect).toHaveTextContent("route");
  });
});
