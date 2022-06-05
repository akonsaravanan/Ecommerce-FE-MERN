import React from "react";
import NavbarComp from "../components/NavbarComp";
import SlidersComp from "../components/SlidersComp";
import AnnouncementsComp from "../components/AnnouncementsComp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Categories from "../components/Categories";
import Products from "../components/Products";

const Home = () => {
  return (
    <div>
      <NavbarComp />
      <AnnouncementsComp />
      <SlidersComp />
      <Categories />
      <Products />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Home;
