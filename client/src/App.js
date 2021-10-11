import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Login from "./components/Login"
import Authors from "./components/Authors"


function App() {
    return (
        <div>
            {/* <Navbar/> */}
            <Authors/>
        </div>
    )
}

export default App
