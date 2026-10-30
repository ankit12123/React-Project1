
import * as Yup from "yup";
import AllSameValidation from "./AllValidation";

const LoginValidation = Yup.object({
    email: AllSameValidation.email,
    password: AllSameValidation.password,
    rememberMe: AllSameValidation.rememberMe,
});

export default LoginValidation;
