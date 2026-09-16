import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import Button from "../../Elementcomponent/Button";
import Paragraph from "../../Elementcomponent/Paragraph";

import { Heading2, Heading3 } from "../../Elementcomponent/Header";

import { Input, Label } from "../../Elementcomponent/Input";

import securityStyle from "../../Theme/Sidebar/security";


function Security() {

    return (

        <Card
            id="securityCard"
            style={securityStyle.securityCard}
        >

            {/* Main Heading */}

            <Heading2
                id="securityHeading"
                text="Security Settings"
                style={securityStyle.securityHeading}
            />


            {/* Security Settings */}

            <Heading3
                id="securitySectionHeading"
                text="Security Settings"
                style={securityStyle.sectionHeading}
            />


            <Paragraph
                id="securityDescription"
                text="Keep your account secure by using a strong password and changing it regularly."
                style={securityStyle.securityDescription}
            />


            {/* Current Password + New Password */}

            <Div
                id="passwordRow"
                style={securityStyle.passwordRow}
            >

                {/* Current Password */}

                <Div
                    id="currentPasswordField"
                    style={securityStyle.passwordField}
                >

                    <Label
                        id="currentPasswordLabel"
                        text="Current Password"
                        style={securityStyle.passwordLabel}
                    />

                    <Input
                        id="currentPassword"
                        type="password"
                        placeholder="Enter current password"
                        style={securityStyle.passwordInput}
                    />

                </Div>


                {/* New Password */}

                <Div
                    id="newPasswordField"
                    style={securityStyle.passwordField}
                >

                    <Label
                        id="newPasswordLabel"
                        text="New Password"
                        style={securityStyle.passwordLabel}
                    />

                    <Input
                        id="newPassword"
                        type="password"
                        placeholder="Minimum 6 characters"
                        style={securityStyle.passwordInput}
                    />

                </Div>

            </Div>


            {/* Confirm New Password */}

            <Div
                id="confirmPasswordField"
                style={securityStyle.fullPasswordField}
            >

                <Label
                    id="confirmPasswordLabel"
                    text="Confirm New Password"
                    style={securityStyle.passwordLabel}
                />

                <Input
                    id="confirmNewPassword"
                    type="password"
                    placeholder="Re-enter new password"
                    style={securityStyle.passwordInput}
                />

            </Div>


            {/* Buttons */}

            <Div
                id="buttonContainer"
                style={securityStyle.buttonContainer}
            >

                <Button
                    id="clearButton"
                    class="clearButton"
                    name="Clear"
                    style={securityStyle.clearButton}
                />

                <Button
                    id="updatePasswordButton"
                    class="updateButton"
                    name="Update Password"
                    style={securityStyle.updateButton}
                />

            </Div>


            {/* Divider */}

            <Div
                id="securityDivider"
                style={securityStyle.divider}
            />


            {/* Security Information */}

            <Heading3
                id="informationHeading"
                text="Security Information"
                style={securityStyle.informationHeading}
            />


            {/* Information Cards */}

            <Div
                id="informationRow"
                style={securityStyle.informationRow}
            >

                {/* Account Created */}

                <Card
                    id="accountCreatedCard"
                    style={securityStyle.informationCard}
                >

                    <Div
                        id="accountCreatedIcon"
                        style={securityStyle.informationIcon}
                    >
                        ▣
                    </Div>

                    <Heading3
                        id="accountCreatedTitle"
                        text="Account Created"
                        style={securityStyle.informationTitle}
                    />

                    <Paragraph
                        id="accountCreatedText"
                        text="8/31/2025"
                        style={securityStyle.informationText}
                    />

                </Card>


                {/* Last Updated */}

                <Card
                    id="lastUpdatedCard"
                    style={securityStyle.informationCard}
                >

                    <Div
                        id="lastUpdatedIcon"
                        style={securityStyle.informationIcon}
                    >
                        ▣
                    </Div>

                    <Heading3
                        id="lastUpdatedTitle"
                        text="Last Updated"
                        style={securityStyle.informationTitle}
                    />

                    <Paragraph
                        id="lastUpdatedText"
                        text="Never updated"
                        style={securityStyle.informationText}
                    />

                </Card>


                {/* Session */}

                <Card
                    id="sessionCard"
                    style={securityStyle.informationCard}
                >

                    <Div
                        id="sessionIcon"
                        style={securityStyle.informationIcon}
                    >
                        ▣
                    </Div>

                    <Heading3
                        id="sessionTitle"
                        text="Session"
                        style={securityStyle.informationTitle}
                    />

                    <Paragraph
                        id="sessionText"
                        text="Current browser session active"
                        style={securityStyle.informationText}
                    />

                </Card>

            </Div>

        </Card>
    );
}


export default Security;