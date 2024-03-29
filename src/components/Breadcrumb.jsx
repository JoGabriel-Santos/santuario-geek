import React from "react";

const Breadcrumb = ({ title, span }) => {

    return (
        <React.Fragment>
            <section className="section-breadcrumb">
                <div className="cr-breadcrumb-image">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="cr-breadcrumb-title">
                                    <h2>{title}</h2>{span}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
};

export default Breadcrumb;