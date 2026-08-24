import {Heading1} from "../../Elementcomponent/Header";
import Button from "../../Elementcomponent/Button";
import  '../../Theme/LandingPage/Navbar.css'


function Navbar(){
return(
    <>
    <div id="navbar">
        <Heading1 id="navHeader" text="Webtech Practice"/>
        <div id="navbuttons">
               
               <Button class="navBtn" name="About"/>
               <Button class="navBtn" name="Services"/>
               <Button class="navBtn" name="Theme"/>
               <Button class="navBtn" name="Login"/>
               <Button class="navBtn" id="SignUp" name="Signup"/>

        </div>
    </div>
    </>
);

}
export default Navbar;