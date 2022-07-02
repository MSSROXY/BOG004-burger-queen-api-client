import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Components/Login/Login.js";
import { SelectOption } from "./Components/SelectOption/SelectOption.js";
import { Menu } from "./Components/Menu/Menu.js";
import { Kitchen } from "./Components/Kitchen/Kitchen.js";
import { Admin } from "./Components/Admin/Admin.js";

export default function Views() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Select" element={<SelectOption />} />
        <Route path="/Menu" element={<Menu />} />
        <Route path="/Kitchen" element={<Kitchen/>} />
        <Route path="/Admin" element={<Admin/>} />

      </Routes>
    </Router>
  );
}
