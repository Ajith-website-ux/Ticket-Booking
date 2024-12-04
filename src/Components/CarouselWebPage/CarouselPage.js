import React from "react";
import { Carousel } from "antd";
import "antd/dist/reset.css"; 
import img1 from './Avengers.jpg';
import img2 from './Spiderman.jpg';
import img3 from './HP7.jpg';
import img4 from './Avatar.jpg';

// Styles for each slide with background images
const contentStyle1 = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: `url(${img1})`,
  backgroundSize: 'cover',
};

const contentStyle2 = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: `url(${img2})`,
  backgroundSize: 'cover',
};

const contentStyle3 = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: `url(${img3})`,
  backgroundSize: 'cover',
};

const contentStyle4 = {
  height: '80vh',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  backgroundImage: `url(${img4})`,
  backgroundSize: 'cover',
};

const CarouselPage = () => {
  return (
   <div className="row">
    <div className="col-lg">
    <div  style={{ padding: "24px" }}>
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle1}></h3>
      </div>
      <div>
        <h3 style={contentStyle2}></h3>
      </div>
      <div>
        <h3 style={contentStyle3}></h3>
      </div>
      <div>
        <h3 style={contentStyle4}></h3>
      </div>
    </Carousel>
  </div>
    </div>
   </div>
  );
};

export default CarouselPage;
