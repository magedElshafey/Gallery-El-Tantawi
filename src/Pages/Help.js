import React from "react";
import WavyBg from "../Components/utilites/wavyBg/WavyBg";
import HelpDetails from "../Components/help/HelpDetails";

const Help = () => {
  return (
    <div>
      <WavyBg title="مرحبا بك في جاليري الطنطاوي" />
      <div className="container mt">
        <HelpDetails />
      </div>
    </div>
  );
};

export default Help;
