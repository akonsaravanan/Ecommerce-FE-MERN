import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice";
import userReducer from "../redux/userSlice";

const Store = configureStore({
  reducer: {
    cart: cartReducer,
    user: userReducer,
  },
});

export default Store;
