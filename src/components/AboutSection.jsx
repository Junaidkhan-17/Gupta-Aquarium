import { FaAward, FaClock, FaHandsHelping } from "react-icons/fa";
import { businessInfo } from "../data/siteData";
import "./AboutSection.css";
import aboutfish from "../assets/images/aboutfish.png";

function AboutSection() {
  return (
    <section className="about-section section-space">
      <div className="container">
        <div className="row align-items-center g-4">
          
          {/* LEFT CONTENT */}
          <div className="col-lg-7">
            <h2 className="section-top">Our Story: 2008 to Present</h2>
            <p className="section-text">{businessInfo.about}</p>
            <p className="section-text">{businessInfo.aboutExtended}</p>
          </div>

          {/* RIGHT IMAGE + GLASS CARD */}
          <div
            className="col-lg-5 about-image"
            style={{ backgroundImage: `url(${aboutfish})` }}
          >
            <div className="about-highlights">
              
              <div className="highlight-item">
                <FaClock />
                <div>
                  <h5>15+ Years of Legacy</h5>
                  <p>Established in 2008 and growing with trust.</p>
                </div>
              </div>

              <div className="highlight-item">
                <FaAward />
                <div>
                  <h5>Premium Standards</h5>
                  <p>Quality-focused fish, pets, and accessories.</p>
                </div>
              </div>

              <div className="highlight-item">
                <FaHandsHelping />
                <div>
                  <h5>Personalized Advice</h5>
                  <p>Expert guidance tailored to your pet journey.</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default AboutSection;
