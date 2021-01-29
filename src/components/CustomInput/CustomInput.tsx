import React from 'react';
import TextField from '@material-ui/core/TextField';
import { useField } from "formik";
// import { ICustomInput } from 'interfaces/ICustomInput';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
// import createFormikFieldsComporator from 'create-formik-fields-comparator';

const CustomInput: React.FC<any> = ({
    variant="standard",
    margin="normal",
    required=false,
    fullWidth=false,
    id="1",
    label="Text",
    name="text",
    autoComplete="text",
    autoFocus=false,
    type='text',
    value='',
    classes='',
    placeholder='',
    maxLength="5000",
    ...props
  }) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [field, meta] = useField<{}>(name)
    const errorText = meta.error && meta.touched ? meta.error : '';
    const handleMouseDownPassword = (event:any) => {
      event.preventDefault();
    };
    const getType = () => {
      if (type === 'password' && !showPassword) {
        return 'password'
      }
      return 'text'
    }
  return (
    <TextField
      inputProps={{
        maxLength
      }}
      variant={variant}
      margin={margin}
      required={required}
      fullWidth={fullWidth}
      helperText={errorText}
      error={!!errorText}
      id={id}
      placeholder={placeholder}
      label={label}
      autoComplete={autoComplete}
      autoFocus={autoFocus}
      type={getType()}
      className={classes}
      InputProps={{
        endAdornment: type === 'password' ? <InputAdornment position="end">
          <IconButton
            aria-label="toggle password visibility"
            onClick={() => setShowPassword(!showPassword)}
            onMouseDown={handleMouseDownPassword}
          >
            {showPassword ? <Visibility /> : <VisibilityOff />}
          </IconButton> 
      </InputAdornment> : null,
      }}
      {...field}
    />
  )
};

export default CustomInput;