import React from 'react';
import './HorizontalMenu.css';
import { NavLink } from "react-router-dom";

const HorizontalMenu = (props) => {
    const navLinks = props.navProps.map(({ label, path }) => (
        <NavLink
            to={path}
            className="moodify-horizontal-menu-item"
            activeClassName="moodify-horizontal-menu-item-active"
            isActive={(match, location) => location.pathname === path}
        >
            {label}
        </NavLink>
    ));

    return (
        <div className="moodify-horizontal-menu">
            {navLinks}
        </div>
    );
};

export default HorizontalMenu;