import React from "react";
import NavbarBanner from "../Shared/Navbar/NavbarBanner";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Stacks from "./Stacks/Stacks";
import Support from "./Support/Support";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
    <NavbarBanner/>
      <Stacks />
      <Services />
      <Support />
      <Banner />
      <Testimonial />
      <Contact />
    </>
  );
};

export default Home;
