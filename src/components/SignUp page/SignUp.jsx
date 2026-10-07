

import { useContext } from "react";
import { useNavigate } from "react-router";

import useForm from "../../hooks/UseForm";
import SignUpForm from "../../forms/SignUpForm";

import signupStylee from "../../Theme/SignUpPage/SignUp";
import { ThemeContext } from "../../Theme/theme";

function SignUp() {

    const theme = useContext(ThemeContext);

    const signupStyle = signupStylee(theme);

    const navigate = useNavigate();


    const handleSubmit = (values) => {

        console.log("Signup Values:", values);

        alert("Account created successfully!");

        navigate("/login");
    };


    const formik = useForm(handleSubmit);


    return (
        <SignUpForm
            formik={formik}
            signupStyle={signupStyle}
            navigate={navigate}
        />
    );
}

export default SignUp;