import React from 'react'
import { FaShippingFast, FaHeadset, FaMoneyBill,FaCashRegister } from "react-icons/fa";

const InfoSection = () => {
  const infoSection = [
    {
      icon: <FaShippingFast className="text-3xl text-red-600" />,
      title: "Free Shipping",
      description: "On all orders over $100"
    },
    {
      icon: <FaHeadset className="text-3xl text-red-600" />,
      title: "Support 24/7",
      description: "Shop with confidence"
    },
    {
      icon: <FaMoneyBill className="text-3xl text-red-600" />,
      title: "Secure Payment",
      description: "100% secure payment"
    },
    {
      icon: <FaCashRegister className="text-3xl text-red-600" />,
      title: "Cash on Delivery",
      description: "Cash on Delivery"
    },
    {
      icon: <FaMoneyBill className="text-3xl text-red-600" />,
      title: "Discount",
      description: "Up to 90% off"
    },
  ]

  return (
    <div className='bg-white pb-8 pt-12'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4'>
          {infoSection.map((item,index)=>(
            <div key={index} className='flex flex-col items-center text-center p-4 border rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
              {item.icon}
              <h3 className='font-bold text-xl mt-2'>{item.title}</h3>
              <p className='text-gray-600 text-sm mt-2'>{item.description}</p>
            </div>
          ))}
        </div>
    </div>
  )
}
export default InfoSection