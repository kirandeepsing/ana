import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearCart, decreaseQuantity, increaseQuantity, removeFromCart } from '../redux/cartSlice';

const Cart = () => {
    const dispatch = useDispatch();
const cartItems = useSelector((state)=> state.cart.cartitems);
const TotalPrice = cartItems?.reduce((acc,item)=> acc + item.price * item.quantity, 0).toFixed(2)
console.log("these all the items are coming from the cart", cartItems);
    return (
        <> 
        <h2 className='h-1 font-bold'> Total Price : 
            {TotalPrice}
        </h2>
          <div className='flex flex-wrap space-x-20 p-8 relative'>
            <h2 onClick={()=> dispatch(clearCart())} className='mt-10 absolute -top-4 left-[600px] font-bold cursor-pointer'>Clear all</h2>
            {
                cartItems?.map((item, index) => {
                    return (
                        <div className='h-[450px] border-1 rounded-lg border-black mt-8 w-80 space-y-2 shadow-lg ' key={index}>
                            <h2 className='font-bold'>Title : {item.title}</h2>
                            <img className='h-32 w-54 ml-12' src={item.image} alt="image" />
                            <h2>Price : {item.price}</h2>
                            <h2>Categroy : {item.category}</h2>
                            <div className='space-x-10'>
                            <button onClick={()=>dispatch(increaseQuantity(item.id))} className='border-1 ml-10 cursor-pointer bg-black h-7 w-56 text-white rounded-lg'>increase</button>
                            <span className='font-bold cursor-pointer ml-26 '>Quantity : {item.quantity}</span>
                            <button onClick={()=>dispatch(decreaseQuantity(item.id))} className='border-1 rounded-lg bg-black text-white ml-10 h-7  w-56 cursor-pointer'>decrease</button>
                            <button onClick={()=>dispatch(removeFromCart(item.id))} className='border-1 ml-20 bg-black rounded-lg p-2 text-white mt-3 h-10 cursor-pointer'>Remove from cart</button>
                            </div>
                        </div>
                    )
                })
            }
        </div>
        </>
    )
}

export default Cart
