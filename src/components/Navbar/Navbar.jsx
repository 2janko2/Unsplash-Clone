import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./Navbar.module.css";
import { categories } from "../../constants/constants";

const Navbar = () => {
    return (
        <nav className={classes.wrapper}>
            {categories.map((category) => (
                <NavLink
                    className={classes.link}
                    activeClassName={classes.active}
                    key={category.url}
                    to={`/category/${category.url}`}
                >
                    {category.name}
                </NavLink>
            ))}
        </nav>
    );
};

export default Navbar;
