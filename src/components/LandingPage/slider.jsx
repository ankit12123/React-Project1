import Button from "../../Elementcomponent/Button";
import { Heading3 } from "../../Elementcomponent/Header";
import Card from "../../Elementcomponent/Card";
import Paragraph from "../../Elementcomponent/Paragraph";
import Div from "../../Elementcomponent/Div";

import  '../../Theme/LandingPage/slider.css';

function Slider(){
    return(
    <>
    <Card id="slider">
        <Div id="slide">
            <Button id="back" name="<"/>
            <Div class="preview">
                <Heading3 class="Title" text="Complete Auto Flow"/>
                <Paragraph class="para" text="Beautiful dark/light mode with smooth
                transitions, persisted across all pages and 
                sessions"/>
            </Div>
             <Div class="preview">
                <Heading3 class="Title" text="Complete Auto Flow"/>
                <Paragraph class="para" text="Beautiful dark/light mode with smooth
                transitions, persisted across all pages and 
                sessions"/>
            </Div>
             <Div class="preview">
                <Heading3 class="Title" text="Complete Auto Flow"/>
                <Paragraph class="para" text="Beautiful dark/light mode with smooth
                transitions, persisted across all pages and 
                sessions"/>
            </Div>
        <Button id="next" name=">"/>

        <Div id="dots">
            <Paragraph class="dot" text="="/>
             {/* span we use make component */}
            <Paragraph class="dot" text="="/>
            <Paragraph class="dot" text="="/>
            
        </Div>

        </Div>
    </Card>
    </>

    );
}
export default Slider;