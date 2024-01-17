import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface cartSliceProduct {
  id: number;
  title: string;
  img: string;
  price: number;
  quantity: number;
  totalPrice: number;
  size: string;
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
          title: newItem.title,
          img: newItem.img,
          price: newItem.price,
          quantity: newItem.quantity,
          totalPrice: newItem.totalPrice,
          size: 'S',
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

    removeItem: (state, action: PayloadAction<cartSliceProduct>) => {
      const removeItem = action.payload;
      state.cartItems = state.cartItems.filter(
        (item: cartSliceProduct) => item.id !== removeItem.id
      );
      state.totalProducts--;
      state.totalAmount = state.totalAmount - removeItem.totalPrice;
    },

    
    removeItems: (state) => {
      state.cartItems = [];
      state.totalProducts = 0;
    },

    increment: (state, action: PayloadAction<cartSliceProduct>) => {
      const increaseItem = action.payload;
      state.cartItems.filter((item: cartSliceProduct) => {
        if (item.id === increaseItem.id) {
          item.quantity = Number(increaseItem.quantity) + 1;
          item.totalPrice =
            Number(increaseItem.totalPrice) + Number(increaseItem.price);
          state.totalAmount = state.totalAmount + increaseItem.price;
        }
      });
    },

    decrement: (state, action: PayloadAction<cartSliceProduct>) => {
      const decreaseItem = action.payload;
      state.cartItems.filter((item: cartSliceProduct) => {
        if (item.id === decreaseItem.id && item.quantity > 1) {
          item.quantity = Number(decreaseItem.quantity) - 1;
          item.totalPrice =
            Number(decreaseItem.totalPrice) - Number(decreaseItem.price);
          state.totalAmount = state.totalAmount - decreaseItem.price;
        }
      });
    },

    setSize: (state, action: PayloadAction<cartSliceProduct>) => {
      const setSizeItem = action.payload;
      state.cartItems.find((item: cartSliceProduct) => {
        item.size = setSizeItem.size;
      });
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
