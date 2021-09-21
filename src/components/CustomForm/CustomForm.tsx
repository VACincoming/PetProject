import React, { memo } from 'react';
import './styles.scss';
import { Formik } from "formik";

const CustomForm: React.FC<any> = ({
    validateOnChange,
    initialValues={},
    validationSchema={},
    onSubmit = () => {},
    children
}) => {
    return (
        <Formik
            validateOnChange={validateOnChange}
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(data) => onSubmit(data)}
        >
            {children}
        </Formik>
    );
}

export default memo(CustomForm);