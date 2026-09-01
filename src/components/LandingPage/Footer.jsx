import Paragraph from "../../Elementcomponent/Paragraph";
import Button from "../../Elementcomponent/Button";
import Div from "../../Elementcomponent/Div";
import  '../../Theme/LandingPage/Footer.css';
function Footer(){
    return(
            <>
            <Div id="Footer">
                <Paragraph id="CopyrightFooter" text="© 2025 WebTech Practice. Built for learning and growth."/>
                
                <Div id="Footerbuttons">
                    <Button  class="FooterBtn" name="About"/>
                    <Button class="FooterBtn" name="Services"/>
                    <Button class="FooterBtn" name="Theme"/>
                    <Button class="FooterBtn" name="Login"/>
                    <Button class="FooterBtn SignUp"  name="Signup"/>
                    

                </Div>
            </Div>
            </>

    );
}
export default Footer;