import React from "react";
import { BrowserRouter as Router,Link } from "react-router-dom";
import {UserLogin} from "./Components/Login.js"
import {SelectWaiterOrChef} from "./Components/Select.js"
import {SelectBreakfast} from "./Components/Breakfast.js"
import { SelectLunch } from "./Components/Lunchs.js";



export default function Views() {
    return (
        <Router>
            <div>
                    <route>
                        <Link to = '/'>Login</Link>
                        <UserLogin/>
                    </route>
                    <route>
                        <Link to = '/Select'>Select</Link>
                        <SelectWaiterOrChef/>
                    </route>
                    <route>
                        <Link to = '/Lunchs'>Lunchs</Link>
                        <SelectLunch/>
                    </route>
                    <route>
                        <Link to = '/Breakfast'>Breakfast</Link>
                        <SelectBreakfast/>
                    </route>

               
            </div>

        </Router>
    )
}
