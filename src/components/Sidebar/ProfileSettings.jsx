import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import Button from "../../Elementcomponent/Button";
import {Heading1,Heading2, Heading3 } from "../../Elementcomponent/Header";
import { Input, Label } from "../../Elementcomponent/Input";

import profileStyle from "../../Theme/Sidebar/Profile";


function ProfileSettings() {

    return (

        <Card
            id="profileCard"
            style={profileStyle.profileCard}
        >

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
                            type="text"
                            value="Demo User"
                             placeholder="Enter your Name"
                            style={profileStyle.profileInput}
                        />

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
                            type="date"
                             placeholder="Enter your Date of birth (DOB)"
                            style={profileStyle.profileInput}
                        />

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
                            type="email"
                            value="demo@gmail.com"
                             placeholder="Enter your Email address"
                            style={profileStyle.profileInput}
                        />

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
                            type="tel"
                            value="+91 9876543210"
                             placeholder="Enter your Phone Number"
                            style={profileStyle.profileInput}
                        />

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
                        placeholder="Enter your complete address"
                        style={profileStyle.addressTextarea}
                    />

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
                            type="text"
                            value="123456"
                             placeholder=" PIN CODE"
                            style={profileStyle.profileInput}
                        />

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
                            type="text"
                            value="Ranchi"
                             placeholder="Enter your City"
                            style={profileStyle.profileInput}
                        />

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
                            type="text"
                            value="India"
                             placeholder="Enter your Country"
                            style={profileStyle.profileInput}
                        />

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
                            type="url"
                            placeholder="https://github.com/username"
                            style={profileStyle.profileInput}
                        />

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
                    class="cancelButton"
                    name="Cancel changes"
                    style={profileStyle.cancelButton}
                />

                <Button
                    id="saveButton"
                    class="saveButton"
                    name="Save changes"
                    style={profileStyle.saveButton}
                />

            </Div>

        </Card>
    );
}


export default ProfileSettings;