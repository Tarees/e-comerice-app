import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa";

const OrderConfirmation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { orderNumber, shippingInfo, orderTotal } = location.state || {};

  if (!orderNumber) {
    return (
      <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Order not found</h2>
        <button
          onClick={() => navigate("/")}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
        >
          Go to Home
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="text-center mb-8">
          <FaCheckCircle className="text-green-500 text-6xl mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-800 mb-2">
            Order Confirmed!
          </h2>
          <p className="text-gray-600">Thank you for your purchase</p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Order Details</h3>
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Order Number:</span>
              <span className="font-bold">{orderNumber}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Total Amount:</span>
              <span className="font-bold text-red-600">
                ${orderTotal?.toFixed(2)}
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Estimated Delivery:</span>
              <span className="font-semibold">3-5 Business Days</span>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 mb-6">
          <h3 className="text-lg font-bold mb-4">Shipping Information</h3>
          <div className="space-y-1 text-gray-700">
            <p className="font-semibold">{shippingInfo?.fullName}</p>
            <p>{shippingInfo?.address}</p>
            <p>
              {shippingInfo?.city}, {shippingInfo?.zipCode}
            </p>
            <p>Phone: {shippingInfo?.phone}</p>
            <p>Email: {shippingInfo?.email}</p>
          </div>
        </div>

        <div className="text-center space-y-3">
          <p className="text-gray-600 text-sm">
            A confirmation email has been sent to {shippingInfo?.email}
          </p>
          <div className="flex gap-4 justify-center">
            <button
              onClick={() => navigate("/")}
              className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
            >
              Continue Shopping
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Browse Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;
