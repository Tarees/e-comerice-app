import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/CartSlice";

const Checkout = () => {
  const cart = useSelector((state) => state.cart);
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    address: "",
    city: "",
    zipCode: "",
    phone: "",
    paymentMethod: "credit-card",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName) newErrors.fullName = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.city) newErrors.city = "City is required";
    if (!formData.zipCode) newErrors.zipCode = "Zip code is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Generate random order number
    const orderNumber =
      "ORD" + Math.random().toString(36).substr(2, 9).toUpperCase();

    // Clear cart and navigate to confirmation
    dispatch(clearCart());
    navigate("/order-confirmation", {
      state: {
        orderNumber,
        shippingInfo: formData,
        orderTotal: cart.totalPrice,
      },
    });
  };

  if (cart.products.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-gray-600 mb-6">Add some products to checkout</p>
        <button
          onClick={() => navigate("/shop")}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
        >
          Continue Shopping
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <h2 className="text-3xl font-bold mb-8">Checkout</h2>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Checkout Form */}
        <div className="md:w-2/3">
          <form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
          >
            <h3 className="text-xl font-bold mb-6">Shipping Information</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.fullName && (
                  <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">
                Address *
              </label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.address && (
                <p className="text-red-500 text-xs mt-1">{errors.address}</p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium mb-2">City *</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.city && (
                  <p className="text-red-500 text-xs mt-1">{errors.city}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Zip Code *
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
                />
                {errors.zipCode && (
                  <p className="text-red-500 text-xs mt-1">{errors.zipCode}</p>
                )}
              </div>
            </div>

            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">
                Phone Number *
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-red-500"
              />
              {errors.phone && (
                <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
              )}
            </div>

            <h3 className="text-xl font-bold mb-4">Payment Method</h3>
            <div className="space-y-3 mb-6">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="credit-card"
                  checked={formData.paymentMethod === "credit-card"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Credit Card
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="paypal"
                  checked={formData.paymentMethod === "paypal"}
                  onChange={handleChange}
                  className="mr-2"
                />
                PayPal
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="cod"
                  checked={formData.paymentMethod === "cod"}
                  onChange={handleChange}
                  className="mr-2"
                />
                Cash on Delivery
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-bold"
            >
              Place Order
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-bold mb-4">Order Summary</h3>

            <div className="space-y-3 mb-4">
              {cart.products.map((product) => (
                <div key={product.id} className="flex justify-between text-sm">
                  <span>
                    {product.name} x {product.quantity}
                  </span>
                  <span className="font-semibold">
                    ${product.totalPrice.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t pt-3 space-y-2">
              <div className="flex justify-between text-sm">
                <span>Subtotal:</span>
                <span className="font-semibold">
                  ${cart.totalPrice.toFixed(2)}
                </span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Shipping:</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>Total:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
