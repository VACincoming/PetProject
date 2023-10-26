import React from 'react';
import Button from '@mui/material/Button';

const CustomButton = ({
    variant = 'outlined',
    color = 'primary',
    classes = '',
    onClick,
    children,
    type = 'submit',
    fullWidth = false,
    text = '',
    disabled,
}) => (
    <Button
        variant={variant}
        color={color}
        className={classes}
        onClick={onClick}
        type={type}
        fullWidth={fullWidth}
        disabled={disabled}
    >
        { text || children }
    </Button>
);

export default CustomButton;
