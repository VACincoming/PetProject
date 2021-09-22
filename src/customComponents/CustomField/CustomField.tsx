import React, { memo } from 'react';
import './styles.scss';
import { Field } from "formik";
import CustomInput from "customComponents/CustomInput";

const CustomField: React.FC<any> = ({
    variant="outlined",
    name="",
    margin="none",
    type="text",
    required=false,
    id='',
    key=id,
    fullWidth=false,
    label='',
    value='',
    as=CustomInput,
    ...attributes
}:any) => {
    return (
        <Field
            variant={variant}
            name={name}
            margin={margin}
            type={type}
            required={required}
            id={id}
            key={key}
            fullWidth={fullWidth}
            label={label}
            value={value}
            as={as} 
            {...attributes}
        />
    );
}

export default memo(CustomField);