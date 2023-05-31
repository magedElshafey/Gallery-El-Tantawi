import React from "react";
import style from "../productDetails.module.css";
import installment from "../../../assets/installment.png";
import AddToCart from "../addToCartBtn/AddToCart";
import Sharing from "../SocialMedaSharing/Sharing";
const InfoDetails = ({ data }) => {
  console.log("hello from info details page", window.location.href);
  return (
    <div>
      {/*title*/}
      <p className="fs-3 fw-bold mb-3">{data.title}</p>
      {/*price*/}
      {data.offer ? (
        <div className="d-flex fs-4 gap-4 mb-3">
          <p className="fw-bold red mb-0 p-0">
            {data.originalPrice - data.offer} جنيه
          </p>
          <del className="text-black-50 fw-bold">{data.originalPrice} جنيه</del>
        </div>
      ) : (
        <p className="red mb-3 fw-bold">{data.originalPrice}</p>
      )}
      {/*more details*/}
      <div className="fs-6 text-black-50 mb-3">
        <span className="d-block mb-2">العلامة التجارية : {data.trade}</span>
        <span className="d-block mb-2">النوع : {data.kind}</span>
        <span className="d-block mb-2">
          اللون :{" "}
          {data.colors.map((item, index) => (
            <>
              <span key={index}>{item} </span>
              {index !== data.colors.length - 1 && "-"}{" "}
            </>
          ))}
        </span>
      </div>
      {/*installment*/}
      <div
        className={`d-flex mb-4 align-items-center py-2 ${style.installmentContainer}`}
      >
        <img
          src={installment}
          alt="installment/img"
          className={style.installmentImg}
        />
        <p className="text-black-50 p-0 m-0">تقسيط على فترات متعددة</p>
      </div>
      {/*add to cart*/}
      <div className="w-100 d-flex justify-content-center mb-4">
        <AddToCart payload={data} />
      </div>
      <div className="w-100 d-flex justify-content-center">
        <Sharing link={window.location.href} />
      </div>
    </div>
  );
};

export default InfoDetails;
