import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  isLoading: true,
  product: {},
  isError: false,
};

const getProduct = createAsyncThunk("fetchProduct", async (productId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_BACKEND_SERVER}/api/products/${productId}`
  );
  return response.data;
});

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.product = action.payload;
      state.isLoading = false;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = action.error.message;
    });
  },
});
export { getProduct };
export default searchSlice;
