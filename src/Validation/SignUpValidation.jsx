import * as Yup from "yup";

const SignUpValidation = Yup.object({

    firstName: Yup.string()
        .matches(
            /^[a-zA-Z\s-]{2,}$/,
            "Enter a valid first name"
        )
        .required("First name is required"),


    lastName: Yup.string()
        .matches(
            /^[a-zA-Z\s-]{2,}$/,
            "Enter a valid last name"
        )
        .required("Last name is required"),


    email: Yup.string()
        .email("Enter a valid email address")
        .required("Email is required"),


    password: Yup.string()
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d).{8,}$/,
            "Password must contain letters and numbers and be at least 8 characters"
        )
        .required("Password is required"),


    confirmPassword: Yup.string()
        .oneOf(
            [Yup.ref("password")],
            "Passwords do not match"
        )
        .required("Please confirm your password"),


    termsCheckbox: Yup.boolean()
        .oneOf(
            [true],
            "You must accept the terms"
        )
        .required("You must accept the terms"),

});

export default SignUpValidation;