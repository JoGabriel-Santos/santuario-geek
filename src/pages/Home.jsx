import React from "react";

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
                                                <h1>Santuário Geek</h1>
                                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                    Amet reiciendis beatae
                                                </p>
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
        </React.Fragment>
    );
};

export default Home;