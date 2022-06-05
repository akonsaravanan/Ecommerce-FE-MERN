import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

const ProductItem = ({ PopularProducts }) => {
  return (
    <div class="col-md-3 productItem">
      <div class="circleDesign"></div>
      <img src={PopularProducts.img} alt="" />
      <div className="iconContainer">
        <span class="actionIcons">
          <BsCartCheck />
        </span>
        <span class="actionIcons">
          <FaSearch />
        </span>
        <span class="actionIcons">
          <FaRegHeart />
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
