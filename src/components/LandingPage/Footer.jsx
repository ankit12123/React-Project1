import Paragraph from "../../Elementcomponent/Paragraph";
import Button from "../../Elementcomponent/Button";
import Div from "../../Elementcomponent/Div";
import footerStylee from "../../Theme/LandingPage/Footer";
import { useNavigate } from "react-router";


import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";

function Footer() {
    const navigate = useNavigate();

    const theme = useContext(ThemeContext);

    const footerStyle = footerStylee(theme);

    return (
        <>
            <Div style={footerStyle.footerContainer} id="footerContainer">
                <Div style={footerStyle.footer} id="footer">
                    <Paragraph style={footerStyle.copyrightFooter} id="CopyrightFooter" text="© 2025 WebTech Practice. Built for learning and growth." />

                    <Div style={footerStyle.footerButtons} id="footerbuttons">
                        <Button style={footerStyle.footerBtn} class="footerBtn" name="About" />
                        <Button style={footerStyle.footerBtn} class="footerBtn" name="Services" />
                        <Button style={footerStyle.footerBtn} class="footerBtn" name="Theme" />
                        <Button style={footerStyle.footerBtn} class="footerBtn" name="Login" onClick={() => navigate("/login")}/>
                        <Button style={{
                            ...footerStyle.footerBtn,
                            ...footerStyle.signUp
                        }}
                            class="footerBtn SignUp" name="Signup" onClick={() => navigate("/signUp")}/>

                    </Div>
                </Div>
            </Div>
        </>

    );
}
export default Footer;