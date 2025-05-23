import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'

import { setProducts } from '../redux/productSlice'

import { addToCart } from '../redux/cartSlice'

const Products = () => {
  const dispatch = useDispatch();
  const [dataa, setdataa] = useState([])
  const products = useSelector((state) => state?.product?.products)
  console.log("the products of the set products is here", products)
  const [cart, setcart] = useState([])
  useEffect(() => {
    const getProfile = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products",
        );
        console.log("Fetched Product data:", response.data);
        setdataa(response.data)
      } catch (error) {
        console.error("Error fetching the products:", error);
      }
    };
    getProfile();
  }, []);
  console.log("the product second data console.log", dataa);

  /* this section is for the add to cart button */
  const addtocart = (product) => {
    dispatch(addToCart(product))
    alert("item have been added to the cart")
  };
  
  const TotalPrice = cart?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed();
  console.log("total price", TotalPrice);
  return (
    <>
      <h2 className='text-center text-lg font-bold mt-5'>Products</h2>
      <div className='mt-10 relative px-20 flex justify-center items-center space-y-10 space-x-20 flex-wrap'>
        {
          dataa.map((item, index) => {           
            return (
              <div className='sm:w-[36%] items-center md:w-[25%] rounded-2xl shadow-2xl h-[450px] flex flex-col space-y-6  text-sm' key={index}>
                <img className='h-44 w-[50%]' src={item?.image} alt="" />
                <h2><span className='font-bold'>Title :</span> {item?.title}</h2>
                <h2><span className='font-bold'>Price:</span> {item?.price}</h2>
                <h2><span className='font-bold'>Description:</span> this product is awsome to use as it was one of the lastest brand of clothes which are used in the daily life and these were awsome products</h2>
                <button onClick={() => addtocart(item)} className='border-2 w-44 bg-black text-white text-lg cursor-pointer h-10 rounded-lg tetx-lg hover:bg-gray-800'>Add to cart</button>
              </div>
            )
          })
        }
      </div>

    </>
  )
}

export default Products
