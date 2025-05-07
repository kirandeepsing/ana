import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
const images = [{
  img: "https://www.anayatglobalworks.com/assets/img/icons/fe2.png",
  txt:"user centeric design",
  text:" lorem Anayat Global is one of the top-rated agencies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app "
},
{
  img: "https://www.anayatglobalworks.com/assets/img/icons/fe3.png",
  txt:"user centeric design",
  text:" lorem Anayat Global is one of the top-rated agencies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app development companies."
},
{
  img: " https://www.anayatglobalworks.com/assets/img/icons/fe4.png",
  txt:"user centeric design",
  text:" lorem Anayat Global is one of the top-rated agencies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app development companies, we always deliver cutting-edge solutions to assist businesses"
},
{
  img:
  "https://www.anayatglobalworks.com/assets/img/icons/seo-web.webp",
  txt:"user centeric design",
  text:" lorem Anayat Global is one of the top-rated agencies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app"
},
{
  img:   "https://www.anayatglobalworks.com/assets/img/icons/fe1.png",
  txt:"user centeric design",
  text:" lorem Anayat Global is one of the top-rated agencies on Upwork, highly appreciated for providing mobile app development services. Acknowledged as one of the best mobile app development"
}
];

const Hero2 = () => {
  return (
    <div className='bg-gray-300 w-full min-w-[400px] max-w-[2000px]  h-[670px] mt-16 md:mt-20 sm:mt-10  flex flex-col justify-center gap-5 items-center'>
      <div className='flex flex-wrap items-center'>
      <img className='h-3 w-20' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
      <h2 className='font-bold'>Features</h2>
      <img className='h-3 w-20' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
      </div>

<h2 className='text-4xl font-bold'>Approach That Leads to Solid Online Foundation</h2>
<p>Top Rated Mobile and Web Development Firm have a proven track record of delivering quality work, and the reason behind it is our quality-approved approach.</p>
<div className="w-full max-w-screen-xl mx-auto py-6" style={{maxWidth:"2000px"}}>
      <Swiper 
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={3}
        loop={true}
        autoplay={{ delay: 1000, disableOnInteraction: true }}
        speed={4000} 
        grabCursor={true}
        breakpoints={{
          250: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1.2,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1440: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
          1800: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }}
      >
        {images.map((img, index) => (
          <SwiperSlide key={index}>
            <div className='flex flex-wrap space-y-5 justify-center bg-white items-center border-2  overflow: hidden; height: max-content; w-full hover:translate-y-4 ransition-all duration-300 ease-in-out p-4 rounded-xl shadow-md'>
            <img
              src={img.img}
              alt={`slide-${index}`}
              className="rounded-xl w-32 h-32 object-cover"
            />
            <div>
            <h2 className='text-center font-bold'>{img.txt}</h2>
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

export default Hero2
