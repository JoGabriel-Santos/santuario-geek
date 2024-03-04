import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar";
import Hero from "./pages/Hero";

const App = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
                <Hero/>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;