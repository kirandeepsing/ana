import React from 'react'
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const Navbar = () => {
  return (
    <div className='h-[90px] md:w-[full] bg-white shadow-sm z-20 sticky top-0  min-w-[400px] lg:w-full xl:w-full  flex flex-wrap justify-between w-full md:w-1/2]  '>
<img className='h-[80px] w-[190px]' src="https://www.anayatglobalworks.com/assets/img/Logo-OnWhite.webp" alt="" />
<div className='flex flex-wrap'>
    <ul className=' justify-center items-center gap-11 mr-4 hidden text-sm font-bold sm:flex'>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About Us</Link></li>

<div>
        <li><Link to={"/products"} className='relative group'>Products</Link></li>
        <div className='absolute px-15 z-5 rounded-xl cursor-pointer h-66   w-44 top-7 opacity-0 group-hover:opacity-100 transition-all duration-200 space-y-5 -left-15 bg-white border-1 shadow-2xl'>
          <div>
<Link to={"/"}>home</Link>
          </div>
<div>
<Link to={"about"}>about</Link>
</div>
<div>
<Link to={"/Products"}>Products</Link>
</div>
<div>
<Link to={"/contact"}>contact us </Link>
</div>
<div>
<Link to={"/blog"}>blog</Link>
</div>
<div>
<Link to={"/job"}>job</Link>
</div>

        </div>
</div>





        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/contact"}>Contact Us</Link></li>
        <li><Link to={"/job"}>Job</Link></li>
    </ul>
    <Sheet>
  <SheetTrigger className="md:hidden sm:hidden block"><img src="https://www.anayatglobalworks.com/assets/img/icons/4dots.png" alt="" /></SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle><img src="https://www.anayatglobalworks.com/assets/img/Logo-OnWhite.webp" alt="" /></SheetTitle>
      <SheetDescription>
       <li className='list-none text-4xl mt-5'>home</li>
       <li className='list-none text-4xl mt-5'>about us </li>
       <li className='list-none text-4xl mt-5'>contact us</li>
       <li className='list-none text-4xl mt-5' >adrress</li>
       <hr />
       <div className='flex mt-7 text-3xl'>
        <h2>Get In Touch</h2>
        <div className='text-2xl'>
          <h2>+91-8264266061</h2>
          <h2>info@anayatglobalworks.com</h2>
        </div>
       </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

</div>
    </div>
  )
}

export default Navbar
