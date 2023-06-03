/** @format */

import React, { useState } from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Rating from "@mui/material/Rating";

import cheese from "../../assets/cheese.png";
import humanImg from "../../assets/person_1.jpg";
import humanImg2 from "../../assets/person_2.jpg";
import Heading from "../commonComponents/Heading";

const ShopByCategory = (props) => {
   const [value, setValue] = useState();
   const [value2, setValue2] = useState();
   const [value3, setValue3] = useState();
   const [value4, setValue4] = useState();
   const [value5, setValue5] = useState();

   const options = {
      margin: 30,
      responsiveClass: true,
      nav: true,
      dots: false,
      autoplay: false,
      navText: ["Prev", "Next"],
      smartSpeed: 1000,

      responsive: {
         0: {
            items: 1,
         },
         400: {
            items: 1,
         },
         600: {
            items: 2,
         },
         700: {
            items: 3,
         },
         1000: {
            items: 5,
         },
      },
   };
   return (
      <div className='container-fluid px-0 ShopByCategory '>
         <Heading heading={props.heading ?? "Shop by category"} />

         <OwlCarousel
            className={`'owl-theme slider-items owl-carousel' ${props.carouselNavBTN}`}
            // {...options}
            responsive={{
               320: {
                  items: 3,
               },
               1025: {
                  items: props.items ?? 3,
               },
            }}
            loop
            margin={1}
            nav
            dots={false}
            // center={true}
            autoplay={false}
            stagePadding={props.stagePadding ?? 200}
            items={3}>
            <div className='item'>
               {props.type ? (
                  <div className='card rounded-0 border-0 mx-2'>
                     <div className='card-body'>
                        <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                           Chandra
                        </span>
                        <span className='card-title w-50 float-right  d-inline-block ratingBox text-end '>
                           <Rating
                              name='simple-controlled'
                              value={value}
                              onChange={(event, newValue) => {
                                 setValue(newValue);
                              }}
                           />
                        </span>
                        <p className='card-text text-dark pdptxt'>
                           Most commonly used in savoury preparations, it can
                           also, amazingly, balance the sweetness of baked
                           goods, without making them too salty. delighted! Most
                           commonly used in savoury preparations, it can also,
                           amazingly, balance thesweetness of baked goods,
                           without making them too salty. Prepare to be
                           delighted!
                        </p>
                        <div className='row'>
                           <div className='col-3'>
                              <img
                                 src={cheese}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                           <div className='col-3'>
                              <img
                                 src={cheese}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className='card rounded-0 border-0 mx-2'>
                     <img
                        src={cheese}
                        className='card-img-top rounded-0'
                        alt='...'
                     />
                     <div className='card-img-overlay'>
                        <p className='card-text'>
                           <small>BAKERY</small>
                        </p>
                     </div>
                  </div>
               )}
            </div>

            <div className='item'>
               {props.type ? (
                  <div className='card rounded-0 border-0 mx-2'>
                     <div className='card-body'>
                        <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                           Dhaval
                        </span>
                        <span className='card-title w-50 float-right  d-inline-block ratingBox text-end '>
                           <Rating
                              name='simple-controlled'
                              value={value2}
                              onChange={(event, newValue2) => {
                                 setValue2(newValue2);
                              }}
                           />
                        </span>
                        <p className='card-text text-dark pdptxt'>
                           Most commonly used in savoury preparations, it can
                           also, amazingly, balance the sweetness of baked
                           goods, without making them too salty. delighted! Most
                           commonly used in savoury preparations, it can also,
                           amazingly, balance thesweetness of baked goods,
                           without making them too salty. Prepare to be
                           delighted!
                        </p>
                        <div className='row'>
                           <div className='col-3'>
                              <img
                                 src={humanImg}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                           <div className='col-3'>
                              <img
                                 src={humanImg2}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className='card rounded-0 border-0 mx-2'>
                     <img
                        src={cheese}
                        className='card-img-top rounded-0'
                        alt='...'
                     />
                     <div className='card-img-overlay'>
                        <p className='card-text'>
                           <small>BAKERY</small>
                        </p>
                     </div>
                  </div>
               )}
            </div>
            <div className='item'>
               {props.type ? (
                  <div className='card rounded-0 border-0 mx-2'>
                     <div className='card-body'>
                        <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                           Jaya
                        </span>
                        <span className='card-title w-50 float-right  d-inline-block ratingBox text-end '>
                           <Rating
                              name='simple-controlled'
                              value={value3}
                              onChange={(event, newValue3) => {
                                 setValue3(newValue3);
                              }}
                           />
                        </span>
                        <p className='card-text text-dark pdptxt'>
                           Most commonly used in savoury preparations, it can
                           also, amazingly, balance the sweetness of baked
                           goods, without making them too salty. delighted! Most
                           commonly used in savoury preparations, it can also,
                           amazingly, balance thesweetness of baked goods,
                           without making them too salty. Prepare to be
                           delighted!
                        </p>
                        <div className='row'>
                           <div className='col-3'>
                              <img
                                 src={humanImg2}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                           <div className='col-3'>
                              <img
                                 src={humanImg}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className='card rounded-0 border-0 mx-2'>
                     <img
                        src={cheese}
                        className='card-img-top rounded-0'
                        alt='...'
                     />
                     <div className='card-img-overlay'>
                        <p className='card-text'>
                           <small>BAKERY</small>
                        </p>
                     </div>
                  </div>
               )}
            </div>
            <div className='item'>
               {props.type ? (
                  <div className='card rounded-0 border-0 mx-2'>
                     <div className='card-body'>
                        <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                           Yogesh
                        </span>
                        <span className='card-title w-50 float-right  d-inline-block ratingBox text-end '>
                           <Rating
                              name='simple-controlled'
                              value={value4}
                              onChange={(event, newValue4) => {
                                 setValue4(newValue4);
                              }}
                           />
                        </span>
                        <p className='card-text text-dark pdptxt'>
                           Most commonly used in savoury preparations, it can
                           also, amazingly, balance the sweetness of baked
                           goods, without making them too salty. delighted! Most
                           commonly used in savoury preparations, it can also,
                           amazingly, balance thesweetness of baked goods,
                           without making them too salty. Prepare to be
                           delighted!
                        </p>
                        <div className='row'>
                           <div className='col-3'>
                              <img
                                 src={humanImg}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                           <div className='col-3'>
                              <img
                                 src={humanImg2}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className='card rounded-0 border-0 mx-2'>
                     <img
                        src={cheese}
                        className='card-img-top rounded-0'
                        alt='...'
                     />
                     <div className='card-img-overlay'>
                        <p className='card-text'>
                           <small>BAKERY</small>
                        </p>
                     </div>
                  </div>
               )}
            </div>
            <div className='item'>
               {props.type ? (
                  <div className='card rounded-0 border-0 mx-2'>
                     <div className='card-body'>
                        <span className='card-title w-50 float-left d-inline-block coconutTxt'>
                           Venkat
                        </span>
                        <span className='card-title w-50 float-right  d-inline-block ratingBox text-end '>
                           <Rating
                              name='simple-controlled'
                              value={value4}
                              onChange={(event, newValue4) => {
                                 setValue4(newValue4);
                              }}
                           />
                        </span>
                        <p className='card-text text-dark pdptxt'>
                           Most commonly used in savoury preparations, it can
                           also, amazingly, balance the sweetness of baked
                           goods, without making them too salty. delighted! Most
                           commonly used in savoury preparations, it can also,
                           amazingly, balance thesweetness of baked goods,
                           without making them too salty. Prepare to be
                           delighted!
                        </p>
                        <div className='row'>
                           <div className='col-3'>
                              <img
                                 src={humanImg2}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                           <div className='col-3'>
                              <img
                                 src={humanImg}
                                 className='card-img-top'
                                 alt='...'
                              />
                           </div>
                        </div>
                     </div>
                  </div>
               ) : (
                  <div className='card rounded-0 border-0 mx-2'>
                     <img
                        src={cheese}
                        className='card-img-top rounded-0'
                        alt='...'
                     />
                     <div className='card-img-overlay'>
                        <p className='card-text'>
                           <small>BAKERY</small>
                        </p>
                     </div>
                  </div>
               )}
            </div>
         </OwlCarousel>
         <p className='discoverAllTxt mt-3 mb-5' style={props.style}>
            Discover all
         </p>
      </div>
   );
};

export default ShopByCategory;
