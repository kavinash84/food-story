/** @format */

import React, { useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import { UserAddressSchema } from "./schemas/userAddressValidation";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SomeContext } from "../../App";

const initialValues = {
   firstname: "",
   lastname: "",
   phone: "",
   pincode: "",
   flat: "",
   city: "",
   state: "",
   id: "",
};
const UserProfileCreateAddress = (props) => {
   const { initialValues, setInitialValues } = useContext(SomeContext);
   // console.log("create conterxt", initialValues);

   const [isLoading, setIsLoading] = useState(false);
   const [closeModal, setCloseModal] = useState(false);
   const history = useNavigate();

   const {
      values,
      errors,
      handleBlur,
      handleChange,
      handleSubmit,
      touched,
      resetForm,
   } = useFormik({
      initialValues: initialValues,
      validationSchema: UserAddressSchema,
      onSubmit: (values) => {
         console.log("values", values);
         setIsLoading(true);

         // const payload = {
         //    customer: {
         //       email: values.email,
         //       firstname: values.firstname,
         //       lastname: values.lastname,
         //       gender: parseInt(values.gender),
         //       dob: values.dob,
         //       website_id: values.website_id,
         //       addresses: [
         //          {
         //             defaultShipping: true,
         //             defaultBilling: true,
         //             firstname: values.firstname,
         //             lastname: values.lastname,
         //             region: {
         //                regionCode: values.region.region_code,
         //                region: values.region.region,
         //                regionId: values.region.region_id,
         //             },
         //             postcode: values.postcode,
         //             street: values.street,

         //             city: values.city,
         //             countryId: values.country_id,
         //             telephone: values.telephone,
         //          },
         //       ],
         //    },
         //    password: localStorage.getItem("user-password"),
         // };

         console.log("payload", payload);

         // let result = await fetch(
         //    "https://beta.foodstories.store/rest/V1/customers",
         //    {
         //       method: "POST",
         //       headers: {
         //          "Content-Type": "application/json",
         //       },
         //       body: JSON.stringify(payload),
         //    }
         // ).catch((error) => {
         //    console.log("error", error.message);
         // });
         // console.log("create address res", JSON.stringify(result));
         // if (result.status === 200) {
         //    setSuccessMsg(toast.success("Address Created Successfully"));
         //    localStorage.setItem("register-info", JSON.stringify(result));
         //    history("/login");
         // } else {
         //    console.log("result", result);
         //    setError(toast.error(result.message));
         // }
         // result = await result.json();

         // setIsLoading(false);
         // setRegisterInfo(
         //    localStorage.setItem(
         //       "register-info",
         //       JSON.stringify(values.username)
         //    )
         // );
         // setError(toast.error(result.message));
      },
   });

   return (
      <div className='container w-75'>
         <h5
            className='mt-5 mb-3'
            style={{
               color: "white",
               background: "#a0383f",
               padding: "20px",
            }}>
            Add a new address
         </h5>

         <div className='page-content modalWrapper'>
            <div className='form-v10-content'>
               <form
                  className='form-detail  pt-4'
                  action='#'
                  method='post'
                  id='myform'
                  onSubmit={handleSubmit}>
                  <div className='form-left'>
                     <div className='form-group'>
                        <div className='form-row form-row-1'>
                           <input
                              type='text'
                              name='firstname'
                              id='firstname'
                              className='input-text'
                              placeholder='First Name'
                              required=''
                              fdprocessedid='kgr72'
                              autoComplete='off'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstname}
                           />
                           {errors.firstname && touched.firstname ? (
                              <p className='form-errors'>{errors.firstname}</p>
                           ) : null}
                        </div>
                        <div className='form-row form-row-2'>
                           <input
                              type='text'
                              name='lastname'
                              id='lastname'
                              className='input-text'
                              placeholder='Last Name'
                              required=''
                              fdprocessedid='t0xc0q'
                              autoComplete='off'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastname}
                           />
                           {errors.lastname && touched.lastname ? (
                              <p className='form-errors'>{errors.lastname}</p>
                           ) : null}
                        </div>
                     </div>

                     <div className='form-row'>
                        <input
                           type='text'
                           name='phone'
                           className='phone'
                           id='phone'
                           placeholder='Phone Number'
                           required=''
                           fdprocessedid='j9u7n'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.phone}
                        />
                        {errors.phone && touched.phone ? (
                           <p className='form-errors'>{errors.phone}</p>
                        ) : null}
                     </div>
                     <div className='form-row'>
                        <input
                           type='pincode'
                           name='pincode'
                           id='pincode'
                           className='input-text'
                           placeholder='Pincode'
                           required=''
                           fdprocessedid='t0xc0aq'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.pincode}
                        />
                        {errors.pincode && touched.pincode ? (
                           <p className='form-errors'>{errors.pincode}</p>
                        ) : null}
                     </div>
                     <div className='form-row'>
                        <input
                           type='flat'
                           name='flat'
                           id='flat'
                           className='input-text'
                           placeholder='Flat, House no., Building, Company, Apartment'
                           required=''
                           fdprocessedid='t0xc0aq'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.flat}
                        />
                        {errors.flat && touched.flat ? (
                           <p className='form-errors'>{errors.flat}</p>
                        ) : null}
                     </div>

                     <div className='form-row'>
                        <input
                           type='city'
                           name='city'
                           id='city'
                           className='input-text'
                           placeholder='Town/City'
                           required=''
                           fdprocessedid='t0xc0aq'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.city}
                        />
                        {errors.city && touched.city ? (
                           <p className='form-errors'>{errors.city}</p>
                        ) : null}
                     </div>
                     <div className='form-row'>
                        <input
                           type='state'
                           name='state'
                           id='state'
                           className='input-text'
                           placeholder='State'
                           required=''
                           fdprocessedid='t0xc0aq'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.state}
                        />
                        {errors.state && touched.state ? (
                           <p className='form-errors'>{errors.state}</p>
                        ) : null}
                     </div>
                     {isLoading && (
                        <div className='d-flex justify-content-center'>
                           <div
                              className='spinner-border text-success'
                              role='status'>
                              <span className='visually-hidden '>
                                 Loading...
                              </span>
                           </div>
                        </div>
                     )}
                     <br />

                     <div
                        className='mx-auto'
                        style={{ width: "20%", overflow: "hidden" }}>
                        <Link
                           to='/profile'
                           style={{ float: "left", display: "block" }}>
                           <button
                              type='submit'
                              name='register'
                              className='btn btn-primary mx-auto my-3 d-block'>
                              Back
                           </button>
                        </Link>
                        <button
                           type='submit'
                           style={{ float: "left", display: "block" }}
                           name='register'
                           className='btn btn-primary mx-auto my-3 d-block ms-2'>
                           Save changes
                        </button>
                     </div>
                  </div>
               </form>
            </div>
         </div>
      </div>
   );
};

export default UserProfileCreateAddress;
