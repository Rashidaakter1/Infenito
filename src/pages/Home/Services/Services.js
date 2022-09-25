import React from "react";
import meditation from "../../../images/117909-meditation-man.gif";
const Services = () => {
  return (
    <div>
      <h1>Services we provide </h1>
      <p>We serve the users in different categories with latest tools</p>
      <div>
        <img src={meditation} alt="" />
      </div>

      <p>
        <li>CMS</li>
        <li>UI/UX</li>
        <li>SaaS</li>
        <li>AL/ML</li>
        <li>Blockchain</li>
        <li>Websites</li>
        <li>Mobile Apps</li>
      </p>
    </div>
  );
};

export default Services;
