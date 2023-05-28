import React from "react";
import { allProducts } from "../fakers/data";
import { useParams } from "react-router-dom";
import StaticContent from "../Components/ProductDetails/staticContent/StaticContent";
import MainImg from "../Components/ProductDetails/imgDetails/MainImg";
const ProductDetails = () => {
  const params = useParams();
  const data = allProducts.filter((item) => item.id == params.id);
  return (
    <div className="container py-3">
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <MainImg mainImg={data[0].img} slider={data[0].slider} />
        </div>
        <div className="col-12 col-md-5 mb-4 mb-md-0"></div>
        <div className="col-12 col-md-3 mb-4 mb-md-0">
          <StaticContent />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
