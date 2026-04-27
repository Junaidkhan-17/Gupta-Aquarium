import { BsCheckCircleFill } from "react-icons/bs";
import ServiceCard from "../components/ServiceCard";
import ContactSection from "../components/ContactSection";
import ScrollReveal from "../components/ScrollReveal";
import { aquariumServices, petServices, productData } from "../data/siteData";
import "./ServicesPage.css";

function ServicesPage() {
  return (
    <>
      <section className="page-banner services-banner">
        <div className="container">
          <ScrollReveal>
            <h1>Services & Products</h1>
            <p>
              Aquarium setup, pet services, and top-quality products to support
              healthy and happy pets.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="section-space">
        <div className="container">
          <ScrollReveal>
            <div className="section-head text-center">
              <h2 className="section-title">Aquarium Services</h2>
            </div>
          </ScrollReveal>
          <div className="row g-4">
            {aquariumServices.map((service) => (
              <div className="col-md-6 col-xl-3" key={service.title}>
                <ScrollReveal>
                  <ServiceCard {...service} />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space service-tone">
        <div className="container">
          <ScrollReveal>
            <div className="section-head text-center">
              <h2 className="section-title">Pet Services</h2>
            </div>
          </ScrollReveal>
          <div className="row g-4">
            {petServices.map((service) => (
              <div className="col-md-6 col-xl-4" key={service.title}>
                <ScrollReveal>
                  <ServiceCard {...service} />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        {" "}
        <div className="container">
          {" "}
          <ScrollReveal>
            {" "}
            <div className="products-panel card-premium">
              {" "}
              <h3>Products We Offer</h3>{" "}
              <div className="products-grid">
                {" "}
                {productData.map((product) => (
                  <div className="product-chip" key={product}>
                    {" "}
                    <BsCheckCircleFill /> <span>{product}</span>{" "}
                  </div>
                ))}{" "}
              </div>{" "}
            </div>{" "}
          </ScrollReveal>{" "}
        </div>{" "}
      </section>

      <ContactSection />
    </>
  );
}

export default ServicesPage;
