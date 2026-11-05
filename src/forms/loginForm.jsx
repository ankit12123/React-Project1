
import Card from "../Elementcomponent/Card";
import Div from "../Elementcomponent/Div";
import { Heading2 } from "../Elementcomponent/Header";
import { Input, Label } from "../Elementcomponent/Input";
import Link from "../Elementcomponent/Link";
import Paragraph from "../Elementcomponent/Paragraph";
import Button from "../Elementcomponent/Button";

function LoginForm({ formik, loginStyle, navigate }) {

    return (
        <form
            style={loginStyle.loginContainer}
            id="loginForm"
            onSubmit={formik.handleSubmit}
        >
            <Card
                style={loginStyle.loginCard}
                id="loginCard"
            >

                <Heading2
                    style={loginStyle.loginHeader}
                    id="loginHeader"
                    text="Welcome Back"
                />

                <Paragraph
                    style={loginStyle.loginPara}
                    id="loginPara"
                    text="Sign in to continue to your dashboard"
                />


                {/* EMAIL */}

                <Label
                    style={loginStyle.loginLabel}
                    text="Email Address:"
                    id="loginEmailLabel"
                    class="loginLabel"
                />

                <Input
                    style={loginStyle.loginInput}
                    type="email"
                    id="loginEmail"
                    name="email"
                    class="loginInput"
                    placeholder="Enter the Email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.touched.email && formik.errors.email && (
                    <Paragraph
                        text={formik.errors.email}
                        style={loginStyle.emailError}
                    />
                )}


                {/* PASSWORD */}

                <Label
                    style={loginStyle.loginLabel}
                    text="Password:"
                    id="loginPasswordLabel"
                    class="loginLabel"
                />

                <Input
                    style={loginStyle.loginInput}
                    type="password"
                    id="loginPassword"
                    name="password"
                    class="loginInput"
                    placeholder="Enter the password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.touched.password && formik.errors.password && (
                    <Paragraph
                        text={formik.errors.password}
                        style={loginStyle.emailError}
                    />
                )}


                <Paragraph
                    style={loginStyle.loginPasswordCondition}
                    id="loginPasswordCondition"
                    text="Password must be at least 6 characters long."
                />


                {/* REMEMBER ME + FORGOT PASSWORD */}

                <Div
                    style={loginStyle.checkboxContainer}
                    id="checkboxContainer"
                >

                    <Input
                        type="checkbox"
                        id="checkbox"
                        name="rememberMe"
                        checked={formik.values.rememberMe}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <Paragraph
                        style={loginStyle.remember}
                        id="remember"
                        text="Remember me for 30 days"
                    />

                    <Link
                        href=""
                        style={loginStyle.forgotPassword}
                        id="Forgotpassword"
                        text="Forgot password?"
                        onClick={(e) => e.preventDefault()}
                    />
                    

                </Div>

                {/* CHECKBOX ERROR MESSAGE */}
                    {formik.touched.rememberMe && formik.errors.rememberMe && (
                        <Paragraph
                            id="rememberMeError"
                            style={loginStyle.emailError}
                            text={formik.errors.rememberMe}
                        />
                    )}


                {/* SIGN IN BUTTON */}

                <Button
                    style={loginStyle.signInBtn}
                    id="SignInBtn"
                    name="Sign In"
                    type="submit"
                   disabled={formik.isSubmitting}
                />


                {/* FOOTER */}

                <Div
                    style={loginStyle.loginFooterBox}
                    id="loginFooterBox"
                >

                    <Paragraph
                        id="loginFooterText"
                        style={loginStyle.loginFooterText}
                        text="New to WebTech Practice?"
                    />

                    <Link
                        style={loginStyle.loginFooterLink}
                        href=""
                        id="loginFooterLink"
                        text="Create an account"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/signUp");
                        }}
                    />

                </Div>

            </Card>
        </form>
    );
}

export default LoginForm;
