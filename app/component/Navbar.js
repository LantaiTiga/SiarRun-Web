import React from 'react'
import Image from 'next/image'
import Logo from '../public/LogoImg.svg'

const Navbar = () => {
  return (
    <nav className="flex justify-between text-white py-[18px] px-[23px] sm:px-[58px] md:px-[64px] bg-[#181818]">
      <Image
        src={Logo}
        alt="Logo"
        width={38} // Use state variable
        height={24.65}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/>
      
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
