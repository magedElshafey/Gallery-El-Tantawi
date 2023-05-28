import React, { useState, useRef } from "react";
import { bestSallers } from "../fakers/data";
import ProductFilter from "../Components/utilites/productFilter/ProductFilter";
import ProductSlider from "../Components/utilites/productSlider/ProductSlider";
const News = () => {
  const [price, setPrice] = useState("");
  const products = price
    ? bestSallers.filter((item) => item.price === price)
    : bestSallers;
  const sectionRef = useRef(null);
  const handleFilterClick = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = products.length / usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="container-fluid py-3">
      <div className="row">
        <div className="col-12 col-md-3">
          <ProductFilter
            handleFilterClick={handleFilterClick}
            setPrice={setPrice}
          />
        </div>
        <div className="col-12 col-md-9">
          <ProductSlider
            data={products}
            isSlider={false}
            path={null}
            title={null}
            sectionRef={sectionRef}
            usersPerPage={usersPerPage}
            pagesVisited={pagesVisited}
            pageCount={pageCount}
            changePage={changePage}
            onClick={handleFilterClick}
          />
        </div>
      </div>
    </div>
  );
};

export default News;
