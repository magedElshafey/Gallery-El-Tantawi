import React from "react";
import style from "./slider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import { offers } from "../../../fakers/data";
import { Link } from "react-router-dom";
const Slider = () => {
  const swiperOptions = {
    loop: true,
    centeredSlides: true,
    spaceBetween: 0,
    navigation: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 1,
      },
      900: {
        slidesPerView: 1,
      },
      1024: {
        slidesPerView: 1,
      },
    },
  };
  return (
    <div>
      <div className="row justify-content-center">
        <Swiper
          className="mySwiper col-12"
          modules={[Autoplay, Navigation, Pagination]}
          {...swiperOptions}
        >
          {offers.map((item, index) => (
            <SwiperSlide key={index} className={`py-3 w-100 ${style.slider}`}>
              <Link className={style.imgContainer} path={item.path}>
                <img
                  loading="lazy"
                  alt="offers/img"
                  src={item.img}
                  className={style.mainImg}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider;
