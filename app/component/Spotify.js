import React from 'react'
import Image from 'next/image'
import SoundIcon from '../public/IconSound.svg'

const Spotify = () => {
  return (
    <section className='flex flex-col items-center extra-light text-white text-center py-[18px] px-[23px] sm:px-[58px] md:px-[64px]'>
    <h1 className='text-[32px] py-[34px] sm:text-[48px]'>Run with the Rhythm</h1>
    <Image
    src={SoundIcon}
    alt="SoundWave"
    width={621.97} // Use state variable
    height={181.27}
    className=' md:w-[1000.71px] md:h-[291.65px]'/>
    <p className='text-[18px] py-[34px] sm:text-[18px] '>Check out special playlist just for you</p>
    </section>
  )
}

export default Spotify