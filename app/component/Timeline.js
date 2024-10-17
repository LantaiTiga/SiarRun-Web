import React from 'react'
import Image from 'next/image'
import TimelineImg from '../public/TimelineImg.svg'
const Timeline = () => {
  return (
    <><div>Timeline</div><div className='flex flex-col items-center'>
      <section className='justify-center pb-[69px] pt-[156px] w-[371px]'>
        <h1 className='extrabold text-white text-[48px] px-[41px] py-[10px] text-center bg-gradient-to-r from-[#E950A0] to-[#FFDE59]'>Timeline</h1>
      </section>
      <div>
        <Image
          src={TimelineImg}
          alt="Example Image"
          layout="responsive"
          width={100}
          height={50} />
      </div>
    </div></>
  )
}

export default Timeline