import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import Button from "../../Elementcomponent/Button";
import Paragraph from "../../Elementcomponent/Paragraph";

import { Heading2, Heading3 } from "../../Elementcomponent/Header";

import { Input, Label } from "../../Elementcomponent/Input";

import securityStylee from "../../Theme/Sidebar/security";
import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";


import { useFormik } from "formik";
import SecurityValidation from "../../Validation/SecurityVallidation";


function Security() {

     const theme = useContext(ThemeContext);

  const securityStyle = securityStylee(theme);

  const formik = useFormik({
    initialValues:{
        currentPassword : "",
        password : "",
        confirmPassword:""
    },
    validationSchema: SecurityValidation,

       onSubmit: (values) => {
        console.log("Security Values:", values);
        alert("Password updated successfully!");
    },
});

  

    return (

        <Card
            id="securityCard"
            style={securityStyle.securityCard}
        >
            <form onSubmit={formik.handleSubmit}>
        {/* Keep all your existing Security Settings content here */}
    

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
                        name="currentPassword"
                        type="password"
                        placeholder="Enter current password"
                        style={securityStyle.passwordInput}
                        value={formik.values.currentPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                        {formik.touched.currentPassword &&  formik.errors.currentPassword && (
                        <Paragraph
                            text={formik.errors.currentPassword}
                            style={securityStyle.emailError}
                        />
                    )}

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
                            name="password"
                            type="password"
                            placeholder="Minimum 8 characters"
                            style={securityStyle.passwordInput}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.password &&  formik.errors.password && (
                        <Paragraph text={formik.errors.password} style={securityStyle.emailError} />
                    )}
                   

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
                        name="confirmPassword"
                        type="password"
                        placeholder="Re-enter new password"
                        style={securityStyle.passwordInput}
                        value={formik.values.confirmPassword}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched.confirmPassword &&formik.errors.confirmPassword && (
                    <Paragraph text={formik.errors.confirmPassword} style={securityStyle.emailError} />
            )}

            </Div>


            {/* Buttons */}

            <Div
                id="buttonContainer"
                style={securityStyle.buttonContainer}
            >

                <Button
                id="clearButton"
                name="Clear"
                type="button"
                style={securityStyle.clearButton}
                onClick={() => formik.resetForm()}
            />

            <Button
                id="updatePasswordButton"
                name="Update Password"
                type="submit"
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
            </form>
        </Card>
       
    );
}


export default Security;