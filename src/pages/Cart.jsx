import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Model from "../components/Model";
import {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/CartSlice";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { isAuthenticated } = useSelector((state) => state.auth);
  const [address, setAddress] = useState("Main Street, New York, USA");
  const [isModelOpen, setIsModelOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCheckout = () => {
    if (!isAuthenticated) {
      alert("Please login to proceed to checkout");
      navigate("/login");
      return;
    }
    navigate("/checkout");
  };

  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">Shopping Cart</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            {/* LEFT SECTION: Product List */}
            <div className="md:w-2/3">
              {/* Table Headers */}
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold text-gray-600 pb-2">
                <p>PRODUCT</p>
                <div className="flex space-x-8">
                  <p>PRICE</p>
                  <p>QUANTITY</p>
                  <p>SUBTOTAL</p>
                  <p>REMOVE</p>
                </div>
              </div>

              {/* Product Rows */}
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b hover:bg-gray-50 transition duration-200"
                  >
                    {/* Image & Name */}
                    <div className="md:flex items-center space-x-4 w-2/5">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-16 h-16 object-cover rounded-lg border"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-sm font-semibold text-gray-800">
                          {product.name}
                        </h3>
                      </div>
                    </div>

                    {/* Price, Qty, Subtotal, Delete Actions */}
                    <div className="flex items-center space-x-8">
                      <p className="text-gray-600">
                        ${product.price.toFixed(2)}
                      </p>

                      {/* Quantity Control */}
                      <div className="flex items-center justify-center border rounded-md">
                        <button
                          className="text-sm font-bold px-2 py-1 border-r hover:bg-gray-200"
                          onClick={() =>
                            dispatch(decrementQuantity(product.id))
                          }
                        >
                          -
                        </button>
                        <p className="text-sm px-3">{product.quantity}</p>
                        <button
                          className="text-sm font-bold px-2 py-1 border-l hover:bg-gray-200"
                          onClick={() =>
                            dispatch(incrementQuantity(product.id))
                          }
                        >
                          +
                        </button>
                      </div>

                      <p className="font-bold text-gray-800">
                        ${(product.quantity * product.price).toFixed(2)}
                      </p>

                      <button
                        className="text-red-500 hover:text-red-700 transition"
                        onClick={() => dispatch(removeFromCart(product.id))}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT SECTION: Checkout/Summary */}
            <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border mt-8 md:mt-0 h-fit">
              <h3 className="text-sm font-semibold mb-5 uppercase border-b pb-2">
                Cart Total
              </h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span className="font-bold">{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p>Shipping:</p>
                <p className="ml-2">
                  Shipping to{" "}
                  <span className="text-sm font-bold">{address}</span>
                </p>
                <button
                  className="text-blue-500 text-sm underline mt-1 ml-2"
                  onClick={() => setIsModelOpen(true)}
                >
                  Change address
                </button>
              </div>
              <div className="flex justify-between mb-4 text-lg font-bold">
                <span>Total Price:</span>
                <span>${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button
                onClick={handleCheckout}
                className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition font-bold"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
          <Model
            isModelOpen={isModelOpen}
            setIsModelOpen={setIsModelOpen}
          ></Model>
        </div>
      ) : (
        /* EMPTY CART STATE */
        <div className="flex flex-col items-center justify-center min-h-[50vh]">
          <img
            src="https://static.vecteezy.com/system/resources/previews/016/462/240/non_2x/empty-shopping-cart-illustration-concept-on-white-background-vector.jpg"
            alt="Empty Cart"
            className="w-48 h-48 mb-4 object-contain"
          />
          <h3 className="text-lg font-bold text-gray-600">
            Your cart is empty
          </h3>
          <p className="text-gray-500 mb-6">
            Looks like you haven't added anything yet.
          </p>
          <Link
            to="/"
            className="bg-red-600 text-white px-6 py-2 rounded-full hover:bg-red-700 transition"
          >
            Shop Now
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
