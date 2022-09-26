import React from "react";
import meditation from "../../../images/117909-meditation-man.gif";
const Services = () => {
  return (
    <div className="my-10">
      <div className="my-12">
        <h3 className="text-2xl font-bold my-2">Services we provide </h3>
        <p className="text-base">
          We serve the users in different categories with latest tools
        </p>
      </div>
      <div>
        <div
          style={{
            background:
              "url(https://img.freepik.com/free-vector/gradient-pink-abstract-background_23-2149129247.jpg)",
            width: "416px",
            height: "416px",
          }}
          className="p-9 rounded-full mx-auto"
        >
          <img
            className="mx-auto rounded-full"
            style={{ width: "347.96px", height: "347.96px" }}
            src={meditation}
            alt=""
          />{" "}
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-6 lg:my-16 my-8 lg:mx-36 md:mx-24 mx-12 ">
        <div>
          <div className="card w-48 bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">CMS</h2>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Check Now</button>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="card w-48 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> UI/UX</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="card w-48 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> SaaS</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="card w-48 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> AL/ML</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="card w-48 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title"> Blockchain</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="card w-48 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Websites</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {" "}
          <div>
            <div className="card w-48 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Mobile Apps</h2>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Check Now</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
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
      </div> */}
    </div>
  );
};

export default Services;
