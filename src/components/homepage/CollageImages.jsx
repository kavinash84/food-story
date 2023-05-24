/** @format */

import React from "react";
import collage1 from "../../assets/collage1.png";
import collage2 from "../../assets/collage2.png";
import collage3 from "../../assets/collage3.png";
import Heading from "../commonComponents/Heading";

const CollageImages = () => {
   return (
      <div
         className='container-fluid CollageImages'
         style={{ background: "#FBF7F7" }}>
         <Heading
            heading=' Many ways to eat, your way to shop'
            className='px-2 pt-5 pb-3 my-3'
            style={{ color: "#A0383F" }}
         />

         <div className='container'>
            <div className='row'>
               <div className='col-6'>
                  <div className='row row-cols-1 row-cols-md-2'>
                     <div className='col-6'>
                        <div className='row row-cols-1 row-cols-md-1'>
                           <div className='card  border-0'>
                              <img
                                 src={collage1}
                                 className='card-img-top rounded-0'
                                 alt='...'
                              />
                              <div className='card-img-overlay'>
                                 <p className='card-text mb-0'>
                                    <small>GLUTEN FREE</small>
                                 </p>
                              </div>
                           </div>
                           <div className='card  border-0 mt-4'>
                              <img
                                 src={collage1}
                                 className='card-img-top rounded-0'
                                 alt='...'
                              />
                              <div className='card-img-overlay'>
                                 <p className='card-text mb-0'>
                                    <small>GLUTEN FREE</small>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='row row-cols-1 row-cols-md-1'>
                           <div className='card  border-0'>
                              <img
                                 src={collage2}
                                 style={{ height: "636px" }}
                                 className='card-img-top rounded-0'
                                 alt='...'
                              />
                              <div
                                 className='card-img-overlay'
                                 style={{ top: "594px" }}>
                                 <p className='card-text mb-0'>
                                    <small>GLUTEN FREE</small>
                                 </p>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='col-6'>
                  <div className='row row-cols-1 row-cols-md-2'>
                     <div className='col-6'>
                        <div className='card  border-0'>
                           <img
                              src={collage1}
                              className='card-img-top rounded-0'
                              alt='...'
                           />
                           <div className='card-img-overlay'>
                              <p className='card-text mb-0'>
                                 <small>GLUTEN FREE</small>
                              </p>
                           </div>
                        </div>
                     </div>
                     <div className='col-6'>
                        <div className='card  border-0'>
                           <img
                              src={collage1}
                              className='card-img-top rounded-0'
                              alt='...'
                           />
                           <div className='card-img-overlay'>
                              <p className='card-text mb-0'>
                                 <small>GLUTEN FREE</small>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className='row row-cols-1 row-cols-md-1 mt-4'>
                     <div className='col-12'>
                        <div className='card  border-0'>
                           <img
                              src={collage3}
                              className='card-img-top rounded-0'
                              alt='...'
                           />
                           <div className='card-img-overlay'>
                              <p className='card-text mb-0'>
                                 <small>GLUTEN FREE</small>
                              </p>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <p className='discoverAllTxt my-5'></p>
      </div>
   );
};

export default CollageImages;
