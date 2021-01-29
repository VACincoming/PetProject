import React from 'react';
import Button from '@material-ui/core/Button';
import { ICustomButton } from 'interfaces/ICustomButton';

const CustomButton = ({
    variant="outlined",
    color="primary",
    classes='',
    onClick,
    children,
    type="submit",
    fullWidth=false,
    disabled,
  } : ICustomButton) => {
  return (
    <Button
      variant={variant}
      color={color}
      className={classes}
      onClick={onClick}
      type={type}
      fullWidth={fullWidth}
      disabled={disabled}
    >
      { children }
    </Button>
  )
}

export default CustomButton;
