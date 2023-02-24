import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const TestimonialCarousel = ({ slider }) => {
  return (
    <Carousel
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      autoPlay={false}
      infiniteLoop={true}
      className="w-full max-w-[1024px] flex items-center justify-center "
    >
      {slider.map((item, index) => {
        return (
          <div key={index} className="max-w-[840px] mx-auto px-24 text-white">
            <div className="text-lg mb-9 lg:text-2xl leading-snug ">
              {item.message}
            </div>

            <div className="max-w-[70px] lg:max-w-[100px] mx-auto mb-3">
              <img src={item.image} alt="" />
            </div>

            <div className="font-bold text-[22px] text-accent">{item.name}</div>
            <div className="font-medium italic">{item.occupation}</div>
          </div>
        );
      })}
    </Carousel>
  );
};

export default TestimonialCarousel;
