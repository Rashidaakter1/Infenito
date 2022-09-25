import React from "react";
import { AiFillAppstore } from "react-icons/ai";
import { FaBuysellads, FaDatabase } from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";
import { CgGames } from "react-icons/cg";
import { DiCode } from "react-icons/di";

const Stacks = () => {
  return (
    <div className="mx-24 my-24">
      <div
        style={{
          height: " 4px",
          width: " 116px",
          borderColor: "#F050BE",
          background: "#F050BE",
        }}
        className="border-2 my-1"
      ></div>
      <h3 className="text-2xl font-bold text-start">
        See popular tags <p>and browse different topics</p>
      </h3>
      <div className="grid lg:grid-cols-3 md:grid-cols-1 grid-cols-1 gap-10">
        <div className="col-span-1">
          <div>
            <p className="text-base  my-10 border-2 py-4 font-bold ">
              <div
                className="my-2"
                style={{ fontSize: "2vw", color: "#ED4B9E" }}
              >
                <AiFillAppstore />
              </div>
              Different Topics
            </p>
          </div>
        </div>
        <div className="col-span-2 grid lg:grid-cols-2 gap-10 text-start ">
          <div>
            <div className="my-2" style={{ fontSize: "4vw", color: "#ED4B9E" }}>
              <AiFillAppstore />
            </div>
            <p>Application stacks </p>

            <div
              style={{
                height: " 4px",
                width: " 116px",
                borderColor: "#ED4B9E",
                background: "#ED4B9E",
              }}
              className="border-2 my-2 m"
            ></div>
            <p>
              We develop android & iOS apps which can increase customer
              engagement and generate maximum ROI with maximum lead conversions.
            </p>
          </div>
          <div>
            <div
              className="my-2"
              style={{ fontSize: "4vw", color: " #4B4DED" }}
            >
              <DiCode />
            </div>
            <p>Website stacks </p>
            <div
              style={{
                height: " 4px",
                width: " 116px",
                borderColor: " #4B4DED",
                background: " #4B4DED",
              }}
              className="border-2 my-2 m"
            ></div>
            <p>
              Get extensively researched website and web app development
              services using the latest technologies like MEAN, MERN, Laravel,
              BootStrap, and much more.
            </p>
          </div>
          <div>
            {/* icon */}
            <div
              className="my-2"
              style={{ fontSize: "4vw", color: " #31D0AA" }}
            >
              <FaDatabase />
            </div>
            <p>Database stacks </p>
            <div
              style={{
                height: " 4px",
                width: " 116px",
                borderColor: " #31D0AA",
                background: " #31D0AA",
              }}
              className="border-2 my-2 m"
            ></div>
            <p>
              We have a set of technologies and services that organizations use
              to store, manage, and access data.
            </p>
          </div>
          <div>
            {/* icon */}
            <div
              className="my-2"
              style={{ fontSize: "4vw", color: "  #F4C751" }}
            >
              <FaBuysellads />
            </div>
            <p>AL/ML stacks </p>
            <div
              style={{
                height: " 4px",
                width: " 116px",
                borderColor: " #F4C751",
                background: " #F4C751",
              }}
              className="border-2 my-2 m"
            ></div>
            <p>
              We provide features to larger organizations which have already
              started maturing their processes to create standardized ML
              pipelines that are optimized for scale, efficiency, and control.
            </p>
          </div>
          <div>
            {/* icon */}

            <div
              className="my-2"
              style={{ fontSize: "4vw", color: " #FF3131" }}
            >
              <SiBlockchaindotcom />
            </div>
            <p>Blockchain stacks </p>
            <div
              style={{
                height: " 4px",
                width: " 116px",
                borderColor: " #FF3131",
                background: " #FF3131",
              }}
              className="border-2 my-2 m"
            ></div>
            <p>
              We use Blockstack, a project that utilizes blockchain technology
              to expand the functionalities of bitcoin by serving as a second
              layer protocol.
            </p>
          </div>
          <div>
            {/* icon */}
            <div
              className="my-2"
              style={{ fontSize: "4vw", color: " #4B4DED" }}
            >
              <CgGames />
            </div>
            <p>Gaming stacks </p>
            <div
              style={{
                height: " 4px",
                width: " 116px",
                borderColor: " #4B4DED",
                background: " #4B4DED",
              }}
              className="border-2 my-2 m"
            ></div>
            <p>
              Gaming services serve customers in gambling establishments, such
              as casinos or racetracks. Some workers tend slot machines or deal
              cards.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stacks;
