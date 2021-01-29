export interface ICustomInput {
  variant?: 'standard' | 'filled' | 'outlined',
  margin?: 'none' | 'dense' | 'normal',
  required?: boolean,
  fullWidth?: boolean,
  id?: string,
  label?: string,
  name?: string,
  autoComplete?: string,
  autoFocus?: boolean,
  value?: string | number,
  type?: string,
  classes?: string,
  onChange?: any,
  htmlFor?: string,
  maxLength?: any
}
