import React, { forwardRef } from 'react'
import Image from 'next/image'
import ImgAboutUs from '../public/ImgAboutUs.svg'
import ImgMotherMiles from '../public/ImgMotherMiles.svg'

const AboutUs = forwardRef((props, ref) => {
  return (
<div className='text-white flex flex-col px-[23px] sm:px-[58px] md:px-[64px]' ref={ref}>
      
      <div className='sm:flex sm:justify-between sm:gap-[58px] md:gap-[401px]'>
      <section>
      <h2 className='extrabold text-[24px] sm:text-[40px] md:text-[48px]'>About SIAR Run</h2>
      <p className='medium-italic text-[12px] pt-[12px] text-justify sm:text-[24px] md:text-[32px]'>
      SIAR Run adalah kegiatan lari yang bertujuan meningkatkan kesadaran sosial 
      dan lingkungan, sekaligus mempromosikan gaya hidup sehat dengan slogan “Run for a Healthier You.” 
      Melalui partisipasi dalam lari dan penyebaran informasi, SIAR Run mengajak masyarakat, khususnya
      generasi muda, untuk peduli terhadap isu-isu sosial yang relevan.
      </p>
      </section>
      <Image    
      src={ImgAboutUs}
      alt="Example Image"
      width={239.63} 
      height={340.08}
      className='hidden sm:block md:block md:w-[351.89px] md:h-[499.39px] ' /> 
      </div>

      <div className='sm:flex sm:justify-between sm:gap-[58px] pt-[47px] sm:pt-[145px] md:pt-[72px]'>
      <Image    
      src={ImgMotherMiles}
      alt="Example Image"
      width={306.82} 
      height={216}
      className='hidden sm:block md:block md:w-[711.73px] md:h-[501.06px]' />
      
      <section>
      <h2 className='pt-[50px] extrabold text-[24px] sm:text-[40px] md:text-[48px]'>Mother’s Day Miles</h2>
      <p className='medium-italic text-[12px] pt-[12px] text-justify sm:text-[24px] md:text-[32px]  '>
      Pada kesempatan kali ini kami mengadakan acara virtual run bertema "Mother's Day Miles"
      untuk memperingati Hari Ibu, sebagai bentuk apresiasi terhadap peran ibu sekaligus mengajak
       peserta menjaga kesehatan. Acara ini bertujuan mengedukasi peserta tentang pentingnya 
       gaya hidup sehat dan meningkatkan kesadaran sosial.
      </p>
      </section>
      </div>

    </div>
  )
})

export default AboutUs
