import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlice from "./ProductSlice";
import authSlice from "./AuthSlice";

const Store = configureStore({
  reducer: {
    cart: cartSlice,
    product: productSlice,
    auth: authSlice,
  },
});

export default Store;
