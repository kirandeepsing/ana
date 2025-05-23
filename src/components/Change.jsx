import React, { useState } from 'react'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux';
import { setProducts } from '../redux/productSlice';
import { useNavigate, useParams } from 'react-router-dom';
import Sidebar from './Sidebar';
const Change = () => {

  const {id} = useParams();
  console.log("this is the dynamix parameter id",id)
      const products = useSelector((state) => state?.product?.products)
  console.log("the products of the set products is here", products)
const dispatch = useDispatch();
const navigate = useNavigate();
    const [productData, setProductData] = useState({
        title: "",
        description: "",
        price: "",
        image:null
    });
     const [imagePreview, setImagePreview] = useState(null);
     
    const handleChange = (e) => {
        setProductData({ ...productData, [e.target.name]: e.target.value });
    };
    const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProductData({ ...productData, image: file });

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

    const handleSubmit = async (e) => {
        e.preventDefault();
          const formData = new FormData();
          formData.append("title", productData.title);
          formData.append("description", productData.description);
          formData.append("price", productData.price);
          formData.append("image", productData.image); // this is the real image which is getting sent in the json object
        try {
          const response = await axios.put(`https://fakestoreapi.com/products/${id}`, formData,{
              headers: {
        'Content-Type': 'multipart/form-data',
      },
          });
            console.log("the product data after creation",productData);
            console.log("the repsonse data is here which you can see",response.data);
            dispatch(setProducts(response.data))
                alert("Product updated successfully!");
        } catch (error) {
            console.error("Error creating product", error);
        }
    };
    return (
      <>
      <div className='flex'>
        <Sidebar/>
  <form onSubmit={handleSubmit} className='h-[400px] w-[80%] border-1 flex flex-col justify-center items-center space-y-3'>
            <h2>Change Your Product</h2>
            <input type="text" className='border-1 border-black h-10 rounded-lg'
                name='title'
                onChange={handleChange}
                placeholder='enter your title' />
            <input type="text" className='border-1 border-black h-10 rounded-lg'
                name='description'
                  onChange={handleChange}
                placeholder='enter your desciption' />
            <input type="text" className='border-1 border-black h-10 rounded-lg'
                name='price'
                onChange={handleChange}
                placeholder='enter your price' />

                {/* this section is mainly for the image uploads */}
                     <div>
            <label className="block text-sm text-gray-600 mb-1">Upload Image</label>
            <input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              required
              className="w-full px-2 py-2 border border-gray-300 rounded-lg bg-white"
            />
          </div>
           {imagePreview && (
            <div className="mt-4 flex justify-center">
              <img
                src={imagePreview}
                alt="Preview"
                className="w-32 h-32 object-cover rounded-lg shadow"
              />
            </div>
          )}
                <button type='submit' className='border-1 border-black rounded-lg h-12 w-32 bg-black text-white hover:bg-gray-800 cursor-pointer transition-transform'>change Product</button>
        </form>
      </div>
     
      </>
    
    )
}

export default Change
