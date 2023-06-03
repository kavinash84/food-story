/** @format */

import axios from "axios";
import * as Yup from "yup";

const EMAIL_REGX =
   /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const phoneRegExp =
   /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
export const UserAddressSchema = Yup.object({
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

   telephone: Yup.string()
      .required("Please enter the mobile number")
      .matches(phoneRegExp, "Phone number is not valid")
      .min(10, "too short")
      .max(10, "too long"),

   postcode: Yup.string()
      .required("Please enter the pincode")
      .matches(/^[0-9]+$/, "Must be only digits")
      .min(5, "Must be exactly 5 digits")
      .max(6, "Must be exactly 6 digits"),

   email: Yup.string()
      .matches(EMAIL_REGX, "Invalid email address")
      .required("Please enter the email address"),

   street: Yup.string()
      .min(10)
      .max(200)
      .matches(/[^A-Za-z0-9]+/, "Please enter address")
      .required("Please enter the flat / house / building  name "),

   city: Yup.string()
      .min(3)
      .max(100)
      .matches(/^[A-Za-z ]*$/, "Please enter valid city")
      .required("Please enter the city name "),

   region: Yup.object({
      region:Yup.string()
      .min(3)
      .max(100)
      .matches(/^[A-Za-z ]*$/, "Please enter valid state")
      .required("Please enter the state name ")
      // .test('checkvalidstate', 'Please enter valid state name', async value =>{
      //    const {data} = await axios({
      //       url: "https://beta.foodstories.store/rest/V1/customer/addresses/get-regions",
      //       method: "post",
      //       data: {
      //         parameters: {
      //           country_code: "IN",
      //           region_name: value,
      //         },
      //       },
      //     })

      //     if(data[0]?.region_id){
      //       return true
      //    }else{
      //       setFieldError("region.region","Please enter valid state");
      //       return false
      //    }

      // }),
   })
   
});
