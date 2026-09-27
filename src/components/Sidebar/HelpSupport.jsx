import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import Paragraph from "../../Elementcomponent/Paragraph";

import { Heading2, Heading3 } from "../../Elementcomponent/Header";

import helpSupportStylee from "../../Theme/Sidebar/helpSupport";

import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";


function HelpSupport() {
     const theme = useContext(ThemeContext);

      const helpSupportStyle = helpSupportStylee(theme);

    return (

        <Card
            id="helpCard"
            style={helpSupportStyle.helpCard}
        >

            {/* Main Heading */}

            <Heading2
                id="helpHeading"
                text="Help & Support"
                style={helpSupportStyle.helpHeading}
            />


            {/* Frequently Asked Questions Heading */}

            <Div
                id="faqHeadingBox"
                style={helpSupportStyle.faqHeadingBox}
            >

                <Div
                    id="faqIcon"
                    style={helpSupportStyle.faqIcon}
                >
                    ?
                </Div>


                <Heading3
                    id="faqHeading"
                    text="Frequently Asked Questions"
                    style={helpSupportStyle.sectionHeading}
                />

            </Div>


            {/* FAQ Cards */}

            <Div
                id="faqContainer"
                style={helpSupportStyle.faqContainer}
            >

                {/* FAQ 1 */}

                <Card
                    id="faqOne"
                    style={helpSupportStyle.faqCard}
                >

                    <Paragraph
                        id="questionOne"
                        text="How do I update my profile?"
                        style={helpSupportStyle.question}
                    />

                    <Paragraph
                        id="answerOne"
                        text={'Click on "Profile Settings" in the sidebar to edit your personal information, address, and other details.'}
                        style={helpSupportStyle.answer}
                    />

                </Card>


                {/* FAQ 2 */}

                <Card
                    id="faqTwo"
                    style={helpSupportStyle.faqCard}
                >

                    <Paragraph
                        id="questionTwo"
                        text="Is my data secure?"
                        style={helpSupportStyle.question}
                    />

                    <Paragraph
                        id="answerTwo"
                        text="This is a demo application that stores data in your browser's localStorage. In a production app, data would be encrypted and stored securely on servers."
                        style={helpSupportStyle.answer}
                    />

                </Card>


                {/* FAQ 3 */}

                <Card
                    id="faqThree"
                    style={helpSupportStyle.faqCard}
                >

                    <Paragraph
                        id="questionThree"
                        text="How do I change my password?"
                        style={helpSupportStyle.question}
                    />

                    <Paragraph
                        id="answerThree"
                        text={'Go to "Security" in the sidebar, enter your current password, then set and confirm your new password.'}
                        style={helpSupportStyle.answer}
                    />

                </Card>

            </Div>


            {/* Contact Support Heading */}

            <Div
                id="supportHeadingBox"
                style={helpSupportStyle.supportHeadingBox}
            >

                <Div
                    id="supportIcon"
                    style={helpSupportStyle.supportIcon}
                >
                    ☎
                </Div>


                <Heading3
                    id="supportHeading"
                    text="Contact Support"
                    style={helpSupportStyle.sectionHeading}
                />

            </Div>


            {/* Contact Support Description */}

            <Paragraph
                id="supportDescription"
                text="This is a demonstration application for learning web development. In a real application, you would find contact information and support options here."
                style={helpSupportStyle.supportDescription}
            />

        </Card>
    );
}


export default HelpSupport;