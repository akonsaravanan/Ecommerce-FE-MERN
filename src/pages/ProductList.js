import React from "react";
import NavbarComp from "../components/NavbarComp";
import AnnouncementsComp from "../components/AnnouncementsComp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";

const ProductList = () => {
  return (
    <div class="productListContainer">
      <NavbarComp />
      <AnnouncementsComp />
      <div>
        <h2 class="text-center my-5">Dresses</h2>
      </div>
      <div className="filterContainer">
        <div className="filterProducts">
          <span class="filterLabel">Filter Products:</span>
          <select>
            <option disabled selected>
              Color
            </option>
            <option value="Black">Black</option>
            <option value="White">Whitet</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select>
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
        <div className="sortProducts">
          <span class="filterLabel">Sort Products:</span>
          <select>
            <option selected value="newset">
              Newest
            </option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
