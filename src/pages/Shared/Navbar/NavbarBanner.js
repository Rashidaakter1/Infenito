import React from "react";
import gradient from "../../../images/gradient.png";
const NavbarBanner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${gradient})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="text-start mx-24">
        <h3 className="my-10">infenito</h3>
        <p className="my-4">Welcome to Infenito</p>
        <h1 className="text-6xl">
          We power <br /> brands to build <br /> big!
        </h1>
        <button
          style={{ background: "" }}
          className="border-2 my-3  px-20 py-2"
        >
          join
        </button>
      </div>
    </div>
  );
};

export default NavbarBanner;
