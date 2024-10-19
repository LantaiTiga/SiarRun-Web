import React from 'react'
import backgrund from '../public/bgRacePack.svg'
import Image from 'next/image'

export const RacePack = () => {
  return (
    <div className="relative h-screen">
    {/* Background image with opacity */}
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgrund.src})`, opacity: '0.14' }}>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0E0E]"></div>
    </div>

    <div className="z-10 extrabold text-white items-center justify-center px-[120px] pt-11">
    <section className='text-center z-10'>
            <h1 className='extrabold text-[32px] bg-gradient-to-r from-[#E950A0] to-[#FFDE59] w-[200px] h-[50px] '>RACEPACK</h1>
            <h2 className='extrabold text-[32px] '>PREVIEW</h2>
        </section>
        </div>
   <div></div>
        <div></div>
        </div>
    
  )
}

export default RacePack
