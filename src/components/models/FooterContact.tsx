'use client';
import { Icon } from '@iconify/react';
import React from 'react';



const FooterContact: React.FC = () => (
  <div className='p-5 lg:p-10 z-10'>
    <h3 data-aos="zoom-in-up" className={`text-C text-xl font-bold  w-fit  `}>CONTACT US</h3>
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="2500" className=' pt-5 flex flex-col justify-center'>
      <span className='text-C w-fit'>mobingazmeh1@gmail.com</span>
     <span className='text-C w-fit my-5'>+989033695751</span>   
     <div id="footer" data-aos="zoom-in-up">
    <div data-aos="fade-up" data-aos-duration="2000" className=" flex">
      <div className='w-14 md:w-10 h-14 md:h-10 flex items-center justify-center bg-C hover:bg-B text-B hover:text-C border-gr rounded-full cursor-pointer delay-75 transition duration-300'>
        <Icon className='w-10 md:w-6 md:h-6 h-10' icon="ri:facebook-fill" />
      </div>
      <div className='w-14 md:w-10 h-14 md:h-10 flex items-center justify-center bg-C hover:bg-B text-B hover:text-C border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-3'>
        <Icon className='w-10 md:w-6 md:h-6 h-10' icon="ri:twitter-fill" />
      </div>
      <div className='w-14 md:w-10 h-14 md:h-10 flex items-center justify-center bg-C hover:bg-B text-B hover:text-C border-gr rounded-full cursor-pointer delay-75 transition duration-300'>
        <Icon className='w-10 md:w-6 md:h-6 h-10' icon="mdi:instagram" />
      </div>
      <div className='w-14 md:w-10 h-14 md:h-10 flex items-center justify-center bg-C hover:bg-B text-B hover:text-C border-gr rounded-full cursor-pointer delay-75 transition duration-300 mx-3'>
        <Icon className='w-10 md:w-6 md:h-6 h-10' icon="uil:telegram-alt" />
      </div>
    </div>
  </div>
    </div>
  </div>
);

export default FooterContact;
