import { useState, useEffect } from "react";
import { useModal } from "../../context/ModalContext";
import Loader from "@/assets/images/loader.svg";
import "./Modal.scss";
import getImageURL from "@/utils/getImageUrl";

export default function Modal() {
    const { isModalOpen, closeModal } = useModal();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (isModalOpen) {
            setLoading(true);
            setTimeout(() => setLoading(false), 3000);
            document.body.classList.add('hidden');
        } else {
            document.body.classList.remove('hidden');
        }
        return () => {
            document.body.classList.remove('hidden');
        };
    }, [isModalOpen]);

    return (
        <div className={`modal ${isModalOpen ? "open" : ""}`}>
            {loading ? (
                <div className="modal-loader">
                    <img src={Loader} alt="" />
                </div>
            ) : (
                <div className="modal__inner">
                    <button className="modal__close" onClick={closeModal}>
                        <img src={getImageURL("close.svg")} alt='close' loading='lazy' />
                    </button>
                    <div className="modal__checkmark">
                        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="61" viewBox="0 0 60 61" fill="none">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M30.0001 60.0834C13.6612 60.0834 0.416748 46.8389 0.416748 30.5C0.416748 14.1611 13.6612 0.916687 30.0001 0.916687C46.339 0.916687 59.5834 14.1611 59.5834 30.5C59.5834 46.8389 46.339 60.0834 30.0001 60.0834ZM26.5181 36.8309L18.3383 28.6451L15.2084 31.7751L24.4355 41.008C24.9902 41.5626 25.7426 41.8742 26.527 41.8742C27.3114 41.8742 28.0638 41.5626 28.6185 41.008L46.2265 23.4059L43.0848 20.2642L26.5181 36.8309Z" fill="#FD6A96" />
                        </svg>
                    </div>
                    <h3 className="modal__title">
                        Thank you for your registration!
                    </h3>
                    <p className="modal__subtitle">
                        <b>We have sent you a confirmation email.</b>
                    </p>
                    <p className="modal__text">
                        Please check your inbox (and spam folder if necessary) and confirm your registration to proceed.
                    </p>
                </div>
            )}
        </div>
    );
}
