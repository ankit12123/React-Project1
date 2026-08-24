import Button from "../../Elementcomponent/Button";
import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import { Heading2 } from "../../Elementcomponent/Header";
import { Input, Label } from "../../Elementcomponent/Input";
import Link from "../../Elementcomponent/Link";
import Paragraph from "../../Elementcomponent/Paragraph";

import   '../../Theme/login/login.css';

function LoginCard() {
    return (
        <>
            <Card id="logincard">

                <Div id="logincontainer">
                    <Heading2 id="loginHeader" text="Welcome Back" />
                    <Paragraph id="loginPara" text="Sign in to continue to your dashboard" />


                    <Label text="Email Address:" id="loginEmail" class="loginLabel" />
                    <Input type="email" id="loginEmail" class="loginInput"  placeholder="Enter the Email address" />

                    <Label text="Password: " id="loginPassword" class="loginLabel" />
                    <Input type="password" id="loginPassword" class="loginInput"  placeholder="Enter the password"/>

                    <Paragraph id="loginPasswordCondition" text="Password must be at least 6 characters long." />

                    <Div id="checkboxContainer">
                        <Input type="checkbox" id="checkbox" />
                        <Paragraph id="remember" text="Remember me for 30 days" />
                        <Link href="" id="Forgotpassword" text="Forgot password?" />

                    </Div>
                    <Button id="SignInBtn" name="Sign In" />

                    <Div id="loginFooterBox">
                        <Paragraph id="loginFooterText" text="New to WebTech Practice?" />
                        <Link href="" id="loginFooterLink" text=" Create an account" />
                    </Div>
                </Div>
            </Card>
        </>
    );
}
export default LoginCard;


{/* <Div id="loginNameBox">
            <Label text="First name" for="Fname" id="Fname" class="Fname"/>
            <Input type="text" id="Fname" class="Fname" />

            <Label text="Last name" for="Lname" id="Lname" class="Lname" />
            <Input type="text" id="Lname" class="Lname" />
           </Div> */}