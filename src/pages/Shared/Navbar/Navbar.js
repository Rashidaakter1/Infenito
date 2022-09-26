import React from "react";
import { NavLink } from "react-router-dom";
import gradient from "../../../images/gradient-pink-abstract-background_.jpg";
import NavbarBanner from "./NavbarBanner";
const Navbar = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${gradient})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
      className="py-6  rounded-b-2xl"
    >
      <ul className=" flex justify-end mx-auto text-white ">
        <li className="mx-3 py-3">
          <NavLink to="/">HOME</NavLink>
        </li>
        <li className="mx-3 py-3">
          <NavLink to="portfolio">PORTFOLIO</NavLink>
        </li>
        <li className="mx-3 py-3">
          <NavLink to="about">ABOUT US</NavLink>
        </li>

        <li className="mx-3 py-3">
          <NavLink to="pricing">PRICING</NavLink>
        </li>
      </ul>
      <NavbarBanner />
    </div>
  );
};

export default Navbar;
