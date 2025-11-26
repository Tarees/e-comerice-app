import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'
const Footer = () => {
  return (
    <footer className='bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
        <div>
          <h3 className='text-xl font-semibold'>E-Shop</h3>
          <p className='mt-4'>Copyright © 2025 E-Shop. All rights reserved.</p>
          <p>Privacy Policy | Terms & Conditions</p>
          <p>Payment & Shipping
            All your products are original and 100% authentic.
            Safe and secure payment options.
            Fast and reliable shipping.
            Easy returns and exchanges.
          </p>
        </div>
        <div className='flex flex-col md:items-center'>
          <h3 className='text-xl font-semibold'>Quick Links</h3>
          <ul className='mt-4 space-y-2'>
            <li className='hover:text-red-500 hover:underline cursor-pointer'>
              <Link to='/'>Home</Link>    
              </li>
            <li className='hover:text-red-500 hover:underline cursor-pointer'>
              <Link to='/shop'>Shop</Link>
              </li>
            <li className='hover:text-red-500 hover:underline cursor-pointer'>
              <Link to='/contact'>Contact</Link>
              </li>
            <li className='hover:text-red-500 hover:underline cursor-pointer'>
              <Link to='/about'>About</Link>
              </li>
          </ul>
        </div>
        <div>
           <h3 className='text-xl font-semibold'>Follow Us</h3>
           <div className='flex space-x-4 mt-4'> 
            <a href=""><FaFacebookF/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><FaInstagram/></a>
           </div>
           <form className='flex items-center justify-center mt-8'>
            <input type="email" placeholder='Enter your email' className='rounded-l-lg broder broder-red-600 px-3 py-1.5'/>
            <button className='bg-red-600 text-white px-4 py-2 rounded-r-lg broder broder-red-600 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 cursor-pointer'>Subscribe</button>
           </form>
        </div>
      </div>
    </footer>
  )
}

export default Footer