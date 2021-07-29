import React from "react";
import { Route, Switch } from 'react-router-dom';
import Home from "./Home";
import Navbar from "./Navbar";
import About from "./About";
import Login from "./Login";

function App() {
    return (
        <div>
            <Navbar />
            <Switch>
                <Route exact path="/">
                    <Home />
                </Route>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/login">
                    <Login />
                </Route>
            </Switch>
        </div>
    )
}

export default App