import React, { useState, useRef } from "react";
import { allOffers } from "../fakers/data";
import CatCard from "../Components/utilites/cateogryCard/CatCard";
import ProductFilter from "../Components/utilites/productFilter/ProductFilter";
import ProductSlider from "../Components/utilites/productSlider/ProductSlider";
const AllOffers = () => {
  const [price, setPrice] = useState("");
  const products = price
    ? allOffers.allProducts.filter((item) => item.price === price)
    : allOffers.allProducts;
  const sectionRef = useRef(null);
  const handleFilterClick = () => {
    if (sectionRef.current) {
      const sectionTop = sectionRef.current.offsetTop;
      window.scrollTo({ top: sectionTop, behavior: "smooth" });
    }
  };
  // pagination
  const [pageNumber, setPageNumber] = useState(0);
  const usersPerPage = 30;
  const pagesVisited = pageNumber * usersPerPage;
  const pageCount = products.length / usersPerPage;
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <div className="py-4">
      <div className="container-fluid">
        <CatCard title="عروض الطنطاوي" data={allOffers} />
      </div>

      <div className="container-fluid py-5">
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
    </div>
  );
};

export default AllOffers;
/*
  <div >
    
      <div className="row pt-5 mt-5">
       
      </div>
    </div>
*/
