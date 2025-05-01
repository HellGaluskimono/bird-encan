import { steps, arrowIcon } from './howData';
import './How.scss';

export default function How() {
  return (
    <section className="how">
      <div className="container">
        <h2 className="how-title title" id='how'>How Does It Work?</h2>
        <div className="how-content">
          {steps.map((step, index) => (
            <div className="element-wrapper" key={index}>
              <div className="how-content__element">
                <img
                  src={step.icon}
                  alt={`Step ${step.number} icon`}
                  className="how-content__element-icon icon"
                />
                <span className="how-content__element-numb">{step.number}</span>
                <p className="how-content__element-text text">{step.text}</p>
              </div>
              {index < steps.length - 1 && (
                <img
                  src={arrowIcon}
                  alt="arrow"
                  className="how-content__arrow icon" 
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
