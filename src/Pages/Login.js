import React from "react";
import LoginForm from "../Components/login/LoginForm";

const Login = () => {
  return (
    <div className="container py-3">
      <h3 className="text-center pt-2 mb-4">تسجيل دخزل العميل</h3>
      <div className="d-flex justify-content-center align-items-center">
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
