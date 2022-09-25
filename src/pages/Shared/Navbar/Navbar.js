import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    
      <div className="">
        <ul className=" flex justify-end mx-12 my-4 ">
          <li className = "mx-3">
            <NavLink to='/'>HOME</NavLink>
          </li>
          <li className = "mx-3">
            <NavLink to='portfolio' >PORTFOLIO</NavLink>
          </li>
          <li className = "mx-3">
            <NavLink to='about'>ABOUT US</NavLink>
          </li>

          <li className = "mx-3">
            <NavLink to='pricing'>PRICING</NavLink>
          </li>
        </ul>
      </div>
   
  );
};

export default Navbar;
