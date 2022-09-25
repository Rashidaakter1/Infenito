import React from "react";
import group from "../../../images/unsplash_5U_28ojjgms.png";
import yoga from "../../../images/unsplash_NTyBbu66_SI.png";
import paper from "../../../images/unsplash_xG8IQMqMITM.png";
const Banner = () => {
  return (
    <div className="mx-auto">
      <h2>Still have a doubt?</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
        magnam.
      </p>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:my-16 my-8 ">
        <div className="flex items-center">
          <img className="lg:w-80 lg:h-64" src={group} alt="" />
          <h2 className="mx-2">About Infenito , Insights about us</h2>
        </div>
        <div className="flex items-center">
          <img className="lg:w-80 lg:h-64 " src={paper} alt="" />
          <h2  className="mx-2">See our latest blogs about stacks </h2>
        </div>
        <div className="flex items-center">
          <img className="lg:w-80 lg:h-64" src={yoga} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
