import React, { useEffect, useState, useRef } from "react";
import Login from "./Login";

const Navbar = () => {
    const menuRef = useRef(null);

    const userLogged = JSON.parse(localStorage.getItem("UserInfo"));

    const [showMenu, setShowMenu] = useState(false);
    const [showLogin, setShowLogin] = useState(false);
    const [isNavOpen, setIsNavOpen] = useState(false);

    const [bgOpacity, setBgOpacity] = useState(0);

    const handleMenuClick = () => {
        if (userLogged) {
            setShowMenu(!showMenu);

        } else {
            toggleShowLogin();
        }
    };

    const toggleShowLogin = () => {
        setShowLogin(!showLogin);

        if (showLogin) {
            setBgOpacity(0);

        } else {
            setBgOpacity(0.6);
        }
    };

    const handleClickOutsideMenu = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setShowMenu(false);
        }
    };

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };

    useEffect(() => {
        if (showMenu) {
            document.addEventListener(
                "mousedown",
                handleClickOutsideMenu
            );

        } else {
            document.removeEventListener(
                "mousedown",
                handleClickOutsideMenu
            );
        }

        return () => {
            document.removeEventListener(
                "mousedown",
                handleClickOutsideMenu
            );
        };
    }, [showMenu]);

    return (
        <React.Fragment>
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

                    <div className="header-user--info" onClick={handleMenuClick}>
                        <i className="navigation-icon fa-solid fa-user"></i>
                    </div>
                </div>

                <button className="button-navigation-mobile" onClick={toggleNav}>
                    <ion-icon className="icon-navigation-mobile" name="menu-outline"></ion-icon>
                    <ion-icon className="icon-navigation-mobile" name="close-outline"></ion-icon>
                </button>
            </header>

            {showLogin && <Login closeLogin={toggleShowLogin}/>}

            <div
                style={{
                    backgroundColor: `rgba(0, 0, 0, ${bgOpacity})`,
                    position: "fixed",
                    pointerEvents: showLogin ? "auto" : "none",
                    transition: "background-color .4s ease-in-out",
                    zIndex: "999",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                }}
            />
        </React.Fragment>
    );
};

export default Navbar;