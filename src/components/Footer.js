import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMobileAlt } from "react-icons/fa";
import { FaDollarSign } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <div class="px-5 mt-5 footerContainer">
      <div class="row g-0">
        <div class="left col-md-4">
          <h2 class="footerTitle">SARA.</h2>
          <p class="footerDesc">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos aut, voluptatum quam reiciendis distinctio ipsa. Non cum, deleniti est
            commodi voluptatem veritatis eaque sapiente
          </p>
          <div className="socialContainer">
            <span class="socialIcon" style={{ backgroundColor: "blue", color: "white" }}>
              <FaFacebookF />
            </span>
            <span class="socialIcon" style={{ backgroundColor: "#C13584", color: "white" }}>
              <FaInstagram />
            </span>
            <span class="socialIcon" style={{ backgroundColor: "#0072b1", color: "white" }}>
              <FaLinkedin />
            </span>
            <span class="socialIcon" style={{ backgroundColor: "#00acee", color: "white" }}>
              <FaTwitter />
            </span>
          </div>
        </div>
        <div class="center col-md-4">
          <h3 class="footerListTitle">Useful Links</h3>
          <div className="listContainer">
            <ul class="p-0">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Man Fashion</a>
              </li>
              <li>
                <a href="">Accessories</a>
              </li>
              <li>
                <a href="">Order tracking</a>
              </li>
              <li>
                <a href="">Wishlist</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="">Cart</a>
              </li>
              <li>
                <a href="">Women Fashion</a>
              </li>
              <li>
                <a href="">My Account</a>
              </li>
              <li>
                <a href="">Terms</a>
              </li>
              <li>
                <a href="">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="right col-md-4">
          <h3 class="footerAddressTitle">Contact</h3>
          <p class="footerStreet">
            <FaMapMarkerAlt /> 696 E Altamonte avenue syree Dr LAN st.
          </p>
          <p class="footerPhone">
            <FaMobileAlt />
            (407) 830-7703
          </p>
          <p class="footerEmail">
            <FaEnvelope />
            sarah@example.com
          </p>
          <p class="footerPayments">
            <FaDollarSign />
            <img src="https://res.cloudinary.com/sara93/image/upload/v1653211220/payment_msts0l.png" alt="" />
          </p>
        </div>
      </div>
      <span class="copyright" style={{ textAlign: "center", padding: "5px" }}>
        <p>sara ecommerce &copy;2022 all rights reserved.</p>
      </span>
    </div>
  );
};

export default Footer;
