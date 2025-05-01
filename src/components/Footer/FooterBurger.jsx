import { Link } from "react-router-dom";
import address from "../../assets/images/address.svg"
import phone from "../../assets/images/phone.svg"
import mail from "../../assets/images/mail.svg"
import "./FooterBurger.scss"

export default function FooterBurger() {
        const emailText = `info@${window.location.host}`;

    return (
        <footer className="footer__Burger">
            <div className="container">
                <div className="footer__Burger-inner">
                    <div className="footer__Burger-inner__navigation">
                        <div className="footer__Burger-inner__navigation-block">
                            <Link to="/#terms">Terms & Conditions</Link>
                            <Link to="/#privacy">Privacy Policy</Link>
                            <Link to="/#disclaimer">Disclaimer</Link>
                        </div>
                        <div className="footer__Burger-inner__navigation-block">
                            <Link to="/#contact">Contact Information</Link>
                            <Link to="/#information">Company Information</Link>
                            <Link to="/#about">About Us</Link>
                        </div>
                    </div>
                    <div className="footer__Burger-inner__contacts">
                        <span>
                            <img className="footer__Burger-inner__contacts-icon icon" src={address} alt="decoration icon" />
                            8350 Boulevard Pie-IX, Montreal, <br />
                            QC H1Z 4E8, Canada
                        </span>
                        <span>
                            <img className="footer__Burger-inner__contacts-icon icon" src={phone} alt="decoration icon" />
                            <a href="tel:+1 514-324-1100">+1 514-324-1100</a>
                        </span>
                        <span>
                            <img className="footer__Burger-inner__contacts-icon icon" src={mail} alt="decoration icon" />
                            <a href={`mailto:${emailText}`}>{emailText}</a>
                        </span>
                    </div>
                </div>
            </div>
        </footer>
    )
}