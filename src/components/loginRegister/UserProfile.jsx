/** @format */

import React, { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import headerLogo from "../../assets/nav/fs-logoBlack-header.png";
import { ToastContainer, toast } from "react-toastify";
import UserProfileModal from "./UserProfileCreateAddress";
import axios from "axios";
import { SomeContext } from "../../App";
import { CgLayoutGrid } from "react-icons/cg";

const UserProfile = () => {
   const { initialValues, setInitialValues,userDataCtx,setUserDataCtx } = useContext(SomeContext);
   // console.log("userProfile", initialValues);
   // console.log("contezt", initialValues);

   const [profileData, setProfileData] = useState([]);
   const [isLoading, setIsLoading] = useState(false);

   const [error, setError] = useState("");
   const [getAddData, setGetAddData] = useState([]);
   const [updateAddress, setUpdateAddress] = useState([]);

   const [showUpdateBtn, setShowUpdateBtn] = useState(false);
   const [inputBoxBorderNone, setInputBoxBorderNone] = useState(true);
   const [diabledInput, setDiabledInput] = useState(true);
   const [disabledEditProfileBtn, setDisabledEditProfileBtn] = useState(false);

   const [successMsg, setSuccessMsg] = useState(false);

   const [transferData, setTransferData] = useState({
      city: "",
      state: "",
      phone: "",
      pincode: "",
      firstName: "",
      lastName: "",
      id: "",
   });
   // console.log("transferData", transferData);
   const gender = {
      1: "Male",
      2: "Female",
   };
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

   const profileEditHandler = () => {
      setShowUpdateBtn(true);
      setInputBoxBorderNone(false);
      setDiabledInput(false);
   };

   const handleChange = (e)=>{
      setProfileData(prev=>{
         let returnVal = {...prev,[e.target.name]:e.target.value}
         return returnVal

      }
         )
      
   }

   // UPDATE EDIT PROFILE API
   async function editUpdateApi() {
      setIsLoading(true);
      console.log("profileData", profileData);

      let S = [];
      S.push(
         profileData &&
            profileData.addresses &&
            profileData.addresses[0] &&
            profileData.addresses[0].street &&
            profileData.addresses[0].street[0] &&
            profileData.addresses[0].street[0]
      ),
         S.push(
            profileData &&
               profileData.addresses &&
               profileData.addresses[0] &&
               profileData.addresses[0].street &&
               profileData.addresses[0].street[1] &&
               profileData.addresses[0].street[1]
         );
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
               Authorization: "Bearer " + localStorage.getItem("token"),
            },
            body: JSON.stringify(payload),
         }
      ).catch((error) => {
         console.log("error", error.message);
      });
      console.log("api response", JSON.stringify(payload));
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
   // UPDATE EDIT PROFILE API

   let token = localStorage.getItem("token");

   async function fetchUser (){
      fetch("https://beta.foodstories.store/rest/default/V1/customers/me", {
      method: "GET",
      headers: {
         "Content-Type": "application/json",
         Authorization: "Bearer " + localStorage.getItem("token"),
      },
   }).then((result) => {
      result.json().then((resp) => {
         // console.log("resp", resp.addresses[0].city);
         console.log("get profile response", resp);
         setUserDataCtx(resp);
         setProfileData(resp);
         console.log("get address response", resp);
         if (resp.addresses && resp.addresses.length > 0) {
            resp.addresses.map((obj) => {
               obj.email = resp.email;
            });
         }
         setGetAddData(resp.addresses);
         setIsLoading(false);
         // console.log("resp add data", resp);

         setError(toast.error(resp.message));
         setDisabledEditProfileBtn(true);
      });
   });
}

   const handleDelete = (id) => {
      axios
         .delete(
            `https://beta.foodstories.store/rest/V1/customer/addresses?addressId=${id}`,
            setIsLoading(true)
         )
         .then((result) => {
               console.log("delete api success")
               setIsLoading(false);
               fetchUser()
         });
   };

   const setToLocalStorage = (
      firstname,
      lastname,
      telephone,
      city,
      flat,
      id,
      state,
      postcode,
      email
   ) => {
      setInitialValues((prev) => {
         (prev.firstname = firstname),
            (prev.lastname = lastname),
            (prev.phone = telephone),
            (prev.city = city),
            (prev.flat = flat),
            (prev.id = id),
            (prev.state = state),
            (prev.pincode = postcode),
            (prev.email = email);
         return prev;
      });
   };

   // GET PROFILE DATA API
   useEffect(() => {
      // console.log("token", localStorage.getItem("token"));
      setIsLoading(true);

    
   fetchUser()
   }, []);
   // GET PROFILE DATA API
   return (
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
         <section style={{ background: "#eee" }}>
            <div
               className='text-center mb-5'
               style={{ boxShadow: "0px 8px 20px 0px rgba(0, 0, 0, 0.15)" }}>
               {/* <Link to='/'>
                  <img
                     className='img-fluid headerLogo mt-4 mb-4'
                     src={headerLogo}
                     style={{ paddingLeft: "0", textTransform: "uppercase" }}
                  />
               </Link> */}
            </div>
            <div className='container py-1'>
               <div className='row'>
                  <div className='col'>
                     <nav
                        aria-label='breadcrumb'
                        className='bg-light rounded-3 p-3 mb-4'>
                        <ol className='breadcrumb mb-0'>
                           <li className='breadcrumb-item'>
                              <Link to='/'>Home</Link>
                           </li>
                           <li className='breadcrumb-item'>
                              <Link to='/'>User</Link>
                           </li>
                           <li
                              className='breadcrumb-item active'
                              aria-current='page'>
                              User Profile
                           </li>
                        </ol>
                     </nav>
                  </div>
               </div>

               <div className='row'>
                  <ul
                     className='nav nav-pills mb-3 profileTab'
                     id='pills-tab'
                     role='tablist'>
                     <li className='nav-item' role='presentation'>
                        <button
                           className='nav-link active'
                           id='pills-home-tab'
                           data-bs-toggle='pill'
                           data-bs-target='#pills-home'
                           type='button'
                           role='tab'
                           aria-controls='pills-home'
                           aria-selected='true'>
                           Your Info
                        </button>
                     </li>
                     <li className='nav-item' role='presentation'>
                        <button
                           className='nav-link'
                           id='pills-profile-tab'
                           data-bs-toggle='pill'
                           data-bs-target='#pills-profile'
                           type='button'
                           role='tab'
                           aria-controls='pills-profile'
                           aria-selected='false'>
                           Your Addresses
                        </button>
                     </li>
                     <li className='nav-item' role='presentation'>
                        <button
                           className='nav-link'
                           id='pills-contact-tab'
                           data-bs-toggle='pill'
                           data-bs-target='#pills-contact'
                           type='button'
                           role='tab'
                           aria-controls='pills-contact'
                           aria-selected='false'>
                           Your Wishlist
                        </button>
                     </li>
                  </ul>
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
                                          {profileData.firstname +
                                          " " +
                                          profileData.lastname
                                             ? profileData.firstname +
                                               " " +
                                               profileData.lastname
                                             : "NA"}
                                       </h5>
                                    )}
                                    {/* <p className='text-muted mb-2'>
                                       {profileData &&
                                          profileData.addresses &&
                                          profileData.addresses[0] &&
                                          profileData.addresses[0].street[0]}
                                       &nbsp;
                                       {profileData &&
                                          profileData.addresses &&
                                          profileData.addresses[0] &&
                                          profileData.addresses[0].city}
                                    </p> */}

                                    {/* <p className='text-muted mb-4'>
                                       {profileData &&
                                          profileData.addresses &&
                                          profileData.addresses[0] &&
                                          profileData.addresses[0].region
                                             .region}
                                       &nbsp;
                                       {profileData &&
                                          profileData.addresses &&
                                          profileData.addresses[0] &&
                                          profileData.addresses[0].postcode}
                                    </p> */}

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
                                                " mb-0 " +
                                                (inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null")
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
                                                " mb-0 " +
                                                (inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null")
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
                                                " mb-0 " +
                                                (inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null")
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
                                                " mb-0 " +
                                                (inputBoxBorderNone
                                                   ? "border-0"
                                                   : "null")
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
                     <div
                        className='tab-pane fade'
                        id='pills-profile'
                        role='tabpanel'
                        aria-labelledby='pills-profile-tab'>
                        <div className='row'>
                           <div className='col-sm-3'>
                              <div className='card position-relative'>
                                 <Link to='/createAdd'>
                                    <button
                                       className='card-body child mx-auto'
                                       style={{
                                          height: "167px",
                                          background: "transparent",
                                          border: "none",
                                       }}>
                                       Add Addresses +
                                    </button>
                                 </Link>
                              </div>
                           </div>

                           {getAddData &&
                              getAddData.map((getAddress) => {
                                 console.log("getAddress", getAddress);
                                 return (
                                    <div
                                       className='col-sm-3 mb-4'
                                       key={getAddress.id}>
                                       <div className='card'>
                                          <div className='card-body'>
                                             <h5 className='card-title '>
                                                {getAddress &&
                                                   getAddress.firstname}
                                                &nbsp;
                                                {getAddress &&
                                                   getAddress.lastname}
                                             </h5>
                                             <p className='card-text'>
                                                <p className='text-muted mb-0'>
                                                   {getAddress &&
                                                      getAddress.telephone}
                                                </p>
                                                <p className='text-muted mb-0'>
                                                   {getAddress &&
                                                      getAddress.email}
                                                </p>
                                                <p className='text-muted mb-0'>
                                                   {getAddress &&
                                                      getAddress.street}
                                                </p>
                                             </p>
                                             <Link to='/updateAdd'>
                                                <button
                                                   onClick={() =>
                                                      setToLocalStorage(
                                                         getAddress.firstname,
                                                         getAddress.lastname,
                                                         getAddress.telephone,
                                                         getAddress.city,
                                                         getAddress.street.toString(),
                                                         getAddress.id,
                                                         getAddress.region
                                                            .region,
                                                         getAddress.postcode,
                                                         getAddress.email
                                                      )
                                                   }
                                                   type='button'
                                                   className='btn btn-primary me-2'
                                                   data-bs-toggle='modal'
                                                   data-bs-target='#exampleModal'>
                                                   Edit
                                                </button>
                                             </Link>
                                             <button
                                                onClick={() =>
                                                   handleDelete(getAddress.id)
                                                }
                                                href='#'
                                                className='btn btn-primary'>
                                                Delete
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                                 );
                              })}
                        </div>
                     </div>
                     <div
                        className='tab-pane fade'
                        id='pills-contact'
                        role='tabpanel'
                        aria-labelledby='pills-contact-tab'>
                        wishlist
                     </div>
                  </div>
               </div>
            </div>
            <ToastContainer />
         </section>
      </>
   );
};

export default UserProfile;
