import React from 'react'
import "../css/blog2.css"
import { Facebook,Instagram,Twitter,Youtube, Search } from "lucide-react"
const Blog = () => {
    return (
        <>
            {/*top section mainly for the carousel section*/}
            <div className='journal h-44 flex min-w-[400px] flex-wrap flex-col w-full justify-center items-center'>
                <h2 className='text-4xl font-bold'>Our Journal</h2>
                <p className='mt-5 px-10'>Get the latest articles from our journal, writing, discuss and share</p>
            </div>
            {/*this is the second section*/}
            <div className='blog1 min-w-[400px] ml-3 sm:ml-0 relative text-white flex justify-center '>
                <img className='w-full rounded-2xl' src="https://media.istockphoto.com/id/1352603244/photo/shot-of-an-unrecognizable-businessman-working-on-his-laptop-in-the-office.webp?a=1&b=1&s=612x612&w=0&k=20&c=DNh3mMglIT-Oryjr8NemB8N50K0ZkjngHK6q3Y9_8MY=" alt="" />
                <div className='blog-2widt absolute ml-10 pr-10 top-54 left-0 w-96'>
                    <div className='blog2-w flex space-x-4'>
                        <h2>News</h2> <span>Posted 3 Days Ago</span>
                    </div>
                    <h2 className='text-3xl mt-7 blog2-wi'>Solutions for the big data issues, expert perspective</h2>
                    <p className='blog2-wid mt-8'>If there’s one way that wireless technology has changed the way we work, it’s that will everyone is now connected [...]
                    </p>
                </div>
            </div>

            {/*popular post section */}
            <h2 className='text-center mt-20 text-2xl font-bold'>Popular Posts</h2>
            <div className='popularpost h-[600px] flex flex-wrap'>
                <div>
                    {/*first div */}
                    <div className='blog2 h-[500px] cursor-pointer w-[400px] rounded-lg shadow-xl border-2 mt-15 ml-3 px-2 '>
                        <img className='w-92 h-44 rounded-lg ml-1 mt-8' src="https://www.anayatglobalworks.com/assets/img/blog/mobile-app-dev.jpg" alt="" />
                        <div className='flex gap-3 mt-4 text-sm ml-10'>
                            <p>News</p>
                            <p>Posted On 3 Days Ago</p>
                        </div>
                        <h1 className='mt-10 font-bold text-xl ml-9'>Why To Connect with top monbile app companydeveloping the best of the apps world wide</h1>
                        <p className='sm'>Getting a mobile presence is a must for all today [...]</p>
                        <div className='ml-66 mt-5 text-sm'>
                            <h2 className='ml-5'>By Admin</h2>
                            <div className='blog2-mar flex gap-8'>
                                <h2>2.4k</h2>
                                <h2>28.2k</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    {/*first div */}
                    <div className='blog2 h-[500px] cursor-pointer w-[400px] rounded-lg shadow-xl border-2 mt-15 ml-3 px-2 '>
                        <img className='w-92 h-44 rounded-lg ml-1 mt-8' src="https://www.anayatglobalworks.com/assets/img/blog/web-app-dev.jpg" alt="" />
                        <div className='flex gap-3 mt-4 text-sm ml-10'>
                            <p>News</p>
                            <p>Posted On 3 Days Ago</p>
                        </div>
                        <h1 className='mt-10 font-bold text-xl ml-9'>Why To Connect with top monbile app companydeveloping the best of the apps world wide</h1>
                        <p className='sm'>Getting a mobile presence is a must for all today [...]</p>
                        <div className='ml-66 mt-5 text-sm'>
                            <h2 className='ml-5'>By Admin</h2>
                            <div className='blog2-mar flex gap-8'>
                                <h2>2.4k</h2>
                                <h2>28.2k</h2>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                    {/*first div */}
                    <div className='blog2 h-[500px] cursor-pointer w-[400px] rounded-lg shadow-xl border-2 mt-15 ml-3 px-2 '>
                        <img className='w-92 h-44 rounded-lg ml-1 mt-8' src="https://www.anayatglobalworks.com/assets/img/blog/5.png" alt="" />
                        <div className='flex gap-3 mt-4 text-sm ml-10'>
                            <p>News</p>
                            <p>Posted On 3 Days Ago</p>
                        </div>
                        <h1 className='mt-10 font-bold text-xl ml-9'>Why To Connect with top monbile app companydeveloping the best of the apps world wide</h1>
                        <p className='sm'>Getting a mobile presence is a must for all today [...]</p>
                        <div className='ml-66 mt-5 text-sm'>
                            <h2 className='ml-5'>By Admin</h2>
                            <div className='blog2-mar flex gap-8'>
                                <h2>2.4k</h2>
                                <h2>28.2k</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blog section 2 is here */}

            <div className='h-[840px] flex flex-wrap search'>
                {/* this is the left div */}
                <div className='searchh w-96 h-[800px] ml-6 flex flex-col space-y-8  shadow-sm rounded-2xl'>
                    <h2>Search</h2>
                    <div className='flex h-12 rounded-2xl w-80 border-2 px-4 items-center justify-center' >
                        <input className='w-80 border-none outline-0 rounded-2xl h-12' placeholder='seach here' type="text" />
                        <Search />
                    </div>
                    <h2 className='mt-3'>Recent Posts</h2>
                    <div className='flex items-center cursor-pointer'>
                        <img className='w-26 h-20 rounded-lg' src="https://www.anayatglobalworks.com/assets/img/blog/web-app-dev.jpg" alt="" />
                        <div className='sm space-y-2'>
                            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatum. Natus, voluptate?</p>
                        </div>
                    </div>
                    <div className='flex items-center cursor-pointer'>
                        <img className='w-26 h-20 rounded-lg' src="https://www.anayatglobalworks.com/assets/img/blog/mobile-app-dev.jpg" alt="" />
                        <div className='sm space-y-2'>
                            <p className='font-bold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, corrupti.</p>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis, voluptatum. Natus, voluptate?</p>
                        </div>
                    </div>
                    {/* categories */}
                    <div>
                        <h2>Categories</h2>
                    </div>
                    <div className='flex hover:cursor-pointer  hover:text-blue-400 h-4 justify-between px-6 sm border-b-1 '>
                        <p>All</p>
                        <p>295</p>
                    </div>
                    <div className='flex h-4 hover:cursor-pointer hover:text-blue-400 transition-transform  justify-between px-6 sm border-b-1 '>
                        <p>All</p>
                        <p>295</p>
                    </div>
                    <div className='flex h-4 hover:cursor-pointer  hover:text-blue-400  justify-between px-6 sm border-b-1 '>
                        <p>All</p>
                        <p>295</p>
                    </div>
                    <div className='flex h-4 hover:cursor-pointer  hover:text-blue-400 justify-between px-6 sm border-b-1 '>
                        <p >All</p>
                        <p>295</p>
                    </div>

                </div>

                {/* this is the right div */}
                <div>

                    <div className=' newspaperr  flex flex-col space-y-10 w-[400px] sm:w-[400px] md:w-[750px]  h-[750px] ml-5'>
                        {/* this is repetative divs */}
                        <div className='flex flex-wrap  md:flex-nowrap cursor-pointer'>
                            <div>
                                <img className='h-52 w-96 shadow-xl rounded-lg' src="https://www.anayatglobalworks.com/assets/img/blog/mobile-app-dev.jpg" alt="" />
                            </div>
                            <div className='space-y-6 flex flex-wrap w-96 sm:w-96 md:flex-col  '>
                                <div className='flex gap-4 ml-5'>
                                    <p>News</p>
                                    <p>12 Days ago</p>
                                </div>
                                <div className=''>
                                    <p className='ml-5 font-bold'>Lorem, ipsum dolor sit amet  consectetur span adipisicing elit. Labore quo illo officia.</p>
                                    <p className='sm ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam amet nemo.</p>
                                </div>
                                <div className='ml-32 text-sm space-y-2'>
                                    <h2>By Admin</h2>
                                    <div className='flex gap-8'>
                                        <h2>2.4k</h2>
                                        <h2>28.2k</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='flex flex-wrap md:flex-nowrap cursor-pointer'>
                            <div>
                                <img className='h-52 shadow-xl w-92 rounded-lg' src="https://www.anayatglobalworks.com/assets/img/blog/web-app-dev.jpg" alt="" />
                            </div>
                            <div className='space-y-6 flex flex-wrap w-96 sm:w-96 md:flex-col'>
                                <div className='flex  flex-wrap md:flex-col  gap-4 ml-5'>
                                    <p>News</p>
                                    <p>12 Days ago</p>
                                </div>
                                <div>
                                    <p className='ml-5 font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quo illo officia.</p>
                                    <p className='sm ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam amet nemo.</p>
                                </div>
                                <div className='ml-32 text-sm space-y-2'>
                                    <h2>By Admin</h2>
                                    <div className='flex gap-8'>
                                        <h2>2.4k</h2>
                                        <h2>28.2k</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='flex flex-wrap md:flex-nowrap cursor-pointer'>
                            <div>
                                <img className='h-52 shadow-xl w-92 rounded-lg' src="https://www.anayatglobalworks.com/assets/img/blog/10.png" alt="" />
                            </div>
                            <div className='space-y-6 flex flex-wrap w-96 sm:w-96 md:flex-col'>
                                <div className='flex  flex-wrap md:flex-col  gap-4 ml-5'>
                                    <p>News</p>
                                    <p>12 Days ago</p>
                                </div>
                                <div>
                                    <p className='ml-5 font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore quo illo officia.</p>
                                    <p className='sm ml-2'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit aliquam amet nemo.</p>
                                </div>
                                <div className='ml-32 text-sm space-y-2'>
                                    <h2>By Admin</h2>
                                    <div className='flex gap-8'>
                                        <h2>2.4k</h2>
                                        <h2>28.2k</h2>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />

            {/* this is the last section of the blog component */}
            <div className='w-96 px-15 newsletter space-y-5 flex flex-col justify-center md:px-5 h-92 ml-5 border-1 rounded-2xl'>
                {/* this is the first div */}
                <h2 className='font-bold'>NEWSLETTER</h2>
                <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, ratione ?</p>
                <div className='flex h-12 rounded-2xl w-66 border-2 px-4 items-center justify-center' >
                    <input className='w-66 border-none text-center outline-0 rounded-2xl h-12' placeholder='Email Adress' type="text" />
                </div>
                <button className='social-wid h-14 w-66 cursor-pointer hover:shadow-xl bg-blue-400 rounded-lg border-1'>
                    Subscribe
                </button>
            </div>
            {/* this is the 2nd of last section of the blog component */}
            <div className='social-wi px-10 md:px-0 w-96 h-20 mt-10 text-lg ml-5 font-bold'>
                <h2>Social</h2>
                <div className='flex space-x-5 mt-7'>
                    <Facebook />
                    <Instagram />
                    <Twitter />
                    <Youtube />
                </div>
            </div>
            <div className='social-w px-10 md:px-0 w-96 h-52 mt-10 text-lg ml-5  font-bold'>
                <h2>Our Instagram</h2>
                <div className='grid mt-4 ml-5 grid-cols-3  w-80'>
                    <img className='h-18 w-32 rounded-lg cursor-pointer' src="https://www.anayatglobalworks.com/assets/img/blog/1.jpeg" alt="" />
                    <img className='rounded-lg cursor-pointer' src="https://www.anayatglobalworks.com/assets/img/blog/10.png" alt="" />
                    <img className='rounded-lg cursor-pointer' src="https://www.anayatglobalworks.com/assets/img/blog/11.png" alt="" />
                </div>
                <div className='grid ml-5 grid-cols-3  w-80 '>
                    <img className='rounded-lg cursor-pointer' src="https://www.anayatglobalworks.com/assets/img/blog/12.png" alt="" />
                    <img className='h-18 w-32 rounded-lg cursor-pointer' src="https://www.anayatglobalworks.com/assets/img/blog/2.jpeg" alt="" />
                    <img className='h-18 w-32 rounded-lg cursor-pointer' src="https://www.anayatglobalworks.com/assets/img/blog/3.jpeg" alt="" />
                </div>
            </div>

            {/* this is the last section of the blog */}
            <div className='px-10 md:px-0 mt-8 h-44'>
                <h2 className='text-xls'>Popular Tags</h2>
                <div className='flex gap-1 text-sm mt-6'>
                    <span className='border-1 bg-gray-100'>wordpress</span>
                    <span className='border-1 bg-gray-100'>Php</span>
                    <span className='border-1 bg-gray-100'>Python</span>
                    <span className='border-1 bg-gray-100'>Figma</span>
                    <span className='border-1 bg-gray-100'>React Native</span>
                </div>
                <div className='flex gap-1 text-sm mt-3'>
                    <span className='border-1 bg-gray-100'>marketing</span>
                    <span className='border-1 bg-gray-100'>twilio</span>
                    <span className='border-1 bg-gray-100'>aws</span>
                    <span className='border-1 bg-gray-100'>ecommerce</span>
                    <span className='border-1 bg-gray-100'>Psd</span>
                </div>
            </div>
        </>
    )
}

export default Blog
