import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import { Heading1 } from "../../Elementcomponent/Header";
import { Input, Label } from "../../Elementcomponent/Input";
import Paragraph from "../../Elementcomponent/Paragraph";

import Button from "../../Elementcomponent/Button";
import Link from "../../Elementcomponent/Link";

import signupStyle from "../../Theme/SignUpPage/SignUp";

import { useNavigate } from "react-router";

function SignUp() {
    const navigate = useNavigate();
    return (

        <>
            <Card style={signupStyle.signupContainer}  id="signupContainer">
                <Div style={signupStyle.signupCard}  id="signupCard">
                    <Heading1 style={signupStyle.signupHeader}  id="signupHeader" text="Create your account" />
                    <Paragraph  style={signupStyle.signupPara} id="signupPara" text="Sign up to access the practice dashboard." />

                    <Div style={signupStyle.signupNameBox} id="signupNameBox">
                        <Div style={signupStyle.signupField}  class="signupField">
                            <Label  style={signupStyle.name} text="First name:" id="Fname" class="name" />
                            <Input  style={signupStyle.rowName} type="text" id="FnameInput" class="rowName" placeholder="Enter First Name" />
                        </Div>

                        <Div style={signupStyle.signupField} class="signupField">
                            <Label  style={signupStyle.name} text="Last name:" id="Lname" class="name" />
                            <Input style={signupStyle.rowName} type="text" id="LnameInput" class="rowName" placeholder="Enter Last Name" />
                        </Div>
                    </Div>

                    <Label style={signupStyle.signupemail}  text="Email Address:" id="signupemail" />
                    <Input style={signupStyle.signupEmailInput} type="email" id="signupEmailInput" placeholder="Enter your email address" />

                    <Div style={signupStyle.signupPasswordBox}  id="signupPasswordBox">
                        <Div style={signupStyle.signupField} class="signupField">
                            <Label style={signupStyle.labelPassword} text="Password:" id="password" class="labelPassword" />
                            <Input style={signupStyle.rowPassword} type="text" id="passwordInput" class="rowPassword" placeholder="Enter Password" />
                        </Div>
                        <Div style={signupStyle.signupField}  class="signupField">
                            <Label style={signupStyle.labelPassword} text="Confirm Password:" id="confirmPassword" class="labelPassword" />
                            <Input style={signupStyle.rowPassword} type="text" id="confirmPasswordInput" class="rowPassword" placeholder="Confirm Passowrd" />
                        </Div>
                    </Div>

                    <Paragraph style={signupStyle.signupPasswordPara} id="signupPasswordPara" text="Use at least 8 characters, with letter & number" />

                    <Div style={signupStyle.signupCheckboxContainer} id="signupCheckboxContainer">
                        <Input style={signupStyle.checkbox}  type="checkbox" id="checkbox" />
                        <Paragraph style={signupStyle.terms} id="terms" text="I agree to the Terms" />
                    </Div>
                    <Button   style={signupStyle.createAccountBtn} id="CreateAccountBtn" name="Create Account" />

                    <Div  style={signupStyle.signupFooterBox}  id="signupFooterBox">
                        <Paragraph  style={signupStyle.signupFooterText}  id="signupFooterText" text="Already have account?" />
                        <Link href=""  style={signupStyle.signupFooterLink} id="signupFooterLink" text=" Sign in" onClick={() => navigate("/login")} />
                    </Div>

                </Div>

            </Card>
        </>
    );
}
export default SignUp;