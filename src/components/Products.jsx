import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux'
import Cart from './Cart'
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"

const Products = () => {
  const dispatch = useDispatch();
  const [dataa,  setdataa] = useState([])
  const [cart, setcart] = useState([])
    useEffect(() => {
          const getProfile = async () => {
            try {
              const response = await axios.get(
                "https://fakestoreapi.com/products",
              );
              console.log("Fetched Product data:", response.data); 
             dispatch(setdataa(response.data))
            } catch (error) {
              console.error("Error fetching the products:", error);
            }
          };
      
          getProfile(); 
        }, []); 
        console.log("the product second data console.log",dataa);

/* this section is for the add to cart button */
const addtocart = (product) => {
  const isInCart = cart.find((item) => item.id === product.id);
  if (isInCart) {
    setcart(cart.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    ));
  } else {
    setcart([...cart, { ...product, quantity: 1 }]);
  }
  console.log("cart item", cart)
};

const TotalPrice = cart.reduce((total,item)=> total + item.price * item.quantity, 0).toFixed();
console.log("total price",TotalPrice)
  return (               
    <>
    <h2 className='text-center text-lg font-bold mt-5'>Products</h2>
    <div className='mt-10 relative  flex justify-center items-center space-y-10 space-x-20 flex-wrap'>
    {
      dataa.map((item,index)=>{
        return(
          <div className=' sm:w-[36%] md:w-[25%] rounded-2xl shadow-2xl h-[490px] flex flex-col space-y-6  text-sm' key={index}>
        <img className='h-44 w-full' src={item.image} alt="" />
        <h2> <span className='font-bold'>Title :</span> {item.title}</h2>
        <h2> <span className='font-bold'>Price:</span> {item.price}</h2>
        <h2><span className='font-bold'>Description:</span> this product is awsome to use as it was one of the lastest bran of clothes which are used in the daily life and these were awsome products</h2>
        <button onClick={()=>addtocart(item)} className='border-2 cursor-pointer h-10 rounded-lg tetx-lg'>add to cart</button>
          </div>
        )
      })  
    }
      </div>
    {/* this section is maly for the shacn ui cart */}
    <Drawer>
  <DrawerTrigger className="absolute top-20 left-[200px] text-xl font-bold cursor-pointer">Cart <span className='bg-amber-200 rounded-2xl'>{cart.length}</span></DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>Total Price : {TotalPrice} <br /> Total Item : {cart.length}</DrawerTitle>
      <DrawerDescription>
    <Cart  cart={cart} setcart={setcart} total={TotalPrice}/></DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <button className='cursor-pointer'>Checkout</button>
      <DrawerClose>
        <button className='cursor-pointer' variant="outline">Cancel</button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>
    </>
  )
}

export default Products
