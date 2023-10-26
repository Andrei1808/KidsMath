import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/wishListSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
  },
});

export default store;
