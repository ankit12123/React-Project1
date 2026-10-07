

import Div from "../Elementcomponent/Div";
import { Heading1 } from "../Elementcomponent/Header";
import { Input, Label } from "../Elementcomponent/Input";
import Paragraph from "../Elementcomponent/Paragraph";
import Button from "../Elementcomponent/Button";
import Link from "../Elementcomponent/Link";

function SignUpForm({ formik, signupStyle, navigate }) {
    return (
        <form
            onSubmit={formik.handleSubmit}
            style={signupStyle.signupContainer}
            id="signupContainer"
        >

            <Div
                style={signupStyle.signupCard}
                id="signupCard"
            >

                <Heading1
                    style={signupStyle.signupHeader}
                    id="signupHeader"
                    text="Create your account"
                />

                <Paragraph
                    style={signupStyle.signupPara}
                    id="signupPara"
                    text="Sign up to access the practice dashboard."
                />


                {/* FIRST NAME + LAST NAME */}

                <Div
                    style={signupStyle.signupNameBox}
                    id="signupNameBox"
                >

                    {/* First Name */}

                    <Div
                        style={signupStyle.signupField}
                        class="signupField"
                    >

                        <Label
                            style={signupStyle.name}
                            text="First name:"
                            id="Fname"
                            class="name"
                        />

                        <Input
                            style={signupStyle.rowName}
                            type="text"
                            id="FnameInput"
                            name="firstName"
                            class="rowName"
                            placeholder="Enter First Name"
                            value={formik.values.firstName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.firstName &&
                            formik.errors.firstName && (
                                <Paragraph
                                    text={formik.errors.firstName}
                                    style={signupStyle.error}
                                />
                            )}

                    </Div>


                    {/* Last Name */}

                    <Div
                        style={signupStyle.signupField}
                        class="signupField"
                    >

                        <Label
                            style={signupStyle.name}
                            text="Last name:"
                            id="Lname"
                            class="name"
                        />

                        <Input
                            style={signupStyle.rowName}
                            type="text"
                            id="LnameInput"
                            name="lastName"
                            class="rowName"
                            placeholder="Enter Last Name"
                            value={formik.values.lastName}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.lastName &&
                            formik.errors.lastName && (
                                <Paragraph
                                    text={formik.errors.lastName}
                                    style={signupStyle.error}
                                />
                            )}

                    </Div>

                </Div>


                {/* EMAIL */}

                <Label
                    style={signupStyle.signupemail}
                    text="Email Address:"
                    id="signupemail"
                />

                <Input
                    style={signupStyle.signupEmailInput}
                    type="email"
                    id="signupEmailInput"
                    name="email"
                    placeholder="Enter your email address"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />

                {formik.touched.email &&
                    formik.errors.email && (
                        <Paragraph
                            text={formik.errors.email}
                            style={signupStyle.error}
                        />
                    )}


                {/* PASSWORD + CONFIRM PASSWORD */}

                <Div
                    style={signupStyle.signupPasswordBox}
                    id="signupPasswordBox"
                >

                    {/* Password */}

                    <Div
                        style={signupStyle.signupField}
                        class="signupField"
                    >

                        <Label
                            style={signupStyle.labelPassword}
                            text="Password:"
                            id="password"
                            class="labelPassword"
                        />

                        <Input
                            style={signupStyle.rowPassword}
                            type="password"
                            id="passwordInput"
                            name="password"
                            class="rowPassword"
                            placeholder="Enter Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.password &&
                            formik.errors.password && (
                                <Paragraph
                                    text={formik.errors.password}
                                    style={signupStyle.error}
                                />
                            )}

                    </Div>


                    {/* Confirm Password */}

                    <Div
                        style={signupStyle.signupField}
                        class="signupField"
                    >

                        <Label
                            style={signupStyle.labelPassword}
                            text="Confirm Password:"
                            id="confirmPassword"
                            class="labelPassword"
                        />

                        <Input
                            style={signupStyle.rowPassword}
                            type="password"
                            id="confirmPasswordInput"
                            name="confirmPassword"
                            class="rowPassword"
                            placeholder="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        {formik.touched.confirmPassword &&
                            formik.errors.confirmPassword && (
                                <Paragraph
                                    text={formik.errors.confirmPassword}
                                    style={signupStyle.error}
                                />
                            )}

                    </Div>

                </Div>


                {/* PASSWORD MESSAGE */}

                <Paragraph
                    style={signupStyle.signupPasswordPara}
                    id="signupPasswordPara"
                    text="Use at least 8 characters, with letter & number"
                />


                {/* TERMS CHECKBOX */}

                <Div
                    style={signupStyle.signupCheckboxContainer}
                    id="signupCheckboxContainer"
                >

                    <Input
                        style={signupStyle.checkbox}
                        type="checkbox"
                        id="checkbox"
                        name="termsCheckbox"
                        checked={formik.values.termsCheckbox}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />

                    <Paragraph
                        style={signupStyle.terms}
                        id="terms"
                        text="I agree to the Terms"
                    />

                </Div>

                {formik.touched.termsCheckbox &&
                    formik.errors.termsCheckbox && (
                        <Paragraph
                            text={formik.errors.termsCheckbox}
                            style={signupStyle.error}
                        />
                    )}


                {/* CREATE ACCOUNT */}

                <Button
                    style={signupStyle.createAccountBtn}
                    id="CreateAccountBtn"
                    name="Create Account"
                    type="submit"
                    disabled={
                        !formik.values.termsCheckbox
                    }
                />


                {/* FOOTER */}

                <Div
                    style={signupStyle.signupFooterBox}
                    id="signupFooterBox"
                >

                    <Paragraph
                        style={signupStyle.signupFooterText}
                        id="signupFooterText"
                        text="Already have account?"
                    />

                    <Link
                        href=""
                        style={signupStyle.signupFooterLink}
                        id="signupFooterLink"
                        text=" Sign in"
                        onClick={(e) => {
                            e.preventDefault();
                            navigate("/login");
                        }}
                    />

                </Div>

            </Div>

        </form>
    );
}

export default SignUpForm;