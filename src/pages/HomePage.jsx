import { FaFish, FaDog, FaShoppingBag, FaStar } from "react-icons/fa";
import HeroSection from "../components/HeroSection";
import CategoryCard from "../components/CategoryCard";
import ScrollReveal from "../components/ScrollReveal";
import { categoryData, whyChooseUs } from "../data/siteData";
import { BsTelephoneFill } from "react-icons/bs";
import "./HomePage.css";

const whyIcons = [FaFish, FaDog, FaShoppingBag, FaStar, FaFish, FaDog];

function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="section-space">
        <div className="container">
          <ScrollReveal>
            <div className="section-head text-center">
              <h2 className="section-title">Featured Categories</h2>
              <p className="section-subtitle">
                Explore fish, pets, tanks, and accessories selected for quality and value.
              </p>
            </div>
          </ScrollReveal>

          <div className="row g-4">
            {categoryData.map((item) => (
              <div className="col-md-6 col-lg-4" key={item.title}>
                <ScrollReveal>
                  <CategoryCard {...item} />
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space why-section">
        <div className="container">
          <ScrollReveal>
            <div className="section-head text-center">
              <h2 className="section-title">Why Choose Us</h2>
              <p className="section-subtitle">
                Trusted by pet owners in Nagpur for healthy pets, reliable advice, and fair pricing.
              </p>
            </div>
          </ScrollReveal>

          <div className="row g-4">
            {whyChooseUs.map((item, index) => {
              const Icon = whyIcons[index];
              return (
                <div className="col-md-6 col-lg-4" key={item.title}>
                  <ScrollReveal>
                    <article className="why-card card-premium">
                      <Icon className="why-icon" />
                      <h4>{item.title}</h4>
                      <p>{item.text}</p>
                    </article>
                  </ScrollReveal>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-strip section-space">
        <div className="container">
          <ScrollReveal>
            <div className="cta-content card-premium">
              <h3>Bring Home Better Aquarium & Pet Care Today</h3>
              <p>
                Visit Gupta Aquarium & Pets Shop for complete solutions in fish, pets, and accessories.
              </p>
              <a href="tel:9372435215" className="btn btn-cta">
                <BsTelephoneFill />
                  9372435215
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}

export default HomePage;
