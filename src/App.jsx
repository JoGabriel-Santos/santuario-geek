import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/Navbar";

const App = () => {

    return (
        <React.Fragment>
            <BrowserRouter>
                <Navbar/>
            </BrowserRouter>
        </React.Fragment>
    );
};

export default App;