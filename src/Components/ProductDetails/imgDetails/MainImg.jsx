import React, { useState } from "react";
import style from "../productDetails.module.css";
import { AiOutlineClose } from "react-icons/ai";
const MainImg = ({ slider }) => {
  const [selectedImg, setSelectedImg] = useState(0);
  const [modal, setShowModal] = useState(false);
  return (
    <>
      <div className="d-flex flex-column align-items-center gap-3">
        <div className={style.mainImgContainer}>
          <img
            onClick={() => setShowModal(true)}
            alt="main/img"
            src={slider[selectedImg]}
            className={style.mainImg}
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center gap-3">
          {slider.map((item, index) => (
            <div
              onClick={() => setSelectedImg(index)}
              key={index}
              className={style.subImgContainer}
            >
              <img
                src={item}
                alt="subImg"
                loading="lazy"
                className={style.subImg}
              />
            </div>
          ))}
        </div>
      </div>
      {modal && (
        <>
          <div className={style.modal}>
            <AiOutlineClose
              onClick={() => setShowModal(false)}
              size={30}
              className={`pointer ${style.closeIcon}`}
            />
            <div className="w-100 h-100 d-flex justify-content-center align-items-center">
              <img
                alt="selectedImg/img"
                src={slider[selectedImg]}
                className={style.modalImg}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MainImg;
