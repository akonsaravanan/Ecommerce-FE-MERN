import { loginStart, loginSuccess, loginFailure } from "../redux/userSlice";
import { userRequest } from "../redux/api.js";
import { toast } from "react-toastify";

export const LoginApi = async (dispatch, navigate, postData) => {
  dispatch(loginStart());
  console.log(postData);
  try {
    const response = await userRequest.post("/user/signin", postData);
    // console.log(response.data);
    dispatch(loginSuccess(response.data));
    navigate("/home");
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const RegisterApi = async (dispatch, navigate, postData) => {
  dispatch(loginStart());
  try {
    const response = await userRequest.post("/user/signup", postData);
    dispatch(loginSuccess(response.data));
    navigate("/home");
  } catch (error) {
    dispatch(loginFailure());
  }
};
export const createCartByUserId = async (postData, navigate) => {
  try {
    const response = await userRequest.post("/carts", postData);
    console.log(response.data);
    // navigate("/cart");
  } catch (error) {}
};
export const getCartByUserId = async (userId) => {
  try {
    const response = await userRequest.get(`/carts/find/${userId}`);
    return response;
  } catch (error) {}
};
export const updateCartByUserId = async (cartId, data) => {
  try {
    const response = await userRequest.put(`/carts/${cartId}`, data);
    return response;
  } catch (error) {}
};
export const deleteCartBycartId = async (navigate, cartId) => {
  try {
    const response = await userRequest.delete(`/carts/${cartId}`);
    navigate("/cart");
    toast.success("Cart Deleted Successfully");

    return response;
  } catch (error) {}
};
export const createPayment = async (postdata) => {
  try {
    const response = await userRequest.post("/checkout/create-payment", postdata);
    toast.success("Cart Updated Successfully");

    return response;
  } catch (error) {}
};

export const getProductsBySearch = async (data) => {
  try {
    const response = await userRequest.get(`/product/q?title=${data}`);
    return response;
  } catch (error) {}
};
export const getProductsBycategory = async (data, page, color, size, sort) => {
  try {
    console.log("INSIDE GET ALL PRODUCTS");
    const response = await userRequest.get(`/product/find?categories=${data}&color=${color}&size=${size}&sort=${sort}&page=${page}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getAllProducts = async (data) => {
  try {
    console.log("INSIDE GET ALL PRODUCTS");
    const response = await userRequest.get(`/product?page=${data}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
export const getProductByID = async (data) => {
  try {
    const response = await userRequest.get(`/product/find/${data}`);
    return response;
  } catch (error) {}
};
