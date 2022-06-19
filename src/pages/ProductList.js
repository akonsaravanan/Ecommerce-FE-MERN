import React, { useState } from "react";
import NavbarComp from "../components/NavbarComp";
import AnnouncementsComp from "../components/AnnouncementsComp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductsBycategory } from "../redux/apiReduxCalls";

const ProductList = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const category = location.pathname.split("/")[2];
  const [filter, setFilter] = useState("");
  const [sort, setSort] = useState("newest");
  const [resultFiltered, setResultFiltered] = useState([]);

  const { color, size } = filter;
  console.log(color, size);
  const handleFilters = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setFilter({
      ...filter,
      [e.target.name]: value.toLowerCase(),
    });
  };
  const handleSort = (e) => {
    e.preventDefault();
    const value = e.target.value;
    setSort((e.target.name = value));
  };
  return (
    <div class="productListContainer">
      <NavbarComp />
      <AnnouncementsComp />
      <div>
        <h2 class="text-center my-5">{category}</h2>
      </div>
      <div className="filterContainer my-0">
        <div className="filterProducts">
          <span class="filterLabel">Filter Products:</span>
          <select name="color" onChange={handleFilters}>
            <option defaultValue={"color"}>Color</option>
            <option name="black" value="Black">
              Black
            </option>
            <option value="White">Whitet</option>
            <option value="Red">Red</option>
            <option value="Green">Green</option>
            <option value="Blue">Blue</option>
          </select>
          <select name="size" onChange={handleFilters}>
            <option defaultValue={"Size"}>Size</option>
            <option value="xs">XS</option>
            <option value="s">S</option>
            <option value="m">M</option>
            <option value="l">L</option>
            <option value="xl">XL</option>
          </select>
        </div>
        <div className="sortProducts">
          <span class="filterLabel">Sort Products:</span>
          <select name="sort" onChange={handleSort}>
            <option value="newest">Newest</option>
            <option value="asc">Price (asc)</option>
            <option value="desc">Price (desc)</option>
          </select>
        </div>
      </div>
      <button
        class="mx-4 g-0 btn btn-danger"
        onClick={async (e) => {
          let res = await getProductsBycategory(category, 1, color, size, sort);
          // setResultFiltered((e.target.push = res));
          console.log(res);
        }}
      >
        Apply Filters
      </button>

      <Products category={category} color={color} size={size} sort={sort} />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductList;
