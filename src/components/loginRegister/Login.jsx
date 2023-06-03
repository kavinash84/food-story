/** @format */

import headerLogo from "../../assets/nav/fs-logo-header.svg";

import { useFormik } from "formik";
import React, { useState , useEffect } from "react";

import { LoginSchema } from "./schemas/login";

import { Link, useNavigate } from "react-router-dom";

import "../../Login.css";
import ToastMessage from "../utilis/ToastMessage";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const initialValues = {
   username: "",
   password: "",
};

const Login = (props) => {
   const [userName, setUserName] = useState(localStorage.getItem("user-name"));
   const [userPassword, setUserPassword] = useState(
      localStorage.getItem("user-password")
   );

   const [error, setError] = useState("");
   const [successMsg, setSuccessMsg] = useState(false);

   const [isLoading, setIsLoading] = useState(false);

   const history = useNavigate();
   // useEffect(() => {
   //    if (localStorage.getItem("user-info")) {
   //       history("/");
   //    }
   // }, []);
   const { values, errors, handleBlur, handleChange, handleSubmit, touched } =
      useFormik({
         initialValues,
         validationSchema: LoginSchema,
         onSubmit: async (values) => {
            setIsLoading(true);
            const result = await fetch(
               "https://beta.foodstories.store/rest/V1/integration/customer/token",

               {
                  method: "POST",
                  headers: {
                     "Content-Type": "application/json",
                  },

                  body: JSON.stringify(values),
               }
            )
               .then((result) => {
                  setIsLoading(true),
                     result.json().then((res) => {
                        if (result.status === 200) {
                           setSuccessMsg(toast.success("Login Successfully"));
                           localStorage.setItem(
                              "user-info",
                              JSON.stringify(values)
                           );
                           history("/");
                        } else {
                           setError(toast.error(res.message));
                        }
                        localStorage.setItem("token", res);
                     });
               })
               .catch((err) => {
                  setError(toast.error(result.message));
               });

            setIsLoading(false);
            setUserName(localStorage.setItem("user-name", values.username));
            setUserPassword(
               localStorage.setItem("user-password", values.password)
            );
            //
         },
      });
   return (
      <div>
         <section className='ftco-section'>
            <div className='container'>
               {/* <div className='row justify-content-center'>
                  <div className='col-md-6 text-center mb-5'>
                     <h2 className='heading-section'>Login #08</h2>
                  </div>
               </div> */}
               <div className='row justify-content-center'>
                  <div className=' col-md-12 col-lg-5'>
                     <div className='login-wrap p-4 p-md-5'>
                        <div className='icon d-flex align-items-center justify-content-center'>
                           <span className='fa fa-user-o'>FS</span>
                        </div>
                        <h3 className='text-center mb-4'>
                           <img
                              className='img-fluid headerLogo mx-0 ps-0'
                              src={headerLogo}
                           />
                        </h3>
                        <form
                           action='#'
                           className='login-form'
                           onSubmit={handleSubmit}>
                           <div className='form-group my-4'>
                              <input
                                 type='text'
                                 className='form-control rounded-left'
                                 placeholder='username'
                                 name='username'
                                 // autoComplete='off'
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.username}
                              />
                              {errors.username && touched.username ? (
                                 <p className='form-errors'>
                                    {errors.username}
                                 </p>
                              ) : null}
                           </div>
                           <div className='form-group  my-4'>
                              <input
                                 type='password'
                                 className='form-control rounded-left'
                                 placeholder='Password'
                                 name='password'
                                 // autoComplete='off'
                                 onChange={handleChange}
                                 onBlur={handleBlur}
                                 value={values.password}
                              />
                              {errors.password && touched.password ? (
                                 <p className='form-errors'>
                                    {errors.password}
                                 </p>
                              ) : null}
                           </div>
                           <div className='form-group d-md-flex'>
                              <div className='w-50'>
                                 <label className='checkbox-wrap checkbox-primary'>
                                    Remember Me
                                    <input type='checkbox' />
                                    <span className='checkmark' />
                                 </label>
                              </div>
                              <div className='w-50 text-md-right'>
                                 <Link to='/register'>Register Here</Link>
                              </div>
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
                           <div className='form-group'>
                              <button
                                 type='submit'
                                 className='btn btn-primary rounded submit p-3 px-5'>
                                 LOGIN
                              </button>
                           </div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
            <ToastContainer />
         </section>
      </div>
   );
};

export default Login;
