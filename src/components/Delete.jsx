import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch, useSelector } from 'react-redux'
import { setProducts } from '../redux/productSlice'
import { addToCart } from '../redux/cartSlice'
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom'

const Delete = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
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
  const handlechange = (itemid) => {
navigate(`/change/${itemid}`)
  };
  
  const handledelete = async(product) =>{
    try {
       const response = await axios.delete(`https://fakestoreapi.com/products/${product.id}`);
       console.log('the product have been deleted successfully', response.data)
       // Update state locally
      setdataa(prev => prev.filter(p => p.id !== product.id));
    } catch (error) {
     console.error("Error fetching the products:", error);
    }
  }
  const TotalPrice = cart?.reduce((total, item) => total + item.price * item.quantity, 0).toFixed();
  console.log("total price", TotalPrice);
  return (
    <div className='flex '>
      <Sidebar/>

      <div className='mt-10 relative w-[60% ]  flex justify-center items-center space-y-10 space-x-20 flex-wrap'>
        {
          dataa.map((item, index) => {           
            return (
              <div className='sm:w-[36%] border-1 border-black items-center md:w-[25%] rounded-2xl shadow-2xl h-[470px] flex flex-col space-y-6  text-sm' key={index}>
                <img className='h-44 w-[50%]' src={item?.image} alt="" />
                <h2><span className='font-bold '>Title :</span> {item?.title}</h2>
                <h2><span className='font-bold'>Price:</span> {item?.price}</h2>
                <h2><span className='font-bold'>Description:</span> this product is awsome to use as it was one of the lastest brand of clothes which are used in the daily life and these were awsome products</h2>
                <button onClick={()=>handlechange(item?.id)} className='border-2 w-44 bg-black text-white text-lg cursor-pointer h-10 rounded-lg tetx-lg hover:bg-gray-800'>Change product</button>
                <button onClick={() => handledelete(item)} className='border-2 w-44 bg-black text-white text-lg cursor-pointer h-10 rounded-lg tetx-lg hover:bg-gray-800'>Delete</button>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Delete
