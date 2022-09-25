import React from "react";
import SupportBanner from "./SupportBanner";

const Support = () => {
  return (
    <div>
      <h1>Let's see how it works </h1>
      <div>
        <div>
          <p>Query Sent</p>
        </div>
        <div>
          <p>Designing</p>
        </div>
        <div>
          <p>Web development</p>
        </div>
        <div>
          <p>Production</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:my-16 my-8 border ">
        <SupportBanner />
      </div>
    </div>
  );
};

export default Support;
