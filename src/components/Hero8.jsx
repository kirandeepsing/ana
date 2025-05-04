import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  

const Hero8 = () => {
  return (
    <div className='h-[650px] mt-[670px] sm:mt-[500px] min-w-[400px] min-h-[200px] md:mt-0 flex flex-col items-center bg-gray-100'>
 <div className='flex items-center mt-20'>
    <img className='h-3 w-20' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
    <h1 className=''>FAQ'S</h1>
    <img className='h-3 w-20' src="https://www.anayatglobalworks.com/assets/img/line_l.png" alt="" />
 </div>
 <div>
    <h2 className='text-4xl font-bold'>Why Choose Us</h2>
 </div>
 {/* this section is mainly for accordion*/}
 <div className='w-full md:w-[90%] mt-3 text-lg '>
 <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=" bg-gray-300 font-bold hover:no-underline cursor-pointer">Skilled And Expirenced Team</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.    Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
 </div>
 {/* this section is mainly for accordion*/}
 <div className='w-full md:w-[90%] mt-3'>
 <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=" bg-gray-300 font-bold hover:no-underline cursor-pointer">Deliver As per costumer needs</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.    Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
 </div>
 {/* this section is mainly for accordion*/}
 <div className='w-full md:w-[90%] mt-3'>
 <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=" bg-gray-300 font-bold hover:no-underline cursor-pointer" >Covering mobile app development solutions </AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.    Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
 </div>
 {/* this section is mainly for accordion*/}
 <div className='w-full md:w-[90%] mt-3'>
 <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=" bg-gray-300 font-bold hover:no-underline cursor-pointer">providing mobile web development solutions </AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.    Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
 </div>
 {/* this section is mainly for accordion*/}
 <div className='w-full md:w-[90%] mt-3'>
 <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=" bg-gray-300 font-bold hover:no-underline cursor-pointer">One of the top ratred agencies on the upwork </AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.    Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
 </div>
 {/* this section is mainly for accordion*/}
 <div className='w-full md:w-[90%] mt-3 hover:no-underline cursor-pointer'>
 <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=" bg-gray-300 hover:no-underline cursor-pointer font-bold">Qualified web developers at the servoce for the costumer need</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.    Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
 </div>
 {/* this section is mainly for accordion*/}
 <div className='w-full md:w-[90%] mt-3'>
 <Accordion type="single" collapsible>
  <AccordionItem value="item-1">
    <AccordionTrigger className=" bg-gray-300 font-bold hover:no-underline cursor-pointer">Hire thebest web development company at your prevlience </AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.    Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern.   Yes. It adheres to the WAI-ARIA design pattern. 
    </AccordionContent>
  </AccordionItem>
</Accordion>
 </div>
    </div>
  )
}

export default Hero8
