import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";
import Details from "./pages/Details";

const App = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;