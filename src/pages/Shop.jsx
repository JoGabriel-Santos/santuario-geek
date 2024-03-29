import React, { useEffect } from "react";
import Breadcrumb from "../components/Breadcrumb";
import Filter from "../components/Filter";
import AOS from "aos";
import "aos/dist/aos.css";

const Shop = () => {

    useEffect(() => {
        AOS.init({
            duration: 2000,
            delay: 400,
        });
    }, []);

    return (
        <React.Fragment>
            <Breadcrumb title={"Produtos"} span={<span> <a href="/">Home</a> - Produtos</span>}/>

            <section className="section-shop padding-tb-100" data-aos="fade-up">
                <div className="container">
                    <Filter/>


                </div>
            </section>
        </React.Fragment>
    );
};

export default Shop;