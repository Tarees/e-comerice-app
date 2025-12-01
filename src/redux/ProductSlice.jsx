import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  searchTerm: "",
  selectedCategory: "all",
};

const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
});

export const { setProducts, setSearchTerm, setCategory } = productSlice.actions;
export default productSlice.reducer;
