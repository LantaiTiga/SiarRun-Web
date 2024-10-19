import React from 'react'
import TimelineImg from '../public/TimelineImg.svg'
import TimelineTablet from '../public/TimelineTablet.svg'
import TimelineHandphone from '../public/TimelineHandphone.svg'
import Image from 'next/image'

const Timeline = () => {
  return (
    <div className='flex flex-col pt-[70px] px-[23px] sm:px-[58px] md:pt-[156px] sm:pt-[75px]'>
        <section className='flex flex-col justify-center text-center items-center'>
            <h1 className='extrabold text-white text-[32px] sm:text-[56px] md:text-[64px] bg-gradient-to-r from-[#E950A0] to-[#FFDE59] py-[10px] w-[258px] sm:w-[390px] md:w-[433px]'>TIMELINE</h1>
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