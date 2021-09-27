import React, { memo } from 'react';
import { TextareaAutosize } from '@material-ui/core';
import { useField } from "formik";

const CustomTextArea = memo((
  {
    maxRows=3,
    ariaLabel,
    placeholder='',
    required=false,
    id='',
    name='',
    className = ''
}) => {
    const [field] = useField(name);
    return (
        <TextareaAutosize 
            maxRows={maxRows}
            id={id}
            name={name}
            required={required}
            aria-label={ariaLabel}
            placeholder={placeholder}
            className={className}
            {...field}
        />
  )}
);

export default CustomTextArea;