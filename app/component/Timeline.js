import React from 'react'
import TimelineImg from '../public/Timeline.svg'
import Image from 'next/image'

const Timeline = () => {
  return (
    <div className='flex flex-col'>
      <section className='justify-center justify-items-center pb-[69px] pt-[156px]'> 
      <h1 className='extrabold text-white text-[48px] px-[41px] py-[10px] text-center bg-gradient-to-r from-[#E950A0] to-[#FFDE59]'>Timeline</h1>
      </section>
      <div>
      <Image
    src={TimelineImg}
    alt="Example Image"
    layout="responsive" 
    width={100} 
    height={50} 
    />
    </div>
    </div>
  )
}

export default Timeline