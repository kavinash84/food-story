/** @format */

import React from "react";
import topArticlesImg from "../../assets/topArticles/topArticlesImg.png";

const TopArticles = () => {
   return (
      <div className='container my-5 topArticlesWrapper'>
         <div className='px-2'>
            <h2 className='d-inline'>stories you love</h2>
            <span>&nbsp; (Top articles)</span>
         </div>
         <div className='row row-cols-1 row-cols-md-2 g-4 mx-auto my-2'>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
               <h5 className='card-title'>lorem ipsum</h5>
               <div className='card my-2  rounded-0 '>
                  <img
                     src={topArticlesImg}
                     className='card-img-top rounded-0'
                     alt='...'
                  />
               </div>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6'>
               <h5 className='card-title'>ingredient deep dive</h5>
               <div className='card my-2 rounded-0'>
                  <img
                     src={topArticlesImg}
                     className='card-img-top rounded-0'
                     alt='...'
                  />
               </div>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6 '>
               <h5 className='card-title'>lorem ipsum</h5>
               <div className='card my-2 rounded-0'>
                  <img
                     src={topArticlesImg}
                     className='card-img-top rounded-0'
                     alt='...'
                  />
               </div>
            </div>
            <div className='col-12 col-sm-6 col-md-6 col-lg-6 '>
               <h5 className='card-title'>ingredient deep dive</h5>
               <div className='card my-2 rounded-0'>
                  <img
                     src={topArticlesImg}
                     className='card-img-top rounded-0'
                     alt='...'
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default TopArticles;
