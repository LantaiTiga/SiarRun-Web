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
    width={500}
    height={500}
    style={{ width: '100%', height: 'auto', position:'absolute' }}/>

<Image
    src={HeroTitle}
    alt="Example Image"
    width={500}
    height={500}
    style={{ left: '50%', bottom:'20%', transform: 'translate(-50%, 50%)', width: '50%', height: 'auto', position:'sticky' }}/>

<div className='text-white'>
      <h2>About SIAR Run</h2>
      <p>
        SIAR Run adalah kegiatan lari yang bertujuan meningkatkan kesadaran sosial dan lingkungan,
        sekaligus mempromosikan gaya hidup sehat dengan slogan "Run for a Healthier You." 
        Melalui partisipasi dalam lari dan penyebaran informasi, SIAR Run mengajak masyarakat, 
        khususnya generasi muda, untuk peduli terhadap isu-isu sosial yang relevan.
      </p>
      <h2>Mother's Day Miles</h2>
      <p>
        Pada kesempatan kali ini kami mengadakan acara virtual run bertema "Mother's Day Miles" 
        untuk memperingati Hari Ibu, sebagai bentuk apresiasi terhadap peran ibu sekaligus 
        mengajak peserta menjaga kesehatan. Acara ini bertujuan mengedukasi peserta tentang 
        pentingnya gaya hidup sehat dan meningkatkan kesadaran sosial.
      </p>
    </div>
    </div>
    </>   

  )
}

export default Hero