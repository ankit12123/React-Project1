import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import { Heading1 } from "../../Elementcomponent/Header";
import { Input, Label } from "../../Elementcomponent/Input";
import Paragraph from "../../Elementcomponent/Paragraph";

import Button from "../../Elementcomponent/Button";
import Link from "../../Elementcomponent/Link";

import '../../Theme/SignUpPage/SignUp.css';

function SignUp() {
    return (

        <>
            <Card id="signupContainer">
                <Div id="signupCard">
                    <Heading1 id="signupHeader" text="Create your account" />
                    <Paragraph id="signupPara" text="Sign up to access the practice dashboard." />

                    <Div id="signupNameBox">
                        <Div class="signupField">
                            <Label text="First name:" id="Fname" class="name" />
                            <Input type="text" id="FnameInput" class="rowName" placeholder="Enter First Name" />
                        </Div>

                        <Div class="signupField">
                            <Label text="Last name:" id="Lname" class="name" />
                            <Input type="text" id="LnameInput" class="rowName" placeholder="Enter Last Name" />
                        </Div>
                    </Div>

                    <Label text="Email Address:" id="signupemail" />
                    <Input type="email" id="signupEmailInput" placeholder="Enter your email address" />

                    <Div id="signupPasswordBox">
                        <Div class="signupField">
                            <Label text="Password:" id="password" class="labelPassword" />
                            <Input type="text" id="passwordInput" class="rowPassword" placeholder="Enter Password" />
                        </Div>
                        <Div class="signupField">
                            <Label text="Confirm Password:" id="confirmPassword" class="labelPassword" />
                            <Input type="text" id="confirmPasswordInput" class="rowPassword" placeholder="Confirm Passowrd" />
                        </Div>
                    </Div>

                    <Paragraph id="signupPasswordPara" text="Use at least 8 characters, with letter & number" />

                    <Div id="signupCheckboxContainer">
                        <Input type="checkbox" id="checkbox" />
                        <Paragraph id="terms" text="I agree to the Terms" />
                    </Div>
                    <Button id="CreateAccountBtn" name="Create Account" />

                    <Div id="signupFooterBox">
                        <Paragraph id="signupFooterText" text="Already have account?" />
                        <Link href="" id="signupFooterLink" text=" Sign in" />
                    </Div>

                </Div>

            </Card>
        </>
    );
}
export default SignUp;