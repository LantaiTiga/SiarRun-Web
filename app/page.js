'use client'
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import Timeline from "./component/Timeline";
import Registration from "./component/Registration";
import RacePack from "./component/Racepack";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";
import Spotify from "./component/Spotify";
import Logo from '../app/public/IconLogo.svg';
import Image from "next/image";
import { useRef } from "react";

export default function Home() {
  const HeroRef = useRef(null);
  const aboutRef = useRef(null);
  const timelineRef = useRef(null);
  const registrationRef = useRef(null);
  const FAQRef = useRef(null);

  return (    
    <>
      <nav className="flex justify-between text-white py-[18px] px-[23px] sm:px-[58px] md:px-[64px] bg-[#181818]">
      <Image
        src={Logo}
        alt="Logo"
        width={38} // Use state variable
        height={24.65}
        className='sm:w-[61px] sm:h-[39px] md:w-[105px] md:h-[73px]'/>
      
        <ul className='regular-italic flex text-[10px] items-center gap-[13px] sm:text-[16px] sm:gap-[32px] md:text-[23px] md:gap-[64px]'>
            <button onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })} className=' hover:border-b-2 hover:border-white '>Home</button>
            <button onClick={() => aboutRef.current.scrollIntoView({ behavior: 'smooth' })} className=' hover:border-b-2 hover:border-white '>About Us</button>
            <button onClick={() => timelineRef.current.scrollIntoView({ behavior: 'smooth' })} className=' hover:border-b-2 hover:border-white '>Timeline</button>
            <button onClick={() => registrationRef.current.scrollIntoView({ behavior: 'smooth' })} className=' hover:border-b-2 hover:border-white '>Registration</button>
            <button onClick={() => FAQRef.current.scrollIntoView({ behavior: 'smooth' })} className=' hover:border-b-2 hover:border-white '>FAQ</button>
        </ul>
    </nav>
    <div className="flex flex-col">
      <Hero ref={HeroRef} />
      <AboutUs ref={aboutRef} />
      <Timeline ref={timelineRef} />
      <Registration ref={registrationRef} />
      <RacePack/>
      <FAQ ref={FAQRef} />
      <Spotify/>
      <Footer/>
    </div>
    </>
  );
}
