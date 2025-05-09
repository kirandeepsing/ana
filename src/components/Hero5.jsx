import React from 'react'
import {Link} from "react-router-dom"
import { ArrowRight } from 'lucide-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [{
    img: "https://www.anayatglobalworks.com/assets/img/projects/8.webp",
    txt:"user centeric design",
    text:", highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app "
  },
  {
    img: "https://www.anayatglobalworks.com/assets/img/projects/9.webp",
    txt:"user centeric design",
    text:" lorem Anayat Gloed agencies on Upwork, higoviding mobile app development services. Acknowledged as one of the best mobile app development companies."
  },
  {
    img: "https://www.anayatglobalworks.com/assets/img/projects/9.webp",
    txt:"user centeric design",
    text:" lorem Anayat cies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app development companies, we always deliver cutting-edge solutions to assist businesses"
  },

  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 1024,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 480,
        settings: { slidesToShow: 1 },
      },
    ],
  };
  
const Hero5 = () => {
  return (
    <div className='flex min-w-[400px]  w-full sm:h-auto md:h-auto flex-wrap md:flex-nowrap mt-20'>
                   {/* this section is the left section basically */}
                   <div className='flex flex-col flex-wrap gap-4  items-center min-w-[400px] w-full md:w-1/3  h-[500px]'>
<div className='flex mt-20 gap-4 '>
<img className='h-3 w-20' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
<p className='font-bold'>Case Study</p>
</div>
<div>
<h2 className='text-4xl font-bold'>Creative</h2>
<h2 className='text-4xl font-bold  bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>work done</h2>
<h2 className='text-4xl font-bold'>we have </h2>
</div>
<div className='flex flex-col gap-3 mt-10'>

<Link className='group relative inline-block pl-4 hover:translate-x-5 transition-transform duraiton-300'>
<ArrowRight
  className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0  group-hover:opacity-100 transition-transform duration-300"
/>
   <span className="transition-transform  ml-2 group-hover:underline duration-300 group-hover:translate-4">
 Product Design
</span>
</Link>
<Link className='group relative inline-block pl-4 hover:translate-x-5 transition-transform duraiton-300'>
<ArrowRight
  className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0  group-hover:opacity-100 transition-transform duration-300"
/>
   <span className="transition-transform  ml-2 group-hover:underline duration-300 group-hover:translate-4">
 Game Design
</span>
</Link>
<Link className='group relative inline-block pl-4 hover:translate-x-5 transition-transform duraiton-300'>
<ArrowRight
  className="absolute left-0 top-1/2 -translate-y-1/2 opacity-0  group-hover:opacity-100 transition-transform duration-300"
/>
   <span className="transition-transform  ml-2 group-hover:underline duration-300 group-hover:translate-4">
Branding Design
</span>
</Link>
</div>
</div>
{/* this section is the left section basically */}
<div className=' flex flex-col gap-5 justify-between space-y-10 w-full min-w-[400px] md:w-[62%]  '>
<Slider {...settings}>
      {
        images.map((item,index)=>{
            return(
                <div className='flex gap-5 justify-between space-y-6 md:w-1/2 border-1  items-center rounded-lg  bg-gray-400 h-[500px] mt-2 w-full' key={index}>
<h2 className='text-center font-bold'> {item.txt}</h2>
<h2 className='text-center font-bold text-lg'>Portugus ui uix Design</h2>
<img className='text-center ml-6' src={item.img} alt="" />
                </div>
            )
        })
      }
    </Slider>
</div>
    </div>
  
  )
}

export default Hero5
