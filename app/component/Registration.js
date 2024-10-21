import React from 'react'
import backgrund from '../public/BgRacePackImg.svg'
import rp from '../public/RacepackImg.svg'
import size from '../public/UkuranImg.svg'
import Image from 'next/image'

export const RacePack = () => {
  return (
    <div className="relative md:pt-[70px]">
    {/* Background image with opacity */}
    <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgrund.src})`, opacity: '0.14' }}>
      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0E0E0E]"></div>
    </div>

    <div className="z-10 extrabold text-white items-center justify-center pt-10">
    <section className='flex flex-col justify-center text-center items-center'>
            <h1 className='extrabold text-[32px] sm:text-[56px] md:text-[64px] bg-gradient-to-r from-[#E950A0] to-[#FFDE59]  py-[10px] w-[208px] sm:w-[390px] md:w-[433px]'>RACE PACK</h1>
            <h2 className='extrabold text-[32px] sm:text-[56px] md:text-[64px] '>PREVIEW</h2>
        </section>
       <div className='pt-10 justify-center text-center items-center flex flex-col md:flex-row'>
       <Image
                    src={rp}
                    alt="Example Image"
                    width={800.99} 
                    height={300.76}
                    className='w-full h-auto px-8  sm:mx-auto'
                    /> 
         <Image
                    src={size}
                    alt="Example Image"
                    width={360.99} 
                    height={300.76}
                    className=' w-full h-auto pb-4 px-8 sm:pb-20 sm:mx-auto '
                    /> 
        </div>
        </div>
 </div>
  
  )
}

export default RacePack
