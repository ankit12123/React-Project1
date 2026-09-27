import * as Yup from "yup";

const SignUpValidation = Yup.object({

    firstName: Yup.string()
        .trim()
        .min(2, "First name must be at least 2 characters.")
        .required("First name is required."),

    lastName: Yup.string()
        .trim()
        .min(2, "Last name must be at least 2 characters.")
        .required("Last name is required."),

    email: Yup.string()
        .trim()
        .email("Enter a valid email address.")
        .required("Email is required."),

    password: Yup.string()
        .required("Password is required.")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#]).{8,}$/,
            "Password must be at least 8 characters with uppercase, lowercase, number & special character."
        ),

    confirmPassword: Yup.string()
        .required("Confirm password is required.")
        .oneOf(
            [Yup.ref("password")],
            "Passwords do not match."
        ),

    terms: Yup.boolean()
        .oneOf(
            [true],
            "Please agree to the Terms."
        )

});

export default SignUpValidation;