import NavbarComp from "../components/NavbarComp";
import AnnouncementsComp from "../components/AnnouncementsComp";
// import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import React, { useState, useEffect } from "react";
import { CheckoutForm } from "../components/CheckoutForm";
import { getCartByUserId, deleteCartBycartId } from "../redux/apiReduxCalls";
import { updateQuantity, addProductToCart } from "../redux/cartSlice";
import { FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { render } from "react-dom";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const qty = cart.quantity;
  const user = useSelector((state) => state.user);

  let userId = user && user.currentUser?.data._id;
  const [cartProducts, setCartProducts] = useState([]);

  useEffect(() => {
    const cartData = async () => {
      if (userId) {
        const result = await getCartByUserId(userId && userId);
        setCartProducts(result.data.data);
      }
    };
    cartData();
  }, [cart, userId]);

  const postProduct = [...cartProducts];
  const post = postProduct.map((product) => {
    return {
      productId: product._id,
      quantity: product.quantity,
    };
  });
  const moveToHome = () => {
    window.location("/home");
  };
  let renderStatus =
    cartProducts &&
    cartProducts.filter((cartProduct) => {
      if (cartProduct.status == "progress") {
        return cartProduct._id;
      }
    });

  /*  const del = (id) => {
    renderStatus = renderStatus.filter((prodId) => prodId !== id);
  }; */
  console.log(cartProducts);
  console.log(renderStatus);

  const [newQty, setNewQty] = useState();
  const Price = renderStatus.map((product) => product.price).reduce((pv, cv) => pv + cv, 0);
  console.log(Price);

  const removeCartItems = async (cartId) => {
    console.log("Inside delete cart");
    // e.preventDefault();
    await deleteCartBycartId(navigate, cartId);
    navigate("/cart");
    window.location.reload(false);
  };

  return (
    <div>
      <NavbarComp />
      <AnnouncementsComp />
      <div class="cartPageContainer">
        <div class="cartCard">
          <div class="cartHeader">
            <h2 class="cartTitle mb-5 ">YOUR BAG</h2>
            <div class="row g-0 mx-5 cartMainActions">
              <a href="/home" class="col-md-3  continueshoppingbtn">
                continue shopping
              </a>
              <a class="col-md-3 cartActionLink" href="">
                shopping bag ({renderStatus ? renderStatus.length : 0})
              </a>
              <a class="col-md-3 cartActionLink" href="">
                wishlist (0)
              </a>
              <a href="" class="col-md-3  checkoutnowbtn">
                checkout now
              </a>
            </div>
          </div>
          {renderStatus.length > 0 ? (
            <div className="row g-0 cartBody">
              <div className=" col-md-7 cartProductsSection">
                {renderStatus.map((product) => (
                  <>
                    <div className="cartproductDetail">
                      <div className="cartproductImage">
                        <img src={product.image} alt="" />
                      </div>
                      <div className="cartproductDescInfo">
                        <p>
                          <strong>Product: </strong>
                          {product.title}
                        </p>
                        <p>
                          <strong>ID: </strong>
                          {product._id}
                        </p>
                        <p class="cartproductColorDarkBlue"></p>
                        <p>
                          <strong>Size: </strong>
                          {product.size}
                        </p>
                      </div>
                      <div className="cartproductDescInfo2">
                        <div className="pdpQuantity">
                          <p className="removeQty"> - </p>
                          <input className="inputqty" type="text" value={product.quantity} />
                          <p className="addQty"> + </p>
                        </div>
                        <p class="pdpprice">${product.price}</p>
                      </div>
                      <div style={{ cursor: "pointer" }} onClick={() => removeCartItems(product._id)}>
                        <FaTrash />
                      </div>
                    </div>
                  </>
                ))}
              </div>
              <div className=" col-md-5 cartProductsOrderSummary">
                <div className="cartOrderSummaryCard">
                  <h3 class="orderSummaryTitle">order summary</h3>
                  <div className="orderDetail">
                    Subtotal
                    <span>${renderStatus.map((product) => product.price).reduce((pv, cv) => pv + cv, 0)}</span>
                  </div>
                  <div className="orderDetail">
                    Estimated Shipping
                    <span>$80</span>
                  </div>
                  <div className="orderDetail">
                    Shipping Discount
                    <span>$-80</span>
                  </div>
                  <div className="orderDetail total">
                    Total
                    <span>${renderStatus.map((product) => product.price).reduce((pv, cv) => pv + cv, 0)}</span>
                  </div>
                  <CheckoutForm
                    cartTotal={renderStatus.map((product) => product.price).reduce((pv, cv) => pv + cv, 0)}
                    cartProducts={post}
                    userId={userId}
                    postProduct={postProduct}
                  />
                </div>
              </div>
            </div>
          ) : (
            <p class="emptyCart">Shopping Cart is Empty</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CartPage;
