import React from 'react'
import TimelineImg from '../public/TimelineImg.svg'
import TimelineTablet from '../public/TimelineTablet.svg'
import TimelineHandphone from '../public/TimelineHandphone.svg'
import Image from 'next/image'

const Timeline = () => {
  return (
    <div className='flex flex-col px-[23px] sm:px-[58px] md:pt-[156px] sm:pt-[75px]'>
      <section className='justify-center justify-items-center pt-[70px] md:pb-[70px]'> 
      <h1 className='extrabold text-white text-[32px] sm:text-[56px] px-[41px] py-[10px] text-center bg-gradient-to-r from-[#E950A0] to-[#FFDE59]'>Timeline</h1>
      </section>
      <div>
      <Image
    src={TimelineTablet}
    alt="Example Image"
    layout="responsive" 
    width={100} 
    height={50} 
    className='hidden md:block lg:hidden' 
    />
    </div>
    <div>
    <Image
    src={TimelineHandphone}
    alt="Example Image"
    layout="responsive" 
    width={100} 
    height={50} 
    className='sm:block md:hidden lg:hidden'
    />
    </div>
    <div>
    <Image
    src={TimelineImg}
    alt="Example Image"
    layout="responsive" 
    width={100} 
    height={50} 
    className='hidden sm:hidden md:hidden lg:block'
    />
    </div>
    </div>
  )
}

export default Timeline