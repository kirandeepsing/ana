import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const images = [{
  img: "https://www.anayatglobalworks.com/assets/img/icons/fe2.png",
  txt:"user centeric design",
  text:", highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app "
},
{
  img: "https://www.anayatglobalworks.com/assets/img/icons/fe3.png",
  txt:"user centeric design",
  text:" lorem Anayat Gloed agencies on Upwork, higoviding mobile app development services. Acknowledged as one of the best mobile app development companies."
},
{
  img: " https://www.anayatglobalworks.com/assets/img/icons/fe4.png",
  txt:"user centeric design",
  text:" lorem Anayat cies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app development companies, we always deliver cutting-edge solutions to assist businesses"
},
{
  img:
  "https://www.anayatglobalworks.com/assets/img/icons/seo-web.webp",
  txt:"user centeric design",
  text:" lorem Anayat Global  agencies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app"
},
{
  img:   "https://www.anayatglobalworks.com/assets/img/icons/fe1.png",
  txt:"user centeric design",
  text:" lorem Anayat Global is one of providing mobile app development services. Acknowledged as one of the best mobile app development"
},
{
  img:   "https://www.anayatglobalworks.com/assets/img/icons/fe1.png",
  txt:"user premium design",
  text:" lorem Anayat Global is one of providing mobile app development services. Acknowledged as one of the best mobile app development"
}
];

const Hero4 = () => {
  return (
    <div className='bg-gray-300 w-full min-w-[400px] max-w-[2000px]  h-[600px] mt-80 sm:mt-0 sm:mt-0 flex flex-col justify-center gap-5 items-center'>
      <div className='flex flex-wrap items-center'>
 
      <button className=' flex outline-none border-none bg-white w-32 border-2 h-10  items-center justify-around'>
            <h2 className='text-sm text-purple font-bold'>software apps </h2>
        </button>

      </div>

<h2 className='text-4xl font-bold'>Our Top Services</h2>
<p>We at Anayat Global Work have all the bases covered to assist you in climbing up the ladder digitally..</p>
<div className="w-full max-w-screen-xl mx-auto py-6" style={{maxWidth:"2000px"}}>
      <Swiper 
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        speed={3000} // Speed of transition
        grabCursor={true}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 10,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 4,
          },
          1440: {
            slidesPerView: 5,
            spaceBetween: 3,
          },
          1800: {
            slidesPerView: 5,
            spaceBetween: 1,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-wrap bg-white items-center border-2  overflow: hidden; height: max-content; w-full md:w-54 text-sm   hover:translate-y-4 ransition-all duration-300 ease-in-out p-4 rounded-4xl shadow-md'>
            <img
              src={img.img}
              alt={`slide-${index}`}
              className="rounded-xl w-32 h-32 object-cover"
            />
            <div>
            <h2>{img.txt}</h2>
            <p>{img.text}</p>
            </div>
            
            </div>

          </SwiperSlide>
        ))}
      </Swiper>
    </div>
</div>
  )
}

export default Hero4
