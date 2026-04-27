import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import "./ImageSlider.css";

const images = [
  "https://images.unsplash.com/photo-1544551763-46a013bb70d5",
  "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5",
  "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  "https://images.unsplash.com/photo-1517849845537-4d257902454a",
  "https://images.unsplash.com/photo-1444212477490-ca407925329e",
];

const ImageSlider = () => {
  const sliderRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(2);

  useEffect(() => {
    animateSlides();
  }, [activeIndex]);

  const animateSlides = () => {
    sliderRef.current.forEach((slide, index) => {
      if (!slide) return;

      if (index === activeIndex) {
        // Center Image (Focus)
        gsap.to(slide, {
          scale: 1,
          opacity: 1,
          zIndex: 5,
          x: 0,
          duration: 0.5,
        });
      } else if (index < activeIndex) {
        // Left side (hidden/faded)
        gsap.to(slide, {
          scale: 0.7,
          opacity: 0.3,
          x: -150,
          zIndex: 1,
          duration: 0.5,
        });
      } else {
        // Right side (hidden/faded)
        gsap.to(slide, {
          scale: 0.7,
          opacity: 0.3,
          x: 150,
          zIndex: 1,
          duration: 0.5,
        });
      }
    });
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <div className="image-slider-shell text-center">
      <h2 className="mb-4 fw-bold">Our Gallery</h2>

      <div className="slider-wrapper position-relative d-flex justify-content-center align-items-center">
        {images.map((img, index) => (
          <div
            key={index}
            ref={(el) => (sliderRef.current[index] = el)}
            className="slide-card"
          >
            <img src={img} alt="pet" className="img-fluid rounded" />
          </div>
        ))}
      </div>

      <div className="mt-4">
        <button className="btn btn-primary mx-2" onClick={prevSlide}>
          Prev
        </button>
        <button className="btn btn-dark mx-2" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ImageSlider;
