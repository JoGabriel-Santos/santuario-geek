import React from "react";
import NavLinkButton from "../components/NavLinkButton";

const Navbar = () => {

    return (
        <React.Fragment>
            <header>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="top-header">
                                <a href="/" className="cr-logo">
                                    <img src={require("../util/images/logo/logo.png")} className="logo" alt="logo"/>
                                    <img src={require("../util/images/logo/dark-logo.png")} className="dark-logo" alt="logo"/>
                                </a>
                                <form className="cr-search">
                                    <input className="search-input" type="text" placeholder="Pesquise por produtos..."/>
                                    <a href="javascript:void(0)" className="search-btn">
                                        <i className="ri-search-line"></i>
                                    </a>
                                </form>
                                <div className="cr-right-bar">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle cr-right-bar-item" href="javascript:void(0)">
                                                <i className="ri-user-3-line"></i>
                                                <span>Usuário</span>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/login">Login</a>
                                                </li>
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/register">Registro</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href="javascript:void(0)" className="cr-right-bar-item Shopping-toggle">
                                        <i className="ri-shopping-cart-line"></i>
                                        <span>Carrinho</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="cr-fix" id="cr-main-menu-desk">
                    <div className="container">
                        <div className="cr-menu-list">
                            <div className="cr-category-icon-block">
                                <div className="cr-category-menu">
                                    <div className="cr-category-toggle">
                                        <i className="ri-menu-2-line"></i>
                                    </div>
                                </div>
                                <div className="cr-cat-dropdown">
                                    <div className="cr-cat-block">
                                        <div className="cr-cat-tab">
                                            <div
                                                className="cr-tab-list nav flex-column nav-pills"
                                                id="v-pills-tab"
                                                role="tablist"
                                                aria-orientation="vertical"
                                            >
                                                <NavLinkButton label={"Category 1"} isActive={true}/>
                                                <NavLinkButton label={"Category 2"} isActive={false}/>
                                                <NavLinkButton label={"Category 3"} isActive={false}/>
                                                <NavLinkButton label={"Category 4"} isActive={false}/>
                                            </div>
                                            <div className="tab-content" id="v-pills-tabContent">
                                                <div className="tab-pane fade show active" id="v-pills-home" role="tabpanel" aria-labelledby="v-pills-home-tab">
                                                    <div className="tab-list row">
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Category 1</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="/">Option 1</a></li>
                                                                <li><a href="/">Option 2</a></li>
                                                                <li><a href="/">Option 3</a></li>
                                                            </ul>
                                                        </div>
                                                        <div className="col">
                                                            <h6 className="cr-col-title">Category 2</h6>
                                                            <ul className="cat-list">
                                                                <li><a href="/">Option 1</a></li>
                                                                <li><a href="/">Option 2</a></li>
                                                                <li><a href="/">Option 3</a></li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <nav className="navbar navbar-expand-lg">
                                <a href="javascript:void(0)" className="navbar-toggler shadow-none">
                                    <i className="ri-menu-3-line"></i>
                                </a>
                                <div className="cr-header-buttons">
                                    <ul className="navbar-nav">
                                        <li className="nav-item dropdown">
                                            <a className="nav-link" href="javascript:void(0)">
                                                <i className="ri-user-3-line"></i>
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/login">Login</a>
                                                </li>
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/register">Registro</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                    <a href="/wishlist" className="cr-right-bar-item">
                                        <i className="ri-heart-line"></i>
                                    </a>
                                    <a href="javascript:void(0)" className="cr-right-bar-item Shopping-toggle">
                                        <i className="ri-shopping-cart-line"></i>
                                    </a>
                                </div>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav">
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">
                                                Home
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">
                                                Sobre nós
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="/">
                                                Contatos
                                            </a>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="javascript:void(0)">
                                                Categorias
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/">Category 1</a>
                                                </li>
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/">Category 2</a>
                                                </li>
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/">Category 3</a>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" href="javascript:void(0)">
                                                Produtos
                                            </a>
                                            <ul className="dropdown-menu">
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/">Novos</a>
                                                </li>
                                                <li className="dropdown-menu--li">
                                                    <a className="dropdown-item" href="/">Promoção</a>
                                                </li>
                                            </ul>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                            <div className="cr-calling">
                                <i className="ri-phone-line"></i>
                                <a href="javascript:void(0)">+123 ( 456 ) ( 7890 )</a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </React.Fragment>
    );
};

export default Navbar;