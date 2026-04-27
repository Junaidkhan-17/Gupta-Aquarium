import { useEffect, useRef, useState } from "react";
import "./ScrollReveal.css";

function ScrollReveal({ children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );

    if (targetRef.current) observer.observe(targetRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={targetRef} className={`reveal-wrap ${isVisible ? "visible" : ""} ${className}`}>
      {children}
    </div>
  );
}

export default ScrollReveal;
