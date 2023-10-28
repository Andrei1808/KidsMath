import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { wishListState, wishListProduct } from "../../interfaces/DataInterfaces";


const initialState: wishListState = {
  wishListItems: [],
  totalAmount: 0,
  totalQuantity: 0,
};

const wishListSlice = createSlice({
  name: "wishList",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<wishListProduct>) => {
      const newItem = action.payload;
      const existingItem = state.wishListItems.find(
        (item: wishListProduct) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.wishListItems.push({
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

      state.totalAmount = state.wishListItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      console.log(state.totalQuantity);
      console.log(newItem);
    },
  },
});

export const wishListActions = wishListSlice.actions;

export default wishListSlice.reducer;
