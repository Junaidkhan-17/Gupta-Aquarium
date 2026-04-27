import AboutSection from "../components/AboutSection";
import ScrollReveal from "../components/ScrollReveal";
import { aboutGallery } from "../data/siteData";
import "./AboutPage.css";
import abouthero from "../assets/images/abouthero.jpg";
import aboutfish from "../assets/images/aboutfish.png";

function AboutPage() {
  return (
    <>
      <section
        className="page-banner about-banner"
        style={{ backgroundImage: `url(${abouthero})` }}
      >
        <div className="container">
          <ScrollReveal>
            <h1>About Gupta Aquarium & Pets Shop</h1>
          </ScrollReveal>
          <ScrollReveal>
            <h5>
              Offering healthy cats, dogs, birds, and a wide variety of
              fishes.{" "}
            </h5>
            <h5>
              We also provide aquariums, fish tanks, pet food, and
              accessories.{" "}
            </h5>
            <h5>
              {" "}
              Visit us near Golbazar, Nagpur for quality pets, expert guidance,
              and affordable prices.
            </h5>
            <p>
              From 2008 to today, our mission is healthy pets, quality products,
              and honest advice.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <AboutSection />

      <section className="section-space">
        <div className="container">
          <ScrollReveal>
            <div className="section-head text-center">
              <h2 className="section-title">Trust & Product Gallery</h2>
              <p className="section-subtitle">
                A visual look at aquarium life, pet companionship, and premium
                Products.
              </p>
            </div>
          </ScrollReveal>
          <div className="row g-4">
            {aboutGallery.map((item, index) => (
              <div className="col-sm-6 col-lg-3" key={index}>
                <ScrollReveal>
                  <div className="gallery-card card-premium">
                    <img src={item.image} alt={item.title} loading="lazy" />

                    <div className="gallery-content">
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutPage;
