import About from "../components/LandingPage/About";
import Footer from "../components/LandingPage/Footer";
import Navbar from "../components/LandingPage/Navbar";
import Services from "../components/LandingPage/Services.";
import TextSection from "../components/LandingPage/textSection";
import { Outlet } from "react-router";



function LandingPage() {
    return (
        <>


            <Navbar />
            <TextSection />
            <Outlet/>
            {/* <About /> */}
            <Services />
            <Footer />

        </>

    );
}
export default LandingPage;