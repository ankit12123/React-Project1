import {Heading1} from "../../Elementcomponent/Header";
import Button from "../../Elementcomponent/Button";
import  '../../Theme/LandingPage/Navbar.css'
import Div from "../../Elementcomponent/Div";


function Navbar(){
return(
    <>
    <Div id="navbar">
        <Heading1 id="navHeader" text="Webtech Practice"/>
        <Div id="navbuttons">
               
               <Button class="navBtn" name="About"/>
               <Button class="navBtn" name="Services"/>
               <Button class="navBtn" name="Theme"/>
               <Button class="navBtn" name="Login"/>
               <Button class="navBtn" id="SignUp" name="Signup"/>

        </Div>
    </Div>
    </>
);

}
export default Navbar;