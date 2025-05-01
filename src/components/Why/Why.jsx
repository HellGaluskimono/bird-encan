import { whySteps } from './whyData';
import './Why.scss';

export default function Why() {
  return (
    <section className="why">
      <div className="container">
        <h2 className="why-title title">Why Choose White Bird Nettoyages?</h2>
        <div className="why-content">
          {whySteps.map((step, index) => (
            <div className="why-content__element" key={index}>
              <img
                src={step.icon}
                alt={`Step ${step.number} icon`}
                className="why-content__element-icon icon"
              />
              <span className="why-content__element-title subtitle">{step.title}</span>
              <span className="why-content__element-numb pink">{step.number}</span>
              <p className="why-content__element-text text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
