import React from 'react'

const Cart = ({ cart, setcart }) => {
    const increasequantity = (product) =>{
        setcart(cart.map((item) =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
          ));
        }
        const decreasequantity = (product) =>{
            setcart(cart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
              ));
            }
            const removefromcart = (product)=>{
                setcart(cart.filter((item)=> item.id !== product.id))
            }
    
    
    console.log("cart is here ", cart)
    return (
        <div className='flex space-x-6 '>
            {
                cart.map((item, index) => {
                    return (
                        <div className='h-80 w-80 space-y-2 shadow-lg border-2' key={index}>
                            <h2 className='font-bold'>Title : {item.title}</h2>
                            <img className='h-32 w-76' src={item.image} alt="" />
                            <h2>Price : {item.price}</h2>
                            <h2>Categroy : {item.category}</h2>
                            <div className='space-x-10'>
                            <button onClick={()=>increasequantity(item)} className='border-1 bg-pink-300 rounded-lg'>increase</button>
                            <span>Quantity : {item.quantity}</span>
                            <button onClick={()=>decreasequantity(item)} className='border-1 bg-red-300 rounded-lg'>decrease</button>
                            <button onClick={()=> removefromcart(item)} className='border-1 ml-20 bg-yellow-200 rounded-lg mt-6'>Remove from cart</button>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Cart
