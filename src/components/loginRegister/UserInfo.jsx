/** @format */

import { useFormik } from "formik";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import { getMe } from "../../redux/slices/meSlice";

const loaderStyle = {
   position: "absolute",
   left: "0",
   top: "60%",
   right: "0",
   bottom: "0",
   textAlign: "center",
   margin: "0 auto",
   zIndex: "999",
};

const UserInfo = () =>{

   const dispatch = useDispatch();
   const meDetail = useSelector(state=>state.me.allDetails);
   const [profileData, setProfileData] = useState(meDetail);
   const [error, setError] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [getAddData, setGetAddData] = useState([]);
   const [updateAddress, setUpdateAddress] = useState([]);

   const [showUpdateBtn, setShowUpdateBtn] = useState(false);
   const [inputBoxBorderNone, setInputBoxBorderNone] = useState(true);
   const [diabledInput, setDiabledInput] = useState(true);
   const [disabledEditProfileBtn, setDisabledEditProfileBtn] = useState(false);

   const [successMsg, setSuccessMsg] = useState(false);

   const profileEditHandler = () => {
      setShowUpdateBtn(true);
      setInputBoxBorderNone(false);
      setDiabledInput(false);
   };

   
   const handleChange = (e)=>{
      setProfileData(prev=>{
         const returnVal = {...prev,[e.target.name]:e.target.value};
         return returnVal;

      }
         );
      
   };

   const formik = useFormik({
      initialValues:meDetail
   });

   async function editUpdateApi() {
      setIsLoading(true);
      const payload = {
         customer: {
            email: profileData.email,
            firstname: profileData.firstname,
            lastname: profileData.lastname,
            gender: parseInt(profileData.gender),
            dob: profileData.dob,
            website_id: profileData.website_id,

         },
         password: localStorage.getItem("user-password"),
      };
      let result = await fetch(
         "https://beta.foodstories.store/rest/default/V1/customers/me",

         {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
               Authorization: `Bearer ${  localStorage.getItem("token")}`,
            },
            body: JSON.stringify(payload),
         }
      ).catch((error) => {
         console.log("error", error.message);
      });
      if (result.status === 200) {
         setSuccessMsg(toast.success("Updated Successfully"));
      } else {
         setError(toast.error(result.message));
      }
      result = await result.json();

      setIsLoading(false);
      setInputBoxBorderNone(true);
      setDiabledInput(true);

      // setError(toast.error(result.message));
   }

   useEffect(() => {
   
      setIsLoading(true);
   dispatch(getMe()).then(({payload})=>{
      setIsLoading(false);
      if(payload?.id){
         setProfileData(payload);
         setDisabledEditProfileBtn(true);
      }
   });
   }, []);
  
