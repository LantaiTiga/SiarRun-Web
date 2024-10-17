import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";

export default function Home() {
  return (    
    <>
    <div className="flex flex-col">
      <Navbar/>
      <Hero/>
      <AboutUs/>
    </div>
    </>
  );
}
