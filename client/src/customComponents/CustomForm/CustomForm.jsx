import React, { memo } from 'react';
import './styles.scss';
import { Formik } from 'formik';

const CustomForm = ({
    validateOnChange = false,
    initialValues = {},
    onSubmit = () => {},
    children,
    ...attributes
}) => (
    <Formik
        validateOnChange={validateOnChange}
        initialValues={initialValues}
        onSubmit={(data) => onSubmit(data)}
        {...attributes}
    >
        {children}
    </Formik>
);

export default memo(CustomForm);
