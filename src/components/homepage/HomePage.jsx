/** @format */

import React from "react";
import Navigation from "./Navigation";
// import Slider from "./Slider";
import ShopByCategory from "./ShopByCategory";
import SelectionWeek from "./SelectionWeek";
import CollageImages from "./CollageImages";
import StoriesByFoodLover from "./StoriesByFoodLover";
import GreatStories from "./GreatStories";
import StoryBegin from "./StoryBegin";
import Footer from "../commonComponents/Footer";
import HeaderTopStrip from "./HeaderTopStrip";
import heroBanner from "../../assets/heroBanner.png";
import { BsSearch } from "react-icons/bs";

const HomePage = () => {
   return (
      <div className='container-fluid p-0'>
         <div className='row'>
            <div>
               <div className='navWrapper'>
                  <div className='heroBanner'>
                     <HeaderTopStrip />
                     <Navigation />
                     <div
                        id='carouselExampleDark'
                        className='carousel slide'
                        data-bs-ride='carousel'>
                        <div className='carousel-indicators'>
                           <button
                              type='button'
                              data-bs-target='#carouselExampleDark'
                              data-bs-slide-to='0'
                              className='active'
                              aria-current='true'
                              aria-label='Slide 1'></button>
                           <button
                              type='button'
                              data-bs-target='#carouselExampleDark'
                              data-bs-slide-to='1'
                              aria-label='Slide 2'></button>
                           <button
                              type='button'
                              data-bs-target='#carouselExampleDark'
                              data-bs-slide-to='2'
                              aria-label='Slide 3'></button>
                        </div>
                        <div className='carousel-inner'>
                           <div
                              className='carousel-item active'
                              data-bs-interval='10000'>
                              <img
                                 src={heroBanner}
                                 className='d-block w-100'
                                 alt='...'
                              />
                              <div className='carousel-caption d-none d-md-block'>
                                 <div className='heroBannerText'>
                                    <h2>The place where stories begin</h2>
                                    <p>
                                       Explore our exclusive selection for
                                       unforgettable culinary experiences.
                                    </p>
                                    <button
                                       type='button'
                                       className='btn btn-light'>
                                       SHOP OUR PRODUCTS
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div
                              className='carousel-item'
                              data-bs-interval='2000'>
                              <img
                                 src={heroBanner}
                                 className='d-block w-100'
                                 alt='...'
                              />
                              <div className='carousel-caption d-none d-md-block'>
                                 <div className='heroBannerText'>
                                    <h2>The place where stories begin</h2>
                                    <p>
                                       Explore our exclusive selection for
                                       unforgettable culinary experiences.
                                    </p>
                                    <button
                                       type='button'
                                       className='btn btn-light'>
                                       SHOP OUR PRODUCTS
                                    </button>
                                 </div>
                              </div>
                           </div>
                           <div className='carousel-item'>
                              <img
                                 src={heroBanner}
                                 className='d-block w-100'
                                 alt='...'
                              />
                              <div className='carousel-caption d-none d-md-block'>
                                 <div className='heroBannerText'>
                                    <h2>The place where stories begin</h2>
                                    <p>
                                       Explore our exclusive selection for
                                       unforgettable culinary experiences.
                                    </p>
                                    <button
                                       type='button'
                                       className='btn btn-light'>
                                       SHOP OUR PRODUCTS
                                    </button>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <button
                           className='carousel-control-prev'
                           type='button'
                           data-bs-target='#carouselExampleDark'
                           data-bs-slide='prev'>
                           <span
                              className='carousel-control-prev-icon'
                              aria-hidden='true'></span>
                           <span className='visually-hidden'>Previous</span>
                        </button>
                        <button
                           className='carousel-control-next'
                           type='button'
                           data-bs-target='#carouselExampleDark'
                           data-bs-slide='next'>
                           <span
                              className='carousel-control-next-icon'
                              aria-hidden='true'></span>
                           <span className='visually-hidden'>Next</span>
                        </button>
                     </div>

                     <form
                        className='d-flex justify-content-center customSearch my-5'
                        role='search'>
                        <input
                           className='form-control'
                           type='search'
                           placeholder='I am looking for an ingredient, a recipe, a masterclass'
                           aria-label='Search'
                        />
                        <button className='btn ' type='submit'>
                           <BsSearch />
                        </button>
                     </form>

                     {/* <div className='heroBannerText'>
                        <h2>The place where stories begin</h2>
                        <p>
                           Explore our exclusive selection for unforgettable
                           culinary experiences.
                        </p>
                        <button type='button' className='btn btn-light'>
                           SHOP OUR PRODUCTS
                        </button>
                     </div> */}
                  </div>
                  <ShopByCategory />
                  <SelectionWeek />
                  <CollageImages />
                  <StoriesByFoodLover />
                  <GreatStories />
                  <StoryBegin />
                  <Footer />

                  {/* <Slider /> */}
               </div>
            </div>
         </div>
      </div>
   );
};

export default HomePage;
