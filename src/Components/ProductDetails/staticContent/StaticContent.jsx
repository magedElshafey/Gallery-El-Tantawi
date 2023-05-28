import React from "react";
import style from "../productDetails.module.css";
const StaticContent = () => {
  return (
    <div className={`p-3 ${style.staticContainer}`}>
      <p className="mb-2 fw-bold">إرجاع مجاني</p>
      <p className="text-black-50 fs-6">
        على جميع المنتجات وتطبق الشروط والأحكام.
      </p>
      <p className="mb-2 fw-bold">شحن مجاني</p>
      <p className="text-black-50 fs-6">لجميع الطلبات الأكثر من 1000 جنيه.</p>
      <p className="mb-2 fw-bold">شحن مجاني</p>
      <p className="text-black-50 fs-6">نضمن خصوصية بياناتك.</p>
    </div>
  );
};

export default StaticContent;
