import Card from "../../Elementcomponent/Card";
import { Heading1, Heading3 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";

import  '../../Theme/LandingPage/Services.css';

function Services(){
    return(
    <>
      <Card id="servicesContainer">
        <Heading1 id="servicesHeader" text="What's Included"/>
        {/* in this we make the card component using children */}
        <Card id="ServicesCardContainer">
            <Card className="ServicesCard">
            {/* in this we use h5 */}
            <Heading3 className="cardTitle" text="Authentication Templates"/>
            <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

        </Card>
         <Card className="ServicesCard">
            {/* in this we use h5 */}
            <Heading3 className="cardTitle" text="Authentication Templates"/>
            <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

        </Card>
         <Card className="ServicesCard">
            {/* in this we use h5 */}
            <Heading3 className="cardTitle" text="Authentication Templates"/>
            <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

        </Card>
         <Card className="ServicesCard">
            {/* in this we use h5 */}
            <Heading3 className="cardTitle" text="Authentication Templates"/>
            <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

        </Card>
         <Card className="ServicesCard">
            {/* in this we use h5 */}
            <Heading3 className="cardTitle" text="Authentication Templates"/>
            <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

        </Card>

         <Card className="ServicesCard">
            {/* in this we use h5 */}
            <Heading3 className="cardTitle" text="Authentication Templates"/>
            <Paragraph className="cardpara" text="Beautiful login and signup forms with real- time
             validation, error handling, and seamless localStorage
            integration."/>

        </Card>
      </Card>
    </Card>
        </>
    );
}
export default Services;