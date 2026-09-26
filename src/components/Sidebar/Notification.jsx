import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import Paragraph from "../../Elementcomponent/Paragraph";
import { Heading2, Heading3 } from "../../Elementcomponent/Header";
import { Input } from "../../Elementcomponent/Input";

import notificationStylee from "../../Theme/Sidebar/Notification";
import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";



function Notification() {

     const theme = useContext(ThemeContext);

      const notificationStyle = notificationStylee(theme);

    return (

        <Card
            id="notificationCard"
            style={notificationStyle.notificationCard}
        >

            {/* Main Heading */}

            <Heading2
                id="notificationHeading"
                text="Notifications"
                style={notificationStyle.notificationHeading}
            />


            {/* Notification Preferences Heading */}

            <Div
                id="preferencesHeadingBox"
                style={notificationStyle.preferencesHeadingBox}
            >

                <span style={notificationStyle.bellIcon}>
                    ♟
                </span>

                <Heading3
                    id="preferencesHeading"
                    text="Notification Preferences"
                    style={notificationStyle.sectionHeading}
                />

            </Div>


            {/* Description */}

            <Paragraph
                id="notificationDescription"
                text="Manage how and when you receive notifications about your account activity."
                style={notificationStyle.notificationDescription}
            />


            {/* Notification Cards */}

            <Div
                id="notificationRow"
                style={notificationStyle.notificationRow}
            >

                {/* Email Notifications */}

                <Card
                    id="emailNotification"
                    style={notificationStyle.notificationBox}
                >

                    <Div
                        id="emailIcon"
                        style={notificationStyle.notificationIcon}
                    >
                        ✉
                    </Div>


                    <Heading3
                        id="emailTitle"
                        text="Email Notifications"
                        style={notificationStyle.notificationTitle}
                    />


                    <Paragraph
                        id="emailText"
                        text="Receive important updates via email"
                        style={notificationStyle.notificationText}
                    />


                    <Div
                        id="emailCheckboxRow"
                        style={notificationStyle.checkboxRow}
                    >

                        <Input
                            type="checkbox"
                            id="emailCheckbox"
                            style={notificationStyle.checkbox}
                        />

                        <Paragraph
                            id="emailCheckboxText"
                            text="Enable email notifications"
                            style={notificationStyle.checkboxText}
                        />

                    </Div>

                </Card>


                {/* Security Alerts */}

                <Card
                    id="securityNotification"
                    style={notificationStyle.notificationBox}
                >

                    <Div
                        id="securityIcon"
                        style={notificationStyle.notificationIcon}
                    >
                        🔒
                    </Div>


                    <Heading3
                        id="securityTitle"
                        text="Security Alerts"
                        style={notificationStyle.notificationTitle}
                    />


                    <Paragraph
                        id="securityText"
                        text="Get notified about security changes"
                        style={notificationStyle.notificationText}
                    />


                    <Div
                        id="securityCheckboxRow"
                        style={notificationStyle.checkboxRow}
                    >

                        <Input
                            type="checkbox"
                            id="securityCheckbox"
                            style={notificationStyle.checkbox}
                        />

                        <Paragraph
                            id="securityCheckboxText"
                            text="Enable security alerts"
                            style={notificationStyle.checkboxText}
                        />

                    </Div>

                </Card>

            </Div>


            {/* Recent Activity Heading */}

            <Div
                id="recentHeadingBox"
                style={notificationStyle.recentHeadingBox}
            >

                <span style={notificationStyle.recentIcon}>
                    ▤
                </span>

                <Heading3
                    id="recentHeading"
                    text="Recent Activity"
                    style={notificationStyle.sectionHeading}
                />

            </Div>


            {/* Recent Activity */}

            <Card
                id="activityCard"
                style={notificationStyle.activityCard}
            >

                <Div
                    id="activityCheck"
                    style={notificationStyle.activityCheck}
                >
                    ☑
                </Div>


                <Paragraph
                    id="activityTitle"
                    text="Profile Updated"
                    style={notificationStyle.activityTitle}
                />


                <Paragraph
                    id="activityDescription"
                    text="Your profile information was successfully updated"
                    style={notificationStyle.activityDescription}
                />


                <Paragraph
                    id="activityDate"
                    text="Today"
                    style={notificationStyle.activityDate}
                />

            </Card>

        </Card>
    );
}

export default Notification;