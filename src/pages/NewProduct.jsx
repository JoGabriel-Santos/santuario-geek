import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as API from "../api";

const NewProduct = () => {

    const userLogged = JSON.parse(localStorage.getItem("UserInfo"));

    const [productInfo, setProductInfo] = useState({
        product_name: "",
        product_price: "",
        product_picture: "",
        product_description: "",
        tags: []
    });
    const [errorMessage, setErrorMessage] = useState({
        product_name: "",
    });

    const handleProductPictureChange = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setProductInfo(prevProductInfo => ({
                ...prevProductInfo,
                product_picture: reader.result.toString()
            }));
        };
    };

    const handleTagKeyPress = (event) => {
        if (event.key === "Enter" && event.target.value.trim() !== "") {
            event.preventDefault();

            const newTag = event.target.value.trim();
            const formattedTag = capitalizeFirstLetter(newTag);

            setProductInfo(prevProductInfo => ({
                ...prevProductInfo,
                tags: [...prevProductInfo.tags, formattedTag],
            }));

            event.target.value = "";
        }
    };

    const handleDeleteTag = (index) => {
        const updatedTags = productInfo.tags.filter((_, i) => i !== index);
        setProductInfo(prevProductInfo => ({
            ...prevProductInfo,
            tags: updatedTags,
        }));
    };

    const capitalizeFirstLetter = (text) => {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!productInfo.product_name) {
            setErrorMessage({
                ...errorMessage,
                product_name: "Defina o nome do produto para continuar...",
            });
            return;
        }

        try {
            await API.addProduct({ userLogged, productInfo });
            // window.location.href = `/`;

        } catch (error) {
            console.log(error.response);
        }
    };

    /*
        useEffect(() => {
            if (userLogged.role === "client") {
                history.push("/");
            }

        }, [userLogged, history]);
     */

    return (
        <section className="section-forms">
            <div className="section-forms--container">
                <h2 className="form-title">Produto</h2>
                <h6 className="form-descr">Preencha as informações abaixo para publicar um novo produto:</h6>

                <div className="cta-form-picture">
                    <img
                        src={productInfo.product_picture !== "" ? productInfo.product_picture : require("../util/img/no-photo-available.png")}
                        className="product-picture"
                        alt="Product picture"
                    />

                    <div className="image-upload">
                        <label className="file-input">
                            <span>
                                <ion-icon name="images-outline" size="small"></ion-icon>
                                Definir imagem do produto
                            </span>
                            <input
                                id="file-input"
                                type="file"
                                className="input"
                                onChange={event => handleProductPictureChange(event)}
                            />
                        </label>

                        <label htmlFor="picture">Envie uma imagem JPG ou PNG</label>
                    </div>
                </div>

                <form className="cta-form" action="">
                    <div className="cta-form-name--grid">
                        <div
                            className={`cta-form-input ${
                                errorMessage.product_name !== ""
                                    ? "cta-form-error"
                                    : ""
                            }`}
                        >
                            <div className="label">
                                <label htmlFor="product-name">Nome do produto</label>
                                <label htmlFor="product-name">
                                    {errorMessage.product_name}
                                </label>
                            </div>
                            <input
                                id="product-name"
                                type="text"
                                value={productInfo.product_name}
                                onChange={(event) => setProductInfo({ ...productInfo, product_name: event.target.value })}
                                onFocus={() =>
                                    setErrorMessage({
                                        ...errorMessage,
                                        product_name: "",
                                    })
                                }
                            />
                        </div>

                        <div className="cta-form-input">
                            <label htmlFor="product-price">Preço (R$)</label>
                            <input
                                id="product-price"
                                type="number"
                                value={productInfo.product_price}
                                onChange={(event) => setProductInfo({ ...productInfo, product_price: event.target.value })}
                            />
                        </div>
                    </div>

                    <div
                        className={`cta-form-input ${
                            errorMessage.product_description !== ""
                                ? "cta-form-error"
                                : ""
                        }`}
                    >
                        <div className="label">
                            <label htmlFor="file-description">Descrição</label>
                            <label htmlFor="file-description">
                                {errorMessage.product_description}
                            </label>
                        </div>
                        <textarea
                            id="file-description"
                            rows="3"
                            value={productInfo.product_description}
                            onChange={(event) => setProductInfo({ ...productInfo, product_description: event.target.value })}
                            style={{ resize: "none" }}
                        />
                    </div>

                    <div className="cta-form-input">
                        <label htmlFor="tags">Tags (pressione Enter para adicionar)</label>
                        <div className={`tags-input-container ${productInfo.tags.length === 0 ? "tags-input-empty" : ""}`}>
                            {
                                productInfo.tags.length === 0 ? (
                                    <div className="tag-box">...</div>
                                ) : (
                                    productInfo.tags.map((tag, index) => (
                                        <div
                                            className="tag-box"
                                            key={index}
                                            onClick={() => handleDeleteTag(index)}>
                                            {tag}
                                        </div>
                                    ))
                                )}
                        </div>
                        <input
                            id="tags"
                            type="text"
                            onKeyDown={(event) => handleTagKeyPress(event)}
                        />
                    </div>
                </form>

                <div className="info--button account--save-button" onClick={handleSubmit}>
                    Publicar
                </div>
            </div>
        </section>
    );
};

export default NewProduct;