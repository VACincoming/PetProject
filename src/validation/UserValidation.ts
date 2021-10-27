import * as yup from 'yup' 

// const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
export const registrationSchema = yup.object({
  email: yup
    .string()
    .required("This field is required")
    .email('Email is not valid'),
  password: yup
    .string()
    .required("This field is required")
    .min(6, 'Password should be more than 6 characters'),
  repeatPassword: yup
    .string()
    .required("This field is required")
    .test('passwords-match', 'Passwords does not match', function(value) {
      return this.parent.password === value;
    }),
  // firstName: yup
  //   .string()
  //   .required("This field is required")
  //   .min(2, "Too Short!")
  //   .max(25, "Too Long!"),
  // lastName: yup
  //   .string()
  //   .required("This field is required")
  //   .min(2, "Too Short!")
  //   .max(25, "Too Long!"),
  // phone: yup
  //   .string()
  //   .required("This field is required")
  //   .min(12, "Too Short!")
  //   .max(12, "Too Long!")
  //   .matches(phoneRegExp, 'Phone number is not valid'),
  // city: yup
  //   .string()
  //   .required("This field is required")
  //   .min(2, "Too Short!"),
  // country: yup
  //   .string()
  //   .required("This field is required")
  //   .min(2, "Too Short!")
})

export const loginSchema = yup.object({
  email: yup
    .string()
    .required("This field is required")
    .email('Email is not valid'),
  password: yup
    .string()
    .required("This field is required")
    .min(3, 'Password should be more than 6 characters'),
})