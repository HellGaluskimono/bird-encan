import { whatSteps } from './whatData'
import './What.scss'

export default function What() {
  return (
    <section className="what" id='what'>
      <div className="container">
        <h2 className="what-title title">What Services Do We Offer?</h2>
        <div className="what-content">
          {whatSteps.map((step, index) => (
            <div className="what-content__element" key={index}>
              <img
                src={step.icon}
                alt={`${step.title} icon`}
                className="what-content__element-icon icon"
              />
              <span className="what-content__element-title subtitle">{step.title}</span>
              <p className="what-content__element-text text">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
