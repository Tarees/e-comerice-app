import React from 'react'
import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Navbar = () => {
    // 1. Change this to select 'state.cart' instead of 'state.product'
    const products = useSelector((state) => state.cart.products); 

    return (
    <nav className='bg-white shadow-md'>
        <section className='container mx-auto px-4 md:px-16 lg:px-16 py-4 flex justify-between items-center'>
            <div className='text-lg font-bold'>
                <Link to="/">E-Shop</Link>
            </div>
            <div className='relative flex-1 mx-4'>
                <form>
                    <input type="text" placeholder='Search' className='w-full border rounded-xl py-2 px-4' />
                    <FaSearch className='absolute top-3 right-3 text-red-500'></FaSearch>
                </form>
            </div>
            <div className='flex items-center space-x-4'>
                <Link to="/cart" className='relative'>
                    <FaShoppingCart className='text-lg'></FaShoppingCart>
                    
                    {/* 2. Check if the cart has items, then display the length */}
                    {products.length > 0 && (
                        <span className='absolute top-0 text-xs w-3 left-3 bg-red-600 text-white flex justify-center items-center rounded-full'>
                            {products.length}
                        </span>
                    )}
                </Link>
                <button className='hidden md:block'>
                    Login | Logout
                </button>
                <button className='block md:hidden'>
                    <FaUser></FaUser>
                </button>
            </div>
        </section>
        <section className='flex items-center justify-center space-x-10 py-4 text-sm font-bold'>
            <Link to="/" className='hover:text-red-500 hover:underline'>
             Home
            </Link>
             <Link to="/shop" className='hover:text-red-500 hover:underline'>
             Shop
            </Link>
             <Link to="/contact" className='hover:text-red-500 hover:underline'>
             Contact
            </Link>
             <Link to="/about" className='hover:text-red-500 hover:underline'>
             About
            </Link>
        </section>
    </nav>
  )
}

export default Navbar