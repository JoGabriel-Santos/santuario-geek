import React from "react";

const NavLinkButton = ({ label, isActive }) => {

    return (
        <button
            className={`nav-link ${isActive && "active"}`}
            id="v-pills-home-tab"
            type="button" role="tab"
            aria-controls="v-pills-home"
            aria-selected="true"
            data-bs-toggle="pill"
            data-bs-target="#v-pills-home"
        >

            {label}
        </button>
    );
};

export default NavLinkButton;