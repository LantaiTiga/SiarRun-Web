import React from 'react'
import Image from 'next/image'
import Logo from '../public/Logo.svg'

const Navbar = () => {
  return (
    <nav className="flex flex-row py-[15px] px-[64px] bg-[#181818] justify-between items-center">
      <Image
        src={Logo}
        alt="Example Image"
        width={38}
        height={38}
        style={{ width: 'auto', height: 'auto' }}/>
        <ul className='regular-italic flex gap-[64px] text-white text-center'>
            <a href='#' className=' hover:border-b-2 hover:border-white'>Home</a>
            <a href='#' className=' hover:border-b-2 hover:border-white'>About Us</a>
            <a href='#' className=' hover:border-b-2 hover:border-white'>Timeline</a>
            <a href='#' className=' hover:border-b-2 hover:border-white'>Registration</a>
            <a href='#' className=' hover:border-b-2 hover:border-white'>FAQ</a>
        </ul>
    </nav>
  )
}

export default Navbar