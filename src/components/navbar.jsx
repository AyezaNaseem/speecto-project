import { useState } from "react";
import { Link, useLocation } from "react-router-dom"; 
import logoImg from '../asset/logo.png';
import "./navbar.css";

const Navbar = () => {
    const [isDark, setIsDark] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    const location = useLocation(); 

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "Services", path: "/services" },
        { name: "Contact Us", path: "/contact" },
        { name: "Our Team", path: "/team" },
        { name: "About Us", path: "/about-us" },
    ];

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar_logo-container">
                <div className="logo_img-wrapper">
                    <img src={logoImg} alt="Speecto logo" className="actual_logo-img" />
                </div>
                <div className="navbar_logo">
                    <span className="navbar_logo-text">SPEECTO</span> <span className="logo_dot">.</span>
                </div>
            </div>
            <ul className="navbar_links desktop_menu">
                {navLinks.map((item) => (
                    <li key={item.name}>
                        <Link
                            to={item.path}
                            className={`navbar_link ${location.pathname === item.path ? "navbar_link-active" : ""}`}
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>

            <div className="navbar_right">
                <button className="navbar_button desktop_btn">Get Started</button>
                <div 
                    className={`navbar_toggle_track ${isDark ? "dark" : "light"}`}
                    onClick={() => setIsDark(!isDark)}
                >
                    <div className={`navbar_toggle-thumb ${isDark ? "dark-thumb" : ""}`}></div>
                </div>
                <div className="mobile_hamburger" onClick={toggleMenu}>
                    <div className="hamburger_bar"></div>
                    <div className="hamburger_bar"></div>
                    <div className="hamburger_bar"></div>
                </div>
            </div>
            <div className={`mobile_drawer ${isMenuOpen ? "drawer_open" : ""}`}>
                <button className="drawer_close_btn" onClick={toggleMenu}>&times;</button>
                
                <div className="drawer_logo">
                    <div className="logo_img-wrapper">
                        <img src={logoImg} alt="Speecto logo" className="actual_logo-img" />
                    </div>
                    <span className="navbar_logo-text">SPEECTO</span>
                    <span className="logo_dot">.</span>
                </div>

                <ul className="mobile_nav_links">
                    {navLinks.map((item) => (
                        <li key={item.name}>
                            <Link
                                to={item.path}
                                onClick={toggleMenu}
                                className={`mobile_link ${location.pathname === item.path ? "mobile_link-active" : ""}`}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <button className="drawer_button">Get Started</button>
            </div>
            {isMenuOpen && <div className="drawer_backdrop" onClick={toggleMenu}></div>}
        </nav>
    );
};

export default Navbar;