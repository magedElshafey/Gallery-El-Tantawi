import React from "react";
import style from "./productSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Navigation, Pagination } from "swiper";
import MoreBtn from "../MoreBtn/MoreBtn";
import { Link } from "react-router-dom";
import ReactPaginate from "react-paginate";
const ProductSlider = ({
  title,
  data,
  path,
  isSlider,
  sectionRef,
  pagesVisited,
  usersPerPage,
  pageCount,
  changePage,
  onClick,
}) => {
  const swiperOptions = {
    loop: true,
    centeredSlides: false,
    spaceBetween: 8,
    navigation: true,
    autoplay: {
      delay: 10000,
      disableOnInteraction: false,
    },
    pagination: {
      clickable: true,
    },
    breakpoints: {
      500: {
        slidesPerView: 1.8,
      },
      768: {
        slidesPerView: 2.4,
      },
      900: {
        slidesPerView: 3,
      },
      1024: {
        slidesPerView: 5.5,
      },
    },
    scrollbar: {
      el: ".swiper-scrollbar", // Reference to the scrollbar element
      hide: false, // Show the scrollbar
    },
  };
  return (
    <div ref={sectionRef} className="py-3 container">
      {isSlider ? (
        <div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <p className="fw-bold fs-4">{title}</p>
            <MoreBtn path={path} />
          </div>
          <div className="row">
            <Swiper
              className="mySwiper col-12"
              modules={[Autoplay, Navigation, Pagination]}
              {...swiperOptions}
            >
              {data.map((item, index) => (
                <SwiperSlide
                  key={index}
                  className={`p-2 ${style.mainContainer}`}
                >
                  <Link
                    className="p-0 m-0 w-100 d-flex justify-content-center position-relative"
                    to={`/best/${item.id}`}
                  >
                    <img
                      loading="lazy"
                      alt="product/img"
                      src={item.img}
                      className={`m-3 ${style.mainImg}`}
                    />
                    {item.offer ? (
                      <p className={style.bestPrice}>أفضل سعر</p>
                    ) : (
                      ""
                    )}
                  </Link>
                  {item.limited ? (
                    <p className={`px-2 mb-2 ${style.limited}`}>
                      العرض مستمر لفترة محدودة
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="lh px-2 mb-0">{item.title}</p>
                  {item.colors.map((item, index) => (
                    <p
                      key={index}
                      className="d-inline-block text-black-50 px-2"
                    >
                      {item}{" "}
                    </p>
                  ))}
                  {item.offer ? (
                    <div className="d-flex justify-content-between align-items-center px-2">
                      <p className="fw-bold red fs-6 m-0 ">
                        {item.originalPrice - item.offer} جنيه
                      </p>
                      <del className="fw-bold fs-6">
                        {item.originalPrice} جنيه
                      </del>
                    </div>
                  ) : (
                    <p className="fw-bold red fs-6 px-2">
                      {item.originalPrice} جنيه
                    </p>
                  )}
                  {item.freeShipping && (
                    <p className={`mx-2 my-4 ${style.free}`}>شحن مجاني</p>
                  )}
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      ) : (
        <div>
          <div className="row">
            {data
              .slice(pagesVisited, pagesVisited + usersPerPage)
              .map((item, index) => (
                <div
                  className={`col-12 p-2 col-sm-6 col-md-4 col-lg-3 ${style.mainContainer}`}
                  key={index}
                >
                  <Link
                    className="p-0 m-0 w-100 d-flex justify-content-center position-relative"
                    to={`/products/${item.id}`}
                  >
                    <img
                      loading="lazy"
                      alt="product/img"
                      src={item.img}
                      className={`m-3 ${style.mainImg}`}
                    />
                    {item.offer ? (
                      <p className={style.bestPrice}>أفضل سعر</p>
                    ) : (
                      ""
                    )}
                  </Link>
                  {item.limited ? (
                    <p className={`px-2 mb-2 ${style.limited}`}>
                      العرض مستمر لفترة محدودة
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="lh px-2 mb-0">{item.title}</p>
                  {item.colors.map((item, index) => (
                    <p
                      key={index}
                      className="d-inline-block text-black-50 px-2"
                    >
                      {item}{" "}
                    </p>
                  ))}
                  {item.offer ? (
                    <div className="d-flex justify-content-between align-items-center px-2">
                      <p className="fw-bold red fs-6 m-0 ">
                        {item.originalPrice - item.offer} جنيه
                      </p>
                      <del className="fw-bold fs-6">
                        {item.originalPrice} جنيه
                      </del>
                    </div>
                  ) : (
                    <p className="fw-bold red fs-6 px-2">
                      {item.originalPrice} جنيه
                    </p>
                  )}
                  {item.freeShipping && (
                    <p className={`mx-2 my-4 ${style.free}`}>شحن مجاني</p>
                  )}
                </div>
              ))}
          </div>
          <div className="pt-5   text-center">
            <ReactPaginate
              previousLabel={"السابق"}
              nextLabel={"التالي"}
              pageCount={pageCount}
              onPageChange={changePage}
              containerClassName={"paginationBttns"}
              previousLinkClassName={"previousBttn"}
              nextLinkClassName={"nextBttn"}
              disabledClassName={"paginationDisabled"}
              activeClassName={"paginationActive"}
              breakLabel="..."
              onClick={onClick}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductSlider;
/**
 * 
 *  <div className="d-flex justify-content-between align-items-center mb-3">
        <p className="fw-bold fs-4">{title}</p>
        <MoreBtn path={path} />
      </div>
      <div className="row">
        <Swiper
          className="mySwiper col-12"
          modules={[Autoplay, Navigation, Pagination]}
          {...swiperOptions}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index} className={`p-2 ${style.mainContainer}`}>
              <Link
                className="p-0 m-0 w-100 d-flex justify-content-center position-relative"
                to={`/best/${item.id}`}
              >
                



              
              </Link>
              


              
              


              
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
 */
