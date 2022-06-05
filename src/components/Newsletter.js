import React from "react";
import { FaTelegramPlane } from "react-icons/fa";

const Newsletter = () => {
  return (
    <div class="newsletterContainer">
      <h1 class="newsletterTitle">Newsletter</h1>
      <p class="newsletterDesc">Get timely updates and news from your favorite Products</p>
      <div class="newsInputContainer">
        <input type="email" placeholder="Enter Your email to Subscribe" />
        <button class="newsletterButton">
          <FaTelegramPlane />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
