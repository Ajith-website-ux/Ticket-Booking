import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css";
import img1 from './Avengers.jpg';
import img2 from './Spiderman.jpg';
import img3 from './HP7.jpg';
import img4 from './Avatar.jpg';

// Shared Styles for Slides
const contentStyle = {
  height: '80vh', // Adjusts height to viewport height
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundSize: 'cover',
  backgroundPosition: 'center', // Ensures the image stays centered
};

// Styles for Each Slide with Background Images
const slides = [
  { style: { ...contentStyle, backgroundImage: `url(${img1})` } },
  { style: { ...contentStyle, backgroundImage: `url(${img2})` } },
  { style: { ...contentStyle, backgroundImage: `url(${img3})` } },
  { style: { ...contentStyle, backgroundImage: `url(${img4})` } },
];

const CarouselPage = () => {
  return (
    <div style={{ padding: "16px" }}>
      <Carousel autoplay className="carousel">
        {slides.map((slide, index) => (
          <div key={index}>
            <div style={slide.style}></div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselPage;
