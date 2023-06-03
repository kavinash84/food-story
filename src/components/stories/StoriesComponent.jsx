/** @format */

import React, { useEffect, useState } from "react";

import juicesImg from "../../assets/juices.png";
import product from "../../assets/product.png";
import storiesImg1 from "../../assets/stories1.png";
import storiesImg2 from "../../assets/stories2.png";
import Footer from "../commonComponents/Footer";
import Heading from "../commonComponents/Heading";
import BreadCrumbs from "../homepage/BreadCrumbs";
import HeroBanner from "../homepage/HeroBanner";
import Navigation from "../homepage/Navigation";
// import Slider from "./Slider";
import StoriesByFoodLover from "../homepage/StoriesByFoodLover";

const Stories = (props) => {
   const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

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
      <div
         className='container-fluid px-0 storiesMain'
         style={{ background: "#fdf9f8" }}>
         <div className='row'>
            <Navigation
               className='bgColorChange'
               navActiveClass='navActiveClass'
               type='stories'
            />
            <div className='container storyWrapper'>
               <BreadCrumbs />
               <HeroBanner className='my-4' />

               <div className='w-75 mx-auto'>
                  <Heading
                     heading='Falling in love with a pumpkin'
                     style={{
                        color: "#A0383F",
                        fontSize: "64px",
                        fontFamily: "Russolo",
                        fontWeight: "700",
                     }}
                  />
                  <p className='headingSubtxt py-4 w-75 mx-auto'>
                     I had never been much of a cook, but one autumn day I found
                     myself with a surplus of pumpkins from my garden. Not
                     wanting to let them go to waste, I decided to try my hand
                     at making pumpkin soup.
                  </p>
                  <div className='row'>
                     <div className='col-7'>
                        <div className='card border-0'>
                           <img
                              src={storiesImg1}
                              className='card-img-top rounded-0'
                              alt='...'
                           />
                        </div>
                     </div>
                     <div className='col-5'>
                        <div className='card border-0'>
                           <img
                              src={storiesImg2}
                              className='card-img-top rounded-0'
                              alt='...'
                           />
                        </div>
                     </div>
                  </div>

                  <div className='para'>
                     <h3 className='pt-4'>
                        I looked for some recipies online,{" "}
                     </h3>
                     <p className='headingSubtxt py-1'>
                        but quickly found that I didn't have all the necessary
                        ingredients. I decided to wing it and started throwing
                        together whatever I had on hand. I tossed in some onion,
                        garlic, and a few spices, and let everything simmer
                        together. <br /> <br />
                        When it was done, I tasted a spoonful and was surprised
                        to find that it was absolutely delicious!I served the
                        soup to my family for dinner that night, and they were
                        all blown away by how tasty it was.
                     </p>
                     <h3 className='pt-4'>They asked for my recipe, </h3>
                     <p className='headingSubtxt py-1'>
                        but quickly found that I didn't have all the necessary
                        ingredients. I decided to wing it and started throwing
                        together whatever I had on hand. I tossed in some onion,
                        garlic, and a few spices, and let everything simmer
                        together. <br /> <br />
                        When it was done, I tasted a spoonful and was surprised
                        to find that it was absolutely delicious!I served the
                        soup to my family for dinner that night, and they were
                        all blown away by how tasty it was.
                     </p>
                  </div>

                  <div className='row'>
                     <div className='col-5'>
                        <div className='card border-0'>
                           <img
                              src={storiesImg2}
                              className='card-img-top rounded-0'
                              alt='...'
                           />
                        </div>
                     </div>
                     <div className='col-7'>
                        <div className='card border-0'>
                           <img
                              src={storiesImg1}
                              className='card-img-top rounded-0'
                              alt='...'
                           />
                        </div>
                     </div>
                  </div>
               </div>
               <div className='w-100 bg-white whiteStrip' />
            </div>

            <div
               className='container-fluid px-0'
               style={{ background: "white" }}>
               <div className='row'>
                  <div className='container quickShopWrapper'>
                     <div className='row'>
                        <div className='para w-50'>
                           <h3 className='pt-1'>Eventually,</h3>
                           <p className='headingSubtxt py-1'>
                              I had created a recipe that was truly my own. I
                              started sharing the recipe with friends and
                              family, who also loved it. Before I knew it, I had
                              people asking me for the recipe on a regular
                              basis.
                              <br /> <br />I even entered it in a local recipe
                              contest and won first prize! Now, whenever I make
                              my pumpkin soup, I'm reminded of that happy
                              accident that led me to create something truly
                              delicious. And I'm grateful for the abundance of
                              pumpkins that inspired me to try something new in
                              the first place.
                           </p>
                        </div>
                        <div className='container w-75 mt-2'>
                           <div className='row'>
                              <div className='col-12'>
                                 <div className='row row-cols-1 row-cols-md-3 g-3'>
                                    <div className='col-4 main_div'>
                                       <div className='card center_div border-0'>
                                          <span
                                             className='badge rounded-pill '
                                             style={{
                                                color: "rgb(160, 56, 63)",
                                                textAlign: "right",
                                                padding: "10px",
                                             }}>
                                             QUICK SHOP
                                          </span>
                                          <img
                                             src={product}
                                             className='rounded-0 card-img-top  quickShop'
                                             alt='...'
                                          />
                                          <div className='card-img-overlay caption'>
                                             <p className='card-text mb-0'>
                                                <small>
                                                   SALT FLOWER, &#8377;250
                                                </small>
                                             </p>
                                             <div className='row'>
                                                <div className='col-10'>
                                                   <button
                                                      type='button'
                                                      className='btn btn-outline-primary'>
                                                      QUICK SHOP
                                                   </button>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    <div className='col-4 main_div'>
                                       <div className='card center_div border-0'>
                                          <span
                                             className='badge rounded-pill '
                                             style={{
                                                color: "rgb(160, 56, 63)",
                                                textAlign: "right",
                                                padding: "10px",
                                             }}>
                                             QUICK SHOP
                                          </span>
                                          <img
                                             src={product}
                                             className='rounded-0 card-img-top  quickShop'
                                             alt='...'
                                          />
                                          <div className='card-img-overlay caption'>
                                             <p className='card-text mb-0'>
                                                <small>
                                                   SALT FLOWER, &#8377;250
                                                </small>
                                             </p>
                                             <div className='row'>
                                                <div className='col-10'>
                                                   <button
                                                      type='button'
                                                      className='btn btn-outline-primary'>
                                                      QUICK SHOP
                                                   </button>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>

                                    <div className='col-4 main_div'>
                                       <div className='card center_div border-0'>
                                          <span
                                             className='badge rounded-pill '
                                             style={{
                                                color: "rgb(160, 56, 63)",
                                                textAlign: "right",
                                                padding: "10px",
                                             }}>
                                             QUICK SHOP
                                          </span>
                                          <img
                                             src={product}
                                             className='rounded-0 card-img-top  quickShop'
                                             alt='...'
                                          />
                                          <div className='card-img-overlay caption'>
                                             <p className='card-text mb-0'>
                                                <small>
                                                   SALT FLOWER, &#8377;250
                                                </small>
                                             </p>

                                             <div className='row'>
                                                <div className='col-10'>
                                                   <button
                                                      type='button'
                                                      className='btn btn-outline-primary'>
                                                      QUICK SHOP
                                                   </button>
                                                </div>
                                             </div>
                                          </div>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div
                           className='container my-5'
                           style={{ width: "95%" }}>
                           <div className='row'>
                              <div className='col-6'>
                                 <h2 className='recipeTxt'>
                                    Recipe instructions:
                                 </h2>
                                 <div className='w-75'>
                                    <div className='row py-1'>
                                       <div className='col-1 circleParent px-0'>
                                          <span className='circle'>1</span>
                                       </div>
                                       <div className='col-11'>
                                          <ul className='list-group'>
                                             <li className='list-group-item border-0 ps-0'>
                                                Cut the pumpkin into cubes,
                                                remove the seeds and skin.
                                                Finely chop the onions and
                                                garlic.
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className='row  py-3'>
                                       <div className='col-1 circleParent px-0'>
                                          <span className='circle'>2</span>
                                       </div>
                                       <div className='col-11'>
                                          <ul className='list-group'>
                                             <li className='list-group-item border-0 ps-0'>
                                                In a large pot, heat the olive
                                                oil over medium heat. Add the
                                                onions and garlic and sauté
                                                until translucent.
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className='row py-1'>
                                       <div className='col-1 circleParent px-0'>
                                          <span className='circle'>3</span>
                                       </div>
                                       <div className='col-11'>
                                          <ul className='list-group'>
                                             <li className='list-group-item border-0 ps-0'>
                                                Add the pumpkin cubes, curry
                                                powder, and ground cumin. Stir
                                                well so that the pumpkin cubes
                                                are coated with the spices.
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className='row py-1'>
                                       <div className='col-1 circleParent px-0'>
                                          <span className='circle'>4</span>
                                       </div>
                                       <div className='col-11'>
                                          <ul className='list-group'>
                                             <li className='list-group-item border-0 ps-0'>
                                                Pour the vegetable broth into
                                                the pot. Bring to a boil, then
                                                reduce the heat and simmer for
                                                20-25 minutes, until the pumpkin
                                                cubes are tender.
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className='row py-1'>
                                       <div className='col-1 circleParent px-0'>
                                          <span className='circle'>5</span>
                                       </div>
                                       <div className='col-11'>
                                          <ul className='list-group'>
                                             <li className='list-group-item border-0 ps-0'>
                                                Remove the pot from the heat and
                                                let it cool slightly. Use an
                                                immersion blender to blend
                                                everything until smooth. Add
                                                salt and freshly ground black
                                                pepper to taste.
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className='row py-1'>
                                       <div className='col-1 circleParent px-0'>
                                          <span className='circle'>6</span>
                                       </div>
                                       <div className='col-11'>
                                          <ul className='list-group'>
                                             <li className='list-group-item border-0 ps-0'>
                                                Cut the pumpkin into cubes,
                                                remove the seeds and skin.
                                                Finely chop the onions and
                                                garlic.
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <div className='row py-1'>
                                       <div className='col-1 circleParent px-0'>
                                          <span className='circle'>7</span>
                                       </div>
                                       <div className='col-11'>
                                          <ul className='list-group'>
                                             <li className='list-group-item border-0 ps-0'>
                                                Cut the pumpkin into cubes,
                                                remove the seeds and skin.
                                                Finely chop the onions and
                                                garlic.
                                             </li>
                                          </ul>
                                       </div>
                                    </div>

                                    <div className='card border-0 rounded-0 py-4'>
                                       <h4 className='card-title videoTxt pb-4 text-start'>
                                          Watch our step-by-step video
                                       </h4>
                                       <iframe
                                          width='100%'
                                          height='400'
                                          src='https://www.youtube.com/embed/v41-SNTCCOw'
                                          title='YouTube video player'
                                          frameBorder='0'
                                          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                                          allowfullscreen />
                                       <div className='card-body' />
                                    </div>
                                 </div>
                              </div>
                              <div className='col-6'>
                                 <div className='ingredientsWrapper'>
                                    <div className='row'>
                                       <h2 className='ingredientsTxt'>
                                          Ingredients:
                                       </h2>
                                       <div className='container'>
                                          <div className='row w-75'>
                                             <div className='col-5 pe-0 servingTxt'>
                                                Servings
                                             </div>
                                             <div
                                                className='col-2 text-center px-0 plusMinus'
                                                onClick={decrement}>
                                                -
                                             </div>
                                             <div className='col-3 text-center px-0 plusminusTxt'>
                                                {count}
                                             </div>
                                             <div
                                                className='col-2 text-center px-0 plusMinus'
                                                onClick={increment}>
                                                +
                                             </div>
                                          </div>
                                       </div>
                                       <div className='col-1 circleParent px-0'>
                                          <span className='dot' />
                                       </div>
                                       <div className='col-11 ps-0'>
                                          <ul className='list-group'>
                                             <li className='list-group-item border-0 ps-0'>
                                                1 kg pumpkin
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
                                                2 onions
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
                                                2 cloves of garlic
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
                                                1 tablespoon olive oil
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
                                                1 tablespoon curry powder
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
                                                1 tablespoon ground cumin
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
                                                1 liter vegetable broth
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
                                                Salt and freshly ground black
                                                pepper
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
                                                50 ml sour cream
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
                                                Roasted pumpkin seeds for
                                                garnish
                                             </li>
                                          </ul>
                                       </div>
                                    </div>
                                    <button
                                       className='btn shopListBtn my-3'
                                       type='button '>
                                       SHOP THE LIST
                                    </button>
                                    <h3 className='mt-5 suggestionTxt'>
                                       Suggested with the recipe
                                    </h3>
                                    <div className='card border-0 rounded-0 py-4'>
                                       <img
                                          src={product}
                                          className='card-img-top w-75 mx-auto rounded-0'
                                          alt='...'
                                       />
                                       <div className='card-body'>
                                          <h5 className='card-title text-center addListTxt'>
                                             Corton-Charlemagne <br /> Grand Cru
                                             2018
                                          </h5>

                                          <a
                                             href='#'
                                             className='btn mx-auto d-block mt-3  addListBtn'>
                                             Add to the list
                                          </a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>

            <StoriesByFoodLover
               heading='Discover more'
               style={{ color: "#000", textDecoration: "none" }}
            />

            <Footer style={{ marginTop: "100px" }} />
         </div>
      </div>
   );
};

export default Stories;
