import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";

const store = configureStore({
  reducer: {
    wishList: wishListSlice,
  },
});

export default store;
