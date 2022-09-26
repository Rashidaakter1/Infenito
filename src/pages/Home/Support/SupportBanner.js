import React from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import support from "../../../images/45155-support-system.gif";
const SupportBanner = () => {
  return (
    <>
      <div  className="col-span-2 grid lg:grid-cols-2 ">
        <h2 className=" text-4xl my-auto ">
          What you get Besides the above things
        </h2>
        <div className="flex items-center ">
          <div className="flex items-center mx-auto ">
            <div className=" text-violet-700 mx-1">
              <AiFillCheckCircle />
            </div>
            <p className="lg:my-0 my-6">24/7 support </p>
          </div>
        </div>
      </div>

      <div className="col-span-1 ">
        <img src={support} alt="" />
      </div>
    </>
  );
};

export default SupportBanner;
