import React from 'react';
import {
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import { useField, FieldAttributes } from "formik";

type MyRadioProps = { label: string } & FieldAttributes<{}>;

const CustomRadio: React.FC<MyRadioProps> = ({ label, ...props }) => {
  const [field] = useField<{}>(props);
  return <FormControlLabel {...field} control={<Radio />} label={label} />;
};

export default CustomRadio;