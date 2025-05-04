import React from 'react'
import { MoveRight } from 'lucide-react';
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <>
   {/* this is the left side bar section */}
   <div  className="flex flex-wrap bg-[url('https://www.anayatglobalworks.com/assets/img/header/head7_bg.webp')] bg-cover bg-center min-h-[450px] w-full justify-between">
 <div className='h-[450px] flex flex-col md:w-1/2] '>
 <div className=' flex  gap-3 ml-4 items-center '>
        <img className='h-[7px] w-[70px]' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
      <h2 className='font-bold text-purple-500 text-sm'>Get solid solution </h2>
    </div>
    <div className='flex flex-col flex-wrap sm:flex-col'>
        <h2 className='text-6xl font-bold mt-6'>Top Rated </h2>
      <h2 className='text-6xl font-bold mt-3  bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>mobile and web </h2>
      <h2 className='text-6xl font-bold mt-3 relative before:content-[""] before:absolute before:top-4 before:left-20 before:w-2 before:h-2 before:bg-purple-500 before:rounded-full before:animate-bounce bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent' >development </h2>
      <h2 className='text-6xl font-bold mt-3'>firm</h2>
      </div>
      <div className='flex flex-wrap mt-20 gap-4 ml-36'>
        <button className=' flex outline-none border-none bg-purple-400 w-40 border-2 h-10 rounded-full items-center justify-around'>
            <h2 className='text-sm text-white font-bold'>get started now </h2>
            <div className=' rounded-full h-8 text-sm w-8 bg-gray-100  flex items-center'> <MoveRight /></div>
        </button>
        <div>
            <h2 className='text-sm'> Support Email</h2>
            <h2 className='text-sm font-bold'>info@anayatglobalworks.com</h2>
        </div>
      </div>
    </div>
           {/* this is the right side bar section */}
<div className=' sm:flex sm:flex-nowrap mt-32 sm:mt-0 md:ml-0  md:w-1/2'>
  <img className='relative  min-w-[400px]' src="https://www.anayatglobalworks.com/assets/img/header/head_img7-min.webp" alt="" />
  <motion.img
      className="w-32 h-32 absolute top-[600px] sm:relative sm:top-0  md:w-32 md:h-32 "
      src="https://www.anayatglobalworks.com/assets/img/header/head7_rock.webp"
      alt=""
      animate={{
        y: [0, 20, 0], // Moves from y:0 to y:20 and back to y:0
      }}
      transition={{
        y: {
          repeat: Infinity, // Keeps repeating the animation
          repeatType: "loop", // Loops infinitely
          duration: 2, // Adjust the duration of each loop
          ease: "easeInOut", // Smooth transition
        },
      }}
    
    />
  </div>
    </div>

    </>
 
  )
}

export default Hero
