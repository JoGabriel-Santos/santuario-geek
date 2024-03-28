import React, { useState } from "react";
import formatPrice from "../helpers/formatPrice";
import paymentInstallments from "../helpers/paymentInstallments";

const ProductCard = ({ productData }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleMouseEnter = () => {
        setIsHovered(true);
    };

    const handleMouseLeave = () => {
        setIsHovered(false);
    };

    const redirectToProduct = () => {
        window.location.href = `/detalhes-do-produto/${productData.product_id}`;
    };

    if (!productData) {
        return null;
    }

    return (
        <React.Fragment>
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
        </React.Fragment>
    );
};

export default ProductCard;