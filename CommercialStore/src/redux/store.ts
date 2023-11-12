import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";
import cartSlice from "./slices/cartSlice";
import isLoading from "./slices/isLoadingSlice";

const store = configureStore({
  reducer: {
    wishList: wishListSlice,
    cart: cartSlice,
    isLoading: isLoading,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
