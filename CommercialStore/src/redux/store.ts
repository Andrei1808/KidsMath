import { configureStore } from "@reduxjs/toolkit";
import wishListSlice from "./slices/wishListSlice";

const store = configureStore({
  reducer: {
    wishList: wishListSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
