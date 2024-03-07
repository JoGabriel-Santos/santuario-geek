import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import NewProduct from "./pages/NewProduct";

const App = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/novo-produto" exact component={NewProduct}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;