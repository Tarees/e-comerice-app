import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
  totalQuantity: 0,
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const itemIndex = state.products.find((item) => item.id === newItem.id);

      if (itemIndex) {
        itemIndex.quantity++;
        itemIndex.totalPrice += newItem.price;
      } else {
        state.products.push({
          id: newItem.id,
          name: newItem.name,
          price: newItem.price,
          quantity: 1,
          totalPrice: newItem.price,
          image: newItem.image,
        });
      }
      state.totalPrice += newItem.price;
      state.totalQuantity++;
    },
    removeFromCart(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        state.totalPrice -= item.totalPrice;
        state.totalQuantity -= item.quantity;
        state.products = state.products.filter((item) => item.id !== id);
      }
    },
    incrementQuantity(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item) {
        item.quantity++;
        item.totalPrice += item.price;
        state.totalPrice += item.price;
        state.totalQuantity++;
      }
    },
    decrementQuantity(state, action) {
      const id = action.payload;
      const item = state.products.find((item) => item.id === id);
      if (item && item.quantity > 1) {
        item.quantity--;
        item.totalPrice -= item.price;
        state.totalPrice -= item.price;
        state.totalQuantity--;
      }
    },
    clearCart(state) {
      state.products = [];
      state.totalQuantity = 0;
      state.totalPrice = 0;
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;
export default cartSlice.reducer;
