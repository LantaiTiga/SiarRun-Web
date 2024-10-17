import React from 'react'
import Image from 'next/image'
import ImgAboutUs from '../public/ImgAboutUs.svg'
import ImgMotherMiles from '../public/ImgMotherMiles.svg'

const AboutUs = () => {
  return (
<div className='text-white flex flex-col px-[76px]'>
      <section className='w-full flex justify-between'>
      <section className='px-[46px] w-[897px] h-[537px] text-left spacing'>
      <h2 className='pt-[50px] extrabold text-[48px]'>About SIAR Run</h2>
      <p className='medium-italic text-[32px] pt-[29px] text-justify '>
        SIAR Run adalah kegiatan lari yang bertujuan meningkatkan kesadaran sosial dan lingkungan
        sekaligus mempromosikan gaya hidup sehat dengan slogan "Run for a Healthier You."  
        Melalui partisipasi dalam lari dan penyebaran informasi, SIAR Run mengajak masyarakat, 
        khususnya generasi muda, untuk peduli terhadap isu-isu sosial yang relevan.
      </p>
      </section>
      <Image    
      src={ImgAboutUs}
      alt="Example Image"
      width={351} 
      height={500} />
      </section>
      
      <section className='w-full flex justify-between pt-[72px]'>
      <Image    
      src={ImgMotherMiles}
      alt="Example Image"
      width={711.73} 
      height={501.06} />
      <section className='px-[46px]'>
      <h2 className='pt-[50px] extrabold text-[48px]'>Mother’s Day Miles</h2>
      <p className='medium-italic text-[32px] pt-[29px] text-justify '>
      Pada kesempatan kali ini kami mengadakan acara virtual run bertema "Mother's Day Miles"
      untuk memperingati Hari Ibu, sebagai bentuk apresiasi terhadap peran ibu sekaligus mengajak
       peserta menjaga kesehatan. Acara ini bertujuan mengedukasi peserta tentang pentingnya 
       gaya hidup sehat dan meningkatkan kesadaran sosial.
      </p>
      </section>
      </section>
    </div>
  )
}

export default AboutUs