import Card from "../../Elementcomponent/Card";
import { Heading2 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";

function HelpSupport() {

    return (

        <Card className="contentCard">

            <Heading2 text="Help & Support" />

            <Paragraph
                text="Find answers to common questions and get support for your account."
            />

        </Card>

    );
}

export default HelpSupport;