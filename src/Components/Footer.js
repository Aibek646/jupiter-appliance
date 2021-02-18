import React from "react";
import "./styles/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="upper__footer">
        <div className="first__footer">
          <h1>Call us Anytime</h1>
          <p>Get in touch with to fix all your problems</p>
        </div>
        <div className="second__footer">
          <h1>Connect</h1>
          <p>
            Connect and follow along, learn about our company and service we
            provide
          </p>
        </div>
        <div className="third__footer">
          <h1>Review</h1>
          <p>Leave us a review, so we reflect our job</p>
        </div>
      </div>
      <div className="bottom__footer">
        <p>Copyrignt 2021 Jupiter Appliance LLC | Archives| Policies| FAQ</p>
      </div>
    </div>
  );
};

export default Footer;
