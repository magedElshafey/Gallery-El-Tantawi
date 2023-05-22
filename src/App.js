import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Home from "./Pages/Home";
import Headers from "./Components/Layout/Headers/Headers";
import Footer from "./Components/Layout/footer/Footer";
import Branches from "./Pages/Branches";
import Help from "./Pages/Help";
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

        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Routes>
          <Route path="/branches" element={<Branches />} />
        </Routes>
        <Routes>
          <Route path="/help" element={<Help />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
