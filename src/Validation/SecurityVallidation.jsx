
import * as Yup from "yup";
import AllSameValidation from "./AllValidation";

const SecurityValidation = Yup.object({


    currentPassword: Yup.string()
        .required("Current password is required."),

    password: AllSameValidation.password,

    confirmPassword: AllSameValidation.confirmPassword,
});

export default SecurityValidation;
