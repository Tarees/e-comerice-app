import React from 'react'
import { useSelector } from 'react-redux'
import ProductCard from '../components/ProductCard'
const Shop = () => {
  const productState = useSelector((state) => state.product);
  return (

        <div className="mx-auto py-12 px-4 md:px-16 lg:px-24">
        <h2 className="text-2xl font-bold text-center mb-6">All Products</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
          {productState.products &&
            productState.products.map((product) => (
             <ProductCard key={product.id} product={product}/>
            ))}
        </div>
      </div>

  )
}

export default Shop