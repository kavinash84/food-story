/** @format */

import * as Yup from "yup";
let EMAIL_REGX =
   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
export const LoginSchema = Yup.object({
   username: Yup.string()
      .matches(EMAIL_REGX, "Invalid email address")
      .required("Please enter the email address"),
   password: Yup.string().min(3).max(10).required("Please enter your password"),
});
