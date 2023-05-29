import React, { useState } from "react";
import style from "../productDetails.module.css";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
const Tabs = ({ desc, questions }) => {
  const [showDetails, setShowDetails] = useState(true);
  const [showQuestion, setShowuestions] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  return (
    <div className="p-3">
      <div className={`d-flex gap-5  ${style.tabsContainer}`}>
        <p
          onClick={() => {
            setShowDetails(true);
            setShowuestions(false);
          }}
          className={`m-0 p-0 pb-3 pointer fw-bold text-black-50 ${style.tab} ${
            showDetails ? style.active : ""
          }`}
        >
          تفاصيل المنتج
        </p>
        <p
          onClick={() => {
            setShowDetails(false);
            setShowuestions(true);
          }}
          className={`m-0 p-0 pb-3 pointer fw-bold text-black-50 ${style.tab} ${
            showQuestion ? style.active : ""
          }`}
        >
          اسئلة عن المنتج
        </p>
      </div>
      <div className="mt-3">
        {showDetails &&
          desc.map((item, index) => (
            <span key={index} className="d-block mb-2 text-black-50">
              {item}
            </span>
          ))}
        {showQuestion && (
          <>
            {questions.map((item, index) => (
              <>
                <div
                  key={index}
                  className={`py-3 d-flex justify-content-between align-items-center ${style.questionContainer}`}
                >
                  <p className="m-0 p-0 fw-bold fs-5">{item.title}</p>

                  {selectedItem === item.id ? (
                    <MdKeyboardArrowUp
                      size={30}
                      className="pointer text-black-50"
                      onClick={() => setSelectedItem(null)}
                    />
                  ) : (
                    <MdKeyboardArrowDown
                      onClick={() => setSelectedItem(item.id)}
                      size={30}
                      className="pointer text-black-50"
                    />
                  )}
                </div>
                {selectedItem === item.id && (
                  <div className="py-3">
                    {item.answers.map((item, index) => (
                      <span className="text-black-50 d-block mb-1" key={index}>
                        {item}
                      </span>
                    ))}
                  </div>
                )}
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Tabs;
