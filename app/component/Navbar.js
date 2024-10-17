'use client'
import React from 'react'
import Image from 'next/image'
import Logo from '../public/Logo.svg'
import { useEffect, useState } from 'react'; // Import useEffect and useState

const Navbar = () => {
  return (
    <nav className="flex justify-between text-white py-[18px] px-[23px] sm:px-[58px] md:px-[64px] bg-[#181818]">
      <Image
        src={Logo}
        alt="Example Image"
        width={30.3} // Use state variable
        height={19.65}
        style={{ width: 'auto', height: 'auto' }}/>
      
        <ul className='regular-italic flex text-[10px] items-center gap-[13px] sm:text-[16px] sm:gap-[32px] md:text-[23px] md:gap-[64px]'>
            <li><a href='#' className=' hover:border-b-2 hover:border-white '>Home</a></li>
            <li><a href='#' className=' hover:border-b-2 hover:border-white '>About Us</a></li>
            <li><a href='#' className=' hover:border-b-2 hover:border-white '>Timeline</a></li>
            <li><a href='#' className=' hover:border-b-2 hover:border-white '>Registration</a></li>
            <li><a href='#' className=' hover:border-b-2 hover:border-white '>FAQ</a></li>
        </ul>
    </nav>
  )
}

export default Navbar
