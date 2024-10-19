import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import AboutUs from "./component/AboutUs";
import Timeline from "./component/Timeline";
import Registration from "./component/Registration";
import FAQ from "./component/FAQ";
import Footer from "./component/Footer";


export default function Home() {
  return (    
    <>
    <div className="flex flex-col">
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Timeline/>
      <Registration/>
      <FAQ/>
      <Footer/>
    </div>
    </>
  );
}
