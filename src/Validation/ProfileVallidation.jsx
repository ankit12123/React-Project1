
import * as Yup from "yup";
import AllSameValidation from "./AllValidation";

const ProfileValidation = Yup.object({
    fullName: Yup.string()
        .trim()
        .required("Full name is required.")
        .min(3, "Name must contain at least 3 characters."),

    dateOfBirth: Yup.date()
        .max(new Date(), "Date of birth cannot be in the future.")
        .required("Date of birth is required."),

    emailAddress: AllSameValidation.email,

    phoneNumber: Yup.string()
        .matches(
            /^[6-9]\d{9}$/,
            "Enter a valid 10-digit phone number."
        )
        .required("Phone number is required."),

    streetAddress: Yup.string()
        .required("Street address is required."),

    pinCode: Yup.string()
        .matches(/^\d{6}$/, "PIN code must contain 6 digits.")
        .required("PIN code is required."),

    city: Yup.string()
        .required("City is required."),

    country: Yup.string()
        .required("Country is required."),

    githubProfile: Yup.string()
        .url("Enter a valid GitHub profile URL.")
        .notRequired(),
});

export default ProfileValidation;
