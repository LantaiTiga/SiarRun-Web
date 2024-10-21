import React, { forwardRef } from 'react'
import Image from 'next/image'
import Sigle from '../public/ImgSingle.svg'
import Duo from '../public/ImgDuo.svg'
import Group from '../public/ImgGroup.svg'

const Registration = forwardRef((props, ref) => {
  return (
    <section ref={ref} className='text-white px-[23px] sm:px-[58px] md:px-[64px] pt-[35px] sm:pt-[50px] md:pt-[195px] pb-[103px] sm:pb-[50px] md:pb-[347px]'>
        <ul className='flex flex-col sm:flex-col md:flex-row gap-[46px] justify-between'>
            
            <section className='flex flex-col items-center text-center'>
            <Image
            src={Sigle}
            alt="Example Image"
            width={201} // Use state variable
            height={222}
            className='sm:w-[324px] sm:h-[338px] md:w-[380] md:h-[200px]'
            />
            <div className='bg-[#AE87BA] rounded-[30px] w-[308px] sm:w-[514px] sm:h-[215px] h-[129px] py-[15px] ml:w-[420px] ml:h-[216px] md:w-[420px] md:h-[216px] text-center'>
            <h1 className='extrabold text-[32px] sm:text-[56px]'>REGULAR<br/>1 PAX</h1>
            </div>

            <div className='pt-[14px] sm:pt[20px]'>
            <h2 className='extrabold text-[32px] sm:text-[56px] py-[10px] px-[34px] rounded-[20px] bg-gradient-to-b from-[#9FC9DF] to-[#001099]'>150.000</h2>
            </div>
            </section>

            <section className='flex flex-col items-center text-center'>
            <Image
            src={Duo}
            alt="Example Image"
            width={251} // Use state variable
            height={177}
            className='sm:w-[377px] sm:h-[265px] md:w-[380px] md:h-[200px]'
            />
            <div className='bg-[#AE87BA] rounded-[30px] w-[308px] sm:w-[514px] sm:h-[215px] h-[129px] py-[15px] ml:w-[420px] ml:h-[216px] md:w-[420px] md:h-[216px] text-center'>
            <h1 className='extrabold text-[32px] sm:text-[56px]'>DUO<br/>2 PAX</h1>
            </div>

            <div className='pt-[14px] sm:pt[20px]'>
            <h2 className='extrabold text-[32px] sm:text-[56px] py-[10px] px-[34px] rounded-[20px] bg-gradient-to-b from-[#9FC9DF] to-[#001099]'>280.000</h2>
            </div>
            </section>

            <section className='flex flex-col items-center text-center'>
            <Image
            src={Group}
            alt="Example Image"
            width={266} // Use state variable
            height={140}
            className='sm:w-[505px] sm:h-[250px] md:w-[380] md:h-[200px]'
            />
            <div className='bg-[#AE87BA] rounded-[30px] w-[308px] sm:w-[514px] sm:h-[215px] h-[129px] py-[15px] ml:w-[420px] ml:h-[216px] md:w-[420px] md:h-[216px] text-center'>
            <h1 className='extrabold text-[32px] sm:text-[56px]'>GROUP<br/>10 PAX</h1>
            </div>

            <div className='pt-[14px] sm:pt[20px]'>
            <h2 className='extrabold text-[32px] sm:text-[56px] py-[10px] px-[34px] rounded-[20px] bg-gradient-to-b from-[#9FC9DF] to-[#001099]'>1.200.000</h2>
            </div>
            </section>

        </ul>
    </section>
  )
})

export default Registration
