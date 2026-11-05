import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import Button from "../../Elementcomponent/Button";
import Paragraph from "../../Elementcomponent/Paragraph";
import { Heading1, Heading2, Heading3 } from "../../Elementcomponent/Header";
import { Input, Label } from "../../Elementcomponent/Input";

import profileStylee from "../../Theme/Sidebar/Profile";

import { useContext } from "react";
import { ThemeContext } from "../../Theme/theme";

import { useFormik } from "formik";
import ProfileValidation from "../../Validation/ProfileVallidation";


function ProfileSettings() {

    const theme = useContext(ThemeContext);

    const profileStyle = profileStylee(theme);


    const formik = useFormik({
        initialValues: {
            fullName: "Demo User",
            dateOfBirth: "",
            emailAddress: "demo@gmail.com",
            phoneNumber: "9876543210",
            streetAddress: "",
            pinCode: "123456",
            city: "Ranchi",
            country: "India",
            githubProfile: "",
        },

        validationSchema: ProfileValidation,

        onSubmit: (values) => {
            console.log("Profile Values:", values);
            alert("Profile updated successfully!");
        },
    });


    return (

        <Card
            id="profileCard"
            style={profileStyle.profileCard}
        >
            <form onSubmit={formik.handleSubmit}>

                {/* Profile Heading */}
                <Heading2
                    id="profileHeading"
                    text="Profile Settings"
                    style={profileStyle.profileHeading}
                />


                {/* Personal Information */}
                <Div
                    id="personalInformation"
                    style={profileStyle.personalInformation}
                >

                    <Heading3
                        id="personalInformationHeading"
                        text="Personal Information"
                        style={profileStyle.sectionHeading}
                    />


                    {/* First Row */}
                    <Div
                        id="profileRow"
                        style={profileStyle.profileRow}
                    >

                        {/* Full Name */}
                        <Div
                            id="profileField"
                            style={profileStyle.profileField}
                        >

                            <Label
                                id="fullNameLabel"
                                text="Full Name"

                                style={profileStyle.profileLabel}
                            />

                            <Input
                                id="fullName"
                                name="fullName"
                                type="text"
                                placeholder="Enter your Name"
                                style={profileStyle.profileInput}
                                value={formik.values.fullName}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.fullName &&
                                formik.errors.fullName && (
                                    <Paragraph
                                        text={formik.errors.fullName}
                                        style={profileStyle.emailError}
                                    />
                                )}

                        </Div>


                        {/* Date of Birth */}
                        <Div
                            id="profileField"
                            style={profileStyle.profileField}
                        >

                            <Label
                                id="dobLabel"
                                text="Date of Birth"
                                style={profileStyle.profileLabel}
                            />

                            <Input
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="date"
                                style={profileStyle.profileInput}
                                value={formik.values.dateOfBirth}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.dateOfBirth &&
                                formik.errors.dateOfBirth && (
                                    <Paragraph
                                        text={formik.errors.dateOfBirth}
                                        style={profileStyle.emailError}
                                    />
                                )}

                        </Div>

                    </Div>


                    {/* Second Row */}
                    <Div
                        id="profileRow"
                        style={profileStyle.profileRow}
                    >

                        {/* Email */}
                        <Div
                            id="profileField"
                            style={profileStyle.profileField}
                        >

                            <Label
                                id="emailLabel"
                                text="Email Address"
                                style={profileStyle.profileLabel}
                            />

                            <Input
                                id="emailAddress"
                                name="emailAddress"
                                type="email"
                                placeholder="Enter your Email address"
                                style={profileStyle.profileInput}
                                value={formik.values.emailAddress}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.emailAddress &&
                                formik.errors.emailAddress && (
                                    <Paragraph
                                        text={formik.errors.emailAddress}
                                        style={profileStyle.emailError}
                                    />
                                )}

                        </Div>


                        {/* Phone */}
                        <Div
                            id="profileField"
                            style={profileStyle.profileField}
                        >

                            <Label
                                id="phoneLabel"
                                text="Phone Number"
                                style={profileStyle.profileLabel}
                            />

                            <Input
                                id="phoneNumber"
                                name="phoneNumber"
                                type="tel"
                                placeholder="Enter your Phone Number"
                                style={profileStyle.profileInput}
                                value={formik.values.phoneNumber}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.phoneNumber &&
                                formik.errors.phoneNumber && (
                                    <Paragraph
                                        text={formik.errors.phoneNumber}
                                        style={profileStyle.emailError}
                                    />
                                )}

                        </Div>

                    </Div>

                </Div>


                {/* Address Information */}
                <Div
                    id="addressInformation"
                    style={profileStyle.addressInformation}
                >

                    <Heading3
                        id="addressHeading"
                        text="Address Information"
                        style={profileStyle.sectionHeading}
                    />


                    {/* Street Address */}
                    <Div
                        id="addressField"
                        style={profileStyle.addressField}
                    >

                        <Label
                            id="streetAddressLabel"
                            text="Street Address"
                            style={profileStyle.profileLabel}
                        />

                        <textarea
                            id="streetAddress"
                            name="streetAddress"
                            placeholder="Enter your complete address"
                            style={profileStyle.addressTextarea}
                            value={formik.values.streetAddress}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.streetAddress &&
                            formik.errors.streetAddress && (
                                <Paragraph
                                    text={formik.errors.streetAddress}
                                    style={profileStyle.emailError}
                                />
                            )}

                    </Div>


                    {/* PIN Code + City */}
                    <Div
                        id="profileRow"
                        style={profileStyle.profileRow}
                    >

                        {/* PIN Code */}
                        <Div
                            id="profileField"
                            style={profileStyle.profileField}
                        >

                            <Label
                                id="pinCodeLabel"
                                text="PIN Code"
                                style={profileStyle.profileLabel}
                            />

                            <Input
                                id="pinCode"
                                name="pinCode"
                                type="text"
                                placeholder="PIN CODE"
                                style={profileStyle.profileInput}
                                value={formik.values.pinCode}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.pinCode &&
                                formik.errors.pinCode && (
                                    <Paragraph
                                        text={formik.errors.pinCode}
                                        style={profileStyle.emailError}
                                    />
                                )}

                        </Div>


                        {/* City */}
                        <Div
                            id="profileField"
                            style={profileStyle.profileField}
                        >

                            <Label
                                id="cityLabel"
                                text="City"
                                style={profileStyle.profileLabel}
                            />

                            <Input
                                id="city"
                                name="city"
                                type="text"
                                placeholder="Enter your City"
                                style={profileStyle.profileInput}
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.city &&
                                formik.errors.city && (
                                    <Paragraph
                                        text={formik.errors.city}
                                        style={profileStyle.emailError}
                                    />
                                )}

                        </Div>

                    </Div>


                    {/* Country + GitHub */}
                    <Div
                        id="profileRow"
                        style={profileStyle.profileRow}
                    >

                        {/* Country */}
                        <Div
                            id="profileField"
                            style={profileStyle.profileField}
                        >

                            <Label
                                id="countryLabel"
                                text="Country"
                                style={profileStyle.profileLabel}
                            />

                            <Input
                                id="country"
                                name="country"
                                type="text"
                                placeholder="Enter your Country"
                                style={profileStyle.profileInput}
                                value={formik.values.country}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.country &&
                                formik.errors.country && (
                                    <Paragraph
                                        text={formik.errors.country}
                                        style={profileStyle.emailError}
                                    />
                                )}

                        </Div>


                        {/* GitHub */}
                        <Div
                            id="profileField"
                            style={profileStyle.profileField}
                        >

                            <Label
                                id="githubLabel"
                                text="GitHub Profile"
                                style={profileStyle.profileLabel}
                            />

                            <Input
                                id="githubProfile"
                                name="githubProfile"
                                type="url"
                                placeholder="https://github.com/username"
                                style={profileStyle.profileInput}
                                value={formik.values.githubProfile}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.githubProfile && formik.errors.githubProfile && (
                                <Paragraph
                                    text={formik.errors.githubProfile}
                                    style={profileStyle.emailError}
                                />
                            )}

                        </Div>

                    </Div>

                </Div>


                {/* Buttons */}
                <Div
                    id="buttonContainer"
                    style={profileStyle.buttonContainer}
                >

                    <Button
                        id="cancelButton"
                        name="Cancel changes"
                        type="button"
                        style={profileStyle.cancelButton}
                        onClick={() => formik.resetForm()}
                    />

                    <Button
                        id="saveButton"
                        name="Save changes"
                        type="submit"
                        style={profileStyle.saveButton}
                    />


                </Div>
            </form>
        </Card>
    );
}


export default ProfileSettings;