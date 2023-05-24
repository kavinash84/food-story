/** @format */

import React from "react";
import { Link } from "react-router-dom";

const UserAddress = () => {
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

                     {/* {getAddData &&
                        getAddData.map((getAddress) => {
                           {
                              console.log("getAddress", getAddress.id);
                           }
                           return (
                              <div
                                 className='col-sm-3 mb-4'
                                 key={getAddress && getAddress.id}>
                                 <div className='card'>
                                    <div className='card-body'>
                                       <h5 className='card-title '>
                                          {getAddress &&
                                             getAddress[0].firstName}
                                       </h5>
                                       <p className='card-text'>
                                          <p className='text-muted mb-0'>
                                             {getAddress && getAddress[0].phone}
                                          </p>
                                          <p className='text-muted mb-0'>
                                             {getAddress && getAddress[0].state}
                                          </p>
                                       </p>

                                       <Link to='/updateAdd'>
                                          <button
                                             onClick={() =>
                                                setToLocalStorage(
                                                   getAddress[0].firstName,
                                                   getAddress[0].lastName,
                                                   getAddress[0].phone,
                                                   getAddress[0].city,
                                                   getAddress[0].flat,
                                                   getAddress.id,
                                                   getAddress[0].landmark,
                                                   getAddress[0].state,
                                                   getAddress[0].pincode
                                                )
                                             }
                                             type='button'
                                             className='btn btn-primary me-2'
                                             data-bs-toggle='modal'
                                             data-bs-target='#exampleModal'>
                                             Edit
                                          </button>
                                       </Link>

                                       <a
                                          onClick={() =>
                                             handleDelete(getAddress.id)
                                          }
                                          href='#'
                                          className='btn btn-primary'>
                                          Delete
                                       </a>
                                    </div>
                                 </div>
                              </div>
                           );
                        })} */}
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
