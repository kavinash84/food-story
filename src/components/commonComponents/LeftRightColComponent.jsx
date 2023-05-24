/** @format */

import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import catalogImg from "../../assets/catalogImg.png";

const LeftRightColComponent = (props) => {
   const [value, setValue] = useState();

   return (
      <div style={{ width: "98%" }}>
         <div className='row'>
            <div className='col-6'>
               <div className='row'>
                  <div className='col-6'>
                     <div className='card h-100 border-0 rounded-0'>
                        <div className='hoverEffectWrapper'>
                           <div className='hoverImgEffect'>
                              <span className='badge rounded-pill badgeTxt'>
                                 A+
                              </span>
                           </div>
                        </div>
                        <div className='card-body'>
                           <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                              COCONUT OIL
                           </span>
                           <span className='card-title w-50 float-right  d-inline-block text-end coconutTxt'>
                              &#8377;250
                           </span>
                           <div className='ratingBox'>
                              <Rating
                                 name='simple-controlled'
                                 value={value}
                                 onChange={(event, newValue) => {
                                    setValue(newValue);
                                 }}
                              />
                           </div>
                           <button className='btn atcBtn' style={props.style}>
                              ADD TO CART
                           </button>
                           <span className='heartCirle ms-2'>
                              <i class='fa-solid fa-heart heartHover'></i>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className='col-6'>
                     <div className='card h-100 border-0 rounded-0'>
                        <div className='hoverEffectWrapper'>
                           <div className='hoverImgEffect'>
                              <span className='badge rounded-pill badgeTxt'>
                                 A+
                              </span>
                           </div>
                        </div>
                        <div className='card-body'>
                           <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                              COCONUT OIL
                           </span>
                           <span className='card-title w-50 float-right  d-inline-block text-end coconutTxt'>
                              &#8377;250
                           </span>
                           <div className='ratingBox'>
                              <Rating
                                 name='simple-controlled'
                                 value={value}
                                 onChange={(event, newValue) => {
                                    setValue(newValue);
                                 }}
                              />
                           </div>
                           <button className='btn atcBtn' style={props.style}>
                              ADD TO CART
                           </button>
                           <span className='heartCirle ms-2'>
                              <i class='fa-solid fa-heart heartHover'></i>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className='col-6'>
                     <div className='card h-100 border-0 rounded-0'>
                        <div className='hoverEffectWrapper'>
                           <div className='hoverImgEffect'>
                              <span className='badge rounded-pill badgeTxt'>
                                 A+
                              </span>
                           </div>
                        </div>
                        <div className='card-body'>
                           <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                              COCONUT OIL
                           </span>
                           <span className='card-title w-50 float-right  d-inline-block text-end coconutTxt'>
                              &#8377;250
                           </span>
                           <div className='ratingBox'>
                              <Rating
                                 name='simple-controlled'
                                 value={value}
                                 onChange={(event, newValue) => {
                                    setValue(newValue);
                                 }}
                              />
                           </div>
                           <button className='btn atcBtn' style={props.style}>
                              ADD TO CART
                           </button>
                           <span className='heartCirle ms-2'>
                              <i class='fa-solid fa-heart heartHover'></i>
                           </span>
                        </div>
                     </div>
                  </div>
                  <div className='col-6'>
                     <div className='card h-100 border-0 rounded-0'>
                        <div className='hoverEffectWrapper'>
                           <div className='hoverImgEffect'>
                              <span className='badge rounded-pill badgeTxt'>
                                 A+
                              </span>
                           </div>
                        </div>
                        <div className='card-body'>
                           <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                              COCONUT OIL
                           </span>
                           <span className='card-title w-50 float-right  d-inline-block text-end coconutTxt'>
                              &#8377;250
                           </span>
                           <div className='ratingBox'>
                              <Rating
                                 name='simple-controlled'
                                 value={value}
                                 onChange={(event, newValue) => {
                                    setValue(newValue);
                                 }}
                              />
                           </div>
                           <button className='btn atcBtn' style={props.style}>
                              ADD TO CART
                           </button>
                           <span className='heartCirle ms-2'>
                              <i class='fa-solid fa-heart heartHover'></i>
                           </span>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='col-6'>
               <div className='card border-0 rightBlock '>
                  <img
                     src={catalogImg}
                     className='card-img-top rounded-0'
                     alt='...'
                  />
                  <div className='card-img-overlay caption2'>
                     <p className='card-text mb-0'>
                        <small>Stories of vegan Kombu recipe</small>
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default LeftRightColComponent;
