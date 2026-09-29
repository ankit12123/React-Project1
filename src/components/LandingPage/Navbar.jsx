import {Heading1} from "../../Elementcomponent/Header";
import Button from "../../Elementcomponent/Button";
import navbarStylee from "../../Theme/LandingPage/Navbar";
import Div from "../../Elementcomponent/Div";
import { useNavigate } from "react-router";

import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";

function Navbar(){
    const navigate = useNavigate();

    const theme = useContext(ThemeContext);

    const navbarStyle = navbarStylee(theme);


     function goToAbout() {
        document.getElementById("aboutSection").scrollIntoView({
            behavior: "smooth"
        });
    }

    function goToServices() {
        document.getElementById("servicesSection").scrollIntoView({
            behavior: "smooth"
        });
    }

return(
    <>
    <Div style={navbarStyle.navbarContainer} id="navbarContainer">

    <Div  style={navbarStyle.navbar} id="navbar">
        <Heading1 style={navbarStyle.navHeader}  id="navHeader" text="Webtech Practice"/>
        <Div  style={navbarStyle.navButtons} id="navbuttons">
               
               <Button  style={navbarStyle.navBtn}  class="navBtn" name="About" onClick={goToAbout}/>
               <Button   style={navbarStyle.navBtn} class="navBtn" name="Services" onClick={goToServices}/>
               <Button  style={navbarStyle.navBtn}  class="navBtn" name="Theme" />
               <Button   style={navbarStyle.navBtn} class="navBtn" name="Login" onClick={() => navigate("/login")}/>
               <Button style={{
                                ...navbarStyle.navBtn,
                                ...navbarStyle.signUp
                            }}
                             class="navBtn" id="SignUp" name="Signup" onClick={() => navigate("/signUp")}/>

        </Div>
    </Div>
</Div>
    </>
);

}
export default Navbar;