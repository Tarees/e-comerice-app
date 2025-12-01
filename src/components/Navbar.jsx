import React, { useState } from "react";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../redux/AuthSlice";
import { setSearchTerm } from "../redux/ProductSlice";

const Navbar = () => {
  const products = useSelector((state) => state.cart.products);
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setSearchTerm(search));
    navigate("/shop");
  };

  const handleLogout = () => {
    dispatch(logout());
    setShowDropdown(false);
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-md">
      <section className="container mx-auto px-4 md:px-16 lg:px-16 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to="/">E-Shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search products..."
              className="w-full border rounded-xl py-2 px-4"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit">
              <FaSearch className="absolute top-3 right-3 text-red-500 cursor-pointer"></FaSearch>
            </button>
          </form>
        </div>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg"></FaShoppingCart>

            {products.length > 0 && (
              <span className="absolute top-0 text-xs w-3 left-3 bg-red-600 text-white flex justify-center items-center rounded-full">
                {products.length}
              </span>
            )}
          </Link>

          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="hidden md:flex items-center space-x-2"
              >
                <FaUser />
                <span>{user?.name}</span>
              </button>
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="block md:hidden"
              >
                <FaUser />
              </button>

              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    onClick={() => setShowDropdown(false)}
                  >
                    Profile
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link to="/login">
              <button className="hidden md:block">Login | Signup</button>
              <button className="block md:hidden">
                <FaUser></FaUser>
              </button>
            </Link>
          )}
        </div>
      </section>
      <section className="flex items-center justify-center space-x-10 py-4 text-sm font-bold">
        <Link to="/" className="hover:text-red-500 hover:underline">
          Home
        </Link>
        <Link to="/shop" className="hover:text-red-500 hover:underline">
          Shop
        </Link>
        <Link to="/contact" className="hover:text-red-500 hover:underline">
          Contact
        </Link>
        <Link to="/about" className="hover:text-red-500 hover:underline">
          About
        </Link>
      </section>
    </nav>
  );
};

export default Navbar;
