import { createSlice } from "@reduxjs/toolkit";


const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: false,
  reducers: {
    loaded: (state) => {
      return true;
    }
  },
});

export const isLoadingActions = isLoadingSlice.actions;

export default isLoadingSlice.reducer;
