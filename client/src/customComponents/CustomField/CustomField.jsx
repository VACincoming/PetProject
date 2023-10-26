import React, { memo } from 'react';
import './styles.scss';
import { Field } from 'formik';
import CustomInput from 'customComponents/CustomInput';

const CustomField = ({
    variant = 'outlined',
    name = '',
    margin = 'none',
    type = 'text',
    required = false,
    id = '',
    key = id,
    fullWidth = false,
    label = '',
    value = '',
    styles = {},
    className = '',
    as = CustomInput,
    ...attributes
}) => (
    <Field
        variant={variant}
        name={name}
        margin={margin}
        type={type}
        required={required}
        id={id}
        key={key}
        fullWidth={fullWidth}
        className={className}
        label={label}
        value={value}
        style={styles}
        as={as}
        {...attributes}
    />
);

export default memo(CustomField);
