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
    <div className='h-[90px]  flex flex-wrap justify-between w-full md:w-1/2]  '>
<img className='h-[80px] w-[190px]' src="https://www.anayatglobalworks.com/assets/img/Logo-OnWhite.webp" alt="" />
<div className='flex flex-wrap'>
    <ul className=' justify-center items-center gap-11 mr-4 hidden text-sm font-bold sm:flex'>
        <li><Link>Home</Link></li>
        <li><Link>About Us</Link></li>
        <li><Link>Services</Link></li>
        <li><Link>Blog</Link></li>
        <li><Link>Contact Us</Link></li>
        <li><Link>Job</Link></li>
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
