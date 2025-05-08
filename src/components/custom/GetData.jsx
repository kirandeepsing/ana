import React, { useEffect, useState } from 'react'
import axios from "axios"
import { useDispatch } from 'react-redux';

const GetData = () => {
  const dispatch = useDispatch()

    useEffect(() => {
      const getProfile = async () => {
        try {
          const response = await axios.get(
            "https://fakestoreapi.com/products",
          );
          console.log("Fetched Product data:", response.data); 
          
        } catch (error) {
          console.error("Error fetching the products:", error);
        }
      };
  
      getProfile(); 
    }, []); 

  };
  
  export default GetData;
