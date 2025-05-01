import "./Contacts.scss"
import Bottom from "../../components/Bottom/Bottom.jsx"
export default function Contacts() {
    const emailText = `info@${window.location.host}`;

    return (
        <main className="main">
            <section className="contacts">
                <div className="container">
                    <div className="contacts-intro">
                        <h1>Contact Information</h1>
                    </div>
                    <h2 className="title policy__title">Contact Information</h2>
                    <div className="contacts-context">
                        <p className="policy__text">
                            We’re here to help! Whether you have a question, need a quote, or want to learn more about our services — feel free to reach out. Our team at White Bird is always happy to hear from you.
                        </p>
                        <p className="policy__text">
                            Address:<br />
                            8350 Boulevard Pie-IX <br />
                            Montreal, QC H1Z 4E8 <br />
                            Canada <br />
                            Phone: <br />
                            <a href="tel:+1 514-324-1100">+1 514-324-1100</a> <br /> 
                            <a href={`mailto:${emailText}`} className="underline">{emailText}</a>
                        </p>
                    </div>
                    <Bottom/>
                </div>
            </section>
        </main>
    )
}