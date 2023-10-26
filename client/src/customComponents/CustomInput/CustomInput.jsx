import React, { memo } from 'react';
import TextField from '@mui/material/TextField';
import { useField } from 'formik';
// import { ICustomInput } from 'interfaces/ICustomInput';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import IconButton from '@mui/material/IconButton';
// import createFormikFieldsComporator from 'create-formik-fields-comparator';

const CustomInput = (
    {
        variant = 'standard',
        margin = 'normal',
        required = false,
        fullWidth = false,
        id = '1',
        label = 'Text',
        name = 'text',
        autoComplete = 'text',
        autoFocus = false,
        type = 'text',
        classes = '',
        placeholder = '',
        maxLength = '5000',
        ...props
    }
) => {
    const [showPassword, setShowPassword] = React.useState(false);
    const [field, meta] = useField(name);
    const errorText = meta.error && meta.touched ? meta.error : '';
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    const getType = () => {
        if (type === 'password' && !showPassword) {
            return 'password';
        }
        return type;
    };
    return (
        <TextField
            multiple
            variant={variant}
            margin={margin}
            required={required}
            fullWidth={fullWidth}
            helpertext={errorText}
            error={!!errorText}
            id={id}
            placeholder={placeholder}
            label={label}
            autoComplete={autoComplete}
            autoFocus={autoFocus}
            type={getType()}
            className={classes}
            inputProps={{
                endadornment: type === 'password' ? (
                    <InputAdornment position="end">
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                            onMouseDown={handleMouseDownPassword}
                            size="large"
                        >
                            {showPassword ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                    </InputAdornment>
                ) : null,
                maxLength
            }}
            {...field}
            {...props}
        />
    );
};

export default memo(CustomInput);
