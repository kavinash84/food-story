/** @format */

import React, { useEffect, useState, useContext } from "react";
import { useFormik } from "formik";
import { UserAddressSchema } from "./schemas/userAddressValidation";
import { AiFillCaretDown } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { SomeContext } from "../../App";
import { toast } from "react-toastify";
import {throttle} from 'lodash';

const initialValues = {
   firstname: "",
   lastname: "",
   phone: "",
   pincode: "",
   flat: "",
   city: "",
   email:"",
   region:{
      region:"",
      regionCode:"",
      regionId:""
   }
   // id: "",
};
let isStateLoading=false;

const UserProfileCreateAddress = (props) => {
   // const { initialValues, setInitialValues } = 
   const {userDataCtx} = useContext(SomeContext);

   const [isLoading, setIsLoading] = useState(false);
   const [closeModal, setCloseModal] = useState(false);
   const [successMsg, setSuccessMsg] = useState("");
   const [error, setError] = useState("");
   
   const history = useNavigate();

   const { values, errors, handleBlur, handleChange,handleSubmit,setFieldValue,setFieldError, touched } =
      useFormik({
         initialValues: initialValues,
         validationSchema: UserAddressSchema,
         onSubmit:  async(values) => {
            setIsLoading(true);   
            const payload = {
              address: {
                customer_id: userDataCtx.id,
                firstname: values.firstname,
                lastname: values.lastname,
                street: [values.flat],
                telephone: values.phone,
                postcode: values.pincode,
                city: values.city,
                country_id: "IN",
                region: {
                  regionCode: values.region.regionCode,
                  region: values.region.region,
                  regionId:  values.region.regionId,
                },
              },
            };
      
            let result = await fetch(
               "https://beta.foodstories.store/rest/V1/customer/addresses",
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
               setSuccessMsg(toast.success("Address Created Successfully"));
               localStorage.setItem("register-info", JSON.stringify(result));
               // history("/login");
            } else {
               console.log("result", result.json());
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

      const handleStateChange = async(e)=>{
         if(isStateLoading){
            return
         }
         isStateLoading=true;
            const {data} = await axios({
              url: "https://beta.foodstories.store/rest/V1/customer/addresses/get-regions",
              method: "post",
              data: {
                parameters: {
                  country_code: "IN",
                  region_name: e.target.value,
                },
              },
            });
      
            isStateLoading=false;
            if(data[0]?.region_id){
               setFieldValue("region.region",data[0]?.name)
               setFieldValue("region.regionCode",data[0]?.code)
               setFieldValue("region.regionId",data[0]?.region_id)
            }else{
               setFieldError("region.region","Please enter valid state");
            }
         
      }


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
                              required
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
                              required
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
                           required
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
                           type='text'
                           name='email'
                           id='email'
                           className='input-text'
                           required=''
                           pattern='[^@]+@[^@]+.[a-zA-Z]{2,6}'
                           placeholder='Your Email'
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
                           type='pincode'
                           name='pincode'
                           id='pincode'
                           className='input-text'
                           placeholder='Pincode'
                           required
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
                           required
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
                           required
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
                           name='region.region'
                           id='state'
                           className='input-text'
                           placeholder='State'
                           // required=''
                           fdprocessedid='t0xc0aq'
                           autoComplete='off'
                           onChange={(e)=>{
                              handleStateChange(e);
                              handleChange(e)
                           }}
                           onBlur={handleBlur}
                           value={values.region.region}
                        />
                        {errors?.region?.region && touched?.region?.region ? (
                           <p className='form-errors'>{errors?.region?.region}</p>
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
                              // type='reset'
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
