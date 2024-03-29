import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import * as API from "../api";

const ProductList = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const productsData = await API.fetchProducts();
            setProducts(productsData.data);

        } catch (error) {
            console.error("Error fetching products:", error.message);

        } finally {
            setIsLoading(false);
        }
    };

    const renderProductCards = () => {
        if (isLoading) {
            return <p className="loading-products">Carregando produtos...</p>;
        }

        return products.map((product, index) => (
            <ProductCard key={index} productData={product}/>
        ));
    };


    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <React.Fragment>
            <section className="padding-b-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="mb-30">
                                <div className="cr-banner">
                                    <h2>Produtos populares</h2>
                                </div>
                                <div className="cr-banner-sub-title">
                                    <p className="text-dark">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                        ut labore lacus vel facilisis
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="product-content row mb-minus-24">
                        <div className="col-xl-3 col-lg-4 col-12 mb-24">
                            <div className="row mb-minus-24 sticky">
                                <div className="col-lg-12 col-sm-6 col-6 cr-product-box mb-24">
                                    <div className="cr-product-tabs">
                                        <ul>
                                            <li className="active" data-filter="all">All</li>
                                            <li>Category 1</li>
                                            <li>Category 2</li>
                                            <li>Category 3</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-9 col-lg-8 col-12 mb-24">
                            <div className="row mb-minus-24">
                                {
                                    renderProductCards()
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default ProductList;