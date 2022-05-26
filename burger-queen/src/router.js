import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserLogin } from "./Components/Login/Login.js";
import { SelectWaiterOrChef } from "./Components/Select/Select.js";
import { SelectBreakfast } from "./Components/Breakfast.js";
import { SelectLunch } from "./Components/Lunchs/Lunchs.js";
import { SelectAdmin } from "./Components/Select/SelectAdmin.js";

export default function Views() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/Select" element={<SelectWaiterOrChef />} />
        <Route path="/Lunchs" element={<SelectLunch />} />
        <Route path="/Breakfast" element={<SelectBreakfast />} />
        <Route path="/SelectAdmin" element={<SelectAdmin/>} />

      </Routes>
    </Router>
  );
}
