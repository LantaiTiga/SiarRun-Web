import React from 'react'
import Image from 'next/image'
import Contoh from '../public/regis.svg'
import Contohh from '../public/regiss.svg'
import Contohhh from '../public/regisss.svg'

const Registration = () => {
  return (
    <div className='flex flex-col md:flex-row  text-white  py-[18px] px-[23px] sm:px-[58px] md:px-[64px]  justify-center extrabold items-center object-center'>
        <div className='p-4'>
            <Image
                    src={Contoh}
                    alt="Example Image"
                    class="mx-auto"
                    width={200.06} 
                    height={100.5}
                    className='sm:w-[324px] sm:h-[500px]'/>
            <div className='flex flex-col text-center items-center justify-center rounded-[50px] text-[32px] sm:text-[56px] w-[358.9px] h-[149.34px] sm:w-[514.68px] sm:h-[215px] bg-[#AE87BA]'>   
                <h1>REGULAR</h1>
                <h1>1 PAX</h1>
            </div>
            <div className='bg-gradient-to-b from-[#9FC9DF] to-[#001099] p-4 text-[22px] w-[150px] h-[63] sm:w-[316.05px] sm:h-[105px] sm:text-[54px] mt-[15px] rounded-[20px] text-center mx-auto'>
            <h1>150.000</h1>
            </div>
        </div>

        <div className='p-4'>
            <Image
                    src={Contohh}
                    alt="Example Image"
                    class="mx-auto"
                    width={308.99} 
                    height={384.76} />
            <div className='flex flex-col text-center items-center justify-center rounded-[50px] text-[32px]  sm:text-[56px] w-[358.9px] h-[149.34px] sm:w-[514.68px] sm:h-[215px] bg-[#AE87BA]'>   
                <h1>DUO</h1>
                <h1>2 PAX</h1>
            </div>
            <div className='bg-gradient-to-b from-[#9FC9DF] to-[#001099] p-4 text-[22px] w-[150px] h-[63] sm:w-[316.05px] sm:h-[105px] sm:text-[54px] mt-[15px] rounded-[20px] text-center mx-auto'>
            <h1>150.000</h1>
            </div>
        </div>

        <div className='p-4'>
            <Image
                    src={Contohhh}
                    alt="Example Image"
                    class="mx-auto"
                    width={308.99} 
                    height={347.76}  />
            <div className='flex flex-col text-center items-center justify-center rounded-[50px] text-[32px] sm:text-[56px] w-[358.9px] h-[149.34px] sm:w-[514.68px] sm:h-[215px] bg-[#AE87BA]'>   
                <h1>GROUP</h1>
                <h1>10 PAX</h1>
            </div>
            <div className='bg-gradient-to-b from-[#9FC9DF] to-[#001099] p-4 text-[22px] w-[150px] h-[63] sm:w-[316.05px] sm:h-[105px] sm:text-[54px] mt-[15px] rounded-[20px] text-center mx-auto'>
            <h1>150.000</h1>
            </div>
        </div>

        
        
    </div>
  )
}

export default Registration
