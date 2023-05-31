import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './imageslider.css';


const ImageSlider = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  const goToNextSlide = () => {
    sliderRef.current.slickNext();
  };

  const goToPrevSlide = () => {
    sliderRef.current.slickPrev();
  };

  React.useEffect(() => {
    const interval = setInterval(goToNextSlide, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="slider-container">
      <Slider {...settings} ref={sliderRef}>
        <div>
          <img className='images' src="../public/rubiks/image1.png" alt="Image 1" />
        </div>
        <div>
          <img className='images' src="../public/rubiks/image2.png" alt="Image 2" />
        </div>
        <div>
          <img className='images' src="../public/rubiks/image3.png" alt="Image 3" />
        </div>
        <div>
          <img className='images' src="../public/rubiks/image4.png" alt="Image 4" />
        </div>
        <div>
          <img className='images' src="../public/rubiks/image5.png" alt="Image 5" />
        </div>
      </Slider>
      <button className="slider-button prev-button" onClick={goToPrevSlide}>
        <img className='arrow-btn' src="../public/rubiks/arrow-left.png"/>
      </button>
      <button className="slider-button next-button" onClick={goToNextSlide}>
      <img className='arrow-btn' src="../public/rubiks/arrow-right.png"/>
      </button>
    </div>
  );
};

export default ImageSlider;