return(
   <>
   {isLoading && (
            <div className='d-flex justify-content-center' style={loaderStyle}>
               <div
                  className='spinner-border spinner-border-lg text-success'
                  style={{ width: "4rem", height: "4rem" }}
                  role='status'>
                  <span className='visually-hidden '>Loading...</span>
               </div>
            </div>
         )}
      <div>
         <div className='row'>
            <div className='tab-content' id='pills-tabContent'>
               <div
                  className='tab-pane fade show active'
                  id='pills-home'
                  role='tabpanel'
                  aria-labelledby='pills-home-tab'>
                  <div className='row'>
                     <div className='col-lg-4 float-start'>
                     <div
                                 className='card mb-8'
                                 style={{ height: "457px" }}>
                                 <div className='card-body text-center'>
                                    <img
                                       src={
                                          profileData.gender == 1
                                             ? "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                             : "https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5.webp"
                                       }
                                       alt='avatar'
                                       className='rounded-circle img-fluid'
                                       style={{ width: "150px" }}
                                    />

                                    {disabledEditProfileBtn && (
                                       <h5 className='my-3'>
                                          {`${profileData.firstname 
                                          } ${ 
                                          profileData.lastname}`
                                             ? `${profileData.firstname 
                                               } ${ 
                                               profileData.lastname}`
                                             : "NA"}
                                       </h5>
                                    )}
                                    

                                    <div className='d-flex justify-content-center mb-2'>
                                       {disabledEditProfileBtn && (
                                          <button
                                             onClick={profileEditHandler}
                                             type='button'
                                             className='btn btn-primary'>
                                             Edit Profile
                                          </button>
                                       )}
                                    </div>
                                 </div>
                              </div>
                     </div>
                     <div className='col-lg-8 float-end'>
                     <div className='card mb-4'>
                                 <div className='card-body'>
                                    <div className='row'>
                                       <div className='col-sm-3'>
                                          <p className='mb-0'>First Name</p>
                                       </div>
                                       <div className='col-sm-9'>
                                          <input
                                             disabled={diabledInput}
                                             onChange={handleChange}
                                             name="firstname"
                                             className={
                                                ` mb-0 ${ 
                                                inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null"}`
                                             }
                                             value={
                                                profileData.firstname
                                                   ? profileData.firstname
                                                   : ""
                                             }
                                          />
                                       </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                       <div className='col-sm-3'>
                                          <p className='mb-0'>Last Name</p>
                                       </div>
                                       <div className='col-sm-9'>
                                          <input
                                             disabled={diabledInput}
                                             onChange={handleChange}
                                             name="lastname"
                                             className={
                                                ` mb-0 ${ 
                                                inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null"}`
                                             }
                                             value={
                                                profileData.lastname
                                                   ? profileData.lastname
                                                   : ""
                                             }
                                          />
                                       </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                       <div className='col-sm-3'>
                                          <p className='mb-0'>Email</p>
                                       </div>
                                       <div className='col-sm-9'>
                                          <input
                                             disabled={diabledInput}
                                             onChange={handleChange}
                                             name="email"
                                             className={
                                                ` mb-0 ${ 
                                                inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null"}`
                                             }
                                             value={
                                                profileData.email
                                                   ? profileData.email
                                                   : ""
                                             }
                                          />
                                       </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                       <div className='col-sm-3'>
                                          <p className='mb-0'>Date of Birth</p>
                                       </div>
                                       <div className='col-sm-9'>
                                          <input
                                             disabled={diabledInput}
                                             onChange={handleChange}
                                             name="dob"
                                             className={
                                                ` mb-0 ${ 
                                                inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null"}`
                                             }
                                             value={
                                                profileData.dob
                                                   ? profileData.dob
                                                   : ""
                                             }
                                          />
                                       </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                       <div className='col-sm-3'>
                                          <p className='mb-0'>Gender</p>
                                       </div>
                                       <div className='col-sm-9'>
                                          {/* <input
                                             disabled={diabledInput}
                                             onChange={handleChange}
                                             name="gender"
                                             className={
                                                " mb-0 " +
                                                (inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null")
                                             }
                                             value={profileData.gender}
                                          /> */}
                                          <select name="gender" value={profileData.gender}  onChange={handleChange} >
                                             <option value="1">Male</option>
                                             <option value="2">Female</option>
                                          </select>
                                       </div>
                                    </div>
                                    <hr />
                                    {/* <div className='row'>
                                       <div className='col-sm-3'>
                                          <p className='mb-0'>Mobile</p>
                                       </div>
                                       <div className='col-sm-9'>
                                          <input
                                             disabled={diabledInput}
                                             onChange={handleChange}
                                             name="telephone"
                                             className={
                                                " mb-0 " +
                                                (inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null")
                                             }
                                             value={profileData.telephone}
                                             // value={
                                             //    profileData &&
                                             //    profileData.addresses &&
                                             //    profileData.addresses[0] &&
                                             //    profileData.addresses[0]
                                             //       .telephone
                                             //       ? profileData.addresses[0]
                                             //            .telephone
                                             //       : ""
                                             // }
                                          />
                                       </div>
                                    </div> */}
                                    <hr />
                                    <div className='row'>
                                       <div className='col-sm-3'>
                                          <p className='mb-0'>Created At</p>
                                       </div>
                                       <div className='col-sm-9'>
                                          <p className='text-muted mb-0'>
                                             {profileData.created_at
                                                ? profileData.created_at
                                                : ""}
                                          </p>
                                       </div>
                                    </div>
                                    <hr />
                                    <div className='row'>
                                       <div className='col-sm-3'>
                                          <p className='mb-0'>Created In</p>
                                       </div>
                                       <div className='col-sm-9'>
                                          <p className='text-muted mb-0'>
                                             {profileData.created_in
                                                ? profileData.created_in
                                                : ""}
                                          </p>
                                       </div>
                                    </div>
                                    {showUpdateBtn && (
                                       <button
                                          onClick={editUpdateApi}
                                          type='submit'
                                          style={{
                                             float: "left",
                                             display: "block",
                                          }}
                                          name='register'
                                          className='btn btn-primary  float-end'>
                                          Update changes
                                       </button>
                                    )}
                                 </div>
                              </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <ToastContainer />
      </>
   );
};

export default UserInfo;
