/** @format */

import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link,useNavigate } from "react-router-dom";

import { setCurrentAddress } from "../../redux/slices/meSlice";

const UserAddress = () => {
   const dispatch = useDispatch();
   const navigate = useNavigate();
   const addressList = useSelector(state=>state.me.addressList);
return (
      <div>
         <div className='row'>
            <div className='tab-content' id='pills-tabContent'>
               <div
                  className='tab-pane fade show active'
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

                     {addressList.map((getAddress) => (
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
                                             {/* <Link to='/updateAdd'> */}
                                                <button
                                                   onClick={() =>{
                                                      dispatch(setCurrentAddress(getAddress));
                                                      navigate('/updateAdd');
                                                   }}
                                                   type='button'
                                                   className='btn btn-primary me-2'
                                                   data-bs-toggle='modal'
                                                   data-bs-target='#exampleModal'>
                                                   Edit
                                                </button>
                                             {/* </Link> */}
                                             <button
                                             type="button"
                                                onClick={() =>{
                                                   // handleDelete(getAddress.id)
                                                }}
                                                href='#'
                                                className='btn btn-primary'>
                                                Delete
                                             </button>
                                          </div>
                                       </div>
                                    </div>
                           ))}
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
   );

   };
export default UserAddress;
