import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartitems: [],
}

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
       addToCart(state,action){     
           const item = action.payload;
           const existingItem = state.cartitems.find(i => i.id === item.id);
           if (existingItem) {
            existingItem.quantity += 1;
           } else{
            state.cartitems.push({...item, quantity: 1});
           }            
        },
       increaseQuantity(state,action){
           const existingItem = state.cartitems.find(i => i.id === action.payload);
           if (existingItem) {
            existingItem.quantity += 1;
           }                            
        },
       decreaseQuantity(state,action){
           const existingItem = state.cartitems.find(i => i.id === action.payload);
           if (existingItem.quantity > 1) {
            existingItem.quantity -= 1;
           }else {
            state.cartitems = state.cartitems.filter(i => i.id !== action.payload)
           }
        },
       removeFromCart(state,action){
        state.cartitems = state.cartitems.filter(i => i.id !== action.payload)
        },
       clearCart(state){
        state.cartitems = [];
        }
    }
})
export const {addToCart,removeFromCart,increaseQuantity,decreaseQuantity,clearCart} = cartSlice.actions;
export default cartSlice.reducer;