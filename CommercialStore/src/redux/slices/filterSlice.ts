import { createSlice } from "@reduxjs/toolkit";
import { productInterface } from "../../hooks/useProducts";

interface filterSliceState {
  selectedCategory: string;
  products: productInterface[];
}

const initialState: filterSliceState = {
  selectedCategory: "all",
  products: [],
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
      console.log("state.products", state.products);
      console.log("selected category", state.selectedCategory);

      if (state.selectedCategory === "new") {
        state.products = state.products.filter((item) => item.isNew === true);
        console.log('new', state.products);
      }
      if (state.selectedCategory === "men") {
        state.products = state.products.filter((item) => item.gender === "man");
        console.log('men', state.products);
      }
      if (state.selectedCategory === "women") {
        state.products = state.products.filter(
          (item) => item.gender === "women"
        );
      }
      if (state.selectedCategory === "all") {
        console.log("wooomen!!!!");
      }
    },
  },
});

export const filterActions = filterSlice.actions;

export default filterSlice.reducer;
