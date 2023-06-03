/** @format */

import React from "react";
import { Link } from "react-router-dom";

import collage2 from "../../assets/collage2.png";
import "../../CollageImages.css";
import Heading from "../commonComponents/Heading";

const StoriesByFoodLover = (props) => {
   const owl = $(document).ready(() => {
      $(".screenshot_slider").owlCarousel({
         loop: true,
         responsiveClass: true,
         nav: false,
         autoplay: false,
         margin: 0,
         autoplayTimeout: 4000,
         smartSpeed: 4000,
         center: true,
         //   navText: ["&#8592;", "&#8594;"],
         responsive: {
            0: {
               items: 1,
            },
            600: {
               items: 5,
            },
            1200: {
               items: 5,
            },
         },
      });
   });

   /** ************************* */

   jQuery(document.documentElement).keydown((event) => {
      // var owl = jQuery("#carousel");

      // handle cursor keys
      if (event.keyCode == 37) {
         // go left
         owl.trigger("prev.owl.carousel", [400]);
         // owl.trigger('owl.prev');
      } else if (event.keyCode == 39) {
         // go right
         owl.trigger("next.owl.carousel", [400]);
         // owl.trigger('owl.next');
      }
   });

   return (
      <div
         className={`container-fluid StoriesByFoodLover ${props.discoverBgColor}`}>
         <Heading heading={props.heading ?? "Stories by Foodlovers"} />

         <div className='section-padding'>
            <div className='screenshot_slider owl-carousel'>
               <div className='item'>
                  <Link to='/stories'>
                     <img src={collage2} alt='' title='' />
                  </Link>
               </div>
               <div className='item'>
                  <Link to='/stories'>
                     <img src={collage2} alt='' title='' />
                  </Link>
               </div>
               <div className='item'>
                  <Link to='/stories'>
                     <img src={collage2} alt='' title='' />
                  </Link>
               </div>
               <div className='item'>
                  <Link to='/stories'>
                     <img src={collage2} alt='' title='' />
                  </Link>
               </div>
               <div className='item'>
                  <Link to='/stories'>
                     <img src={collage2} alt='' title='' />
                  </Link>
               </div>
               <div className='item'>
                  <Link to='/stories'>
                     <img src={collage2} alt='' title='' />
                  </Link>
               </div>
               <div className='item'>
                  <Link to='/stories'>
                     <img src={collage2} alt='' title='' />
                  </Link>
               </div>
               <div className='item'>
                  <Link to='/stories'>
                     <img src={collage2} alt='' title='' />
                  </Link>
               </div>
            </div>
         </div>
         <p className='discoverAllTxt' style={props.style}>
            <Link to='/stories' style={props.style}>
               Discover all
            </Link>
         </p>
      </div>
   );
};

export default StoriesByFoodLover;
