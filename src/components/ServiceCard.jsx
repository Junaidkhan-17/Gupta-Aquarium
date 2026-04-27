import { FaCheckCircle } from "react-icons/fa";
import "./ServiceCard.css";

function ServiceCard({ title, description, image }) {
  return (
    <article className="service-card card-premium">
      <div className="service-img-wrap">
        <img src={image} alt={title} className="service-img" loading="lazy" />
      </div>
      <div className="service-content">
        <h4>{title}</h4>
        <p>{description}</p>
        <div className="service-badge">
          <FaCheckCircle />
          <span>Professional Guidance Included</span>
        </div>
      </div>
    </article>
  );
}

export default ServiceCard;
