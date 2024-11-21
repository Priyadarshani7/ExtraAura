import React from "react";
import main1 from "../assets/main1.png";
import main2 from "../assets/main2.png";
import main3 from "../assets/main3.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function ImageCarousel() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        interval={2000}
        infiniteLoop={true}
        showThumbs={false}
      >
        <div>
          <img src={main1} alt=" 1" />
        </div>
        <div>
          <img src={main2} alt=" 2" />
        </div>
        <div>
          <img src={main3} alt=" 3" />
        </div>
      </Carousel>
    </div>
  );
}

export default ImageCarousel;
