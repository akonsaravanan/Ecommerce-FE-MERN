import React from "react";
import NavbarComp from "../components/NavbarComp";
import AnnouncementsComp from "../components/AnnouncementsComp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const ProductDetail = () => {
  return (
    <div class="PDPContainer">
      <NavbarComp />
      <AnnouncementsComp />
      <div className="row g-0 pdpCard p-3 m-4">
        <div className="col col-md-6 imagepdpCardContainer">
          <img src="https://res.cloudinary.com/sara93/image/upload/v1653306233/pexels-vinicius-wiesehofer-1130626_1_o3vqab.jpg" alt="" />
        </div>
        <div className="col col-md-6 descpdpCardContainer">
          <h3 class="pdpName">European Blazzer polo </h3>
          <p class="pdpDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima aspernatur vel nostrum? Repellat, sint exercitationem quod iste,
            odit, ea molestias veniam minima ipsam natus praesentium dolore ab culpa nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat minima aspernatur vel nostrum? Repellat, sint exercitationem quod iste, odit, ea molestias veniam minima ipsam natus praesentium
            dolore ab culpa nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima aspernatur vel nostrum? Repellat, sint
            exercitationem quod iste, odit, ea molestias veniam minima ipsam natus praesentium dolore ab culpa nihil!
          </p>
          <span class="pdpprice">$999</span>
          <div className="pdpFilter">
            <div className="pdpColorFilter">
              <span>Color:</span>
              <span className="pdpcolor" style={{ backgroundColor: "red" }}></span>
              <span className="pdpcolor" style={{ backgroundColor: "green" }}></span>
              <span className="pdpcolor" style={{ backgroundColor: "white" }}></span>
              <span className="pdpcolor" style={{ backgroundColor: "black" }}></span>
              <span className="pdpcolor" style={{ backgroundColor: "blue" }}></span>
            </div>
            <div className="pdpSizeFilter">
              <span>Size:</span>
              <select>
                <option disabled selected>
                  Size
                </option>
                <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option>
              </select>
            </div>
          </div>
          <div className="pdpQuantity">
            <span className="removeQty"> - </span>
            <input className="inputqty" type="text" value="1" />
            <span className="addQty"> + </span>
          </div>
          <button class="pdpAddToCart">Add To Cart</button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetail;
