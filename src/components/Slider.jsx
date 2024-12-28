import React from "react";
import {
  Navigation,
  Pagination,
  Thumbs,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import Navbar from "./Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css";
import SwiperTitle from "../utilities/SwiperTitle";
import HeaderIcons from "../utilities/HeaderIcons";

const Slider = ({ sliderItems }) => {
  return (
    <div className="relative overflow-hidden">
      <Navbar />
      <HeaderIcons/>
      <Swiper
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay, Thumbs]}
        className="w-full"
        spaceBetween={0}
        navigation={true}
        pagination={true}
        slidesPerView={1}
        loop={true}
      >
        {sliderItems?.map((sliderItem) => {
          return (
            <SwiperSlide>
              <div key={sliderItem._id} className="overlay">
                <div className="absolute z-10 flex flex-col items-center justify-center w-full h-full gap-10 pt-48 bg-dark_bg">
                  <SwiperTitle
                    number={sliderItem.number}
                    title={sliderItem.title.ar}
                    description={sliderItem.description.ar}
                  />
                </div>
                <img
                  className="object-cover w-full h-screen "
                  src={sliderItem.image}
                  alt=""
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Slider;
