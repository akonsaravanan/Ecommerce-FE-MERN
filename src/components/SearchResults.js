import React, { useState, useEffect } from "react";
import ProductItem from "./ProductItem";

const Products = ({ cartSearch }) => {
  console.log(cartSearch);
  return (
    <>
      <h2 class="text-center">Search Results</h2>
      <div class="row mx-auto g-0 productsContainer">{cartSearch && cartSearch.data.map((product) => <ProductItem PopularProducts={product} />)}</div>
    </>
  );
};

export default Products;
