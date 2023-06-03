/** @format */

import axios from "axios";
import React, { useEffect, useState, useContext } from "react";
import { CgLayoutGrid } from "react-icons/cg";
import { useDispatch,useSelector } from "react-redux";
import { Link, NavLink, Outlet,useLocation } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import UserProfileModal from "./UserProfileCreateAddress";
import { SomeContext } from "../../App";
import headerLogo from "../../assets/nav/fs-logoBlack-header.png";
import { getMe } from "../../redux/slices/meSlice";

const UserProfile = () => {
const dispatch = useDispatch();
const location = useLocation();
const meDetails = useSelector(state=>state.me.allDetails);
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
         const returnVal = {...prev,[e.target.name]:e.target.value};
         return returnVal;

      }
         );
      
   };

   // UPDATE EDIT PROFILE API
   async function editUpdateApi() {
      setIsLoading(true);

      const S = [];
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
                     <NavLink
                     to="/profile"
                     style={{
                        textDecoration:"none"
                     }}
                     >
                     <li className='nav-item' role='presentation'>
                        <button
                           className={`nav-link ${location.pathname==="/profile"?"active":""}`}
                           id='pills-home-tab'
                           data-bs-toggle='pill'
                           data-bs-target='#pills-home'
                           type='button'
                           role='tab'
                           aria-controls='pills-info'
                           aria-selected={location.pathname==="/profile"}>
                           Your Info
                        </button>
                     </li>
                     </NavLink>
                     <NavLink
                     to="/profile/address"
                     style={{
                        textDecoration:"none"
                     }}
                     >
                     <li className='nav-item' role='presentation'>
                        <button
                           to="/profile/address"
                           className={`nav-link ${location.pathname==="/profile/address"?"active":""}`}
                           id='pills-profile-tab'
                           data-bs-toggle='pill'
                           data-bs-target='#pills-profile'
                           type='button'
                           role='tab'
                           aria-controls='pills-address'
                           aria-selected='false'>
                           Your Addresses
                        </button>
                     </li>
                        </NavLink>
                     <NavLink
                     to="/profile/wishlist"
                     style={{
                        textDecoration:"none"
                     }}
                     >
                     <li className='nav-item' role='presentation'>
                        <button
                           className={`nav-link ${location.pathname==="/profile/wishlist"?"active":""}`}
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
                        </NavLink>
                  </ul>
                  <div className='tab-content' id='pills-tabContent'>


                     <Outlet/>
                  </div>
               </div>
            </div>
            <ToastContainer />
         </section>
      </>
   );
};

export default UserProfile;
