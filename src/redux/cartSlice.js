import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0,
    total: 0,
    searchProducts: [],
    currentPage: 1,
    numOfPages: null,
    allProducts: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      state.quantity += 1;
      state.products.push(action.payload);
      state.total += action.payload.price * action.payload.qty;
    },
    emptyCart: (state, action) => {
      state = null;
    },
    updateQuantity: (state, action) => {
      state.quantity += action.payload;
    },
    searchResults: (state, action) => {
      state.searchProducts.length = 0;
      state.searchProducts.push(action.payload);
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setNumberOfPages: (state, action) => {
      state.numOfPages = action.payload.noOfPages;
      // console.log(state.numOfPages);
    },
  },
});

export const { addProductToCart, emptyCart, updateQuantity, searchResults, setCurrentPage, setNumberOfPages } = cartSlice.actions;
export default cartSlice.reducer;
