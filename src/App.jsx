import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import Authentication from "./pages/Authentication";
import Shop from "./pages/Shop";

const App = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/auth" exact component={Authentication}/>
                    <Route path="/produtos" exact component={Shop}/>
                </Switch>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;