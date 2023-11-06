import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface wishListProduct {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
  totalPrice: number;
  size: string;
}

export interface wishListState {
  wishListItems: wishListProduct[];
  totalAmount: number;
  totalQuantity: number;
  totalProducts: number;
}

const initialState: wishListState = {
  wishListItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  totalProducts: 0,
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
          title: newItem.title,
          img: newItem.img,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          size: newItem.size,
        });

        state.totalProducts++;
      } else {
        existingItem.quantity++;
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.price);
      }

      state.totalAmount = state.wishListItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    removeItem: (state, action) => {
      const removeItem = action.payload;
      state.wishListItems = state.wishListItems.filter(
        (item) => item.id !== removeItem
      );
      state.totalProducts--;
    },
  },
});

export const wishListActions = wishListSlice.actions;

export default wishListSlice.reducer;
