import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  items: [],
  status: null,
};

export const productFetching = createAsyncThunk(
  "products/productFetching",
  async () => {
    const res = await axios.get(
      "https://eager-sable-airedale.glitch.me/products"
    );
    return res.data;
  }
);

export const productsSlice = createSlice({
  name: "products",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(productFetching.pending, (state, action) => {
      state.status = "loading...";
    });

    builder.addCase(productFetching.fulfilled, (state, action) => {
      state.status = "";
      state.items = action.payload;
    });

    builder.addCase(productFetching.rejected, (state, action) => {
      state.status = "something went wrong!";
      state.items = action.payload; //rtk uses a packeg called "immer"
    });
  },
});

export default productsSlice.reducer;
