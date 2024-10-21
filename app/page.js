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
import Link from "next/link";


export default function Home() {
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
            <li><Link href='#Hero' scroll={false} className=' hover:border-b-2 hover:border-white '>Home</Link></li>
            <li><Link href='#AboutUs' scroll={false} className=' hover:border-b-2 hover:border-white '>About Us</Link></li>
            <li><Link href='#Timeline' scroll={false} className=' hover:border-b-2 hover:border-white '>Timeline</Link></li>
            <li><Link href='#Registration' scroll={false} className=' hover:border-b-2 hover:border-white '>Registration</Link></li>
            <li><Link href='#FAQ' scroll={false} className=' hover:border-b-2 hover:border-white '>FAQ</Link></li>
        </ul>
    </nav>
    <div className="flex flex-col">
      <Hero/>
      <AboutUs/>
      <Timeline/>
      <Registration/>
      <RacePack/>
      <FAQ/>
      <Spotify/>
      <Footer/>
    </div>
    </>
  );
}
