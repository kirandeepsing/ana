import { MoveRight } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";
const Hero3 = () => {
  return (
    <div className='bg-[url("https://www.anayatglobalworks.com/assets/img/about/about7_lines.webp")] bg-cover bg-center h-[600px] w-full  items-center flex flex-wrap md:flex-nowrap'>
        {/* this section is for the left section */}
        <div className='flex flex-col ml-4 gap-4 w-[100%] sm:w-[40%]'>
        <div className='flex gap-3 items-center'>
<img className='w-20 h-3 text-purple-500' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
<h2 className=' text-purple-500 font-bold'>About Us </h2>
        </div>
        <div>
            <h2 className='text-4xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Meet With Anayat Global</h2>
        </div>
        <div>
            <h2 className='text-4xl font-bold'>A Top-Rated Mobile and</h2>
        </div>
        <div>
            <h2 className='text-4xl font-bold'>Web Development Firm</h2>
        </div>
        <div>
            <p>Anayat Global is one of the top-rated agencies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app development companies, we always deliver cutting-edge solutions to assist businesses in thriving at the top of the digital world.</p>
        </div>
        <button className=' flex outline-none ml-6 border-none bg-purple-400 w-40 border-2 h-10 rounded-full items-center justify-around'>
            <h2 className='text-sm text-white font-bold'>get started now </h2>
            <div className=' rounded-full h-8 text-sm w-8 bg-gray-100  flex items-center'> <MoveRight /></div>
        </button>
        </div>
        {/* this section is tfor the right section */}
        <div className='relative w-[44%] mt-3'>
            <img className='min-w-96 ml-0' src="https://www.anayatglobalworks.com/assets/img/about/about7.webp" alt="" />
            <motion.img
  src="https://www.anayatglobalworks.com/assets/img/about/about7_chart.webp"
  alt=""
  className="absolute top-32 right-[50px] z-10 sm:right-[150px] md:right-[300px]"
  animate={{
    y: [0, -20, 0], // Move up -20px and come back
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
<motion.div
  className="absolute top-10 right-[-200px] sm:right-[-60px] overflow-hidden w-24 h-24 rounded-full bg-purple-500 -z-10  "
  animate={{
    x: [0, 10, 0], // Moves left → right → left
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
        </div>
    </div>
    
  )
}

export default Hero3
