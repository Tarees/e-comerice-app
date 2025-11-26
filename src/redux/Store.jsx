import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import cartSlice from './CartSlice'
import productSlice from './ProductSlice'    

const Store = configureStore({
    reducer:{
        cart:cartSlice,
        product:productSlice
    }
}) 


export default Store;