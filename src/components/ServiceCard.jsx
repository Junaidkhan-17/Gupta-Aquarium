import { FaCheckCircle } from "react-icons/fa";
import "./ServiceCard.css";

function ServiceCard({ title, description, image, fullImage = false }) {
  const imageWrapClass = `service-img-wrap${fullImage ? " full-image" : ""}`;
  const imageClass = `service-img${fullImage ? " full-image" : ""}`;

  return (
    <article className="service-card card-premium">
      <div className={imageWrapClass}>
        <img src={image} alt={title} className={imageClass} loading="lazy" />
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
