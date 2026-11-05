


import { useContext } from "react";
import { useNavigate } from "react-router";

import useForm from "../../hooks/UseForm.jsx";
import LoginForm from "../../forms/loginForm.jsx";

import LoginValidation from "../../Validation/loginValidation.jsx";
import loginStylee from "../../Theme/login/login.jsx";

import { ThemeContext } from "../../Theme/theme.jsx";

function LoginCard() {

    const theme = useContext(ThemeContext);

    const loginStyle = loginStylee(theme);

    const navigate = useNavigate();


    const initialValues = {
        email: "",
        password: "",
        rememberMe: false,
    };


    const handleLogin = (values) => {

        console.log("Login Values:", values);

        alert("Login successful!");

        navigate("/dashboard");
    };


    const formik = useForm(
        initialValues,
        LoginValidation,
        handleLogin
    );


    return (
        <LoginForm
            formik={formik}
            loginStyle={loginStyle}
            navigate={navigate}
        />
    );
}

export default LoginCard;

