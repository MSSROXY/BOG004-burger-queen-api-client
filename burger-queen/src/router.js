import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { UserLogin } from "./Components/Login.js";
import { SelectWaiterOrChef } from "./Components/Select.js";
import { SelectBreakfast } from "./Components/Breakfast.js";
import { SelectLunch } from "./Components/Lunchs.js";
import { SelectAdmin } from "./Components/SelectAdmin.js";

export default function Views() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserLogin />} />
        <Route path="/Select" element={<SelectWaiterOrChef />} />
        <Route path="/Lunchs" element={<SelectLunch />} />
        <Route path="/Breakfast" element={<SelectBreakfast />} />
        <Route path="/AdminSelect" element={<SelectAdmin/>} />

      </Routes>
    </Router>
  );
}
