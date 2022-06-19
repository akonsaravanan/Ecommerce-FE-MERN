import React from "react";
import { CategoriesData } from "../components/data";
import CategoryItem from "../components/CategoryItem";

const Categories = () => {
  return (
    <div class="row g-0 p-0 categoryContainer">
      {CategoriesData.map((category) => (
        <CategoryItem category={category} />
      ))}
    </div>
  );
};

export default Categories;
