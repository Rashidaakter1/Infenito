import React from "react";
import SupportBanner from "./SupportBanner";
import { SiAntdesign } from "react-icons/si";
import { MdQueryStats } from "react-icons/md";
import { FaProjectDiagram } from "react-icons/fa";

const Support = () => {
  return (
    <div className="lg:mx-24  ">
      <div
        style={{
          height: " 4px",
          width: " 116px",
          borderColor: "#F050BE",
        }}
        className="border-2 my-1 hidden lg:flex"
      ></div>
      <h3 className="text-2xl lg:text-start text-center font-bold ">
        Let's see <p>how it works</p>
      </h3>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 my-12 ">
        <div>
          <div style={{ fontSize: "4vw" }} className="w-14 mx-auto">
            <MdQueryStats />
          </div>
          <p className="my-4 text-base font-bold"> Query Sent</p>
        </div>
        <div>
          <div style={{ fontSize: "4vw" }} className="w-14 mx-auto">
            <SiAntdesign />
          </div>
          <p className="my-4 text-base font-bold"> Designing</p>
        </div>
        <div>
          <div style={{ fontSize: "4vw" }} className="w-14 mx-auto">
            <SiAntdesign />
          </div>
          <p className="my-4 text-base font-bold"> Web development</p>
        </div>
        <div>
          <div style={{ fontSize: "4vw" }} className="w-14 mx-auto">
            <FaProjectDiagram />
          </div>
          <p className="my-4 text-base font-bold">Production</p>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 ">
        <SupportBanner />
      </div>
    </div>
  );
};

export default Support;
