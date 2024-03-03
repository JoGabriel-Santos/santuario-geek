import React, { useState } from "react";

const Navbar = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    return (
        <header className={`header ${isNavOpen ? 'nav-open' : ''}`}>
            <div className="logo-navigation">
                <a href="#">
                    <img className="logo" src={require("../util/img/logo_2.png")} alt=""/>
                </a>

                <nav className="main-navigation">
                    <ul className="main-navigation-list">
                        <li><a className="main-navigation-link" href="#">Home</a></li>
                        <li><a className="main-navigation-link" href="#">Produtos</a></li>
                        <li><a className="main-navigation-link" href="#">Contatos</a></li>
                    </ul>
                </nav>
            </div>

            <div className="navigation-icons">
                <i className="navigation-icon fa-solid fa-cart-shopping"></i>
                <i className="navigation-icon fa-solid fa-user"></i>
            </div>

            <button className="button-navigation-mobile" onClick={toggleNav}>
                <ion-icon className="icon-navigation-mobile" name="menu-outline"></ion-icon>
                <ion-icon className="icon-navigation-mobile" name="close-outline"></ion-icon>
            </button>
        </header>
    );
};

export default Navbar;