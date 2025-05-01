import "./About.scss"

export default function About() {
    const emailText = `info@${window.location.host}`;

    return (
        <main className="main">
            <section className="about">
                <div className="container">
                    <div className="about-intro">
                        <h1>About Us</h1>
                    </div>
                    <h2 className="title policy__title">About Us</h2>
                    <div className="disclaimer-context">
                        <p className="policy__text">
                            At White Bird, we believe that a clean space is the foundation of a clear mind and a healthier lifestyle. Based in Montreal, our mission is to provide exceptional cleaning services that go beyond surface-level results — we deliver peace of mind, comfort, and care with every visit.                        </p>
                        <p className="policy__text">
                            Our team of experienced professionals is passionate about what they do. Whether it's your home, office, or commercial space, we treat every environment with the same level of attention, precision, and respect it deserves. We use high-quality, eco-friendly products to ensure a safe and sustainable clean.
                        </p>
                        <p className="policy__text">
                            Founded on the principles of trust, reliability, and quality service, White Bird has quickly become a trusted name in the local cleaning industry. We’re not just here to clean — we’re here to make your life easier.
                            <br />
                            Let us take care of the mess so you can focus on what matters most.
                        </p>
                        <p className="policy__text">
                            Contact us:<br />
                            📍 8350 Boulevard Pie-IX, Montreal, QC H1Z 4E8, Canada <br />
                            📞 <a href="tel:+15143241100">+1 514-324-1100</a><br />
                            📧 <a href={`mailto:${emailText}`}>{emailText}</a> <br />
                            🌐 <a href="https://witbird.com" target="_blank" rel="noopener noreferrer">https://witbird.com</a>
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}