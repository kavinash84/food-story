/** @format */

import React from "react";

const HeroBanner = (props) => (
      <div
         className={`p-5 text-center bg-image rounded-0 heroBannerBg ${props.className}`}>
         <div className='mask'>
            <div className='d-flex justify-content-center align-items-center h-100'>
               <div className='text-white'>
                  <h1 className='mb-3'>Stories</h1>
                  <h4 className='mb-3'>by Sarah</h4>
                  {/* <a
                     className='btn btn-outline-light btn-lg'
                     href='/'
                     role='button'>
                     Call to action
                  </a> */}
               </div>
            </div>
         </div>
      </div>
   );

export default HeroBanner;
