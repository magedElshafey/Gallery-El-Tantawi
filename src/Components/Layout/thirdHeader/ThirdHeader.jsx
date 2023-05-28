import React, { useState } from "react";
import style from "./theader.module.css";
import { categories } from "../../../fakers/data";
import { IoMdArrowDropdown } from "react-icons/io";
import MegaMenu from "../../utilites/megaMenu/MegaMenu";
const ThirdHeader = () => {
  const [itemHover, setItemHover] = useState(null);

  return (
    <div className={`d-none d-md-block py-2 ${style.mainContainer}`}>
      <div className="container d-flex align-items-center">
        {/*main content*/}

        <ul className="w-100 d-flex align-items-center justify-content-between text-white">
          {categories.map((item, index) => (
            <>
              <li
                onMouseEnter={() => setItemHover(item.id)}
                onMouseLeave={() => setItemHover(null)}
                key={index}
                className="text-white fw-bold pointer position-relative"
              >
                {item.title}{" "}
                {item.subCategories.length ? (
                  <IoMdArrowDropdown size={20} />
                ) : (
                  ""
                )}
              </li>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ThirdHeader;
