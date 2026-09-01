import Button from "../../Elementcomponent/Button";
import { Heading2 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";
import Div from "../../Elementcomponent/Div";

import  '../../Theme/LandingPage/textSection.css';

function TextSection(){
    return(
        <>
        <Div id="textContainer">
        <Heading2 id="textHeader" text="Launch your Web Tech Practice site in minutes"/>
        <Paragraph id="textPara" text="A clean, modern starter template with Login, Signup,
        Dashboard, Profile, and Layout pages using only HTML/CSS/
        /JS and browser localStorage.Perfect for learning and,
         practicing web development undamenttals."/>

         <Button id="SignUp" name="SignUp"/>
         <Button id="Login" name="I already have a account"/>
        </Div>
        </>
    );
}
export default TextSection;