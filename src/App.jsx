import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Breadcrumbs from "./components/Breadcrumbs";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";
import ProductDetail from "./pages/ProductDetail";
import NotFound from "./pages/NotFound";
import { ToastProvider } from "./context/ToastContext";
import { useSelector } from "react-redux";

// Protected Route Component
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

const App = () => {
  return (
    <ToastProvider>
      <BrowserRouter>
        <Navbar />
        <Breadcrumbs />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/product/:id" element={<ProductDetail />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<Signup />}></Route>
          <Route
            path="/profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/checkout"
            element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            }
          ></Route>
          <Route
            path="/order-confirmation"
            element={<OrderConfirmation />}
          ></Route>
          <Route path="*" element={<NotFound />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </ToastProvider>
  );
};

export default App;
