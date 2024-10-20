import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import Timeline from "./component/Timeline";
import Registration from "./component/Registration";

export default function Home() {
  return (    
    <>
    <div className="bg-[#0E0E0E] flex flex-col">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Timeline/>
      <Registration/>
    </div>
    </>
  );
}
