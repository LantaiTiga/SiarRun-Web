import React from 'react'
import HeroImg from '../public/Hero.png'
import HeroTitle from '../public/TitleHero.svg'
import Image from 'next/image'

const Hero = () => {
  return (
    <>
    <div className=''>
    <Image
    src={HeroImg}
    alt="Example Image"
    layout="responsive" 
    width={100} 
    height={50} 
    />

<div className='text-white flex flex-col px-[76px]'>
      <section className='w-full'>
      <h2 className='pt-[50px] extrabold text-[48px]'>About SIAR Run</h2>
      <p>
        SIAR Run adalah kegiatan lari yang bertujuan meningkatkan kesadaran sosial dan lingkungan,
        sekaligus mempromosikan gaya hidup sehat dengan slogan "Run for a Healthier You." 
        Melalui partisipasi dalam lari dan penyebaran informasi, SIAR Run mengajak masyarakat, 
        khususnya generasi muda, untuk peduli terhadap isu-isu sosial yang relevan.
      </p>
      </section>
      <section className='w-full'>
      <h2 className='pt-[50px] extrabold text-[48px]'>Mother's Day Miles</h2>
      <p>
        Pada kesempatan kali ini kami mengadakan acara virtual run bertema "Mother's Day Miles" 
        untuk memperingati Hari Ibu, sebagai bentuk apresiasi terhadap peran ibu sekaligus 
        mengajak peserta menjaga kesehatan. Acara ini bertujuan mengedukasi peserta tentang 
        pentingnya gaya hidup sehat dan meningkatkan kesadaran sosial.
      </p>
      </section>
    </div>
    </div>
    </>   

  )
}

export default Hero