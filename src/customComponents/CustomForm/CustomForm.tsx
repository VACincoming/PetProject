import React, { memo } from 'react';
import './styles.scss';
import { Formik } from "formik";

const CustomForm: React.FC<any> = ({
    validateOnChange = false,
    initialValues = {},
    onSubmit = () => {},
    children,
    ...attributes
}:any) => {
    return (
        <Formik
            validateOnChange={validateOnChange}
            initialValues={initialValues}
            onSubmit={(data:any) => onSubmit(data)}
            {...attributes}
        >
            {children}
        </Formik>
    );
}

export default memo(CustomForm);