/** @format */

import React from "react";

import Footer from "../commonComponents/Footer";
import LeftRightColComponent from "../commonComponents/LeftRightColComponent";
import PaginationComponent from "../commonComponents/PaginationComponent";
import ProductsItems from "../commonComponents/ProductsItems";
import Navigation from "../homepage/Navigation";

const CatalogComponent = () => (
      <div className='container-fluid px-0 catalogWrapper'>
         <Navigation navActiveClass='navActiveClass' type='catalog' />
         <div className='container'>
            <div className='searchHeader my-5'>
               <h1 className='text-center'>Our Catalog</h1>
               <p className='text-center'>
                  Explore our exclusive selection for unforgettable culinary
                  experiences.
               </p>
               <form
                  className='d-flex justify-content-center customSearch my-4'
                  role='search'>
                  <input
                     className='form-control'
                     type='search'
                     placeholder='I am looking for an ingredient, a recipe, a masterclass'
                     aria-label='Search'
                  />
                  <button className='btn btn-outline-success' type='submit'>
                     Search
                  </button>
               </form>
            </div>
         </div>

         <div className='productsBox container-fluid px-0'>
            <div className='row'>
               <div className='container mx-auto' style={{ width: "85%" }}>
                  <div className='row filterBox'>
                     <h4>200 products available</h4>
                     <div className='col-9'>
                        <div className='row w-75'>
                           <div className='col-3'>
                              <div className='vkg'>
                                 <ul>
                                    <li>
                                       <a href='#'>Category Filter</a>
                                       <ul>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className='col-3'>
                              <div className='vkg'>
                                 <ul>
                                    <li>
                                       <a href='#'>Category Filter</a>
                                       <ul>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className='col-3'>
                              <div className='vkg'>
                                 <ul>
                                    <li>
                                       <a href='#'>Category Filter</a>
                                       <ul>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                           <div className='col-3'>
                              <div className='vkg'>
                                 <ul>
                                    <li>
                                       <a href='#'>Category Filter</a>
                                       <ul>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                          <li>
                                             <a href='#'>Filter</a>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className='col-3'>
                        <div className='row w-75'>
                           <div className='col-4'>
                              <div className='vkg'>
                                 <ul>
                                    <li style={{ background: "none" }}>
                                       <a href='#'>Brands</a>
                                       <ul>
                                          <li>
                                             <a href='#'>Parle</a>
                                          </li>
                                          <li>
                                             <a href='#'>Britannia</a>
                                          </li>
                                          <li>
                                             <a href='#'>Cadbury</a>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>

                           <div className='col-4'>
                              <div className='vkg'>
                                 <ul>
                                    <li style={{ background: "none" }}>
                                       <a href='#'>Sort by</a>
                                       <ul>
                                          <li>
                                             <a href='#'>Brand</a>
                                          </li>
                                          <li>
                                             <a href='#'>Price</a>
                                          </li>
                                          <li>
                                             <a href='#'>Rating</a>
                                          </li>
                                       </ul>
                                    </li>
                                 </ul>
                              </div>
                           </div>
                        </div>
                     </div>
                     <ProductsItems type='catalog' style={{ width: "80%" }} />
                     <LeftRightColComponent />
                     <ProductsItems type='catalog' style={{ width: "80%" }} />
                     <ProductsItems type='catalog' style={{ width: "80%" }} />
                     <ProductsItems type='catalog' style={{ width: "80%" }} />
                     <PaginationComponent />
                  </div>
               </div>
            </div>
         </div>
         <Footer style={{ marginTop: "100px" }} />
      </div>
   );

export default CatalogComponent;
