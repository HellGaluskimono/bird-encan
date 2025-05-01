import "./Information.scss"

export default function Information () {
    const emailText = `info@${window.location.host}`;
    return (
        <main className="main">
            <section className="information">
                <div className="container">
                    <div className="information-intro">
                        <h1>Company Information</h1>
                    </div>
                    <h2 className="title policy__title">Company Information</h2>
                    <div className="disclaimer-context">
                        <p className="policy__text">
                            White Bird is a Montreal-based company dedicated to providing top-quality cleaning solutions tailored to meet the needs of both residential and commercial clients. With a strong focus on professionalism, efficiency, and eco-friendly practices, we strive to deliver outstanding service and long-term customer satisfaction.
                        </p>
                        <p className="policy__text">
                            Whether it’s a one-time deep clean or a recurring maintenance schedule, our team is committed to excellence at every step. At White Bird, cleanliness is not just a service — it’s a standard.
                        </p>
                        <p className="policy__text">
                            Company Name: White Bird <br />
                            Website: <a href="https://witbird.com" target="_blank" rel="noopener noreferrer" className="underline">https://witbird.com</a> <br />
                            Address: 8350 Boulevard Pie-IX, Montreal, QC H1Z 4E8, Canada <br />
                            Phone: <a href="tel:+15143241100">+1 514-324-1100</a><br />
                            Email: <a href={`mailto:${emailText}`} className="underline">{emailText}</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}