import { useState } from "react";
import openIcon from "../../assets/images/icons/faq-open.svg";
import closeIcon from "../../assets/images/icons/faq-close.svg";
import { faqData } from "./faqData";

import "./Faq.scss";

export default function Faq() {
    const [openIndexes, setOpenIndexes] = useState([]);

    const toggleAccordion = (index) => {
        setOpenIndexes((prev) =>
            prev.includes(index)
                ? prev.filter((i) => i !== index)
                : [...prev, index]
        );
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <h2 className="faq-title title">FAQ</h2>
                <div className="faq-list">
                    {faqData.map((item, index) => {
                        const isOpen = openIndexes.includes(index);

                        return (
                            <div className="faq-list__elem" key={index}>
                                <button
                                    className="faq-list__elem-title"
                                    onClick={() => toggleAccordion(index)}
                                    aria-expanded={isOpen}
                                    aria-controls={`faq-content-${index}`}
                                >
                                    <span>{item.title}</span>
                                    <img
                                        src={isOpen ? closeIcon : openIcon}
                                        alt={isOpen ? "Close icon" : "Open icon"}
                                        className="faq-list__elem-title__icon icon"
                                    />
                                </button>
                                {isOpen && (
                                    <div
                                        className={`faq-list__elem-text text ${index !== 0 ? "with-spacing" : ""}`}
                                        id={`faq-content-${index}`}
                                    >
                                        {item.text.split("\n\n").map((paragraph, i) => (
                                            <p key={i}>{paragraph}</p>
                                        ))}
                                    </div>
                                )}

                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
