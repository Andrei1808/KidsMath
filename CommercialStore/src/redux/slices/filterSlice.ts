import { createSlice } from "@reduxjs/toolkit";
import { productInterface } from "../../hooks/useProducts";

interface filterSliceState {
  selectedCategory: string;
  products: productInterface[];
  selectedPrice: number[];
}

const initialState: filterSliceState = {
  selectedCategory: "all",
  products: [],
  selectedPrice: [0, 200],
};

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },

    setProducts: (state, action) => {
      state.products = action.payload;

      if (state.selectedCategory === "new") {
        state.products = state.products.filter((item) => item.isNew === true);
      }
      if (state.selectedCategory === "men") {
        state.products = state.products.filter((item) => item.gender === "man");
      }
      if (state.selectedCategory === "women") {
        state.products = state.products.filter(
          (item) => item.gender === "women"
        );
      }
    },

    setPrice: (state, action) => {
      state.selectedPrice = action.payload;

    }
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
