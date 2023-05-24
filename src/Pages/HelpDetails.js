import React from "react";
import { useParams } from "react-router-dom";
import { help } from "../fakers/data";
import WavyBg from "../Components/utilites/wavyBg/WavyBg";
import HelpInside from "../Components/helpDetails/HelpInside";
const HelpDetails = () => {
  const params = useParams();
  const data = help.filter((item) => item.title === params.details);

  return (
    <div>
      <WavyBg title={data[0].title} />
      <div className="container main mt bg-light">
        <HelpInside data={data[0].insideContent} />
      </div>
    </div>
  );
};

export default HelpDetails;
