import React, { useRef } from "react";
import ServiceCard from "../components/ServiceCard";
import "../styles/services.css";

const Services = () => {
  const scrollRef = useRef();

  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };

  const services = [
    { id: 1, title: "Book Publishing", image: "https://picsum.photos/300/400?1" },
    { id: 2, title: "Architecture Design", image: "https://picsum.photos/300/400?2" },
    { id: 3, title: "AI Development", image: "https://picsum.photos/300/400?3" },
    { id: 4, title: "Web Development", image: "https://picsum.photos/300/400?4" },
    { id: 5, title: "Logo Design", image: "https://picsum.photos/300/400?5" },
  ];

  return (
    <div className="services">
      <h1>Popular Services</h1>

      {/* 🔥 Buttons */}
      <button className="scroll-btn left" onClick={() => scroll("left")}>
        ◀
      </button>

      <div className="services-container" ref={scrollRef}>
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>

      <button className="scroll-btn right" onClick={() => scroll("right")}>
        ▶
      </button>
    </div>
  );
};

export default Services;