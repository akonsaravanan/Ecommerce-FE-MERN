import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({ category }) => {
  return (
    <div class="categoryItem mb-5 col-md-4">
      <Link class="mx-auto" to={`/products/${category.cat}`}>
        <img src={category.img} alt="" />
        <div class="categoryInfo">
          <h3 class="categoryInfoTitle">{category.title}</h3>
          <button class="categoryInfoButton">Shop Now</button>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItem;
