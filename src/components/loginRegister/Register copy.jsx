/** @format */

import { useFormik } from "formik";
import React from "react";

import { RegisterSchema } from "./schemas";
import "../../Register.css";
import headerLogo from "../../assets/nav/fs-logo-header.svg";

import { AiFillCaretDown } from "react-icons/ai";

const initialValues = {
   firstName: "",
   lastName: "",
   gender: "",
   your_email: "",
   dob: "",
   street: "",
   additional: "",
   zip: "",
   place: "",
   country: "",
   code: "",
   phone: "",
   checkbox: "",
};
const Register = () => {
   const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
      useFormik({
         initialValues,
         validationSchema: RegisterSchema,
         onSubmit: (values) => {
         },
      });

   return (
      <div>
         <div
            className='text-center mb-4'
            //  style={{ background: "#ca574a" }}
         >
            <img className='img-fluid headerLogo' src={headerLogo} />
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
                     <h2>General Infomation</h2>
                     {/* <div className='form-row'>
                     <select name='title' fdprocessedid='ltb74'
                     autoComplete="off">
                        <option className='option' value='title'>
                           Title
                        </option>
                        <option className='option' value='businessman'>
                           Businessman
                        </option>
                        <option className='option' value='reporter'>
                           Reporter
                        </option>
                        <option className='option' value='secretary'>
                           Secretary
                        </option>
                     </select>
                     <span className='select-btn'>
                        <i className='zmdi zmdi-chevron-down'></i>
                     </span>
                  </div> */}
                     <div className='form-group'>
                        <div className='form-row form-row-1'>
                           <input
                              type='text'
                              name='firstName'
                              id='firstName'
                              className='input-text'
                              placeholder='First Name'
                              required=''
                              fdprocessedid='kgr72'
                              autoComplete='off'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.firstName}
                           />
                           {errors.firstName && touched.firstName ? (
                              <p className='form-errors'>{errors.firstName}</p>
                           ) : null}
                        </div>
                        <div className='form-row form-row-2'>
                           <input
                              type='text'
                              name='lastName'
                              id='lastName'
                              className='input-text'
                              placeholder='Last Name'
                              required=''
                              fdprocessedid='t0xc0q'
                              autoComplete='off'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.lastName}
                           />
                           {errors.lastName && touched.lastName ? (
                              <p className='form-errors'>{errors.lastName}</p>
                           ) : null}
                        </div>
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
                           <option value='male'>Male</option>
                           <option value='female'>Female</option>
                           <option value='d'>Other</option>
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
                           name='your_email'
                           id='your_email'
                           className='input-text'
                           required=''
                           pattern='[^@]+@[^@]+.[a-zA-Z]{2,6}'
                           placeholder='Your Email'
                           fdprocessedid='vvl0y9'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.your_email}
                        />
                        {errors.your_email && touched.your_email ? (
                           <p className='form-errors'>{errors.your_email}</p>
                        ) : null}
                     </div>

                     <div className='form-row'>
                        <input
                           pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}'
                           type='date'
                           name='dob'
                           className='company'
                           id='dob'
                           placeholder='Date of Birth (yyyy-mm-dd)'
                           required=''
                           fdprocessedid='ajbpo'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.dob}
                           onFocus="(this.type='date')"
                           onBlur="(this.value == '' ? this.type='text' : this.type='date')"
                        />
                        {errors.dob && touched.dob ? (
                           <p className='form-errors'>{errors.dob}</p>
                        ) : null}
                     </div>

                     {/* <div className='form-group'>
                     <div className='form-row form-row-3'>
                        <input
                           type='text'
                           name='business'
                           className='business'
                           id='business'
                           placeholder='Business Arena'
                           required=''
                           fdprocessedid='34rhc'
                           autoComplete="off"
                        />
                        {<p className="form-errors">{errors.}</p>}
                     </div>
                     <div className='form-row form-row-4'>
                        <select name='employees' fdprocessedid='k377s'
                        autoComplete="off">
                           <option value='employees'>Male</option>
                           <option value='trainee'>Female</option>
                           <option value='colleague'>Colleague</option>
                        </select>
                        <span className='select-btn'>
                           <i className='zmdi zmdi-chevron-down'></i>
                        </span>
                     </div>
                  </div> */}
                  </div>
                  <div className='form-right'>
                     <h2>Contact Details</h2>
                     <div className='form-row'>
                        <input
                           type='text'
                           name='street'
                           className='street'
                           id='street'
                           placeholder='Street + Nr'
                           required=''
                           fdprocessedid='1hyz9u'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.street}
                        />
                        {errors.street && touched.street ? (
                           <p className='form-errors2'>{errors.street}</p>
                        ) : null}
                     </div>
                     <div className='form-row'>
                        <input
                           type='text'
                           name='additional'
                           className='additional'
                           id='additional'
                           placeholder='Additional Information'
                           required=''
                           fdprocessedid='c2uags'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.additional}
                        />
                        {errors.additional && touched.additional ? (
                           <p className='form-errors2'>{errors.additional}</p>
                        ) : null}
                     </div>
                     <div className='form-group'>
                        <div className='form-row form-row-1'>
                           <input
                              type='text'
                              name='zip'
                              className='zip'
                              id='zip'
                              placeholder='Zip Code'
                              required=''
                              fdprocessedid='ji8pbm'
                              autoComplete='off'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.zip}
                           />
                           {errors.zip && touched.zip ? (
                              <p className='form-errors2'>{errors.zip}</p>
                           ) : null}
                        </div>
                        <div className='form-row form-row-2'>
                           <select
                              name='place'
                              fdprocessedid='d5qtwp'
                              autoComplete='off'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.place}>
                              <option value='place'>Place</option>
                              <option value='Street'>Street</option>
                              <option value='District'>District</option>
                              <option value='City'>City</option>
                           </select>
                           <span className='select-btn'>
                              <i className='zmdi zmdi-chevron-down' />
                           </span>
                           {errors.place && touched.place ? (
                              <p className='form-errors2'>{errors.place}</p>
                           ) : null}
                        </div>
                     </div>
                     <div className='form-row'>
                        <select
                           name='country'
                           fdprocessedid='bggrwh'
                           autoComplete='off'
                           onChange={handleChange}
                           onBlur={handleBlur}
                           value={values.country}>
                           <option value='country'>Country</option>
                           <option value='Vietnam'>Vietnam</option>
                           <option value='Malaysia'>Malaysia</option>
                           <option value='India'>India</option>
                        </select>
                        <span className='select-btn'>
                           <i className='zmdi zmdi-chevron-down' />
                        </span>
                        {errors.country && touched.country ? (
                           <p className='form-errors2'>{errors.country}</p>
                        ) : null}
                     </div>
                     <div className='form-group'>
                        <div className='form-row form-row-1'>
                           <input
                              type='text'
                              name='code'
                              className='code'
                              id='code'
                              placeholder='Code +'
                              required=''
                              fdprocessedid='7x2515'
                              autoComplete='off'
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values.code}
                           />
                           {errors.code && touched.code ? (
                              <p className='form-errors2'>{errors.code}</p>
                           ) : null}
                        </div>
                        <div className='form-row form-row-2'>
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
                              <p className='form-errors2'>{errors.phone}</p>
                           ) : null}
                        </div>
                     </div>

                     <div className='form-checkbox'>
                        <label
                           className='container'
                           style={{ verticalAlign: "middle" }}>
                           <p>
                              I do accept the{" "}
                              <a href='#' className='text'>
                                 Terms and Conditions
                              </a>{" "}
                              of your site.
                           </p>
                           <input
                              type='checkbox'
                              name='checkbox'
                              value={values.checkbox}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required=''
                           />

                           <span className='checkmark' />
                        </label>
                        {errors.checkbox && touched.checkbox ? (
                           <p
                              className='form-errors2'
                              style={{
                                 color: "burlywood",
                                 fontSize: "10px",
                                 paddingLeft: "12px",
                              }}>
                              {errors.checkbox}
                           </p>
                        ) : null}
                     </div>
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
      </div>
   );
};

export default Register;
