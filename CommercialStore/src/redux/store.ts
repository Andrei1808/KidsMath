import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";
import cartSlice from "./slices/cartSlice";
import filterSlice from "./slices/filterSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    wishList: wishListSlice,
    cart: cartSlice,
    filter: filterSlice,
    user: userSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
