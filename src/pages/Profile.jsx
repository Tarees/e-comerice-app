import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../redux/AuthSlice";
import { FaUser, FaEnvelope, FaEdit, FaSave, FaTimes } from "react-icons/fa";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    zipCode: "",
  });
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Update user in Redux and localStorage
    const updatedUser = {
      ...user,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      address: formData.address,
      city: formData.city,
      zipCode: formData.zipCode,
    };

    dispatch(login(updatedUser));
    setIsEditing(false);
    setSaved(true);

    // Hide success message after 3 seconds
    setTimeout(() => setSaved(false), 3000);
  };

  const handleCancel = () => {
    setFormData({
      name: user?.name || "",
      email: user?.email || "",
      phone: user?.phone || "",
      address: user?.address || "",
      city: user?.city || "",
      zipCode: user?.zipCode || "",
    });
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto py-12 px-4 md:px-16 lg:px-24">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-8">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <FaUser className="text-white text-2xl" />
              </div>
              <div>
                <h1 className="text-3xl font-bold">My Profile</h1>
                <p className="text-gray-600">Manage your account information</p>
              </div>
            </div>

            {!isEditing && (
              <button
                onClick={() => setIsEditing(true)}
                className="flex items-center space-x-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
              >
                <FaEdit />
                <span>Edit Profile</span>
              </button>
            )}
          </div>

          {/* Success Message */}
          {saved && (
            <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-green-700 font-medium">
                Profile updated successfully!
              </p>
            </div>
          )}

          {/* Profile Form */}
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">
                  Full Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`w-full border rounded-lg px-3 py-2 ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-red-500"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={!isEditing}
                    className={`w-full border rounded-lg px-3 py-2 ${
                      isEditing
                        ? "focus:outline-none focus:ring-2 focus:ring-red-500"
                        : "bg-gray-50 cursor-not-allowed"
                    }`}
                  />
                </div>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder={isEditing ? "Enter phone number" : "Not provided"}
                className={`w-full border rounded-lg px-3 py-2 ${
                  isEditing
                    ? "focus:outline-none focus:ring-2 focus:ring-red-500"
                    : "bg-gray-50 cursor-not-allowed"
                }`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleChange}
                disabled={!isEditing}
                placeholder={
                  isEditing ? "Enter street address" : "Not provided"
                }
                className={`w-full border rounded-lg px-3 py-2 ${
                  isEditing
                    ? "focus:outline-none focus:ring-2 focus:ring-red-500"
                    : "bg-gray-50 cursor-not-allowed"
                }`}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">City</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder={isEditing ? "Enter city" : "Not provided"}
                  className={`w-full border rounded-lg px-3 py-2 ${
                    isEditing
                      ? "focus:outline-none focus:ring-2 focus:ring-red-500"
                      : "bg-gray-50 cursor-not-allowed"
                  }`}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Zip Code
                </label>
                <input
                  type="text"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  disabled={!isEditing}
                  placeholder={isEditing ? "Enter zip code" : "Not provided"}
                  className={`w-full border rounded-lg px-3 py-2 ${
                    isEditing
                      ? "focus:outline-none focus:ring-2 focus:ring-red-500"
                      : "bg-gray-50 cursor-not-allowed"
                  }`}
                />
              </div>
            </div>

            {/* Action Buttons */}
            {isEditing && (
              <div className="flex space-x-4 pt-4">
                <button
                  onClick={handleSave}
                  className="flex-1 flex items-center justify-center space-x-2 bg-red-600 text-white py-3 rounded-lg hover:bg-red-700 transition font-bold"
                >
                  <FaSave />
                  <span>Save Changes</span>
                </button>
                <button
                  onClick={handleCancel}
                  className="flex-1 flex items-center justify-center space-x-2 bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-bold"
                >
                  <FaTimes />
                  <span>Cancel</span>
                </button>
              </div>
            )}
          </div>

          {/* Account Information */}
          <div className="mt-8 pt-8 border-t">
            <h2 className="text-xl font-bold mb-4">Account Information</h2>
            <div className="bg-gray-50 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <span className="text-gray-600">Account Status:</span>
                  <span className="ml-2 font-semibold text-green-600">
                    Active
                  </span>
                </div>
                <div>
                  <span className="text-gray-600">Member Since:</span>
                  <span className="ml-2 font-semibold">January 2024</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
