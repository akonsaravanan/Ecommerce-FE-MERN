import React from "react";

const CategoryItem = ({ category }) => {
  return (
    <div class="categoryItem col-md-4">
      <img src={category.img} alt="" />
      <div class="categoryInfo">
        <h3 class="categoryInfoTitle">{category.title}</h3>
        <button class="categoryInfoButton">Shop Now</button>
      </div>
    </div>
  );
};

export default CategoryItem;
