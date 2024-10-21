import React from 'react'
import LogoIcon from '../public/IconLogo.svg'
import TikTokIcon from '../public/IconTikTok.svg'
import InstagramIcon from '../public/IconInstagram.svg'
import SpotifyIcon from '../public/IconSpotify.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    
    <footer className='flex flex-col '>

        <section className='flex flex-row text-white py-[18px] px-[23px] sm:px-[58px] md:px-[64px] justify-between items-center text-center  bg-gradient-to-r from-[#438DB4] to-[#E951A0]'>
        <Image
        src={LogoIcon}
        alt="Logo"
        width={21} // Use state variable
        height={21}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/>
        <h1 className='semi-bold-italic text-[16px] sm:text-[32px] md:text-[64px]'>#Mother’s Day Miles</h1>
        <div>
            <h2 className='extra-light text-[10px] sm:text-[16px] md:text-[32px]'>Visit our social media</h2>
            <ul className='flex justify-between justify-items-center pt-[20px]'>
                <li>        <Image
        src={TikTokIcon}
        alt="Logo"
        width={21} // Use state variable
        height={21}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/></li>
                <li>        <Image
        src={InstagramIcon}
        alt="Logo"
        width={21} // Use state variable
        height={21}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/></li>
                <li>        <Image
        src={SpotifyIcon}
        alt="Logo"
        width={21} // Use state variable
        height={21}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/></li>
            </ul>
        </div>
        </section>
    </footer>
  )
}

export default Footer