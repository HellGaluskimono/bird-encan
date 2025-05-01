import image from "../../assets/images/components/about.webp";
import place from "../../assets/images/icons/place.svg";
import "./About.scss";

const serviceAreas = [
    "Montreal",
    "Rive Sud",
    "Montréal Est",
    "Dorval",
    "Laval",
    "Downtown",
    "Rive Nord",
    "West Island",
];

export default function About() {
    return (
        <section className="about">
            <div className="container">
                <div className="about-wrapper">
                    <img src={image} alt="decoration photo" className="about-image" />
                    <div className="about-description">
                        <h3 className="about-description__title">
                            Professional Cleaning Services in Montreal
                        </h3>
                        <p className="about-description__text text">
                            At White Bird Nettoyages, we combine top-notch cleaning services with unmatched customer service to create a stress free experience.
                            <br />
                            Our mission is clear: consistently exceed your expectations. Whether it’s routine maintenance, a thorough deep clean, assistance with moving in or out, you can rely on us to tailor our services to meet your unique cleaning needs.
                            <br />
                            Why wait? Discover the convenience of booking your next cleaning online and experience White Bird difference today.
                        </p>
                        <span className="about-description__place text">
                            <img src={place} alt="decoration place icon" className="place-icon" />
                            We serve the Greater Montreal Area
                        </span>
                        <ul className="about-description__points-list">
                            {serviceAreas.map((area) => (
                                <li key={area} className="points-list__item pink">
                                    {area}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
