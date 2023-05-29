import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import Footer from "./Components/Layout/footer/Footer";
import Branches from "./Pages/Branches";
import Help from "./Pages/Help";
import HelpDetails from "./Pages/HelpDetails";
import Contact from "./Pages/Contact";
import AllOffers from "./Pages/AllOffers";
import FirsrHeader from "./Components/Layout/firstHeader/FirsrHeader";
import SecondHeader from "./Components/Layout/secondHeader/SecondHeader";
import ThirdHeader from "./Components/Layout/thirdHeader/ThirdHeader";
import OfferByCategory from "./Pages/OfferByCategory";
import Regster from "./Pages/Regster";
import Login from "./Pages/Login";
import ProductDetails from "./Pages/ProductDetails";
import BestSaller from "./Pages/BestSaller";
import News from "./Pages/News";
import CartSidebar from "./Components/cart/CartSidebar";
const App = () => {
  // handle scroll to top when page change
  function ScrollToTopAfterChangePage() {
    const { pathname } = useLocation();
    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return null;
  }
  // change direction of the page
  useEffect(() => {
    document.getElementsByTagName("body")[0].style.direction = "rtl";
  }, []);
  // cart details
  const openCart = useSelector((state) => state.cartSlice.openCart);
  const cartItems = useSelector((state) => state.cartSlice.cartItems);
  return (
    <div>
      <Router>
        <ScrollToTopAfterChangePage />
        <FirsrHeader />
        <SecondHeader cartItems={cartItems.length} />
        <ThirdHeader />
        <CartSidebar openCart={openCart} cartItems={cartItems.length} />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/offers" element={<AllOffers />} />
        </Routes>
        <Routes>
          <Route path="/best" element={<BestSaller />} />
        </Routes>
        <Routes>
          <Route path="/new" element={<News />} />
        </Routes>
        <Routes>
          <Route path="/offers/:category" element={<OfferByCategory />} />
        </Routes>
        <Routes>
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
        <Routes>
          <Route path="/branches" element={<Branches />} />
        </Routes>
        <Routes>
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Routes>
          <Route path="/help" element={<Help />} />
        </Routes>
        <Routes>
          <Route path="/help/:details" element={<HelpDetails />} />
        </Routes>
        <Routes>
          <Route path="/create" element={<Regster />} />
        </Routes>
        <Routes>
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
