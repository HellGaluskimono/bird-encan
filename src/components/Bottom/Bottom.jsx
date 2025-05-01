import Form from "../Form/Form.jsx";

import "./Bottom.scss"

export default function Bottom() {
    return (
        <section className="bottom" id="bottom">
            <div className="container">
                <div className="bottom-block">
                    <div className="bottom-block__description">
                        <span className="bottom-block__description-title pink">
                            Ready to delegate?
                        </span>
                        <span className="bottom-block__description-text">
                            Enjoy the peace of mind that comes with high-quality cleaners
                        </span>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}