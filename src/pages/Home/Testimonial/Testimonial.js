import React from "react";

const Testimonial = () => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 lg:my-16 my-8 ">
      <h2>What Our Client's say to usS </h2>
      <div className="border-2 ">
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt
          exercitationem non provident accusantium aspernatur optio nesciunt!
          Hic officiis cumque illum.
        </p>
      </div>
      <div className="w-24 ">
        <img 
        className="border  rounded-xl"
          src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />
      </div>
    </div>
  );
};

export default Testimonial;
