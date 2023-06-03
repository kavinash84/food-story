/** @format */

import * as Yup from "yup";

const phoneRegExp =
   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const EMAIL_REGX =
   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const RegisterSchema = Yup.object({
   firstname: Yup.string()
      .min(2)
      .max(25)
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("Please enter the first name "),
   lastname: Yup.string()
      .min(2)
      .max(25)
      .matches(/^[A-Za-z ]*$/, "Please enter valid name")
      .required("Please enter the last name "),

   password: Yup.string()
      .min(8)
      .max(25)
      .matches(
         /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
         "Minimum 8 characters, at least one upper & lower case, one digit and one special character"
      )
      .required("Please create password "),

   gender: Yup.string().required("Please select the gender"),

   email: Yup.string()
      .matches(EMAIL_REGX, "Invalid email address")
      .required("Please enter the email address"),

   dob: Yup.date()
      .nullable()
      .test("dob", "Age should be greater than 18 yrs", (value, ctx) => {
         const dob = new Date(value);
         const validDate = new Date();
         const valid = validDate.getFullYear() - dob.getFullYear() >= 18;
         return !valid ? ctx.createError() : valid;
      })
      .required("Please select Date of birth"),

   phone: Yup.string()
      .required("Please enter the mobile number")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),
});
