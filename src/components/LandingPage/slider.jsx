import Button from "../../Elementcomponent/Button";
import { Heading3 } from "../../Elementcomponent/Header";
import Card from "../../Elementcomponent/Card";
import Paragraph from "../../Elementcomponent/Paragraph";

import  '../../Theme/LandingPage/slider.css';

function Slider(){
    return(
    <>
    <Card id="slider">
        <div id="slide">
            <Button id="back" name="<"/>
            <div class="preview">
                <Heading3 class="Title" text="Complete Auto Flow"/>
                <Paragraph class="para" text="Beautiful dark/light mode with smooth
                transitions, persisted across all pages and 
                sessions"/>
            </div>
             <div class="preview">
                <Heading3 class="Title" text="Complete Auto Flow"/>
                <Paragraph class="para" text="Beautiful dark/light mode with smooth
                transitions, persisted across all pages and 
                sessions"/>
            </div>
             <div class="preview">
                <Heading3 class="Title" text="Complete Auto Flow"/>
                <Paragraph class="para" text="Beautiful dark/light mode with smooth
                transitions, persisted across all pages and 
                sessions"/>
            </div>
        <Button id="next" name=">"/>

        <div id="dots">
            <Paragraph class="dot" text="="/>
             {/* span we use make component */}
            <Paragraph class="dot" text="="/>
            <Paragraph class="dot" text="="/>
            
        </div>

        </div>
    </Card>
    </>

    );
}
export default Slider;