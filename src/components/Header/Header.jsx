import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";
import MenuBtn from "@/assets/images/menu-btn.svg";
import close from "../../assets/images/close.svg"
import FooterBurger from "../Footer/FooterBurger.jsx"
import "./Header.scss";

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
                document.body.style.overflow = "";
            }
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        // Lock the scroll when the burger menu is open
        if (isMenuOpen && isMobile) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isMenuOpen, isMobile]);

    const handleMenuItemClick = () => {
        if (isMobile) {
            setIsMenuOpen(false);
        }
    };
    const BurgerMenu = () => (
        <div className="burger-menu">
            <ul className="header__menu-list">
                <li className="header__menu-item" onClick={handleMenuItemClick}>
                    <Link to="/#how">HOW IT WORKS</Link>
                </li>
                <li className="header__menu-item" onClick={handleMenuItemClick}>
                    <Link to="/#what">OUR SERVICES</Link>
                </li>
                <li className="header__menu-item" onClick={handleMenuItemClick}>
                    <Link to="/about">ABOUT US</Link>
                </li>
                <li className="header__menu-item" onClick={handleMenuItemClick}>
                    <Link to="/#faq">FAQ</Link>
                </li>
                <li className="header__menu-item" onClick={handleMenuItemClick}>
                    <Link to="/#bottom">CONTACT US</Link>
                </li>
            </ul>
            <FooterBurger />
        </div>
    );

    const DesktopMenu = () => (
        <ul className="header__menu-list">
            <li className="header__menu-item">
                <Link to="/#how">HOW IT WORKS</Link>
            </li>
            <li className="header__menu-item">
                <Link to="/#what">OUR SERVICES</Link>
            </li>
            <li className="header__menu-item">
                <Link to="/about">ABOUT US</Link>
            </li>
            <li className="header__menu-item">
                <Link to="/#faq">FAQ</Link>
            </li>
            <li className="header__menu-item">
                <Link to="/#bottom">CONTACT US</Link>
            </li>
        </ul>
    );

    return (
        <header className="header" id="header">
            <div className="container">
                <div className="header__inner">
                    <Logo />
                    <nav className="header__menu">
                        {isMobile && (
                            <button
                                className="header__menu-btn"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                            >
                                <img src={isMenuOpen ? close : MenuBtn} alt="menu button" />
                            </button>
                        )}

                        {isMobile && isMenuOpen && <BurgerMenu />}
                        {!isMobile && <DesktopMenu />}

                    </nav>
                </div>
            </div>
        </header>
    );
}
