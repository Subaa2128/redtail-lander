import React from "react";
import "./Hero.scss";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";
import { HeroContent } from "./data";

const Hero: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={pagination}
      modules={[Autoplay, Pagination]}
      className="mySwiper"
    >
      <>
        {HeroContent.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="hero-container">
              <img src={slide.image} alt="" />

              <div className="mx">
                <div className="hero">
                  <div className="hero-wrapper">
                    <div className="hero-content">
                      <h1>{slide.heading}</h1>

                      <div className="content">
                        <h4>{slide.content}</h4>
                      </div>
                      <Button
                        children="Get a quote"
                        variant="primary"
                        onClick={() => scrollToSection("quote")}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </>
    </Swiper>
  );
};

export default Hero;
