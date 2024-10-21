import React from 'react'
import LogoIcon from '../public/IconLogo.svg'
import TikTokIcon from '../public/IconTikTok.svg'
import InstagramIcon from '../public/IconInstagram.svg'
import SpotifyIcon from '../public/IconSpotify.svg'
import Image from 'next/image'

const Footer = () => {
  return (
    
    <footer className='flex flex-col  bg-gradient-to-r from-[#438DB4] to-[#E951A0] '>
    <section className='flex flex-row text-white py-[18px] px-[23px] sm:px-[58px] md:px-[64px] justify-between items-center text-center bg-gradient-to-t from-transparent to-[#181818] '>
        <Image
        src={LogoIcon}
        alt="Logo"
        width={38} // Use state variable
        height={24.65}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/>
        <h1 className='semi-bold-italic text-[16px] sm:text-[32px] md:text-[64px]'>#Mother’s Day Miles</h1>
        <div>
            <h2 className='extra-light text-[10px] sm:text-[16px] md:text-[32px]'>Visit our social media</h2>
            <ul className='flex justify-between justify-items-center pt-[20px]'>
                <li>      <a href='https://www.tiktok.com/@siarrun?_t=8qjQAfpg9VX&_r=1'><Image
        src={TikTokIcon}
        alt="Logo"
        width={27} // Use state variable
        height={27}
        className='sm:w-[66px] sm:h-[52px] md:w-[115px] md:h-[93px]'/></a></li>
                <li>        <a href='https://www.instagram.com/siarrun/'><Image
        src={InstagramIcon}
        alt="Logo"
        width={21} // Use state variable
        height={21}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/></a></li>
                <li>       <a href='https://open.spotify.com/user/31yv6tziq4q5rln7vqvfcmktu5ia?si=oDjDLjNrTZuJb157nNBIxg'><Image
        src={SpotifyIcon}
        alt="Logo"
        width={21} // Use state variable
        height={21}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/></a></li>
            </ul>
        </div>
        </section>
    </footer>
  )
}

export default Footer