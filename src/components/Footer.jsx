import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

const Footer = () => {
  return (
<>
<div className='h-auto md:h-[450px] sm:h-auto sm:ml-5 ml-6 sm:ml-0 text-2xl md:ml-0 min-w-[400px] flex flex-wrap items-center bg-gray-100'>
      <div className=' w-full md:w-[33%] md:ml-3 flex flex-col justify-evenly space-y-9 mt-5'>
        <img className='h-20 w-32' src="https://www.anayatglobalworks.com/assets/img/Logo-OnWhite.webp" alt="" />
        <h2>Our highly skilled development teams specialized in Java, PHP, React, Angular and AWS help you accelarate.</h2>
        <div className="flex gap-4 text-blue-600 cursor-pointer">
  <Facebook className='bg-gray-200 h-15 w-15 rounded-full' size={15} style={{height:"30px", width:"30px"}} />
  <Twitter  className='bg-gray-200 h-15 w-15 rounded-full' size={15} style={{height:"30px", width:"30px"}} />
  <Instagram  className='bg-gray-200 h-15 w-15 rounded-full' size={15} style={{height:"30px", width:"30px"}} />
  <Linkedin  className='bg-gray-200 h-15 w-15 rounded-full' size={15} style={{height:"30px", width:"30px"}} />
</div>
      </div>
      <div className='flex w-full sm:flex-nowrap space-y-0 flex-wrap md:ml-10 md:flex-nowrap h-full md:text-sm md:h-96 md:w-[60%] items-center ml-5'>
        <div className='space-y-4'>
            <h1 className='text-4xl font-bold'>What We do</h1>
            <h5 className='mt-5'>Web development</h5>
            <h5>Web development</h5>
            <h5>Wordpress development</h5>
            <h5>Twilio Development</h5>
            <h5>Digital marketing</h5>
            <h5>Ecommerce Development</h5>
        </div>
        <div className='ml-5 space-y-4'>
            <h5 className='mt-5 font-bold'>About Us</h5>
            <h5>Services</h5>
            <h5>vlog</h5>
            <h5>contact us </h5>
            <h5>privacy policy</h5>
            <h5>terms and use </h5>
        </div>
        <div className='ml-5 space-y-3'>
            <h5 className='mt-5 font-bold'>Phone No</h5>
            <h5>+91-9781880061
            </h5>
            <h5>+91-8427168052</h5>
            <h5>    Email <br />

anayatglobalworks@gmail.com
<br />
info@anayatglobalworks.com
</h5>
            <h5>Address</h5>
            <h5>Plot No e65 Ground Floor Phaase 8 Industrial <br /> Area Sahibzayada Ajit Singh Nagar Punjab <br /> 160071 </h5>
        </div>
      </div>
    </div>
 <div className='h-32 bg-gray-100 flex rounded-full items-center justify-center'>
    <h2 className='text-center h-20 w-full bg-white  flex items-center justify-center'>Full Copyright & Design By @anayatglobalworks - 2024</h2>

 </div>
</>
  )
}

export default Footer
