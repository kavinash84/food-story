/** @format */

import React from "react";

import longImg from "../../assets/longImg.png";
import product from "../../assets/product.png";
import Heading from "../commonComponents/Heading";

const SelectionWeek = () => (
      <div className='container selectionWeek'>
         <Heading heading='Selection of the week' />

         <div className='row'>
            <div className='col-7'>
               <div className='row row-cols-1 row-cols-md-2 g-3'>
                  <div className='col-6 main_div'>
                     <div className='card center_div border-0'>
                        <img
                           src={product}
                           className='rounded-0 card-img-top'
                           alt='...'
                        />
                        <div className='card-img-overlay caption'>
                           <p className='card-text mb-0'>
                              <small>SALT FLOWER, &#8377;250</small>
                           </p>
                           <div className='row'>
                              <div className='col-12'>
                                 <button
                                    style={{ marginTop: "4px" }}
                                    type='button'
                                    className='btn btn-outline-primary'>
                                    ADD TO CART
                                 </button>
                                 <span className='heartCirle ms-2'>
                                    <i className='fa-solid fa-heart heartHover' />
                                 </span>
                              </div>

                              {/* <div className='col-2 position-relative'>
                                 <label
                                    for='id-of-input'
                                    className='custom-checkbox'>
                                    <input type='checkbox' id='id-of-input' />

                                    <i className='fa-regular fa-heart'></i>
                                    <i className='fa-solid fa-heart'></i>
                                 </label>
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-6 main_div'>
                     <div className='card center_div border-0'>
                        <img
                           src={product}
                           className='rounded-0 card-img-top'
                           alt='...'
                        />
                        <div className='card-img-overlay caption'>
                           <p className='card-text mb-0'>
                              <small>SALT FLOWER, &#8377;250</small>
                           </p>

                           <div className='row'>
                              <div className='col-12'>
                                 <button
                                    style={{ marginTop: "4px" }}
                                    type='button'
                                    className='btn btn-outline-primary'>
                                    ADD TO CART
                                 </button>
                                 <span className='heartCirle ms-2'>
                                    <i className='fa-solid fa-heart heartHover' />
                                 </span>
                              </div>
                              {/* <div className='col-2 position-relative'>
                                 <label
                                    for='id-of-input'
                                    className='custom-checkbox'>
                                    <input type='checkbox' id='id-of-input' />

                                    <i className='fa-regular fa-heart'></i>
                                    <i className='fa-solid fa-heart'></i>
                                 </label>
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-6 main_div'>
                     <div className='card center_div border-0'>
                        <img
                           src={product}
                           className='rounded-0 card-img-top'
                           alt='...'
                        />
                        <div className='card-img-overlay caption'>
                           <p className='card-text mb-0'>
                              <small>SALT FLOWER, &#8377;250</small>
                           </p>

                           <div className='row'>
                              <div className='col-12'>
                                 <button
                                    style={{ marginTop: "4px" }}
                                    type='button'
                                    className='btn btn-outline-primary'>
                                    ADD TO CART
                                 </button>
                                 <span className='heartCirle ms-2'>
                                    <i className='fa-solid fa-heart heartHover' />
                                 </span>
                              </div>
                              {/* <div className='col-2 position-relative'>
                                 <label
                                    for='id-of-input'
                                    className='custom-checkbox'>
                                    <input type='checkbox' id='id-of-input' />

                                    <i className='fa-regular fa-heart'></i>
                                    <i className='fa-solid fa-heart'></i>
                                 </label>
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>

                  <div className='col-6 main_div'>
                     <div className='card center_div border-0'>
                        <img
                           src={product}
                           className='rounded-0 card-img-top'
                           alt='...'
                        />
                        <div className='card-img-overlay caption'>
                           <p className='card-text mb-0'>
                              <small>SALT FLOWER, &#8377;250</small>
                           </p>

                           <div className='row'>
                              <div className='col-12'>
                                 <button
                                    style={{ marginTop: "4px" }}
                                    type='button'
                                    className='btn btn-outline-primary'>
                                    ADD TO CART
                                 </button>
                                 <span className='heartCirle ms-2'>
                                    <i className='fa-solid fa-heart heartHover' />
                                 </span>
                              </div>
                              {/* <div className='col-2 position-relative'>
                                 <label
                                    for='id-of-input'
                                    className='custom-checkbox'>
                                    <input type='checkbox' id='id-of-input' />

                                    <i className='fa-regular fa-heart'></i>
                                    <i className='fa-solid fa-heart'></i>
                                 </label>
                              </div> */}
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div className='col-5'>
               <div className='row row-cols-1 row-cols-md-1 g-4'>
                  <div className='col-12'>
                     <div className='card border-0 rightBlock '>
                        <img
                           src={longImg}
                           className='card-img-top rounded-0'
                           alt='...'
                        />
                        <div className='card-img-overlay caption2'>
                           <p className='card-text mb-0'>
                              <small>Fall in love with Kombu by Sarah</small>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <p className='discoverAllTxt my-5'>Discover all</p>
      </div>
   );

export default SelectionWeek;
