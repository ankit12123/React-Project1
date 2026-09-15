import Card from "../../Elementcomponent/Card";
import { Heading2 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";

function Notification() {

    return (

        <Card className="contentCard">

            <Heading2 text="Notification" />

            <Paragraph
                text="Manage your notification preferences."
            />

        </Card>

    );
}

export default Notification;