/** @format */

import Rating from "@mui/material/Rating";
import React, { useEffect, useState } from "react";
import { FiDroplet } from "react-icons/fi";
import { TbSalad , TbMilk , TbEggs , TbCheese } from "react-icons/tb";

import pdp1 from "../../assets/pdp1.png";
import pdp2 from "../../assets/pdp2.png";
import product from "../../assets/product.png";
import Footer from "../commonComponents/Footer";
import Heading from "../commonComponents/Heading";
import ProductsItems from "../commonComponents/ProductsItems";
import BreadCrumbs from "../homepage/BreadCrumbs";
import GreatStories from "../homepage/GreatStories";
import Navigation from "../homepage/Navigation";
import ShopByCategory from "../homepage/ShopByCategory";
import StoriesByFoodLover from "../homepage/StoriesByFoodLover";
import StoryBegin from "../homepage/StoryBegin";

const PdpComponent = () => {
   const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.
   const [value, setValue] = useState();

   function increment() {
      // setCount(prevCount => prevCount+=1);
      setCount((prevCount) => (prevCount += 1));
   }

   function decrement() {
      setCount((prevCount) => {
         if (prevCount > 0) {
            return (prevCount -= 1);
         } 
            return (prevCount = 0);
         
      });
   }
   useEffect(() => {
      window.scrollTo(0, 0);
   }, []);

   return (
      <div className='container-fluid pdpWrapper px-0'>
         <Navigation className='bgColorChange' />
         <div className='width90'>
            <BreadCrumbs />
            <div className='container-fluid px-0 bg-white pdpInsideBgColor mt-4'>
               <div className='row'>
                  <div className='col-6'>
                     <div className='container'>
                        <div className='row'>
                           <div className='col-12 px-0'>
                              <img
                                 src={pdp1}
                                 alt='0'
                                 style={{ width: "94.5%" }}
                              />
                           </div>
                           <div className='col-12'>
                              <div className='row'>
                                 <div className='row row-cols-1 row-cols-md-2 g-4'>
                                    <div className='col'>
                                       <div className='card  rounded-0 border-0'>
                                          <img
                                             src={pdp2}
                                             className='card-img-top rounded-0'
                                             alt='...'
                                          />
                                       </div>
                                    </div>
                                    <div className='col'>
                                       <div className='card  rounded-0 border-0'>
                                          <img
                                             src={pdp2}
                                             className='card-img-top  rounded-0'
                                             alt='...'
                                          />
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className='divider mt-5 mb-4' />
                        <div className='row'>
                           <div className='col-4'>
                              <div className='ingredientsWrapper'>
                                 <div className='row'>
                                    <h2 className='ingredientsTxt'>
                                       Ingredients
                                    </h2>

                                    <div className='col-1 circleParent px-0'>
                                       <span className='dot' />
                                    </div>
                                    <div className='col-11 ps-0'>
                                       <ul className='list-group'>
                                          <li className='list-group-item border-0 ps-0'>
                                             Water
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className='row'>
                                    <div className='col-1 circleParent px-0'>
                                       <span className='dot' />
                                    </div>
                                    <div className='col-11 ps-0'>
                                       <ul className='list-group'>
                                          <li className='list-group-item border-0 ps-0'>
                                             Raw Cocoa
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className='row'>
                                    <div className='col-1 circleParent px-0'>
                                       <span className='dot' />
                                    </div>
                                    <div className='col-11 ps-0'>
                                       <ul className='list-group'>
                                          <li className='list-group-item border-0 ps-0'>
                                             Vanilla
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className='row'>
                                    <div className='col-1 circleParent px-0'>
                                       <span className='dot' />
                                    </div>
                                    <div className='col-11 ps-0'>
                                       <ul className='list-group'>
                                          <li className='list-group-item border-0 ps-0'>
                                             Salted Caramel
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                                 <div className='row'>
                                    <div className='col-1 circleParent px-0'>
                                       <span className='dot' />
                                    </div>
                                    <div className='col-11 ps-0'>
                                       <ul className='list-group'>
                                          <li className='list-group-item border-0 ps-0'>
                                             Rose
                                          </li>
                                       </ul>
                                    </div>
                                 </div>
                              </div>
                           </div>

                           <div className='col-8'>
                              <div className='lifeStyleWrapper'>
                                 <h2 className='ingredientsTxt'>Lifestyle</h2>
                                 <button
                                    type='button'
                                    className='btn btn-primary rounded-0 me-2  mt-2'>
                                    Vegan
                                 </button>
                                 <button
                                    type='button'
                                    className='btn btn-primary rounded-0 me-2  mt-2'>
                                    Gluten Free
                                 </button>
                                 <button
                                    type='button'
                                    className='btn btn-primary rounded-0 me-2  mt-2'>
                                    Keto
                                 </button>
                                 <button
                                    type='button'
                                    className='btn btn-primary rounded-0 me-2  mt-2'>
                                    Sugar-free
                                 </button>
                                 <button
                                    type='button'
                                    className='btn btn-primary rounded-0 me-2  mt-2'>
                                    Diabetic friendly
                                 </button>
                                 <button
                                    type='button'
                                    className='btn btn-primary rounded-0 me-2  mt-2'>
                                    Dairy-free
                                 </button>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='col-6'>
                     <div className='row boxChocoWrapper'>
                        <h2>Box of fine chocolate</h2>
                        <p>₹750</p>
                        <div className='wrapper mb-3'>
                           <input type='radio' name='rate' id='star-1' />
                           <input type='radio' name='rate' id='star-2' />
                           <input type='radio' name='rate' id='star-3' />
                           <input type='radio' name='rate' id='star-4' />
                           <input type='radio' name='rate' id='star-5' />
                           <div className='content'>
                              <div className='stars'>
                                 <label
                                    htmlFor='star-1'
                                    className='star-1 fas fa-star' />
                                 <label
                                    htmlFor='star-2'
                                    className='star-2 fas fa-star' />
                                 <label
                                    htmlFor='star-3'
                                    className='star-3 fas fa-star' />
                                 <label
                                    htmlFor='star-4'
                                    className='star-4 fas fa-star' />
                                 <label
                                    htmlFor='star-5'
                                    className='star-5 fas fa-star' />
                                 <span className='mx-2 reviewsTxt'>
                                    (132 reviews)
                                 </span>
                              </div>
                           </div>
                        </div>

                        <div className='row mt-4 w-25 ps-4'>
                           <div
                              className='col-4 text-center px-0 incrementDecrementIcons'
                              onClick={decrement}>
                              -
                           </div>
                           <div className='col-4 text-center px-0 incrementDecrementTxt'>
                              {count}
                           </div>
                           <div
                              className='col-4 text-center px-0 incrementDecrementIcons'
                              onClick={increment}>
                              +
                           </div>
                        </div>

                        <button className='btn addCardBtn mt-4'>
                           Add to cart
                        </button>
                        <span
                           className='heartCirle ms-2'
                           style={{ marginTop: "20px" }}>
                           <i className='fa-solid fa-heart heartHover' />
                        </span>
                        <div className='form-check my-3 ms-3'>
                           <input
                              className='form-check-input'
                              type='checkbox'
                              value=''
                              id='flexCheckDefault'
                           />
                           <label
                              className='form-check-label checkboxTxt'
                              htmlFor='flexCheckDefault'>
                              Add a personalised greeting card by Bombay
                              Lettering Company to your order for INR 150.
                           </label>
                        </div>

                        <div className='para'>
                           <p className='headingSubtxt py-1'>
                              If we could describe France as a taste, it will be
                              chocolate. Something between tradition and
                              modernity. Philippe Bel understood it very well.
                              <br />
                              <br />
                              His tasting box is an ode to delicacy. A thing you
                              want to offer, and also keep for yourself. A
                              "carré" to heaven, and even more.
                           </p>
                           <h3 className='pt-4'>How to enjoy </h3>
                           <p className='headingSubtxt py-1'>
                              Everytime, everywhere.
                              <br /> To enjoy after a coffee, or even without.
                           </p>
                           <h3 className='pt-4'>
                              We love this in - soups, sauces, and dressings.
                           </h3>
                           <p className='headingSubtxt py-1'>
                              Everytime, everywhere.
                              <br /> To enjoy after a coffee, or even without.
                           </p>
                        </div>

                        <div className='row'>
                           <h4>Reasons to crunch it</h4>
                           <div className='col-2 text-center'>
                              <TbSalad className='crunchIcons' /> <br />
                              Vegan
                           </div>
                           <div className='col-2 text-center'>
                              <TbCheese className='crunchIcons' /> <br />
                              Rich in iron
                           </div>
                           <div className='col-2 text-center'>
                              <TbMilk className='crunchIcons' /> <br />
                              Soy free
                           </div>
                           <div className='col-2 text-center'>
                              <TbEggs className='crunchIcons' /> <br />
                              Gluten free
                           </div>
                           <div className='col-2 text-center'>
                              <FiDroplet className='crunchIcons' /> <br />
                              Magnesium
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className='container mb-5' style={{ width: "90%" }}>
                     <Heading heading='To make the pair' />
                     <ProductsItems />
                  </div>
               </div>
            </div>
         </div>
         <div className='container-fluid px-0 allReviewsWrapper'>
            <div className='container' style={{ width: "82%" }}>
               <ShopByCategory
                  type='pdp'
                  heading='All reviews'
                  stagePadding='100'
                  items='3'
                  style={{ display: "none" }}
                  carouselNavBTN='carouselNavBTN'
               />
            </div>
         </div>
         <GreatStories className='mt-0 p-0' />
         <div className='container mb-5' style={{ width: "90%" }}>
            <Heading heading='You may also like ...' />
            <ProductsItems />
         </div>
         <StoriesByFoodLover
            heading='Discover more'
            style={{ color: "#000", textDecoration: "none" }}
            discoverBgColor='discoverBgColor'
         />
         <Footer style={{ marginTop: "0px" }} />
      </div>
   );
};

export default PdpComponent;
