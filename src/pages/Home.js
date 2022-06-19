import React, { useEffect } from "react";
import NavbarComp from "../components/NavbarComp";
import SlidersComp from "../components/SlidersComp";
import AnnouncementsComp from "../components/AnnouncementsComp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Products from "../components/Products";
import SearchResults from "../components/SearchResults";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const cartSearch = useSelector((state) => state.cart.searchProducts);
  useEffect(() => {}, [cartSearch]);
  console.log(cartSearch[0]);
  return (
    <div>
      <NavbarComp />
      <AnnouncementsComp />
      <SlidersComp />
      <Categories />
      {cartSearch[0] && <SearchResults cartSearch={cartSearch[0]} />}
      {!cartSearch[0] && <Products />}
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
