import React from "react";
import Banner from "./Banner/Banner";
import Contact from "./Contact/Contact";
import Services from "./Services/Services";
import Stacks from "./Stacks/Stacks";
import Support from "./Support/Support";
import Testimonial from "./Testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <h1 class="text-3xl font-bold underline">Hello world!</h1>
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
