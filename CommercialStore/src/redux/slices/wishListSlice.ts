import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { serverResponse } from "../../interfaces/DataInterfaces";

interface wishListProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

interface wishListState {
  cartItems: wishListProduct[];
  totalAmount: number;
  totalQuantity: number;
}

const initialState: wishListState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const wishListSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<wishListProduct>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item: wishListProduct) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
        });
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },
  },
});

export const cartActions = wishListSlice.actions;

export default wishListSlice.reducer;
