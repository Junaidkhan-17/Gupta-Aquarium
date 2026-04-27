import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { businessInfo } from "../data/siteData";
import homehero from "../assets/images/homehero.png";
import "./HeroSection.css";
import ImageSlider from "./ImageSlider";

function HeroSection() {
  return (
    <section className="hero-section" style={{ backgroundImage: `url(${homehero})` }}>
      <div className="hero-overlay">
        <div className="container">
          <div className="row align-items-center g-4 hero-layout">
            <div className="col-lg-6">
              <div className="hero-content">
                <span className="hero-chip">{businessInfo.tagline}</span>
                <h1>{businessInfo.heroHeading}</h1>
                <p>
                  Healthy pets, premium aquariums, and trusted guidance at one destination in
                  Nagpur. Experience quality care with service expertise built since 2008.
                </p>
                <div className="hero-actions">
                  <Link to="/services" className="btn btn-hero-primary">
                    Explore Services
                    <FaArrowRight />
                  </Link>
                  <a href={`tel:${businessInfo.contact.phone}`} className="btn btn-hero-outline">
                    Call Now
                  </a>
                </div>
              </div>
            </div>

            {/*<div className="col-lg-6 hero-right">
              <div className="image-slider">
                <ImageSlider />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
