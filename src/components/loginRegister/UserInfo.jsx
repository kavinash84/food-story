/** @format */

import React from "react";
import { Link } from "react-router-dom";

const UserInfo = () => {
   return (
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
                        <div className='card mb-8' style={{ height: "457px" }}>
                           <div className='card-body text-center'>
                              <img
                                 src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp'
                                 alt='avatar'
                                 className='rounded-circle img-fluid'
                                 style={{ width: "150px" }}
                              />
                              {/* <h5 className='my-3'>
                                 {profileData.firstname +
                                 " " +
                                 profileData.lastname
                                    ? profileData.firstname +
                                      " " +
                                      profileData.lastname
                                    : "NA"}
                              </h5> */}
                              <p className='text-muted mb-2'>
                                 {/* {profileData &&
                                    profileData.addresses &&
                                    profileData.addresses[0] &&
                                    profileData.addresses[0].street[0]}
                                 &nbsp;
                                 {profileData &&
                                    profileData.addresses &&
                                    profileData.addresses[0] &&
                                    profileData.addresses[0].city} */}
                              </p>

                              <p className='text-muted mb-4'>
                                 {/* {profileData &&
                                    profileData.addresses &&
                                    profileData.addresses[0] &&
                                    profileData.addresses[0].region.region}
                                 &nbsp;
                                 {profileData &&
                                    profileData.addresses &&
                                    profileData.addresses[0] &&
                                    profileData.addresses[0].postcode} */}
                              </p>

                              <div className='d-flex justify-content-center mb-2'>
                                 <button
                                    // onClick={profileEditHandler}
                                    type='button'
                                    className='btn btn-primary'>
                                    Edit Profile
                                 </button>
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
                                    // disabled={diabledInput}
                                    // onChange={(e) => {
                                    //    setProfileData({
                                    //       ...profileData,
                                    //       firstname: e.target.value,
                                    //    });
                                    // }}
                                    // className={
                                    //    " mb-0 " +
                                    //    (inputBoxBorderNone
                                    //       ? "border-0"
                                    //       : "null")
                                    // }
                                    // value={
                                    //    profileData.firstname
                                    //       ? profileData.firstname
                                    //       : ""
                                    // }
                                    />
                                 </div>
                              </div>
                              <hr />
                              <div className='row'>
                                 <div className='col-sm-3'>
                                    <p className='mb-0'>Last Name</p>
                                 </div>
                                 <div className='col-sm-9'>
                                    {/* <input
                                       disabled={diabledInput}
                                       onChange={(e) => {
                                          setProfileData({
                                             ...profileData,
                                             lastname: e.target.value,
                                          });
                                       }}
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
                                    /> */}
                                 </div>
                              </div>
                              <hr />
                              <div className='row'>
                                 <div className='col-sm-3'>
                                    <p className='mb-0'>Email</p>
                                 </div>
                                 <div className='col-sm-9'>
                                    {/* <input
                                       disabled={diabledInput}
                                       onChange={(e) => {
                                          setProfileData({
                                             ...profileData,
                                             email: e.target.value,
                                          });
                                       }}
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
                                    /> */}
                                 </div>
                              </div>
                              <hr />
                              <div className='row'>
                                 <div className='col-sm-3'>
                                    <p className='mb-0'>Date of Birth</p>
                                 </div>
                                 <div className='col-sm-9'>
                                    {/* <input
                                       disabled={diabledInput}
                                       onChange={(e) => {
                                          setProfileData({
                                             ...profileData,
                                             dob: e.target.value,
                                          });
                                       }}
                                       className={
                                          " mb-0 " +
                                          (inputBoxBorderNone
                                             ? "border-0"
                                             : "null")
                                       }
                                       value={
                                          profileData.dob ? profileData.dob : ""
                                       }
                                    /> */}
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
                                       onChange={(e) => {
                                          setProfileData({
                                             ...profileData,
                                             gender: e.target.value,
                                          });
                                       }}
                                       className={
                                          " mb-0 " +
                                          (inputBoxBorderNone
                                             ? "border-0"
                                             : "null")
                                       }
                                       value={
                                          gender[profileData.gender]
                                             ? gender[profileData.gender]
                                             : ""
                                       }
                                    /> */}
                                 </div>
                              </div>
                              <hr />
                              <div className='row'>
                                 <div className='col-sm-3'>
                                    <p className='mb-0'>Mobile</p>
                                 </div>
                                 <div className='col-sm-9'>
                                    {/* <input
                                       disabled={diabledInput}
                                       onChange={(e) => {
                                          setProfileData({
                                             ...profileData,
                                             addresses: e.target.value,
                                          });
                                       }}
                                       className={
                                          " mb-0 " +
                                          (inputBoxBorderNone
                                             ? "border-0"
                                             : "null")
                                       }
                                       value={
                                          profileData &&
                                          profileData.addresses &&
                                          profileData.addresses[0] &&
                                          profileData.addresses[0].telephone
                                             ? profileData.addresses[0]
                                                  .telephone
                                             : ""
                                       }
                                    /> */}
                                 </div>
                              </div>
                              <hr />
                              <div className='row'>
                                 <div className='col-sm-3'>
                                    <p className='mb-0'>Created At</p>
                                 </div>
                                 <div className='col-sm-9'>
                                    {/* <p className='text-muted mb-0'>
                                       {profileData.created_at
                                          ? profileData.created_at
                                          : ""}
                                    </p> */}
                                 </div>
                              </div>
                              <hr />
                              <div className='row'>
                                 <div className='col-sm-3'>
                                    <p className='mb-0'>Created In</p>
                                 </div>
                                 <div className='col-sm-9'>
                                    {/* <p className='text-muted mb-0'>
                                       {profileData.created_in
                                          ? profileData.created_in
                                          : ""}
                                    </p> */}
                                 </div>
                              </div>
                              {/* {showUpdateBtn && (
                                 <button
                                    // onClick={editUpdateApi}
                                    type='submit'
                                    style={{
                                       float: "left",
                                       display: "block",
                                    }}
                                    name='register'
                                    className='btn btn-primary  float-end'>
                                    Update changes
                                 </button>
                              )} */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default UserInfo;
