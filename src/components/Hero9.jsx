import { MoveRight } from 'lucide-react'
import React from 'react'

const Hero9 = () => {
  return (
    <div className='bg-purple-700 md:h-auto min-w-[400px] space-y-8  flex flex-wrap h-auto items-center justify-evenly'>
      <div>
        <img className='h-72 mt-5' src="https://www.anayatglobalworks.com/assets/img/vector1.png" alt="" />
      </div>
      <div className='flex flex-col gap-5'>
        <h6 className='text-white'>Hire us for your project</h6>
        <h1 className='text-4xl font-bold text-white'>Lets Work Together</h1>
        <div className='flex gap-4'>
            <div>
            <button className=' flex outline-none border-none bg-purple-400 w-40 border-2 h-10 rounded-full items-center justify-around'>
            <h2 className='text-sm text-white font-bold'>get started now </h2>
            <div className=' rounded-full h-8 text-sm w-8 bg-gray-100 transform transition-transform duration-300 ease-in-out hover:translate-x-1 cursor-pointer shadow-2xl flex items-center'> <MoveRight /></div>
        </button>
            </div>
            <div>
            <button className=' flex outline-none border-none bg-purple-400 w-40 border-2 h-10 rounded-full items-center justify-around'>
            <h2 className='text-sm text-white font-bold'>get started now </h2>
            <div className=' rounded-full h-8 text-sm w-8 bg-gray-100 transform transition-transform duration-300 ease-in-out hover:translate-x-1 cursor-pointer shadow-2xl flex items-center'> <MoveRight /></div>
        </button>
            </div>
        </div>
      </div>
      <div>
        <img className='h-72' src="https://www.anayatglobalworks.com/assets/img/vector2.webp" alt="" />
      </div>
    </div>
  )
}

export default Hero9
