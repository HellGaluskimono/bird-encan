import { Link } from "react-router-dom"
import LogoImg from "../../assets/images/icons/logo.svg";
import "./Logo.scss"

export default function Logo() {
    return (
        <Link to="/" className="logo">
            <img src={LogoImg} alt="Logo icon" />
        </Link>
    )
}
