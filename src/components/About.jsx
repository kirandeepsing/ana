import React from 'react'
import { Link } from 'react-router-dom'
import "../css/about.css"
import {Check} from "lucide-react"
import { motion } from "framer-motion";

const About = () => {
  return (
    <>
    {/*this is for the top section */}
     <div className='about w-full md:w-[1000px] lg:w-full xl:w-full flex flex-col flex-wrap'>
     <div className='home'>
      <Link to={"/"} className='link'>Home</Link>
      <h2>About</h2>
     </div>
     <div className='h1'>
      <h1>About Us</h1>
     </div>
    </div>
    {/* this is for the second section */}
    <div className='flex flex-col flex-wrap w-full justify-center items-center'>
    <div className='second flex flex-wrap w-full  md:w-[1000px] lg:w-full xl:w-full'>
        {/* this is first div */}
      <div className='md:w-[1000px] px-4'>
<h1 className=' bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Who Are We?</h1>
<p>Anayat Global is a leading web development and mobile application firm that offers personalized web-based development services, mobile applications enterprise portals, ecommerce applications web development, HTML iPhone/iOS/Android applications and PPC/SMO/SEO solutions for clients across the world. We have a team of highly skilled and experienced developers, designers, and QA experts to deliver projects that matches your custom needs.
</p>
      </div>
    </div>
    <div className='second sec md:w-[1000px] px-4'>
        {/* this is first div */}
      <div>
<h1>Our History</h1>
<p>Anayat Global was founded in the year 2018. Since the inception of our company , we've assisted our clients in meeting their technological demands by designing, developing and delivering cutting-edge technologies. The primary objective behind the establishment of the company was to make it easy for organizations to enhance their tech facilities.
</p>
      </div>
      <hr />
    </div>
    </div> <hr />
      {/* this is for the second div */}
        {/* this is for the second section */}
        <div className='flex flex-col justify-center items-center'>
    <div className='second2  md:w-[1000px] lg:w-full px-4 xl:w-full'>
        {/* this is first div */}
      <div className='img'>
        <img src="https://www.anayatglobalworks.com/assets/img/icons/serv_icons/16.png" alt="" />
        <div className='md:w-[1000px]'>
        <h1 className=' bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent'>Who Are We?</h1>
<p>Anayat Global is a leading web development and mobile application firm that offers personalized web-based development services, mobile applications enterprise portals, ecommerce applications web development, HTML iPhone/iOS/Android applications and PPC/SMO/SEO solutions for clients across the world. We have a team of highly skilled and experienced developers, designers, and QA experts to deliver projects that matches your custom needs.
</p>
        </div>

      </div>
    </div>
    <div className='second2  md:w-[800px] px-4'>
        {/* this is first div */}
      <div className='img2'>
        <img src="https://www.anayatglobalworks.com/assets/img/icons/serv_icons/vision-icon.png" alt="" />
        <div>
        <h1>Our History</h1>
<p>Anayat Global was founded in the year 2018. Since the inception of our company , we've assisted our clients in meeting their technological demands by designing, developing and delivering cutting-edge technologies. The primary objective behind the establishment of the company was to make it easy for organizations to enhance their tech facilities.
</p>
        </div>

      </div>
      <hr />
    </div>
    </div> <hr />

{/* this section is for the third section */}
 {/* this is for the second section */}
 <div className='flex flex-col justify-center items-center'>
    <div className='ourvalues'>
        {/* this is first div */}
      <div className='img'>
        <div>
          <div className='mt-10'>
            <h1 className='font-bold text-2xl'>Our Values</h1>
          </div>
        <div className='flex md:w-[1000px] mt-3'>
        <Check />
        <h1 className='font-bold text-sm '>Our Values :</h1>
<p className='text-sm ml-3 mt-0'>Anayat Global is a leading web development and mobile application firm that offers personalized web-based sevices have
</p>
        </div>
        </div>
      </div>
    </div>
    <div className=''>
        {/* this is first div */}
      <div className='img'>
        <div>
          <div className='flex md:w-[1000px] mt-3  '>
        <Check />
        <h1 className='font-bold text-sm'>Our History:</h1>
<p className='text-sm ml-3 mt-0'>Anayat Global was founded in the year 2018. Since the inception of our company , we've assisted our clients in meeting 
</p>
          </div>
          <div className='flex md:w-[1000px] mt-3  '>
        <Check />
        <h1 className='font-bold text-sm'>Satisfaction:</h1>
<p className='text-sm ml-3 mt-0'>Anayat Global was founded in the year 2018. Since the inception of our company , we've assisted our clients in meeting 
</p>
          </div>
          <div className='flex md:w-[1000px] mt-3  '>
        <Check />
        <h1 className='font-bold text-sm'>Relationship :</h1>
<p className='text-sm ml-3 mt-0'>Anayat Global was founded in the year 2018. Since the inception of our company , we've assisted our clients in meeting 
</p>
          </div>
        </div>
      </div>
      <hr />
    </div>
    </div> 

    {/* this seciton is mainly for the our culture and values */}
    <div className='culture flex flex-wrap md:w-[900px]'>
      <div>
      <h2 className='font-bold text-xl'>Our Culture And Character</h2>
      <p className='text-sm mt-8'>We have a positive work culture in place to establish mutual trust and respect between all. With us you get diverse yet skilled workforce to think out-of-the-box that not only match but exceeds your expectations. Our dedicated and solution-oriented character differentiates us from others. This is what makes us your go-to option for all your mobile and web development service needs.</p>
      </div>
    </div>
    <div className='relative md:w-[1000px] flex  culture2'>
  <motion.img
      className="culimg w-20 md:mt-80 ml-10 h-20 sm:ml-10 sm:h-26 sm:w-26 absolute md:top-[10px] mt-44 sm:relative sm:top-0  md:w-32 md:h-32 "
      src="https://www.anayatglobalworks.com/assets/img/about/intg1.png"
      alt=""
      animate={{
        y: [0, 20, 0], 
      }}
      transition={{
        y: {
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 2, 
          ease: "easeInOut",
        },
      }}
    
    />
  <motion.img
      className="culimg  w-20  md:mt-72 h-20 md:ml-20 sm:ml-10 sm:h-26  sm:w-26  ml-[150px] mt-44 absolute md:top-[10px] sm:relative sm:top-0  md:w-32 md:h-32 "
      src="https://www.anayatglobalworks.com/assets/img/about/intg5.png"
      alt=""
      animate={{
        y: [0, 20, 0], 
      }}
      transition={{
        y: {
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 2, 
          ease: "easeInOut",
        },
      }}
    
    />
  <motion.img
      className="culimg  w-20 md:mt-66 h-20 md:ml-20 sm:ml-10 sm:h-26  sm:w-26  absolute mt-44 ml-[250px] md:top-[10px] sm:relative sm:top-0  md:w-32 md:h-32 "
      src="https://www.anayatglobalworks.com/assets/img/about/intg4.png"
      alt=""
      animate={{
        y: [0, 20, 0], 
      }}
      transition={{
        y: {
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 2, 
          ease: "easeInOut",
        },
      }}
    
    />
  <motion.img
      className="culimg  w-20 md:mt-80 h-20 md:ml-20 sm:ml-10 sm:h-26  sm:w-26 absolute mt-44 ml-[350px] md:top-[10px] sm:relative sm:top-0  md:w-32 md:h-32 "
      src="https://www.anayatglobalworks.com/assets/img/about/intg2.png"
      alt=""
      animate={{
        y: [0, 20, 0], 
      }}
      transition={{
        y: {
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 2, 
          ease: "easeInOut",
        },
      }}
    
    />
  <motion.img
      className="culimg hidden sm:block sm:ml-[-20px] md:block lg:block w-20 md:mt-80 h-20 md:ml-20 sm:ml-10 sm:h-26  sm:w-26 absolute mt-44 ml-[350px] md:top-[10px] sm:relative sm:top-0  md:w-32 md:h-32 "
      src="https://www.anayatglobalworks.com/assets/img/about/intg2.png"
      alt=""
      animate={{
        y: [0, 20, 0], 
      }}
      transition={{
        y: {
          repeat: Infinity, 
          repeatType: "loop", 
          duration: 2, 
          ease: "easeInOut",
        },
      }}
    
    />

    </div>
    </>
   
  )
}

export default About
