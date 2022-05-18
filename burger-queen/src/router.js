import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function Views() {
    return (
        <Router>
            <div>
                <ul>
                    <li>
                        <Link to = '/'>Login</Link>
                    </li>
                    <li>
                        <Link to = '/about'>About</Link>
                    </li>
                    <li>
                        <Link to = '/dashboard'>dashboard</Link>
                    </li>
                </ul>
            </div>

        </Router>
    )
}

function Home() {
    return (
        <div> 
            <h2>Home</h2>
        </div>
    )
}

function About() {
    return (
        <div> 
            <h2>About</h2>
        </div>
    )
}
function Dashboard() {
    return (
        <div> 
            <h2>Dashboard</h2>
        </div>
    )
}

