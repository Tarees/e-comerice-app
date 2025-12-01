import { createSlice } from "@reduxjs/toolkit";

// Load user from localStorage if available
const loadUserFromStorage = () => {
  try {
    const user = localStorage.getItem("ecommerce_user");
    return user ? JSON.parse(user) : null;
  } catch (error) {
    return null;
  }
};

const initialState = {
  user: loadUserFromStorage(),
  isAuthenticated: !!loadUserFromStorage(),
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("ecommerce_user", JSON.stringify(action.payload));
    },
    signup: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      localStorage.setItem("ecommerce_user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      localStorage.removeItem("ecommerce_user");
    },
  },
});

export const { login, signup, logout } = authSlice.actions;
export default authSlice.reducer;
