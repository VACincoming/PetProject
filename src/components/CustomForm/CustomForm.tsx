import React, { memo } from 'react';
import './styles.scss';
import { Formik } from "formik";

const CustomForm: React.FC<any> = ({
    validateOnChange,
    initialValues={},
    validationSchema={},
    onSubmit = () => {},
    children
}:any) => {
    return (
        <Formik
            validateOnChange={validateOnChange}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data:any) => onSubmit(data)}
        >
            {children}
        </Formik>
    );
}

export default memo(CustomForm);