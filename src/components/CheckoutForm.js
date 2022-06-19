import React, { useState, useEffect } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { userRequest } from "../redux/api";
import { useDispatch } from "react-redux";
import { emptyCart } from "../redux/cartSlice";
import { updateCartByUserId, createPayment } from "../redux/apiReduxCalls";
import { toast } from "react-toastify";

export const CheckoutForm = ({ cartTotal, cartProducts, userId, postProduct }) => {
  const [clientSecret, setClientSecret] = useState("");
  const elements = useElements();
  const stripe = useStripe();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const spinner = () => {
    return (
      <div class="spinner-grow" role="status">
        <span class="visually-hidden">Loading...</span>
      </div>
    );
  };
  useEffect(() => {
    const fetchClientSecret = async () => {
      const data = await createPayment({ amount: cartTotal });
      setClientSecret(data.data.clientSecret);
    };

    fetchClientSecret();
    console.log("clientSecret is >>>>", clientSecret);
  }, []);

  const confirmPayment = async (e) => {
    e.preventDefault();
    spinner();
    await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then((result) => {
        spinner();
        userRequest
          .post("/orders", {
            userId: userId,
            products: cartProducts,
            amount: cartTotal,
            addresses: "India, Chennai",
          })
          .then(() => {
            postProduct.map((product) => {
              updateCartByUserId(product._id, { ...product, status: "done" });
            });
            spinner();
            toast.success("Order placed Successfully");
          })
          .then(() => {
            navigate("/success");
          });
      })
      .catch((err) => console.warn(err));
  };
  return (
    <>
      <form onSubmit={confirmPayment} style={{ maxWidth: "100%" }}>
        <CardElement />
        <button class=" p-2 mt-3 btn-primary payBtn">checkout now</button>
      </form>
    </>
  );
};
