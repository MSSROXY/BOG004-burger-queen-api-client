import React from "react";
import { BrowserRouter as Router, Link, Routes, Route} from "react-router-dom";
import { UserLogin } from "./Components/Login.js";
import { SelectWaiterOrChef } from "./Components/Select.js";
import { SelectBreakfast } from "./Components/Breakfast.js";
import { SelectLunch } from "./Components/Lunchs.js";

export default function Views() {
  return (
    <Router>
        <div>
            <nav>
                <route> <Link to = '/'></Link></route>
                <route><Link to = '/Select'></Link></route>
                <route><Link to = '/Lunchs'></Link></route>
                <route><Link to = '/Breakfast'></Link></route>
                </nav>
                <Routes>
                   <Route path='/' element={<UserLogin/>}/>
                   <Route path='/Select' element={<SelectWaiterOrChef/>}/>
                   <Route path='/Lunchs' element={<SelectLunch/>}/>
                   <Route path='/Breakfast' element={<SelectBreakfast/>}/>
                </Routes>
        </div>

    </Router>
  )
}
