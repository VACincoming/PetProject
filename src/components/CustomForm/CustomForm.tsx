import React, { memo } from 'react';
import './styles.scss';
import { 
    Formik,
    Field,
    FastField,
    Form
} from "formik";

const CustomForm: React.FC<any> = ({
    validateOnChange,
    initialValues={},
    validationSchema={},
    onSubmit = () => {},
}) => {
    return (
        <Formik
            validateOnChange={validateOnChange}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data) => onSubmit(data)}
        >

        </Formik>
    );
}

export default memo(CustomForm);