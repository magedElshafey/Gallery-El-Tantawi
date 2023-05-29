import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// redux
import { Provider } from "react-redux";
import store from "./Redux/store";
// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
// toaser
import { Toaster } from "react-hot-toast";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Toaster position="top-center" reverseOrder={false} />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
