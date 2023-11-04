import { PayloadAction, createSlice } from "@reduxjs/toolkit";


export interface cartSliceProduct {
  id: number;
  name: string;
  img: string;
  price: number;
  quantity: number;
  totalPrice: number;
}

export interface cartSliceState {
  cartItems: cartSliceProduct[];
  totalAmount: number;
  totalQuantity: number;
  totalProducts: number;
}

const initialState: cartSliceState = {
  cartItems: [],
  totalAmount: 0,
  totalQuantity: 0,
  totalProducts: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<cartSliceProduct>) => {
      const newItem = action.payload;
      const existingItem = state.cartItems.find(
        (item: cartSliceProduct) => item.id === newItem.id
      );

      state.totalQuantity++;

      if (!existingItem) {
        state.cartItems.push({
          id: newItem.id,
          name: newItem.name,
          img: newItem.img,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
        });

        state.totalProducts++;
      } else {
        existingItem.quantity =
          Number(existingItem.quantity) + Number(newItem.quantity);
        existingItem.totalPrice =
          Number(existingItem.totalPrice) + Number(newItem.totalPrice);
      }

      state.totalAmount = state.cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
    },

    removeItem: (state, action) => {
      const removeItem = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== removeItem
      );
      state.totalProducts--;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
