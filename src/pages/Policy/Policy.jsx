import policyData from './policyData.js';
import PolicySection from './PolicySection.jsx';
import "./Policy.scss"

export default function Policy() {
    const emailText = `info@${window.location.host}`;
  return (
    <main className="main" id="policy">
      <section className="policy">
        <div className="container">
          <div className="policy-intro">
            <h1>Privacy policy</h1>
          </div>
          <h2 className="title policy__title">Privacy Policy</h2>
          <div className="policy-context">
            <p className="policy__text">
              Effective Date: 20.04.2025 <br />
              White Bird Inc.<br />
              8350 Boulevard Pie-IX, Montreal, QC H1Z 4E8, Canada<br />
              Phone: <a href="tel:+15143241100">+1 514-324-1100</a><br />
              Email: <a href={`mailto:${emailText}`}>{emailText}</a><br />
              Website: <a href="https://witbird.com" target="_blank" rel="noopener noreferrer" className="underline">https://witbird.com</a>
            </p>

            {policyData.map((section, index) => (
              <PolicySection key={index} {...section} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
