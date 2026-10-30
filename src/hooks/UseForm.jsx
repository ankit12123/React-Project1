
import { useFormik } from "formik";

function useForm(initialValues, validationSchema, onSubmit) {
    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit,
    });

    return formik;
}

export default useForm;

