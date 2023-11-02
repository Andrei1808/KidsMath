import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";
import cartSlice from "./slices/cartSlice";

const store = configureStore({
  reducer: {
    wishList: wishListSlice,
    cart: cartSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
