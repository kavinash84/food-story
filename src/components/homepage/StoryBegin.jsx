/** @format */

import React from "react";
import storyBg from "../../assets/storyBg.png";
import storyIcon from "../../assets/storyIcon.png";

const StoryBegin = () => {
   return (
      <div className='StoryBegin container-fluid px-0'>
         <img src={storyBg} alt='0' className='img-fluid' />
         <div className='storyBeginTxtWrapper mx-auto'>
            <div className='container w-75 mx-auto '>
               <p className='lead'>A place where stories begin.</p>
               <p className='small'>
                  The New Deli store is not only a store. It is a blank page to
                  write all your foodstories. A spot where foodlovers,
                  epicureans & gourmets share their passions and their greatest
                  recipes. And the best part? We do your shopping for you. Yes,
                  having your own personal shopper while using Whatsapp never be
                  easier.
               </p>

               <div className='row row-cols-1 row-cols-md-3 g-4 my-3'>
                  <div className='col'>
                     <div className='card h-100 rounded-0 border-0 cardBgNone'>
                        <img
                           src={storyIcon}
                           className='card-img-top img-fluid storyIconImg'
                           alt='...'
                        />
                        <div className='card-body'>
                           <h5 className='card-title  text-center'>
                              <b>Masterclasses</b>
                           </h5>
                           <p className='card-text  text-center'>
                              at the Kitchen Studio
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className='col'>
                     <div className='card h-100 rounded-0 border-0 cardBgNone'>
                        <img
                           src={storyIcon}
                           className='card-img-top img-fluid storyIconImg'
                           alt='...'
                        />
                        <div className='card-body'>
                           <h5 className='card-title  text-center'>
                              <b>Personal shopper</b>
                           </h5>
                           <p className='card-text  text-center'>
                              while using Whatsapp
                           </p>
                        </div>
                     </div>
                  </div>
                  <div className='col'>
                     <div className='card h-100 rounded-0 border-0 cardBgNone'>
                        <img
                           src={storyIcon}
                           className='card-img-top img-fluid storyIconImg'
                           alt='...'
                        />
                        <div className='card-body'>
                           <h5 className='card-title  text-center'>
                              <b>An entire hall</b>
                           </h5>
                           <p className='card-text  text-center'>
                              dedicated to foodlovers
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <p className='discoverAllTxt py-3'>MORE ABOUT US</p>
         </div>
      </div>
   );
};

export default StoryBegin;
