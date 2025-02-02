'use client';
import React from 'react';
import Link from 'next/link';



// FooterAccount component to display account-related links in the footer
const FooterServices: React.FC = () => (
  <div className='p-5 lg:p-10 z-10'>
    <h3 data-aos="zoom-in-up" className={`text-C text-lg font-bold  w-fit  `}>SERVICES</h3>
    <div data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1500" className=' '>
      <Link href='/profile'><h4 className='text-C hover:text-B cursor-pointer transition duration-300 ease-in transform hover:translate-x-[10px] delay-75 w-fit py-5'>Seo Services</h4></Link>
      <Link href='/interestList'><h4 className='text-C hover:text-B cursor-pointer transition duration-300 ease-in transform hover:translate-x-[10px] delay-75 w-fit'>Virtual Marketing</h4></Link>
      <h4 className='text-C hover:text-B cursor-pointer transition duration-300 ease-in transform hover:translate-x-[10px] delay-75 w-fit  py-5'>Web Analytics</h4>
      <h4 className='text-C hover:text-B cursor-pointer transition duration-300 ease-in transform hover:translate-x-[10px] delay-75 w-fit'>Web Development</h4>
    </div>
  </div>
);

export default FooterServices;
