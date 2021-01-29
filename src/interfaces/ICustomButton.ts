import { ButtonHTMLAttributes } from 'react';

export interface ICustomButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: any,
  color?: any,
  onClick?: any,
  classes?: string,
  children?: React.ReactNode,
  type?: 'submit' | 'reset' | 'button',
  fullWidth?: boolean,
  disabled?: boolean,
}