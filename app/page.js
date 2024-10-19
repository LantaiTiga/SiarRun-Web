import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import Registration from "./component/Registration";
import { RacePack } from "./component/RacePack";

export default function Home() {
  return (    
    <>
    <div className="flex flex-col">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Registration/>
      <RacePack/>
    </div>
    </>
  );
}
