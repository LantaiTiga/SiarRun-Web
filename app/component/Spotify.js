import React from 'react'
import Image from 'next/image'
import SoundIcon from '../public/IconSound.svg'

const Spotify = () => {
  return (
    <section className='flex flex-col items-center extra-light text-white text-center py-[18px] px-[23px] sm:px-[58px] md:px-[64px]'>
    <h1 className='text-[32px] py-[34px] sm:text-[48px]'>Run with the Rhythm</h1>
    <a href='https://open.spotify.com/playlist/0k38VEWRt9F2BVga9cZWWQ?si=w4dPIpNVSP6jO5UNrBx4kA&pi=a-_BG7w1tKQMSS'>
    <Image
    src={SoundIcon}
    alt="SoundWave"
    width={621.97} // Use state variable
    height={181.27}
    className=' md:w-[1000.71px] md:h-[291.65px]'/>
    </a>
    <p className='text-[18px] py-[34px] sm:text-[18px] '>Check out special playlist just for you</p>
    </section>
  )
}

export default Spotify