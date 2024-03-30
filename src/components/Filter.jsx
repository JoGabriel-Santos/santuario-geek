import React, { useState } from "react";

const Filter = () => {

    const [minPrice, setMinPrice] = useState(2);
    const [maxPrice, setMaxPrice] = useState(50);

    const [price, setPrice] = useState(maxPrice);

    const handleFilter = () => {
        console.log(`Filtering products priced between ${minPrice} and ${maxPrice}`);
    };

    return (
        <React.Fragment>
            <div className="col-12">
                <div className="row">
                    <div className="col-12">
                        <div className="cr-shop-bredekamp">
                            <div className="cr-toggle">
                                <a href="javascript:void(0)" className="shop_side_view">
                                    <i className="ri-filter-line"></i>
                                </a>
                                <a href="javascript:void(0)" className="gridCol active-grid">
                                    <i className="ri-grid-line"></i>
                                </a>
                                <a href="javascript:void(0)" className="gridRow">
                                    <i className="ri-list-check-2"></i>
                                </a>
                            </div>
                            <div className="center-content">
                                <span className="margin-top-8">We found 29 items for you!</span>
                            </div>
                            <div className="cr-select">
                                <label className="margin-top-3">Sort By :</label>
                                <select className="form-select font-dosis margin-top-5">
                                    <option className="font-dosis" selected>Featured</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                    <option value="4">Four</option>
                                    <option value="5">Five</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>




            </div>
        </React.Fragment>
    );
};

export default Filter;

/*
    <React.Fragment>
        <div className="col-lg-3 col-12 md-30">
            <div className="cr-shop-sideview">
                <div className="cr-shop-categories">
                    <h4 className="cr-shop-sub-title">Filtrar</h4>
                    <div className="cr-checkbox">
                        <div className="checkbox-group">
                            <input type="checkbox" id="category_1"/>
                            <label htmlFor="drinks">Category 1</label>
                            <span>[20]</span>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="category_2"/>
                            <label htmlFor="drinks">Category 2</label>
                            <span>[12]</span>
                        </div>
                        <div className="checkbox-group">
                            <input type="checkbox" id="category_3"/>
                            <label htmlFor="drinks">Category 3</label>
                            <span>[5]</span>
                        </div>
                    </div>
                </div>

                <div className="cr-shop-price">
                    <h4 className="cr-shop-sub-title">Preço</h4>
                    <div className="price-range-slider">
                        <input
                            className="range-bar"
                            type="range"
                            value={price}
                            min={minPrice}
                            max={maxPrice}
                            onChange={(e) => setPrice(parseInt(e.target.value))}
                            style={{ "background": "#f44336" }}
                        />

                        <p className="range-value">
                                <label>Preço:</label>
                                <input type="text" value={`$${minPrice} - $${price}`} readOnly/>
                            </p>

                            <button type="button" className="cr-button" onClick={handleFilter}>
                                Filter
                            </button>
                        </div>
                    </div>
                </div>
            </div>
</React.Fragment>
*/