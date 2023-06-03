/** @format */

import { useFormik } from "formik";
import React, { useState } from "react";

import { RegisterSchema } from "./schemas";
import "../../Register.css";
import headerLogo from "../../assets/nav/fs-logo-header.svg";

import { AiFillCaretDown } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
   firstname: "",
   lastname: "",
   gender: "",
   email: "",
   dob: "",
   phone: "",
   password: "",
};
const Register = () => {
   const [registerInfo, setRegisterInfo] = useState(
      localStorage.getItem("register-info")
   );

   const [error, setError] = useState("");
   const [successMsg, setSuccessMsg] = useState(false);

   const [isLoading, setIsLoading] = useState(false);

   const history = useNavigate();
   // useEffect(() => {
   //    if (localStorage.getItem("register-info")) {
   //       history("/");
   //    }
   // }, []);
   const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
      useFormik({
         initialValues,
         validationSchema: RegisterSchema,
         onSubmit: async (values) => {
            setIsLoading(true);
            const payload = {
               customer: {
                  email: values.email,
                  firstname: values.firstname,
                  lastname: values.lastname,
                  gender: parseInt(values.gender),
                  dob: values.dob,
                  extension_attributes: {
                     is_subscribed: true,
                  },
                  custom_attributes: [
                     {
                        attribute_code: "mobilenumber",
                        value: values.phone,
                     },
                     {
                        attribute_code: "customer_mobile",
                        value: values.phone,
                     },
                  ],
               },
               password: values.password,
            };
            let result = await fetch(
               "https://beta.foodstories.store/rest/V1/customers",
               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },
                  body: JSON.stringify(payload),
               }
            ).catch((error) => {
               console.log("error", error.message);
            });
            if (result.status === 200) {
               setSuccessMsg(toast.success("Registration Successfully"));
               localStorage.setItem("register-info", JSON.stringify(result));
               history("/login");
            } else {
               console.log("result", result);
               setError(toast.error(result.message));
            }
            result = await result.json();

            setIsLoading(false);
            setRegisterInfo(
               localStorage.setItem(
                  "register-info",
                  JSON.stringify(values.username)
               )
            );
            setError(toast.error(result.message));
         },
      });

   return (
      <div>
         <div
            className='text-center mb-5'
            style={{ boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)" }}>
            <img
               className='img-fluid headerLogo mt-4 mb-4'
               src={headerLogo}
               style={{ paddingLeft: "0", textTransform: "uppercase" }}
            />
         </div>
         <div className='page-content'>
            <div className='form-v10-content'>
               <form
                  className='form-detail'
                  action='#'
                  method='post'
                  id='myform'
                  onSubmit={handleSubmit}>
                  <div className='form-left'>
                     <h2>Registration Form</h2>

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
                           type='password'
                           name='password'
                           id='password'
                           className='input-text'
                           placeholder='Password'
                           required=''
                           fdprocessedid='t0xc0aq'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.password}
                        />
                        {errors.password && touched.password ? (
                           <p className='form-errors'>{errors.password}</p>
                        ) : null}
                     </div>
                     <div className='form-row'>
                        <select
                           name='gender'
                           fdprocessedid='lkqi5s'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.gender}>
                           <option value=''>Gender</option>
                           <option value='1'>Male</option>
                           <option value='2'>Female</option>
                        </select>
                        <span className='select-btn'>
                           <AiFillCaretDown />
                        </span>
                        {errors.gender && touched.gender ? (
                           <p className='form-errors'>{errors.gender}</p>
                        ) : null}
                     </div>

                     <div className='form-row'>
                        <input
                           type='text'
                           name='email'
                           id='email'
                           className='input-text'
                           required=''
                           pattern='[^@]+@[^@]+.[a-zA-Z]{2,6}'
                           placeholder='Your Email'
                           fdprocessedid='vvl0y9'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.email}
                        />
                        {errors.email && touched.email ? (
                           <p className='form-errors'>{errors.email}</p>
                        ) : null}
                     </div>

                     <div className='form-row'>
                        <input
                           // pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
                           type='date'
                           name='dob'
                           id='dob'
                           className='dob'
                           // placeholder='Date of Birth'
                           required=''
                           fdprocessedid='ajbpo'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.dob}
                           // onfocus="(this.type='date')"
                           // onblur="(this.value == '' ? this.type='text' : this.type='date')"
                        />
                        {errors.dob && touched.dob ? (
                           <p className='form-errors'>{errors.dob}</p>
                        ) : null}
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
                     <div className='form-row-last'>
                        <input
                           type='submit'
                           name='register'
                           className='register'
                           value='Register'
                           fdprocessedid='tbqjsf'
                        />
                     </div>
                  </div>
               </form>
            </div>
         </div>
         <ToastContainer />
      </div>
   );
};

export default Register;
