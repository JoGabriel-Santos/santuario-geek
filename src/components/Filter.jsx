import React from "react";

const Filter = () => {

    return (
        <React.Fragment>
            <div className="row">
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
                                <div id="slider-range" className="range-bar"></div>
                                <p className="range-value">
                                    <label>Preço :</label>
                                    <input type="text" id="amount" readOnly/>
                                </p>
                                <button type="button" className="cr-button">Filter</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
};

export default Filter;