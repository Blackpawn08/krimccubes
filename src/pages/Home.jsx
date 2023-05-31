import "bootstrap/dist/css/bootstrap.css";
import React, {} from "react";
import Carousel from "../Components/Carousel";
import ImageSlider from "../Components/ImageSlider";
import "./home.css";

export default function Home() {
  return (
    <>
    <div className="image-div">
      <ImageSlider/>
    </div>
    <div className="carousel-div">
      <Carousel/>
    </div>
    </>
  );
}
