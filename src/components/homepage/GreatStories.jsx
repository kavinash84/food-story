/** @format */

import React from "react";
import recipe1 from "../../assets/recipe1.png";
import Heading from "../commonComponents/Heading";

const GreatStories = (props) => {
   return (
      <div
         className={`GreatStories container-fluid  ${
            props.className ?? "mt-5"
         }`}>
         <div className={`px-2  ${props.className ?? "py-5"}`}>
            <Heading heading='Great stories deserve great recipes' />
         </div>
         <div className='pinkBg'></div>
         <div className='container'>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
               <div className='col'>
                  <div className='card border-0'>
                     <img
                        src={recipe1}
                        className='card-img-top rounded-0'
                        alt='...'
                     />
                     <div className='card-body'>
                        <h5 className='card-title'>Once upon a naan</h5>
                        <p className='card-text'>
                           This is the story of peas and carrots, living in a
                           vegetable garden. Not only a child story, but a story
                           who will make everyone hungry [...]
                        </p>
                     </div>
                  </div>
               </div>
               <div className='col'>
                  <div className='card border-0'>
                     <img
                        src={recipe1}
                        className='card-img-top rounded-0'
                        alt='...'
                     />
                     <div className='card-body'>
                        <h5 className='card-title'>
                           An afternoon in the garden
                        </h5>
                        <p className='card-text'>
                           This is the story of peas and carrots, living in a
                           vegetable garden. Not only a child story, but a story
                           who will make everyone hungry [...]
                        </p>
                     </div>
                  </div>
               </div>
               <div className='col'>
                  <div className='card border-0'>
                     <img
                        src={recipe1}
                        className='card-img-top rounded-0'
                        alt='...'
                     />
                     <div className='card-body'>
                        <h5 className='card-title'>Deep into the happiness</h5>
                        <p className='card-text'>
                           This is the story of peas and carrots, living in a
                           vegetable garden. Not only a child story, but a story
                           who will make everyone hungry [...]
                        </p>
                     </div>
                  </div>
               </div>
               <button type='button' className='btn btn-outline-primary'>
                  REad MORE
               </button>
            </div>
         </div>
      </div>
   );
};

export default GreatStories;
