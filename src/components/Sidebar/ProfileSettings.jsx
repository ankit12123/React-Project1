import Card from "../../Elementcomponent/Card";
import { Heading2 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";

function ProfileSettings() {

    return (

        <Card className="contentCard">

            <Heading2 text="Profile Settings" />

            <Paragraph
                text="Manage your personal information and profile settings."
            />

        </Card>

    );
}

export default ProfileSettings;