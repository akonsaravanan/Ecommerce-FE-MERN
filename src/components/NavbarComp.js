import React from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartPlus } from "react-icons/fa";

const NavbarComp = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light ">
        <div class="container-fluid">
          <div>
            <a class="navbar-brand" href="#">
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
              <input type="text" placeholder="Search" />
              <FaSearch style={{ cursor: "pointer", width: "15px", height: "15px" }} />
            </div>
            <ul class="navbar-nav   mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link  " aria-current="page" href="#">
                  Register
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">
                  Sign in
                </a>
              </li>

              <li class="nav-item">
                <a class="position-relative nav-link" style={{ color: "black", cursor: "pointer" }}>
                  <FaCartPlus />
                  <span
                    class="badge position-absolute top-5 translate-middle bg-primary border border-light rounded-circle"
                    style={{ fontSize: "10px", padding: "8px", color: "white", borderRadius: "50%" }}
                  >
                    10
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavbarComp;
