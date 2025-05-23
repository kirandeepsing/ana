import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useSelector } from 'react-redux';

const Navbar = () => {
  const cartItems = useSelector((state) => state.cart.cartitems);
  return (
    <div className='h-[90px] md:w-[full]  bg-white shadow-sm z-20 sticky top-0  min-w-[375px] lg:w-full xl:w-full  flex flex-wrap justify-between w-full md:w-1/2]  '>
      <img className='h-[80px] w-[190px]' src="https://www.anayatglobalworks.com/assets/img/Logo-OnWhite.webp" alt="" />
      <div className='flex flex-wrap'>
        <ul className=' justify-center items-center gap-11 mr-4 hidden sm:hidden text-sm font-bold md:flex'>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
       <li className="relative group">
  <Link className="hover:text-blue-500 flex visited:text-blue-500" to="/about">
    Services
    <IoIosArrowDown  className='mt-1'/>
  </Link>
  <ul className="absolute hidden group-hover:block duration-200 bg-white text-black h-66 top-5 -left-14 w-48 flex-col justify-center items-start space-y-2 p-4 z-10 rounded-2xl shadow-lg">
    <li>
      <Link to="/web" className="hover:text-gray-300 text-xs text-white-100">Web Development</Link>
    </li>
    <li>
      <Link to="/mobile" className="hover:text-gray-300 text-xs text-white-100">Mobile App Development</Link>
    </li>
    <li>
      <Link to="/wordpress" className="hover:text-gray-300 text-xs text-white-100">Wordpress Development</Link>
    </li>
    <li>
      <Link to="/design" className="hover:text-gray-300 text-xs text-white-100">UI UX Design</Link>
    </li>
    <li>
      <Link to="/digital" className="hover:text-gray-300 text-xs text-white-100">Digital Marketing</Link>
    </li>
    <li>
      <Link to="/ecommerce" className="hover:text-gray-300 text-xs text-white-100">E-commerce Development</Link>
    </li>
    <li>
      <Link to="/twilio" className="hover:text-gray-300 text-xs text-white-100">Twilio Development</Link>
    </li>
    <li>
      <Link to="/python" className="hover:text-gray-300 text-xs text-white-100">Python Development</Link>
    </li>
    <li>
      <Link to="/Aws" className="hover:text-gray-300 text-xs text-white-100">Aws Service</Link>
    </li>
  </ul>
</li>

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
          <li><Link to={"/cart"}>cart <span className='bg-amber-50 rounded-full w-26 border-1 border-black'>{cartItems?.length}</span></Link></li>
          <div>
            <Link to={"/admin"}>Admin</Link>
          </div>
        </ul>
        <Sheet>
          <SheetTrigger className="md:hidden sm:hidden block"><img src="https://www.anayatglobalworks.com/assets/img/icons/4dots.png" alt="" /></SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle><img src="https://www.anayatglobalworks.com/assets/img/Logo-OnWhite.webp" alt="" /></SheetTitle>
              <SheetDescription>
                <Link to={"/"}><li className='list-none text-lg mt-2'>Home</li></Link>
               <Link to={"/about"}><li className='list-none text-lg mt-2'>About us</li></Link>
                <Link to={"/blog"}><li className='list-none text-lg mt-2'>Blog</li></Link>
               <Link to={"/contact"}><li className='list-none text-lg mt-2'>Contact us</li></Link>
              <Link to={"/mobile"}> <li className='list-none text-lg mt-2' >Job</li></Link>
              <Link to={"/wordpress"}> <li className='list-none text-lg mt-2' >Mobile Development</li></Link>
              <Link to={"/design"}> <li className='list-none text-lg mt-2' >Wordpress Development</li></Link>
              <Link to={"/digital"}> <li className='list-none text-lg mt-2' >Ui Ux Design</li></Link>
              <Link to={"/ecommerce"}> <li className='list-none text-lg mt-2' >eCOMMERCE</li></Link>
              <Link to={"/twilio"}> <li className='list-none text-lg mt-2' >Twilio</li></Link>
              <Link to={"/python"}> <li className='list-none text-lg mt-2' >Python</li></Link>
              <Link to={"/Aws"}> <li className='list-none text-lg mt-2' >Aws</li></Link>
              <Link to={"/products"}> <li className='list-none text-lg mt-2' >Products</li></Link>
              <Link to={"/products"}> <li className='list-none text-lg mt-2' >Create</li></Link>
              <Link to={"/cart"}> <li className='list-none text-lg mt-2' >Cart</li></Link>
    
                <hr />
                <div className='flex mt-7 text-xl'>
                  <h2>Get In Touch</h2>
                  <div className='text-xl'>
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
