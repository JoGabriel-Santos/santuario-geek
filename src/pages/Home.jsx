import React from "react";
import ProductList from "../components/ProductList";

const Home = () => {

    return (
        <React.Fragment>
            <section className="section-hero padding-b-100 next">
                <div className="cr-slider swiper-container">
                    <div className="swiper-wrapper">
                        <div className="swiper-slide">
                            <div className="cr-banner-image-one">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-12">
                                            <div className="cr-left-side-contain slider-animation">
                                                <h5><span>Consequuntur</span> lorem</h5>
                                                <h1 className="font-weight--700">Santuário Geek</h1>
                                                <div className="cr-last-buttons">
                                                    <a href="#" className="cr-button">
                                                        Ver produtos
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <ProductList/>
        </React.Fragment>
    );
};

export default Home;