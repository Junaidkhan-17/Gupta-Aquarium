import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { businessInfo } from "../data/siteData";
import aquafooterbgremove from "../assets/images/aquafooterbgremove.png";
import newfooterbgremove from "../assets/images/newfooterbgremove.png";
import guptanewlogo from "../assets/images/guptanewlogo.png";
import webdockblacklogo from "../assets/images/webdockblacklogo.png";
import "./Footer.css";

function Footer() {
  const mapUrl =
    businessInfo.contact.mapUrl ||
    "https://www.google.com/maps/place/Gupta+Aquarium+And+Pets+Shop+in+Nagpur/@21.1611844,79.0841293,20.48z/data=!4m12!1m5!3m4!2zMjHCsDA5JzM5LjkiTiA3OcKwMDUnMDMuMiJF!8m2!3d21.1610867!4d79.0842181!3m5!1s0x3bd4c0e7208023b1:0x407a107ccff78157!8m2!3d21.1612123!4d79.0843027!16s%2Fg%2F11b5yx7ppb?hl=en&entry=ttu&g_ep=EgoyMDI2MDQyNy4wIKXMDSoASAFQAw%3D%3D";

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-md-5">
            <img
              src={guptanewlogo}
              className="footer-logo"
              alt="Aquarium"
            />
            <h5>{businessInfo.name}</h5>
            <p>{businessInfo.tagline}</p>
            <div className="social-list">
              <a href="#" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="col-md-7 footer-contact-col">
            <ul className="contact-list">
              <li>
                <a
                  className="location-link"
                  href={mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Open shop location on Google Maps"
                >
                  <FaMapMarkerAlt />
                  {businessInfo.contact.location}
                </a>
              </li>
              <li>
                <MdPhone />
                <a href={`tel:${businessInfo.contact.phone}`}>
                  {businessInfo.contact.phone}
                </a>
              </li>
              <li>
                <MdEmail />
                <a href={`mailto:${businessInfo.contact.email}`}>
                  {businessInfo.contact.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="webdock-logo">
            <h4>Powered by</h4>
            <a
              href="https://webdockstudios.com/"
              className="link"
              aria-label="Back to top"
            >
              <img src={webdockblacklogo} className="webdock" alt="Powered by" />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <small>
            {new Date().getFullYear()} {businessInfo.name}. All rights reserved.
          </small>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

