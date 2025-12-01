import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/CartSlice";
import { useToast } from "../context/ToastContext";
import { FaMinus, FaPlus, FaShoppingCart, FaStar } from "react-icons/fa";

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { addToast } = useToast();
  const productState = useSelector((state) => state.product);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");

  // Find the product by ID
  const product = productState.products.find((p) => p.id === parseInt(id));

  if (!product) {
    return (
      <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24 text-center">
        <h2 className="text-2xl font-bold">Product not found</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
        >
          Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch(addToCart(product));
    }
    addToast(
      `Added ${quantity} item${quantity > 1 ? "s" : ""} to cart!`,
      "success"
    );
  };

  const incrementQuantity = () => setQuantity((prev) => prev + 1);
  const decrementQuantity = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Product Image */}
        <div className="bg-white rounded-lg overflow-hidden shadow-md">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Product Details */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400" />
            ))}
            <span className="ml-2 text-gray-600">
              (4.5 stars - 120 reviews)
            </span>
          </div>

          {/* Price */}
          <div className="mb-6">
            <span className="text-4xl font-bold text-red-600">
              ${product.price.toFixed(2)}
            </span>
            <span className="ml-3 text-gray-500 line-through text-xl">
              ${(product.price * 1.3).toFixed(2)}
            </span>
            <span className="ml-2 bg-red-100 text-red-600 px-2 py-1 rounded text-sm font-semibold">
              23% OFF
            </span>
          </div>

          {/* Category */}
          <div className="mb-6">
            <span className="text-gray-600">Category: </span>
            <span className="font-semibold text-red-600 capitalize">
              {product.category}
            </span>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-2">Description</h3>
            <p className="text-gray-700">
              Premium quality {product.name.toLowerCase()} made with the finest
              materials. Perfect for everyday wear with superior comfort and
              style. This product features excellent craftsmanship and attention
              to detail.
            </p>
          </div>

          {/* Size Selection */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Select Size</h3>
            <div className="flex gap-2">
              {sizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-lg transition ${
                    selectedSize === size
                      ? "bg-red-600 text-white border-red-600"
                      : "bg-white text-gray-700 border-gray-300 hover:border-red-600"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity Selector */}
          <div className="mb-6">
            <h3 className="text-lg font-bold mb-3">Quantity</h3>
            <div className="flex items-center border rounded-lg w-32">
              <button
                onClick={decrementQuantity}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <FaMinus className="text-sm" />
              </button>
              <span className="flex-1 text-center font-semibold">
                {quantity}
              </span>
              <button
                onClick={incrementQuantity}
                className="px-3 py-2 hover:bg-gray-100"
              >
                <FaPlus className="text-sm" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex-1 flex items-center justify-center space-x-2 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-bold"
            >
              <FaShoppingCart />
              <span>Add to Cart</span>
            </button>
            <button
              onClick={() => navigate("/shop")}
              className="px-6 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-bold"
            >
              Back to Shop
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 border-t pt-6">
            <h3 className="text-lg font-bold mb-3">Features</h3>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                High-quality materials
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                Free shipping on orders over $50
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                30-day money-back guarantee
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">✓</span>
                Available in multiple sizes
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
