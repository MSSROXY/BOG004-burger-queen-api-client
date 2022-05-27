import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserLogin } from "./Components/Login/Login.js";
import { SelectWaiterOrChef } from "./Components/Select/Select.js";
import { Menu } from "./Components/Menu/Menu.js";
import { SelectAdmin } from "./Components/Select/SelectAdmin.js";

export default function Views() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/Select" element={<SelectWaiterOrChef />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/SelectAdmin" element={<SelectAdmin/>} />

      </Routes>
    </Router>
  );
}
