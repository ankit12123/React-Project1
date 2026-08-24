import Card from "../../Elementcomponent/Card";
import { Heading1 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";

import  '../../Theme/LandingPage/About.css';

function About(){
    return(
    <>
     <Card id="aboutContainer">
        <Heading1 id="aboutTitle"  text="About This Project"/>
        <Paragraph id="aboutPara" text="This comprehensive template is designed for students and developers to practice modern web
         fundamentals⸺responsive layouts, accessible forms, client-side state management, and
          component architecure⸺without any frameworks or complex build processes."/>

        <Paragraph class="Aboutsixpoints"  text="Single-file pages you can open directly in any modern browser"/>
        <Paragraph class="Aboutsixpoints"  text="Single-file pages you can open directly in any modern browser"/>
        <Paragraph class="Aboutsixpoints"  text="Single-file pages you can open directly in any modern browser"/>
        <Paragraph class="Aboutsixpoints"  text="Single-file pages you can open directly in any modern browser"/>
        <Paragraph class="Aboutsixpoints"  text="Single-file pages you can open directly in any modern browser"/>
        <Paragraph class="Aboutsixpoints"  text="Single-file pages you can open directly in any modern browser"/>
    </Card>
        </>
    );
}
export default About;