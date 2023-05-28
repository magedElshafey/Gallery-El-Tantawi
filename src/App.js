import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";

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
  return (
    <div>
      <Router>
        <ScrollToTopAfterChangePage />
        <FirsrHeader />
        <SecondHeader />
        <ThirdHeader />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/offers" element={<AllOffers />} />
        </Routes>
        <Routes>
          <Route path="/offers/:category" element={<OfferByCategory />} />
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
        <Footer />
      </Router>
    </div>
  );
};

export default App;
