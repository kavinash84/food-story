/** @format */

import React, { useState } from "react";
import Rating from "@mui/material/Rating";

const ProductsItems = (props) => {
   const [value, setValue] = useState();

   return (
      <>
         {props.type === "catalog" ? (
            <div className='row row-cols-1 row-cols-md-4 g-4'>
               <div className='col'>
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
                           SALT FLOWER
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
               <div className='col'>
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
                           SALT FLOWER
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
               <div className='col'>
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
                           SALT FLOWER
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
               <div className='col'>
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
                           SALT FLOWER
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
         ) : (
            <div className='row row-cols-1 row-cols-md-3 g-4'>
               <div className='col'>
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
                           SALT FLOWER
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
                        <button className='btn atcBtn'>ADD TO CART</button>
                        <span className='heartCirle ms-2'>
                           <i class='fa-solid fa-heart heartHover'></i>
                        </span>
                     </div>
                  </div>
               </div>
               <div className='col'>
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
                           SALT FLOWER
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
                        <button className='btn atcBtn'>ADD TO CART</button>
                        <span className='heartCirle ms-2'>
                           <i class='fa-solid fa-heart heartHover'></i>
                        </span>
                     </div>
                  </div>
               </div>
               <div className='col'>
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
                           SALT FLOWER
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
                        <button className='btn atcBtn'>ADD TO CART</button>
                        <span className='heartCirle ms-2'>
                           <i class='fa-solid fa-heart heartHover'></i>
                        </span>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
};

export default ProductsItems;
