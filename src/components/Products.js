import React from "react";
import { PopularProducts } from "../components/data";
import ProductItem from "../components/ProductItem";

const Products = () => {
  return (
    <div class="row mx-auto g-0 productsContainer">
      {PopularProducts.map((product) => (
        <ProductItem PopularProducts={product} />
      ))}
    </div>
  );
};

export default Products;
