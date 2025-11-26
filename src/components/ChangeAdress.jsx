import React, { useState } from 'react';

const ChangeAddress = ({ setAddress, setIsModalOpen }) => {
  const [newAddress, setNewAddress] = useState("");

  const onClose = () => {
    setIsModalOpen(false);
  };

  const onSave = () => {
    setAddress(newAddress);
    setIsModalOpen(false);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center z-50">
      <div className="bg-white p-8 rounded-md shadow-md w-96">
        <h3 className="text-xl font-bold mb-4">Change Shipping Address</h3>
        <input 
          type="text" 
          placeholder="Enter new address" 
          className="w-full border p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-red-500"
          onChange={(e) => setNewAddress(e.target.value)}
        />
        <div className="flex justify-end">
            <button 
                className="bg-gray-500 text-white py-2 px-4 rounded mr-2 hover:bg-gray-600" 
                onClick={onClose}
            >
                Cancel
            </button>
            <button 
                className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" 
                onClick={onSave}
            >
                Save Address
            </button>
        </div>
      </div>
    </div>
  );
};

export default ChangeAddress;