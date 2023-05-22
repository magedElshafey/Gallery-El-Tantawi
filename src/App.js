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
        <Headers />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
