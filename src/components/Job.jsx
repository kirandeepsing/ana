import React from 'react'
import "../css/job.css"
import { MoveRight } from 'lucide-react'
const job1 = [
    {
        img: "https://www.anayatglobalworks.com/assets/img/icons/features/14.png",
        text: "Innovation for all of good",
        paragraph: "We proud of our 5star rating with over 200 reviews."
    },
    {
        img: "https://www.anayatglobalworks.com/assets/img/icons/features/15.png",
        text: "You can act & get power.",
        paragraph: "We proud of our 5star rating with over 200 reviews."
    },
    {
        img: "https://www.anayatglobalworks.com/assets/img/icons/features/16.png",
        text: "In it together of time.",
        paragraph: "We proud of our 5star rating with over 200 reviews."
    },
    {
        img: "https://www.anayatglobalworks.com/assets/img/icons/features/17.png ",
        text: "Get weekly reward mea",
        paragraph: "We proud of our 5star rating with over 200 reviews."
    },
]
const job2 = [
    {
        img:"https://www.anayatglobalworks.com/assets/img/logos/open-now.png",
        txt: "PHP Developer",
        text: "we are looking for the expert and skilled developer of php to join our team ",
        paragraph: "Full Time"
    },
    {
        img:"https://www.anayatglobalworks.com/assets/img/logos/open-now.png",
        txt: "PHP Developer",
        text: "we are looking for the expert and skilled developer of php to join our team ",
        paragraph: "Full Time"
    },
    {
        img:"https://www.anayatglobalworks.com/assets/img/logos/open-now.png",
        txt: "PHP Developer",
        text: "we are looking for the expert and skilled developer of php to join our team ",
        paragraph: "Full Time"
    }
]
const job3 = [
    {
        img:"https://www.anayatglobalworks.com/assets/img/logos/closed-now.png",
        txt: "PHP Developer",
        text: "we are looking for the expert and skilled developer of php to join our team ",
        paragraph: "Full Time"
    },
    {
        img:"https://www.anayatglobalworks.com/assets/img/logos/closed-now.png",
        txt: "PHP Developer",
        text: "we are looking for the expert and skilled developer of php to join our team ",
        paragraph: "Full Time"
    },
    {
        img:"https://www.anayatglobalworks.com/assets/img/logos/closed-now.png",
        txt: "PHP Developer",
        text: "we are looking for the expert and skilled developer of php to join our team ",
        paragraph: "Full Time"
    }
]

const Job = () => {
    return (
        <>
         <div className='flexx '>
            {
                job1.map((item, key) => {
                    return (
                        <div className='fullitem' key={key}>
                            <img  src={item.img} alt="" />
                            <h3>{item.text}</h3>
                            <p>{item.paragraph}</p>
                        </div>
                    )
                })
            }
        </div>
       
        <div className='section2  sm:mt-96 md:mt-80 lg:mt-0'>
<h1>Opening Positions</h1>
<p>More than 50+ companies trust and choose Anayat Global Works</p>
<div className='flex2'>
{
                job2.map((item, key) => {
                    return (
                        <div className='fullitem2  sm:ml-0' key={key}>
                            <div className='relative'>

                            <img className='absolute top-[-60px] left-0' src={item.img} alt="" />
                            </div>
                            <h3 className=''>{item.txt}</h3>
                            <h6>{item.text}</h6>
                            <p>{item.paragraph}</p>
                        </div>
                    )
                })
            }
</div>
        </div>

        <div className='flex3 '>
{
                job3.map((item, key) => {
                    return (
                        <div className='fullitem2  sm:ml-0' key={key}>
                        <div className='relative'>

                            <img className='absolute   top-[-60px] left-0' src={item.img} alt="" />
                        </div>
                            <h3>{item.txt}</h3>
                            <h6>{item.text}</h6>
                            <p>{item.paragraph}</p>
                        </div>
                    )
                })
            }
</div>
{/* this is the last section of the job section */}

<div className='last mt-7'>
    {/* this is the left div section */}
<div className='first'>
<h1 className='text-4xl font-bold'>Looking For the Opurtunity </h1>
<h6 className='mt-5'>More than 50+ companies trust and choose the anayat global trust</h6>
<div className='flex flex-wrap flex-nowrap mt-20 text-5xl'>
<div className=''>
    <h1 className='font-bold'>100+</h1>
    <p className='text-sm'>project completed</p>
</div>
<div className=' mt-7 md:mt-0 md:ml-20'>
    <h1 className='font-bold'>100+</h1>
    <p className='text-sm'>project completed</p>
</div>
</div>
<div className='mt-10'>
    <h2 className='text-4xl'>10</h2>
    <p className='text-sm'>Offline Basement</p>
</div>
</div>
   {/* this is the right div section */}
<div className='right ml-32  mt-15'>
<div className='flex flex-wrap gap-6 sm:flex-nowrap'>
    <input  className='input rounded-lg  border-1  text-black font-bold ' type="text" placeholder='Full Name' />
    <input className='input rounded-lg  border-1  text-black font-bold ml-10' type="Email Adress" placeholder='Email Adress' />
</div>
<div className='flex mt-10 flex-wrap gap-6 sm:flex-nowrap'>
    <input className='input rounded-lg  border-1  text-black font-bold ' type="text" placeholder='Full Name' />
    <input className='input rounded-lg  border-1  text-black font-bold ml-10' type="Email Adress" placeholder='Email Adress' />
</div>
<textarea className='h-44 textarea mt-10 md:w-[630px] border-2 text-lg font-bold text-black ' name="" id="" placeholder='cover letter'></textarea>
<button  className=' mt-15 ml-80 flex outline-none border-none hover:shadow-2xl cursor-pointer bg-white text-black w-40 border-2 h-10 rounded-lg items-center justify-around'>
            <h2 className='text-sm text-black font-bold'>Make Request </h2>
            <div className=' rounded-full h-8 text-sm w-8 bg-gray-100 text-black transform transition-transform duration-300 ease-in-out  hover:translate-x-1 flex items-center'> <MoveRight /></div>
        </button>
</div>
</div>
        </>
       
    )
}

export default Job
