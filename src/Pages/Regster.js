import React from "react";
import RegForm from "../Components/Regester/RegForm";

const Regster = () => {
  return (
    <div className="container py-3">
      <h3 className="text-center pt-2 mb-4">إنشاء حساب جديد</h3>
      <div className="d-flex justify-content-center align-items-center">
        <RegForm />
      </div>
    </div>
  );
};

export default Regster;
