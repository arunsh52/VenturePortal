import React from 'react';
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg"
import img2 from "../assets/4.jpg"

const Service = () => {
  return (
    <div>
      <Carousel 
        infiniteLoop 
        autoPlay 
        showStatus={false} 
        showArrows={false} 
        showThumbs={false}
        showIndicators={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Items1" />
          <p className="legend">Full Stack</p>
        </div>

        <div>
          <img src={img2} alt="Items2" />
          <p>Peer-to-Peer support</p>
        </div>
      </Carousel>
    </div>
  )
}

export default Service