import React from "react";

const Testimonial = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 lg:my-24 my-8 lg:mx-36 md:mx-24 mx-12 ">
      <h2 className=" lg:text-3xl md:text-xl text-lg col-span-1 my-auto">
        What Our Client's say about us ?{" "}
      </h2>
      <div className="col-span-3 flex items-end ">
        <div
          style={{ background: "#31D0AA", borderRadius: " 90px 90px 0px 90px" }}
          className="p-12  text-start mx-6"
        >
          <p>
            Look no further. These guys are great to work with! VERY GOOD
            COMPANY & GREAT TEAM SPIRIT! , strongly recommend them.
            <h6>DAVID</h6>
            <p>Jr. Manager at SUBROS, India</p>
          </p>
        </div>
        <div className="w-24 ">
          <img
            style={{
              borderRadius: "40px 40px 0px 40px",
              transform: "matrix(-1, 0, 0, 1, 0, 0)",
            }}
            className="border  rounded-full"
            src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
