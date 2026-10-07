import { useFormik } from "formik";
import SignUpValidation from "../Validation/SignUpValidation";

function useForm(onSubmit) {
    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmPassword: "",
            termsCheckbox: false,
        },

        validationSchema: SignUpValidation,

        onSubmit: (values) => {
            onSubmit(values);
        },
    });

    return formik;
}

export default useForm;