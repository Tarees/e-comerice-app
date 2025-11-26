import React from 'react'
import { addToCart } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'

const ProductCard = ({product}) => {
    const dispatch = useDispatch()
    const handleAddToCart = (e, product) => {
        e.preventDefault()
        e.stopPropagation()
        dispatch(addToCart(product))
        alert("Product added to cart")
    }
  return (
    <div className='bg-white p-4 shadow rounded relative broder transform transition-transform duration-300 hover:scale-105 cursor-pointer'>
    <img src={product.image} alt={product.name} className='w-full h-48 object-cover mb-4 rounded-md'/>
    <h2 className='text-lg font-semibold truncate'>{product.name}</h2>
    <p className='text-gray-500'>${product.price}</p>
    <div>
        <button className='bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded-xl' onClick={(e)=>handleAddToCart(e, product)}>Add to Cart</button>
    </div>
    </div>
  )
}

export default ProductCard