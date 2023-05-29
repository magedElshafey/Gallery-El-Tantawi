import React from "react";
import { allProducts } from "../fakers/data";
import { useParams } from "react-router-dom";
import StaticContent from "../Components/ProductDetails/staticContent/StaticContent";
import MainImg from "../Components/ProductDetails/imgDetails/MainImg";
import InfoDetails from "../Components/ProductDetails/info/InfoDetails";
import Tabs from "../Components/ProductDetails/tabs/Tabs";
const ProductDetails = () => {
  const params = useParams();
  const data = allProducts.filter((item) => item.id == params.id);
  return (
    <div className="container py-3">
      <span className="d-inline-block text-black-50 mb-3">{data[0].title}</span>
      <div className="bg-light py-3 rounded row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <MainImg mainImg={data[0].img} slider={data[0].slider} />
        </div>
        <div className="col-12 col-md-6 mb-4 mb-md-0">
          <InfoDetails data={data[0]} />
        </div>
        <div className="col-12 col-md-2 mb-4 mb-md-0">
          <StaticContent />
        </div>
      </div>
      <div className="bg-light mt-5 rounded">
        <Tabs desc={data[0].desc} questions={data[0].questions} />
      </div>
    </div>
  );
};

export default ProductDetails;
