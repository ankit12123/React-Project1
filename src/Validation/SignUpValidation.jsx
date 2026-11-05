
import * as Yup from "yup";
import AllSameValidation from "./AllValidation";

const SignUpValidation = Yup.object({
    // First Name
    firstName: Yup.string()
        .matches(
            /^[a-zA-Z\s-]{2,}$/,
            "Enter a valid first name"
        )
        .required("First name is required"),

    // Last Name
    lastName: Yup.string()
        .matches(
            /^[a-zA-Z\s-]{2,}$/,
            "Enter a valid last name"
        )
        .required("Last name is required"),

    
    email: AllSameValidation.email,

    
    password: AllSameValidation.password,

    confirmPassword : AllSameValidation.confirmPassword,

   
    termsCheckbox: AllSameValidation.termsCheckbox,
});

export default SignUpValidation;
