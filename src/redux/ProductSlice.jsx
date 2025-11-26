import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    prodcts:[]
}
const productSlice = createSlice({
    name:"products",
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload
        }
    }
})
export const {setProducts} = productSlice.actions
export default productSlice.reducer
