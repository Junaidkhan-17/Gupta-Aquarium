import { FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { MdPhone, MdEmail } from "react-icons/md";
import { businessInfo } from "../data/siteData";
import aquafooterbgremove from "../assets/images/aquafooterbgremove.png";
import newfooterbgremove from "../assets/images/newfooterbgremove.png";
import guptanewlogo from "../assets/images/guptanewlogo.png";
import webdockblacklogo from "../assets/images/webdockblacklogo.png";
import "./Footer.css";

function Footer() {
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
                <FaMapMarkerAlt />
                <span>{businessInfo.contact.location}</span>
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
