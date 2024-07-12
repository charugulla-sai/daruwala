import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./Slices/searchSlice";

export const store = configureStore({
  reducer: {
    search: searchSlice.reducer,
  },
});
