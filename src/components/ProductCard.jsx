import React, { useState } from "react";
import formatPrice from "../helpers/formatPrice";

const ProductCard = ({ productData }) => {

    const redirectToProduct = () => {
        window.location.href = `/detalhes-do-produto/${productData.product_id}`;
    };

    if (!productData) {
        return null;
    }

    return (
        <React.Fragment>
            <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24">
                <div className="cr-product-card">
                    <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                            <img src={productData.product_picture} alt="product"/>
                        </div>
                        <a className="cr-shopping-bag" href="javascript:void(0)">
                            <i className="ri-shopping-bag-line"></i>
                        </a>
                    </div>
                    <div className="cr-product-details">
                        <div className="cr-brand">
                            <a href="#">Category 1</a>
                            <div className="cr-star">
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-fill"></i>
                                <i className="ri-star-line"></i>
                                <p>(4.5)</p>
                            </div>
                        </div>
                        <a className="title product--title font-weight--600">{productData.product_name}</a>
                        <p className="cr-price">
                            <span className="new-price">R$ {formatPrice(productData.product_price)}</span>
                            <span className="old-price">R$ 80,00</span>
                        </p>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

/*
    <div
        className={`productCard ${isHovered ? "hidden" : ""}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={redirectToProduct}
    >
        <img src={productData.product_picture} alt=""/>

        <div className="product-card--info">
            <h2 className="info-name">{productData.product_name}</h2>

            {
                isHovered ? (
                    <div className="buy--button">Comprar</div>
                ) : (
                    <>
                        <h6 className="info-price">R$ {formatPrice(productData.product_price)}</h6>
                        <p className="info-payment">{paymentInstallments(productData.product_price, 10)}</p>
                    </>
                )
            }
        </div>
    </div>
*/

export default ProductCard;