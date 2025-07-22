import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Collapse } from "react-collapse";
import { faPlusCircle, faMinusCircle } from "@fortawesome/free-solid-svg-icons";
const Question = ({ title, info }) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div
        onClick={() => setShowInfo(!showInfo)}
        className="px-5 py-5 pb-5 cursor-pointer duration-500 "
      >
        <header className="flex flex-row justify-between  ">
          <h4 className=" font-normal pb-0">{title}</h4>
          <button className="flex ">
            {showInfo ? (
              <FontAwesomeIcon
                icon={faMinusCircle}
                className="text-slate-400"
              />
            ) : (
              <FontAwesomeIcon icon={faPlusCircle} className="text-slate-400" />
            )}
          </button>
        </header>
      </div>
      <div className="border-b-2  border-slate-100 ">
        <Collapse isOpened={showInfo}>
          <p className="text-start pl-5 pb-10 font-light pr-5 text-black ">
            {info}
          </p>
        </Collapse>
      </div>
    </>
  );
};

export default Question;