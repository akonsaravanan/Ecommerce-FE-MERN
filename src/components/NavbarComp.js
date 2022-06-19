import React, { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginStart, loginSuccess, loginFailure, logout } from "../redux/userSlice";
import { searchResults } from "../redux/cartSlice";
import { getProductsBySearch } from "../redux/apiReduxCalls";

const NavbarComp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cart = useSelector((state) => state.cart);
  const qty = useSelector((state) => state.cart.quantity);
  let user = useSelector((state) => state.user.currentUser);
  // console.log(user);
  useEffect(() => {}, [qty, user, cart]);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/home");
  };
  const [searchInput, setSearchInput] = useState("");
  const handleSearch = async (data) => {
    const resultdata = await getProductsBySearch(data);
    dispatch(searchResults(resultdata.data));
  };
  // console.log(cart.searchProducts);

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <div>
            <a class="navbar-brand" href="/home">
              SARA
            </a>
          </div>
          <button
            class="navbar-toggler ml-auto"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon ms"></span>
          </button>

          <div class="collapse navbar-collapse justify-content-between" id="navbarSupportedContent">
            <div class="SearchContainer" style={{ backgroundColor: "white", padding: "5px", focus: "none", outline: "none" }}>
              <input type="text" placeholder="By Categories..." value={searchInput} onChange={(e) => setSearchInput(e.target.value)} />
              <FaSearch style={{ cursor: "pointer", width: "15px", height: "15px" }} onClick={() => handleSearch(searchInput)} />
            </div>
            <ul class="navbar-nav   mb-2 mb-lg-0">
              <li class="nav-item">
                {user?.data ? (
                  <a class="nav-link">Hi {user?.data?.name}</a>
                ) : (
                  <a class="nav-link  " aria-current="page" href="/register">
                    Register
                  </a>
                )}
              </li>
              <li class="nav-item">
                {user?.data ? (
                  <span class="nav-link" style={{ cursor: "pointer" }} onClick={handleLogout}>
                    Logout
                  </span>
                ) : (
                  <a class="nav-link" href="/login">
                    Sign in
                  </a>
                )}
              </li>

              <li class="nav-item">
                <Link
                  to="/cart"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Open Your Cart"
                  class="position-relative nav-link"
                  style={{ color: "black", cursor: "pointer" }}
                >
                  <FaCartPlus style={{ fontSize: "25px" }} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
