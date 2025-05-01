import termsData from './termsData.js';
import TermsSection from './TermsSection.jsx';

import './Terms.scss';

export default function Terms() {
    const emailText = `info@${window.location.host}`;

    return (
        <main className="main">
            <section className="terms">
                <div className="container">
                    <div className="terms-intro">
                        <h1>Terms of Service</h1>
                    </div>
                    <h2 className="title policy__title">Terms and Conditions</h2>
                    <div className="terms-context">
                        <p className="policy__text">
                            Effective Date: 20.04.2025 <br />
                            White Bird Inc.<br />
                            8350 Boulevard Pie-IX, Montreal, QC H1Z 4E8, Canada<br />
                            Phone: <a href="tel:+15143241100">+1 514-324-1100</a><br />
                            Email: <a href={`mailto:${emailText}`} className="underline">{emailText}</a>
                            Website: <a href="https://witbird.com" target="_blank" rel="noopener noreferrer" className="underline">https://witbird.com</a>
                        </p>

                        {termsData.map((section, index) => (
                            <TermsSection key={index} {...section} />
                        ))}

                        <div className="policy-section">
                            <p className="policy__text point">
                                11. Contact Information
                            </p>
                            <p className="policy__text">
                                For questions about these Terms, please contact us at:
                                <br />
                                📧 <a href={`mailto:${emailText}`}>{emailText}</a>
                                <br />
                                📞 <a href="tel:+1 514-324-1100">+1 514-324-1100</a>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}