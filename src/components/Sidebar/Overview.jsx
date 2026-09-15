import Div from "../../Elementcomponent/Div";
import Card from "../../Elementcomponent/Card";
import { Heading2, Heading3 } from "../../Elementcomponent/Header";
import Paragraph from "../../Elementcomponent/Paragraph";

import overviewStyle from "../../Theme/Sidebar/overview";


function Overview() {

    return (

        <Card
            id="overviewCard"
            style={overviewStyle.overviewCard}
        >

            <Heading2
                text="Welcome back, Demo User"
                id="overviewHeading"
                style={overviewStyle.overviewHeading}
            />

            <Paragraph
                text="Manage your profile settings and account preferences. Your data is securely stored in your browser's localStorage."
                id="overviewPara"
                style={overviewStyle.overviewPara}
            />


            {/* Information Cards */}

            <Div
                id="MainOverviewCards"
                style={overviewStyle.MainOverviewCards}
            >

                <Card
                    className="overviewCards"
                    style={overviewStyle.overviewCards}
                >

                    <Heading3
                        text="Theme"
                        style={overviewStyle.overviewCardsHeading}
                    />

                    <Paragraph
                        text="Dark/Light mode persisted across all pages"
                        style={overviewStyle.overviewCardsPara}
                    />

                    <Div
                        className="progress"
                        style={overviewStyle.progress}
                    />

                </Card>


                <Card
                    className="overviewCards"
                    style={overviewStyle.overviewCards}
                >

                    <Heading3
                        text="Authentication"
                        style={overviewStyle.overviewCardsHeading}
                    />

                    <Paragraph
                        text="Secure session stored in browser storage"
                        style={overviewStyle.overviewCardsPara}
                    />

                    <Div
                        className="progress"
                        style={overviewStyle.progress}
                    />

                </Card>


                <Card
                    className="overviewCards"
                    style={overviewStyle.overviewCards}
                >

                    <Heading3
                        text="Profile"
                        style={overviewStyle.overviewCardsHeading}
                    />

                    <Paragraph
                        text="20% profile completed (1/5 fields)"
                        style={overviewStyle.overviewCardsPara}
                    />

                    <Div
                        className="progress"
                        style={overviewStyle.progress}
                    />

                </Card>


                <Card
                    className="overviewCards"
                    style={overviewStyle.overviewCards}
                >

                    <Heading3
                        text="Security"
                        style={overviewStyle.overviewCardsHeading}
                    />

                    <Paragraph
                        text="Password protection and account security"
                        style={overviewStyle.overviewCardsPara}
                    />

                    <Div
                        className="progress"
                        style={overviewStyle.progress}
                    />

                </Card>

            </Div>


            {/* /// Quick Actions  */}

            <Heading3
                class="quickTitle"
                text="Quick Actions"
                style={overviewStyle.quickTitle}
            />


            <Div
                id="quickActions"
                style={overviewStyle.quickActions}
            >

                <Card
                    className="quickCard"
                    style={overviewStyle.quickCard}
                >

                    <Heading3
                        text="Edit Profile"
                        class="quickCardHeading"
                        style={overviewStyle.quickCardHeading}
                    />

                    <Paragraph
                        text="Update your personal information"
                        class="quickcardPara"
                        style={overviewStyle.quickCardPara}
                    />

                </Card>


                <Card
                    className="quickCard"
                    style={overviewStyle.quickCard}
                >

                    <Heading3
                        text="Change Password"
                        class="quickCardHeading"
                        style={overviewStyle.quickCardHeading}
                    />

                    <Paragraph
                        text="Update your Account security"
                        class="quickcardPara"
                        style={overviewStyle.quickCardPara}
                    />

                </Card>

            </Div>

        </Card>
    );
}

export default Overview;