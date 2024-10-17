import React from 'react'
import HeroImg from '../public/Hero.png'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className='relative'>
      <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#0E0E0E] via-transparent'></div>
      <Image
        src={HeroImg}
        alt="Example Image"
        layout="responsive" 
        width={100} 
        height={50} 
      />
    </div>
    </>   

  )
}

export default Hero
