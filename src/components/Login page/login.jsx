import Button from "../../Elementcomponent/Button";
import Card from "../../Elementcomponent/Card";
import Div from "../../Elementcomponent/Div";
import { Heading2 } from "../../Elementcomponent/Header";
import { Input, Label } from "../../Elementcomponent/Input";
import Link from "../../Elementcomponent/Link";
import Paragraph from "../../Elementcomponent/Paragraph";

import loginStyle from "../../Theme/login/login.jsx";

import { useNavigate } from "react-router";

function LoginCard() {
    const navigate = useNavigate();
    return (
        <>
            <Card style={loginStyle.loginContainer}  id="logincontainer">

                <Div style={loginStyle.loginCard}  id="loginCard">
                    <Heading2 style={loginStyle.loginHeader}  id="loginHeader" text="Welcome Back" />
                    <Paragraph style={loginStyle.loginPara} id="loginPara" text="Sign in to continue to your dashboard" />


                    <Label style={loginStyle.loginLabel}  text="Email Address:" id="loginEmail" class="loginLabel" />
                    <Input  style={loginStyle.loginInput} type="email" id="loginEmail" class="loginInput"  placeholder="Enter the Email address" />

                    <Label style={loginStyle.loginLabel}  text="Password: " id="loginPassword" class="loginLabel" />
                    <Input style={loginStyle.loginInput} type="password" id="loginPassword" class="loginInput"  placeholder="Enter the password"/>

                    <Paragraph style={loginStyle.loginPasswordCondition}  id="loginPasswordCondition" text="Password must be at least 6 characters long." />

                    <Div style={loginStyle.checkboxContainer}  id="checkboxContainer">
                        <Input type="checkbox" id="checkbox" />
                        <Paragraph style={loginStyle.remember} id="remember" text="Remember me for 30 days" />
                        <Link href="" style={loginStyle.forgotPassword} id="Forgotpassword" text="Forgot password?" />

                    </Div>
                    <Button style={loginStyle.signInBtn} id="SignInBtn" name="Sign In" />

                    <Div style={loginStyle.loginFooterBox}  id="loginFooterBox">
                        <Paragraph id="loginFooterText" text="New to WebTech Practice?" />
                        <Link style={loginStyle.loginFooterLink}  href="" id="loginFooterLink" text=" Create an account" onClick={() => navigate("/SignUp")} />
                    </Div>
                </Div>
            </Card>
        </>
    );
}
export default LoginCard;
