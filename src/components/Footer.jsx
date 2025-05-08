import React from 'react'
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { CiInstagram } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  return (
<>
<div className='h-auto md:h-[450px] ml-3 min-w-[400px] sm:h-auto md:w-[full] lg:w-full xl:w-full  sm:ml-0 text-2xl md:ml-0    flex flex-wrap items-center bg-gray-100'>
      <div className=' w-full  md:w-[33%] md:ml-3 flex flex-col justify-evenly space-y-9 mt-5'>
        <img className='h-20 w-40' src="https://www.anayatglobalworks.com/assets/img/Logo-OnWhite.webp" alt="" />
        <h2 className='text-sm'>Our highly skilled development teams specialized in Java, PHP, React, Angular and AWS help you accelarate.</h2>
        <div className="flex gap-4 text-blue-600 cursor-pointer">
  <CiFacebook  className='bg-gray-200 h-15 w-15 rounded-full' size={15} style={{height:"30px", width:"30px"}} />
  <CiTwitter  className='bg-gray-200 h-15 w-15 rounded-full' size={15} style={{height:"30px", width:"30px"}} />
  <CiInstagram  className='bg-gray-200 h-15 w-15 rounded-full' size={15} style={{height:"30px", width:"30px"}} />
  <FaLinkedinIn  className='bg-gray-200 h-15 w-15 rounded-full' size={15} style={{height:"30px", width:"30px"}} />
</div>
      </div>
      <div className='flex w-full sm:flex-nowrap space-x-26 space-y-0 flex-wrap md:ml-10 md:flex-nowrap h-full md:text-sm md:h-96 md:w-[60%] items-center ml-5'>
        <div className='space-y-4'>
            <h1 className='text-2xl font-bold mt-10 md:mt-0'>What We do</h1>
            <h5 className='mt-5'>Web development</h5>
            <h5>Web development</h5>
            <h5>Wordpress development</h5>
            <h5>Twilio Development</h5>
            <h5>Digital marketing</h5>
            <h5>Ecommerce Development</h5>
        </div>
        <div className='ml-5 space-y-4 mt-6 md:mt-0'>
            <h5 className='mt-5 font-bold'>About Us</h5>
            <h5>Services</h5>
            <h5>vlog</h5>
            <h5>contact us </h5>
            <h5>privacy policy</h5>
            <h5>terms and use </h5>
        </div>
        <div className='ml-5  space-y-3 mt-6 md:mt-0'>
            <h5 className='mt-5 font-bold'>Phone No</h5>
            <h5>+91-9781880061
            </h5>
            <h5>+91-8427168052</h5>
            <h5> 

</h5>
            <h5>Address</h5>
            <h5>Plot No e65 Ground Floor Phaase 8 Industrial <br /> Area Sahibzayada Ajit Singh Nagar Punjab <br /> 160071 </h5>
        </div>
      </div>
    </div>
 <div className='h-32 md:w-full  ml-3 min-w-[400px] flex-wrap lg:w-full xl:w-full  md:ml-0 bg-gray-100 flex items-center justify-center'>
    <h2 className='text-center h-20 w-full bg-white rounded-full flex items-center justify-center'>Full Copyright & Design By @anayatglobalworks - 2024</h2>

 </div>
</>
  )
}

export default Footer
