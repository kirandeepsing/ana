import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { MoveRight } from 'lucide-react';

const images = [{
  img: "https://www.anayatglobalworks.com/assets/img/testimonials/user9.png",
  txt:"team bubbler",
  text:"highly appreciated for providing mobile app development services. Acknowledged as one  for providing mobile app development services. Acknowledged as one  of the best mobile app "
},
{
  img: "https://www.anayatglobalworks.com/assets/img/testimonials/user7.png",
  txt:"raina caseuo",
  text:" lorem Anayat Gloed agencies on Upwork, higoviding mobile app  for providing mobile app development services. Acknowledged as one  development services. Acknowledged as one of the best mobile app development companies."
},
{
  img: "https://www.anayatglobalworks.com/assets/img/testimonials/user8.png",
  txt:"jeniffer simpson",
  text:" lorem Anayat cies on Upwork, highly appreciated for providing  for providing mobile app development services. Acknowledged as one  mobile app development services. Acknowledged as one of the best mobile app development companies, we always deliver cutting-edge solutions to assist businesses"
},


];
const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  autoplay: true,
  autoplaySpeed: 3000,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1400,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1200,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 1024,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 768,
      settings: { slidesToShow: 1 },
    },
    {
      breakpoint: 480,
      settings: { slidesToShow: 1 },
    },
  ],
};

const Hero7 = () => {
  return (
    <div className='md:h-[700px] px-10 h-[200px] min-w-[400px] flex flex-col gap-10'>
          <div className='flex items-center justify-center mt-10'>
      <img className='h-3 w-20' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
     <h2>Feedbacks</h2> 
     <img className='h-3 w-20' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
    </div>
    <div>
      <h2 className='text-4xl font-bold text-center'>1200+ Happy Users Around <br />
      From Worlds</h2>
    </div>
    <div>
{/* this section is the top section basically */}
<div className='relative flex z-10 px-14 md:px-0  flex-col gap-5 md:ml-24  space-y-10 w-full min-w-[400px] md:w-[80%]  '>
<Slider {...settings}>
      {
        images.map((item,index)=>{
            return(
                <div className='flex gap-5z z-10 justify-between bg-transparent space-y-6 md:w-1/2 items-center rounded-lg  h-[250px] mt-2 w-full' key={index}>
<h2 className='z-10 '>{item.text}</h2>
<div className='flex text-center items-center md:ml-80'>
<img src=  {item.img} alt="" />
<div>
    <h2>{item.txt}</h2>
    <h2 className='text-sm'>Heads  trinity institutrion</h2>
</div>
</div>
                </div>
            )
        })
      }
    </Slider>
    <motion.img
  src="https://www.anayatglobalworks.com/assets/img/testimonials/user9.png"
  alt=""
  className="absolute top-32 right-[50px] -z-1 h-10 sm:right-[150px] md:left-[100px]  md:top-0"
  animate={{
    y: [0, -20, 0], 
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
    <motion.img
  src="https://www.anayatglobalworks.com/assets/img/testimonials/user7.png"
  alt=""
  className="absolute top-5 right-[300px] -z-1 h-15 sm:right-[150px] md:right-[100px]  md:top-26"
  animate={{
    y: [0, -20, 0], 
  }}
  transition={{
    duration: 2,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
<motion.div
  className="absolute top-20 left-[-10px] sm:left-[-60px] overflow-hidden w-24 h-24 rounded-full bg-gray-100 -z-10  "
  animate={{
    y: [0, 10, 0], 
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
</div>
  {/* this section is the top section basically */}
  <div className='w-full flex flex-wrap space-y-7 md:space-y-0 items-center justify-evenly bg-gray-50'>
<div className='text-sm'>
  <h3>Anytime you can make request to us</h3>
  <h1 className='font-bold text-xl'>Everything You Need To Manage Business</h1>
</div><div>
  <img className='h-32' src="https://www.anayatglobalworks.com/assets/img/testimonials/banner7.png" alt="" />
</div>
<div>
<button className=' flex outline-none border-none bg-purple-400 w-40 border-2 h-10 rounded-full items-center justify-around'>
            <h2 className='text-sm text-white font-bold'>get quote </h2>
            <div className=' rounded-full h-8 text-sm w-8 bg-gray-100 transform transition-transform cursor-pointer duration-300 ease-in-out hover:translate-x-1 shadow-2xl flex items-center'> <MoveRight /></div>
        </button>
</div>
  </div>
    </div>

    </div>


  )
}

export default Hero7
