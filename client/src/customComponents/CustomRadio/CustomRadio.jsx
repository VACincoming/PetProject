import React from 'react';
import {
    Radio,
    FormControlLabel,
} from '@mui/material';
import { useField, FieldAttributes } from 'formik';

const CustomRadio = ({ label, ...props }) => {
    const [field] = useField(props);
    return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export default CustomRadio;
