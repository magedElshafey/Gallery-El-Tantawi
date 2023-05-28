import React from "react";
import style from "./helpinside.module.css";
import { Link } from "react-router-dom";
import { BsFillBookmarkFill } from "react-icons/bs";
const HelpInside = ({ data }) => {
  return (
    <div className=" pb-5 pt-3">
      {data.map((item, index) => (
        <Link to="/" key={index} className={`mb-3 ${style.mainContainer}`}>
          <div>
            <p className="text-black mb-3 fw-bold fs-3">{item.title}</p>
            <p className="lh">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HelpInside;
