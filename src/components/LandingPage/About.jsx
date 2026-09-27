import Card from "../../Elementcomponent/Card";
import { Heading1 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";
import aboutStylee from "../../Theme/LandingPage/About.jsx";



import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";

function About() {

     const theme = useContext(ThemeContext);

  const aboutStyle = aboutStylee(theme);

    return (
        <>
            <Card id="aboutContainer" style={aboutStyle.aboutContainer}>
                <Heading1 id="aboutTitle" text="About This Project" />
                <Paragraph id="aboutPara" style={aboutStyle.aboutPara} text="This comprehensive template is designed for students and developers to practice modern web
         fundamentals⸺responsive layouts, accessible forms, client-side state management, and
          component architecure⸺without any frameworks or complex build processes."/>

                <Paragraph style={aboutStyle.Aboutsixpoints} class="Aboutsixpoints" text="Single-file pages you can open directly in any modern browser" />
                <Paragraph style={aboutStyle.Aboutsixpoints} class="Aboutsixpoints" text="Single-file pages you can open directly in any modern browser" />
                <Paragraph style={aboutStyle.Aboutsixpoints} class="Aboutsixpoints" text="Single-file pages you can open directly in any modern browser" />
                <Paragraph style={aboutStyle.Aboutsixpoints} class="Aboutsixpoints" text="Single-file pages you can open directly in any modern browser" />
                <Paragraph style={aboutStyle.Aboutsixpoints} class="Aboutsixpoints" text="Single-file pages you can open directly in any modern browser" />
                <Paragraph style={aboutStyle.Aboutsixpoints} class="Aboutsixpoints" text="Single-file pages you can open directly in any modern browser" />
            </Card>
        </>
    );
}
export default About;