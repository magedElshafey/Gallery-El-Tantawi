import React from "react";
import style from "./help.module.css";
import { help } from "../../fakers/data.js";
import { ImBook } from "react-icons/im";
import { Link } from "react-router-dom";
const HelpDetails = () => {
  return (
    <div className="row pt-4 pb-2">
      {help.map((item, index) => (
        <div key={index} className="col-12 col-md-6 col-lg-4 mb-4">
          <div
            className={`d-flex  align-items-center gap-3 fw-bold fs-5 py-3 ${style.titleContainer}`}
          >
            <ImBook size={30} />
            <Link
              to={`/help/${item.title}`}
              className={`text-black ${style.helpLink}`}
            >
              {item.title}
            </Link>
          </div>
          <div className="pt-3">
            {item.subTitle.slice(0, 2).map((item, index) => (
              <div
                key={index}
                className={`d-flex align-items-center gap-3 mb-3`}
              >
                <ImBook className={style.icon} size={15} />
                <Link to="/" className={` ${style.icon} ${style.helpLink}`}>
                  {item.title}
                </Link>
              </div>
            ))}
            {item.subTitle.length > 3 && (
              <Link className="red fs-6" to={`/help/${item.title}`}>
                مشاهدة المزيد ...
              </Link>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default HelpDetails;
