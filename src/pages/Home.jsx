import React from "react";

const Home = () => {

    return (
        <section className="section-hero">
            <div className="hero">
                <div className="hero-text-box">
                    <h1 className="heading-primary">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </h1>

                    <p className="hero-description">
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.
                    </p>

                    <a className="button button--full margin-right-sm" href="#">Ver todos os produtos</a>
                    <a className="button button--outline" href="#">Sobre nós</a>
                </div>

                <div className="hero-image-box">
                    <img className="hero-image" src={require("../util/img/hero.png")} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default Home;