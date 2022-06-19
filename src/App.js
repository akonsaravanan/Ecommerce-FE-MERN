import "./App.css";
import React, { useEffect } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Success from "./pages/Success";
import { useDispatch } from "react-redux";
import { loginSuccess } from "./redux/userSlice";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const PUBLIC_KEY = "pk_test_51L9EcaSIOH2wvcofG3d7EqHLwMT7aIfe03AmgiWgA4stZz8a5EQeCtCvkBciTW27lHofYdVawkjwGlFsXnl1Wvg400bteUBNsk";
const stripeTestPromise = loadStripe(PUBLIC_KEY);

function App() {
  // To persist the current logged user state
  const dispatch = useDispatch();
  const user = JSON.parse(localStorage.getItem("ecomm-user-profile"));

  useEffect(() => {
    dispatch(loginSuccess(user));
  }, []);
  return (
    <BrowserRouter>
      <div className="App">
        <ToastContainer />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/home" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/success" element={<Success />} />
          <Route
            path="/cart"
            element={
              <Elements stripe={stripeTestPromise}>
                <CartPage />
              </Elements>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
