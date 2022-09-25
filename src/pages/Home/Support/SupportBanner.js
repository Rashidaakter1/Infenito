import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import support from "../../../images/45155-support-system.gif";
const SupportBanner = () => {
  return (
    <>
      <div className="border h-auto">
        <h1 className="border">What you get Besides the above things</h1>
      </div>
      <div className="flex items-center border">
        <div className="mx-1 text-violet-900">
          <AiFillCheckCircle />
        </div>
        <p>24/7 support </p>
      </div>
      <div>
        <img src={support} alt="" />
      </div>
    </>
  );
};

export default SupportBanner;
