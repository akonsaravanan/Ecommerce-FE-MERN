import React from "react";
import NavbarComp from "../components/NavbarComp";
import AnnouncementsComp from "../components/AnnouncementsComp";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const CartPage = () => {
  return (
    <div>
      <NavbarComp />
      <AnnouncementsComp />
      <div class="cartPageContainer">
        <div class="cartCard">
          <div class="cartHeader">
            <h2 class="cartTitle mb-5 ">YOUR BAG</h2>
            <div class="row g-0 mx-5 cartMainActions">
              <button class="col-md-3  continueshoppingbtn">continue shopping</button>
              <a class="col-md-3 cartActionLink" href="">
                shopping bag (2)
              </a>
              <a class="col-md-3 cartActionLink" href="">
                wishlist (0)
              </a>
              <button class="col-md-3  checkoutnowbtn">checkout now</button>
            </div>
          </div>
          <div className="row g-0 cartBody">
            <div className=" col-md-7 cartProductsSection">
              <div className="cartproductDetail">
                <div className="cartproductImage">
                  <img src="https://res.cloudinary.com/sara93/image/upload/v1653211379/1_zflq3f.jpg" alt="" />
                </div>
                <div className="cartproductDescInfo">
                  <p>
                    <strong>Product: </strong>Lubricant Canvas sport
                  </p>
                  <p>
                    <strong>ID: </strong>9659827462
                  </p>
                  <p class="cartproductColorDarkBlue"></p>
                  <p>
                    <strong>Size: </strong>40.2
                  </p>
                </div>
                <div className="cartproductDescInfo2">
                  <div className="pdpQuantity">
                    <p className="removeQty"> - </p>
                    <input className="inputqty" type="text" value="1" />
                    <p className="addQty"> + </p>
                  </div>
                  <p class="pdpprice">$999</p>
                </div>
              </div>
              <div className="cartproductDetail">
                <div className="cartproductImage">
                  <img src="https://res.cloudinary.com/sara93/image/upload/v1653211379/1_zflq3f.jpg" alt="" />
                </div>
                <div className="cartproductDescInfo">
                  <p>
                    <strong>Product: </strong>Lubricant Canvas sport
                  </p>
                  <p>
                    <strong>ID: </strong>9659827462
                  </p>
                  <p class="cartproductColorDarkBlue"></p>
                  <p>
                    <strong>Size: </strong>40.2
                  </p>
                </div>
                <div className="cartproductDescInfo2">
                  <div className="pdpQuantity">
                    <p className="removeQty"> - </p>
                    <input className="inputqty" type="text" value="1" />
                    <p className="addQty"> + </p>
                  </div>
                  <p class="pdpprice">$999</p>
                </div>
              </div>
            </div>
            <div className=" col-md-5 cartProductsOrderSummary">
              <div className="cartOrderSummaryCard">
                <h3 class="orderSummaryTitle">order summary</h3>
                <div className="orderDetail">
                  Subtotal
                  <span>$80</span>
                </div>
                <div className="orderDetail">
                  Estimated Shipping
                  <span>$80</span>
                </div>
                <div className="orderDetail">
                  Shipping Discount
                  <span>$80</span>
                </div>
                <div className="orderDetail">
                  Delivery Tax
                  <span>$80</span>
                </div>
                <div className="orderDetail total">
                  Total
                  <span>$999</span>
                </div>
                <button class=" p-2 checkoutnowbtn">checkout now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default CartPage;
