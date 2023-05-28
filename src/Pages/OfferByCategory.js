import React, { useState, useRef } from "react";
import { useParams } from "react-router-dom";
import { allOffers } from "../fakers/data";
import ProductSlider from "../Components/utilites/productSlider/ProductSlider";
import ProductFilter from "../Components/utilites/productFilter/ProductFilter";
const OfferByCategory = () => {
  const [price, setPrice] = useState("");
  const params = useParams();
  const data = allOffers.categories.filter(
    (item) => item.enTitle === params.category
  );
  console.log("hello from data", data);
  const products = price
    ? data[0].products.filter((item) => item.price === price)
    : data[0].products;
  console.log("hello from products", products);
  const sectionRef = useRef(null);
  const handleFilterClick = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  //pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = products.length / usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="py-4 container-fluid">
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

export default OfferByCategory;
