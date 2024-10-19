import React from 'react'
import Image from 'next/image'
import SoundIcon from '../public/IconSound.svg'
import LogoIcon from '../public/IconLogo.svg'
import TikTokIcon from '../public/IconTikTok.svg'
import InstagramIcon from '../public/IconInstagram.svg'
import SpotifyIcon from '../public/IconSpotify.svg'

const Footer = () => {
  return (
    <footer className='flex flex-col py-[18px] px-[23px] sm:px-[58px] md:px-[64px] bg-gradient-to-r from-[#438DB4] to-[#E951A0]'>
        <section className='extra-light text-white text-center gap-[94px]'>
        <h1 className='text-[32px] py-[34px]'>Run with the Rhythm</h1>
        <Image
        src={SoundIcon}
        alt="SoundWave"
        width={621.97} // Use state variable
        height={181.27}
        className=' sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/>
        <p className='text-[18px] py-[34px] '>Check out special playlist just for you</p>
        </section>

        <section className='flex flex-row text-white justify-between items-center text-center'>
        <Image
        src={LogoIcon}
        alt="Logo"
        width={38} // Use state variable
        height={24.65}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/>
        <h1 className='semi-bold-italic text-[16px]'>#Mother’s Day Miles</h1>
        <div>
            <h2 className='extra-light text-[10px]'>Visit our social media</h2>
            <ul className='flex justify-between pt-[20px]'>
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