import React from "react";
import { BsCartCheck } from "react-icons/bs";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const ProductItem = ({ PopularProducts }) => {
  // console.log(PopularProducts);
  return (
    <div class="col-md-3 productItem">
      <div class="circleDesign"></div>
      <img src={PopularProducts.image} alt="" />
      <div className="iconContainer">
        <span class="actionIcons">
          <BsCartCheck />
        </span>
        <span class="actionIcons">
          <Link style={{ color: "black" }} to={`/product/${PopularProducts._id}`}>
            <FaSearch />
          </Link>
        </span>
        <span class="actionIcons">
          <FaRegHeart />
        </span>
      </div>
    </div>
  );
};

export default ProductItem;
