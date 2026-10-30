

import * as Yup from "yup";

const AllSameValidation = {
    // Common Email Validation
    email: Yup.string()
        .email("Enter a valid email address.")
        .matches(
            /^[A-Za-z0-9._%+-]+@(gmail\.com|yahoo\.com)$/i,
            "Wrong email address extension."
        )
        .required("Email is required."),

    // Common Password Validation
    password: Yup.string()
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/,
            "Password must be at least 8 characters with uppercase, lowercase, number & special character."
        )
        .required("Password is required."),
        
        confirmPassword: Yup.string()
        .oneOf(
            [Yup.ref("password")],
            "Passwords do not match"
        )
        .required("Please confirm your password"),

    // Signup Terms Checkbox
    termsCheckbox: Yup.boolean()
        .oneOf([true], "Please select the checkbox.")
        .required("Please select the checkbox."),

    // Login Remember Me Checkbox
    rememberMe: Yup.boolean()
        .oneOf([true], "Please select the checkbox.")
        .required("Please select the checkbox."),
};

export default AllSameValidation;
