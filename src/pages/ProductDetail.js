import React, { useState, useEffect } from "react";
import NavbarComp from "../components/NavbarComp";
import AnnouncementsComp from "../components/AnnouncementsComp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import Products from "../components/Products";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { publicAPI } from "../redux/api";
import { addProductToCart } from "../redux/cartSlice";
import { createCartByUserId, getProductByID } from "../redux/apiReduxCalls";
import { toast } from "react-toastify";

const ProductDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  let user = useSelector((state) => state.user.currentUser);
  const cart = useSelector((state) => state.cart);
  const productId = location.pathname.split("/")[2];
  const [product, setProduct] = useState([]);
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState("");
  const [sizes, setSizes] = useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    const getProduct = async () => {
      try {
        const results = await getProductByID(productId);
        setProduct(results.data.data);
        console.log(results.data.data);
      } catch (error) {}
    };
    getProduct();
  }, [productId]);

  const handleCartPage = () => {
    const userId = user?.data?._id;
    if (!userId) return toast.error("Please Login to Proceed !");
    console.log(userId);
    const products = {
      productId: product._id,
      quantity: qty,
      title: product.title,
      image: product.image,
      size: sizes,
      color: color,
      price: product.price * qty,
      status: "progress",
    };
    createCartByUserId({ userId, ...products }, navigate);
    toast.success("Added to Cart Successfully");
  };

  const handleAddToCart = (e) => {
    e.preventDefault();
    dispatch(addProductToCart({ ...product, qty, color, sizes }));
    handleCartPage();
  };
  return (
    <div class="PDPContainer">
      <NavbarComp />
      <AnnouncementsComp />
      <div className="row g-0 pdpCard p-3 m-4">
        <div className="col col-md-6 imagepdpCardContainer">
          {/* <img src="https://res.cloudinary.com/sara93/image/upload/v1653306233/pexels-vinicius-wiesehofer-1130626_1_o3vqab.jpg" alt="" /> */}
          <img src={product.image} alt="" />
        </div>
        <div className="col col-md-6 descpdpCardContainer">
          {/* <h3 class="pdpName">European Blazzer polo </h3> */}
          <h3 class="pdpName">{product.title} </h3>
          <p class="pdpDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima aspernatur vel nostrum? Repellat, sint exercitationem quod iste,
            odit, ea molestias veniam minima ipsam natus praesentium dolore ab culpa nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Fugiat minima aspernatur vel nostrum? Repellat, sint exercitationem quod iste, odit, ea molestias veniam minima ipsam natus praesentium
            dolore ab culpa nihil! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugiat minima aspernatur vel nostrum? Repellat, sint
            exercitationem quod iste, odit, ea molestias veniam minima ipsam natus praesentium dolore ab culpa nihil!
          </p>
          <span class="pdpprice">${product.price}</span>
          <div className="pdpFilter">
            <div className="pdpColorFilter">
              <span>Color:</span>
              {product.color?.map((color) => (
                <>
                  <span onClick={() => setColor(`${color}`)} className="pdpcolor" style={{ backgroundColor: `${color}` }}></span>
                </>
              ))}
              {/* <span className="pdpcolor" style={{ backgroundColor: "red" }}></span>
              <span className="pdpcolor" style={{ backgroundColor: "green" }}></span>
              <span className="pdpcolor" style={{ backgroundColor: "white" }}></span>
              <span className="pdpcolor" style={{ backgroundColor: "black" }}></span>
              <span className="pdpcolor" style={{ backgroundColor: "blue" }}></span> */}
            </div>
            <div className="pdpSizeFilter">
              <span>Size:</span>
              <select onChange={(e) => setSizes(e.target.value)}>
                <option disabled selected>
                  Size
                </option>
                {product.size?.map((sizedata) => (
                  <option value={`${sizedata}`}>{sizedata.toUpperCase()}</option>
                ))}

                {/* <option value="xs">XS</option>
                <option value="s">S</option>
                <option value="m">M</option>
                <option value="l">L</option>
                <option value="xl">XL</option> */}
              </select>
            </div>
          </div>
          <div className="pdpQuantity">
            <span
              className="removeQty"
              onClick={(e) => {
                if (qty > 1) {
                  setQty(qty - 1);
                }
              }}
            >
              -
            </span>
            <input className="inputqty" type="text" value={qty} onChange={(e) => setQty(e.target.value)} />
            <span
              className="addQty"
              onClick={(e) => {
                setQty(qty + 1);
              }}
            >
              +
            </span>
          </div>
          <button class="pdpAddToCart" onClick={(e) => handleAddToCart(e)}>
            Add To Cart
          </button>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ProductDetail;
