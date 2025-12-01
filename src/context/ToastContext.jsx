import React, { createContext, useContext, useState } from "react";
import { useSelector } from "react-redux";
import { FaCheckCircle, FaShoppingCart } from "react-icons/fa";

const ToastContext = createContext();

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within ToastProvider");
  }
  return context;
};

export const ToastProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);
  const cartState = useSelector((state) => state.cart);

  const addToast = (message, type = "success") => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    // Auto remove after 2 seconds
    setTimeout(() => {
      removeToast(id);
    }, 2000);
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  return (
    <ToastContext.Provider value={{ addToast }}>
      {children}

      {/* Toast Container - Small and at Top */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg shadow-lg transform transition-all duration-300 animate-slide-in text-sm ${
              toast.type === "success"
                ? "bg-green-500 text-white"
                : "bg-red-500 text-white"
            }`}
          >
            <FaCheckCircle className="text-lg" />
            <span className="font-medium">{toast.message}</span>
            <div className="flex items-center space-x-1 ml-2 bg-white text-green-600 px-2 py-1 rounded-full font-bold text-xs">
              <FaShoppingCart />
              <span>{cartState.totalQuantity}</span>
            </div>
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
};
