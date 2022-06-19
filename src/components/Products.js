import React, { useState, useEffect } from "react";
// import { PopularProducts } from "../components/data";
import ProductItem from "../components/ProductItem";
import Pagination from "../components/Pagination";
import { getAllProducts, getProductsBycategory } from "../redux/apiReduxCalls.js";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentPage, setNumberOfPages, setAllProducts } from "../redux/cartSlice";

const Products = ({ category, color, size, sort }) => {
  const { products, searchProducts, currentPage, numOfPages, allProducts } = useSelector((state) => ({ ...state.cart }));
  const dispatch = useDispatch();

  const [results, setResults] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const prodResults = await (category ? getProductsBycategory(category, currentPage, color, size, sort) : await getAllProducts(currentPage));
        setResults(prodResults.data);
        dispatch(setNumberOfPages(results));
      } catch (error) {}
    };
    getProducts();
  }, [category, currentPage, color, size, sort]);
  dispatch(setNumberOfPages(results));
  console.log(results, numOfPages);

  return (
    <>
      <h2 class="text-center">Featured Products</h2>
      <div class="row mx-auto g-0 productsContainer">{results && results.data?.map((product) => <ProductItem PopularProducts={product} />)}</div>
      {results && results.data?.length > 0 && !results.data.length < 7 ? (
        <Pagination setCurrentPage={setCurrentPage} currentPage={currentPage} numOfPages={numOfPages} dispatch={dispatch} />
      ) : null}
    </>
  );
};

export default Products;
