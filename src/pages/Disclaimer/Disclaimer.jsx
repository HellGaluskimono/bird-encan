import "./Disclaimer.scss"

export default function Disclaimer () {
    const emailText = `info@${window.location.host}`;

    return (
        <main className="main">
            <section className="disclaimer">
                <div className="container">
                    <div className="disclaimer-intro">
                        <h1>Disclaimer</h1>
                    </div>
                    <h2 className="title policy__title">Disclaimer</h2>
                    <div className="disclaimer-context">
                        <p className="policy__text">
                            The information provided on this website (https://witbird.com) is for general informational purposes only. All content is published in good faith and for general use. White Bird makes no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability with respect to the website or the information contained on it.
                            <br />
                            Any reliance you place on such information is strictly at your own risk. White Bird will not be liable for any losses and/or damages in connection with the use of our website.
                        </p>
                        <p className="policy__text">
                            This website may contain links to external websites that are not provided or maintained by or in any way affiliated with White Bird. Please note that we do not guarantee the accuracy, relevance, timeliness, or completeness of any information on these external websites.
                        </p>
                        <p className="policy__text">
                            If you have any questions or concerns, please contact us:
                            <br />
                            Address: 8350 Boulevard Pie-IX, Montreal, QC H1Z 4E8, Canada 
                            <br />
                            Phone: <a href="tel:+1 514-324-1100">+1 514-324-1100</a> 
                            <br />
                            Email: <a href={`mailto:${emailText}`} className="underline">{emailText}</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}