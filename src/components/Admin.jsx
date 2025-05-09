import React from 'react'
import { useSelector } from 'react-redux'

const Admin = () => {
    const products = useSelector((state) => state.product.products)
    console.log("the products are here",products.firstname)
  return (
    <div className='bg-gray-50 border-2 flex flex-col justify-center space-y-4 items-center'>
      <h2>User form</h2>
      <h2>firstname : {products.firstname}</h2>
      <h2>lastname : {products.lastname}</h2>
      <h2>phoneno : {products.phoneno}</h2>
      <h2>coverletter : {products.coverletter}</h2>
    </div>
  )
}

export default Admin
