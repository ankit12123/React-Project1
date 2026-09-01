import About from "../components/LandingPage/About";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/LandingPage/Navbar";
import Services from "../components/LandingPage/Services.";
import Slider from "../components/LandingPage/slider";
import TextSection from "../components/LandingPage/textSection";

import "../Theme/LandingPage/slider.css"
import "../Theme/LandingPage/textSection.css"
function LandingPage(){
    return(
    <>
         
        
         <Navbar/>
         <div id="maincontainercsss">
         <TextSection/>
         <Slider/>
         </div>
         
         <About/>
         <Services/>
         <Footer/>
        
    </>

    );
}
export default LandingPage;