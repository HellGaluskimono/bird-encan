import Form from "../Form/Form.jsx";
import icon from "../../assets/images/icons/icon.svg"
import "./Intro.scss"

export default function Intro () {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro-block">
                    <img src={icon} alt="logo icon" className="intro-block__logo icon" />
                    <div className="intro-block__description">
                        <span className="intro-block__description-text pink">
                            Award-Winning Cleaning Services in Montreal
                        </span>
                        <span className="intro-block__description-text">
                            Experience high-quality house cleaning services that
                            <br />
                            exceed your expectations, every single time.
                        </span>
                    </div>
                    <Form/>
                </div>
            </div>
        </section>
    )
}