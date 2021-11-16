import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Navbar from "../Navbar/Navbar";
import classes from "./Header.module.css";
import logo from "../../assets/images/logo.svg";
import Search from "../Search/Search";

const Header = (props) => {
    const [showHeader, setShowHeader] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) setShowHeader(false);
            else setShowHeader(true);
        };

        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    });

    return (
        <div className={classes.wrapper}>
            <div
                className={`${classes.mobileMenu} ${showHeader && classes.mobileMenuActive}`}
                onClick={() => setShowHeader(!showHeader)}
            >
                <span className={classes.mobileMenuItem}></span>
                <span className={classes.mobileMenuItem}></span>
                <span className={classes.mobileMenuItem}></span>
            </div>

            {showHeader && (
                <>
                    <div className={classes.top}>
                        <div className={classes.logoWrapper}>
                            <NavLink to="/">
                                <img className={classes.logo} src={logo} alt="unsplash logo" />
                            </NavLink>
                            <div className={classes.siteNameWrapper}>
                                <div className={classes.siteName}>Unsplash clone</div>
                                <div className={classes.slogan}>Photos for everyone</div>
                            </div>
                        </div>
                        <Search />
                        <NavLink className={classes.favorites} to="/favorites">
                            Favorites
                        </NavLink>
                    </div>
                    <Navbar />
                </>
            )}
        </div>
    );
};

export default Header;
