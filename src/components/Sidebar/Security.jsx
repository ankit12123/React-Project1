import Card from "../../Elementcomponent/Card";
import { Heading2 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";

function Security() {

    return (

        <Card className="contentCard">

            <Heading2 text="Security" />

            <Paragraph
                text="Manage your password, authentication and account security."
            />

        </Card>

    );
}

export default Security;