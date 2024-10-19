import React from 'react'
import backgrund from '../public/bgRacePack.svg'
import Image from 'next/image'

export const RacePack = () => {
  return (
    <div className="relative"> 
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0E0E]"> 
    <Image
        src={backgrund}
        alt="Example Image"
        layout="responsive" 
        width={200} 
        height={50} 
        className='opacity-15'
      />
    <div className="z-10 extrabold text-white items-center justify-center">
        <h1 className=" ">halo</h1>
        
        </div>
   <div></div>
        <div></div>
        </div>
    </div>
  )
}

export default RacePack
