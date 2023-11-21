import React from 'react';
import Slider from 'react-slick';
import './Slider.css';

const Slide = ({ image, description, name }) => (
  <div className="slide">
    <p className="slide__description">{description}</p>
    <div>
      <img src={image} alt="" />
      <p className="slide__name">{name}</p>
    </div>
  </div>
);

const settings = {
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true, 
  autoplaySpeed: 2000,
};

const CustomSlider = ({ slides }) => {
  return (
    <Slider {...settings}>
      {slides.map((slide, index) => (
        <Slide key={index} {...slide} />
      ))}
    </Slider>
  );
};

export default CustomSlider;
