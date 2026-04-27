import { BsArrowUpRight } from "react-icons/bs";
import "./CategoryCard.css";

function CategoryCard({ title, description, image }) {
  return (
    <article className="category-card card-premium">
      <div className="category-image-wrap">
        <img src={image} alt={title} className="category-image" loading="lazy" />
      </div>
      <div className="category-body">
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="category-link">
          Discover More
          <BsArrowUpRight />
        </span>
      </div>
    </article>
  );
}

export default CategoryCard;
