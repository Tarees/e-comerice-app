import React, { useMemo, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../components/ProductCard";
import { setCategory, setProducts } from "../redux/ProductSlice";
import { productData } from "../assets/mockData";
import { FaFilter, FaTimes, FaChevronDown } from "react-icons/fa";

const Shop = () => {
  const dispatch = useDispatch();
  const productState = useSelector((state) => state.product);
  const [selectedFilter, setSelectedFilter] = useState(
    productState.selectedCategory || "all"
  );
  const [showFilterDropdown, setShowFilterDropdown] = useState(false);

  // Load products if not already loaded (fixes reload issue)
  useEffect(() => {
    if (productState.products.length === 0) {
      dispatch(setProducts(productData));
    }
  }, [dispatch, productState.products.length]);

  // Sync local filter state with Redux state
  useEffect(() => {
    setSelectedFilter(productState.selectedCategory);
  }, [productState.selectedCategory]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        showFilterDropdown &&
        !event.target.closest(".filter-dropdown-container")
      ) {
        setShowFilterDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [showFilterDropdown]);

  // Filter products based on search term and category
  const filteredProducts = useMemo(() => {
    let filtered = productState.products;

    // Filter by search term
    if (productState.searchTerm) {
      filtered = filtered.filter(
        (product) =>
          product.name
            .toLowerCase()
            .includes(productState.searchTerm.toLowerCase()) ||
          product.category
            .toLowerCase()
            .includes(productState.searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (productState.selectedCategory !== "all") {
      filtered = filtered.filter(
        (product) => product.category === productState.selectedCategory
      );
    }

    return filtered;
  }, [
    productState.products,
    productState.searchTerm,
    productState.selectedCategory,
  ]);

  const handleFilterChange = (category) => {
    setSelectedFilter(category);
    dispatch(setCategory(category));
  };

  const categories = [
    { value: "all", label: "All Products", icon: "🛍️" },
    { value: "men", label: "Men", icon: "👔" },
    { value: "women", label: "Women", icon: "👗" },
    { value: "kids", label: "Kids", icon: "🧸" },
    { value: "accessories", label: "Accessories", icon: "👜" },
    { value: "footwear", label: "Footwear", icon: "👟" },
  ];

  // Get current category display name
  const currentCategory = categories.find(
    (cat) => cat.value === selectedFilter
  );

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      {/* Header with Category Title and Filter Button */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-4xl font-bold mb-2">
            {currentCategory?.label || "Shop"}
          </h1>
          <p className="text-gray-600">
            {filteredProducts.length} product
            {filteredProducts.length !== 1 ? "s" : ""} available
          </p>
        </div>

        {/* Filter Button with Dropdown */}
        <div className="relative filter-dropdown-container">
          <button
            onClick={() => setShowFilterDropdown(!showFilterDropdown)}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all shadow-md ${
              showFilterDropdown
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-300"
            }`}
          >
            <FaFilter
              className={showFilterDropdown ? "text-white" : "text-red-600"}
            />
            <span>Filters</span>
            <FaChevronDown
              className={`text-sm transition-transform ${
                showFilterDropdown ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu with Checkboxes */}
          {showFilterDropdown && (
            <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-xl border border-gray-200 z-50 overflow-hidden">
              <div className="p-4 border-b bg-gray-50">
                <div className="flex items-center justify-between">
                  <span className="font-bold text-gray-800">
                    Filter by Category
                  </span>
                  <button
                    onClick={() => setShowFilterDropdown(false)}
                    className="text-gray-500 hover:text-gray-700"
                  >
                    <FaTimes />
                  </button>
                </div>
              </div>

              <div className="p-3 max-h-96 overflow-y-auto">
                {categories.map((category) => (
                  <label
                    key={category.value}
                    className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  >
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={selectedFilter === category.value}
                        onChange={() => handleFilterChange(category.value)}
                        className="w-5 h-5 text-red-600 border-gray-300 rounded focus:ring-red-500 cursor-pointer"
                      />
                    </div>
                    <span className="text-2xl">{category.icon}</span>
                    <span className="flex-1 font-medium text-gray-700">
                      {category.label}
                    </span>
                    {selectedFilter === category.value && (
                      <span className="bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full font-semibold">
                        Active
                      </span>
                    )}
                  </label>
                ))}
              </div>

              {/* Clear Filters */}
              {productState.selectedCategory !== "all" && (
                <div className="p-3 border-t bg-gray-50">
                  <button
                    onClick={() => {
                      setSelectedFilter("all");
                      dispatch(setCategory("all"));
                    }}
                    className="w-full flex items-center justify-center space-x-2 text-red-600 hover:text-red-700 font-semibold py-2"
                  >
                    <FaTimes />
                    <span>Clear All Filters</span>
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Search Results Info */}
      {productState.searchTerm && (
        <div className="mb-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="text-blue-800">
            Search results for:{" "}
            <span className="font-bold">"{productState.searchTerm}"</span>
          </p>
        </div>
      )}

      {/* Products Grid */}
      <div>
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-12 bg-gray-50 rounded-lg">
            <div className="text-6xl mb-4">🔍</div>
            <p className="text-gray-500 text-lg font-semibold">
              No products found
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try adjusting your filters or search term
            </p>
            {(productState.searchTerm ||
              productState.selectedCategory !== "all") && (
              <button
                onClick={() => {
                  setSelectedFilter("all");
                  dispatch(setCategory("all"));
                }}
                className="mt-4 bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                View All Products
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
