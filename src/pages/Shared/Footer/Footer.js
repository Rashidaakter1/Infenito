import React from "react";

const Footer = () => {
  return (
    <footer
      style={{ background: "#0E0E2C" }}
      className="footer p-10 bg-neutral text-neutral-content"
    >
      <div>
        <span className="footer-title">Company </span>
        <a href="/about" className="link link-hover">
          About us
        </a>
        <a href="/portfolio" className="link link-hover">
          Portfolio
        </a>
        <a href="/pricing" className="link link-hover">
          Pricing
        </a>
        <a href="/contact" className="link link-hover">
          Contact
        </a>
      </div>
      <div>
        <span className="footer-title">Contact</span>
        <a href="/" className="link link-hover">
          Quote
        </a>
        <a href="/" className="link link-hover">
          infenito@gmail.com
        </a>
        <a href="/" className="link link-hover">
          984373330
        </a>
      </div>
      <div>
        <span className="footer-title">More</span>
        <a href="/" className="link link-hover">
          Instagram
        </a>
        <a href="/" className="link link-hover">
          Facebook
        </a>
        <a href="/" className="link link-hover">
          Linkedin
        </a>
      </div>
    </footer>
  );
};

export default Footer;
