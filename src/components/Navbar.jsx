import { useCallback } from "react";
import { NavLink } from "react-router-dom";
import Collapse from "bootstrap/js/dist/collapse";
import { FiPhoneCall } from "react-icons/fi";
import { businessInfo, navLinks } from "../data/siteData";
import guptanewlogo from "../assets/images/guptanewlogo.png";
import "./Navbar.css";

function Navbar() {
  const closeNavbarMenu = useCallback(() => {
    const navbarCollapseEl = document.getElementById("navbarMain");

    if (!navbarCollapseEl || !navbarCollapseEl.classList.contains("show")) {
      return;
    }

    const collapse = Collapse.getOrCreateInstance(navbarCollapseEl);
    collapse.hide();
  }, []);

  const handleNavLinkClick = useCallback(() => {
    closeNavbarMenu();
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [closeNavbarMenu]);

  return (
    <nav className="navbar navbar-expand-lg sticky-top premium-navbar">
      <div className="container">
        <NavLink to="/" className="navbar-brand brand-wrap">
          <span className="brand-name">
            <img src={guptanewlogo} className="nav-img" alt="" />
          </span>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMain"
          aria-controls="navbarMain"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarMain">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {navLinks.map((link) => (
              <li className="nav-item" key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `nav-link premium-nav-link ${isActive ? "active" : ""}`
                  }
                  onClick={handleNavLinkClick}
                >
                  {link.title}
                </NavLink>
              </li>
            ))}
            <li className="nav-item ms-lg-3 mt-3 mt-lg-0">
              <a className="btn btn-call" href={`tel:${businessInfo.contact.phone}`}>
                <FiPhoneCall />
                <span>{businessInfo.contact.phone}</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
