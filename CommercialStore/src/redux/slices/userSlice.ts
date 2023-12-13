import { createSlice } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

const initialState = {
  email: null,
  token: null,
  id: null,
  previousUrl: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.token = action.payload.token;
      state.id = action.payload.id;
    },

    removeUser(state) {
      state.email = null;
      state.token = null;
      state.id = null;
    },

    previousUrl(state, action) {
      state.previousUrl = action.payload.previousUrl
    },
  },
});

export const userActions = userSlice.actions;

export default userSlice.reducer;
