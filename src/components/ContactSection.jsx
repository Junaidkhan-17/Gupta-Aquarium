import { FaMapMarkedAlt } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";
import { businessInfo } from "../data/siteData";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section section-space">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-5">
            <div className="contact-card card-premium">
              <h3>Visit or Call Us</h3>
              <p>Quick support for aquarium setups, pet availability, and product guidance.</p>
              <ul>
                <li>
                  <FaMapMarkedAlt />
                  <span>{businessInfo.contact.location}</span>
                </li>
                <li>
                  <MdPhone />
                  <a href={`tel:${businessInfo.contact.phone}`}>{businessInfo.contact.phone}</a>
                </li>
                <li>
                  <MdEmail />
                  <a href={`mailto:${businessInfo.contact.email}`}>{businessInfo.contact.email}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="map-placeholder card-premium">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1400&q=80"
                alt="Nagpur map placeholder"
                loading="lazy"
              />
              <div className="map-overlay">
                <h4>Map Placeholder</h4>
                <p>Near Gol Bazar, Gaddi Godam, Nagpur</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
