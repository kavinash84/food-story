/** @format */

import React, { useEffect } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

import headerLogo from "../../assets/nav/fs-logo-header.png";
import blackHeaderLogo from "../../assets/nav/fs-logoBlack-header.png";
import UserLocation from "../utilis/UserLocation";

const Navigation = (props) => {
   useEffect(() => {
      const nav = document.querySelector(".navbar");
      window.onscroll = function () {
         if (document.documentElement.scrollTop > 300) {
            nav.classList.add("header-scrolled");
         } else {
            nav.classList.remove("header-scrolled");
         }
      };
   }, []);

   return (
      <nav
            className={`navbar navbar-expand-lg px-0 navBarWrapper ${props.className}`}>
            <div className='container-fluid  px-0'>
               <button
                  style={{ boxShadow: "none", border: "none" }}
                  className='navbar-toggler'
                  type='button'
                  data-bs-toggle='collapse'
                  data-bs-target='#navbarSupportedContent'
                  aria-controls='navbarSupportedContent'
                  aria-expanded='false'
                  aria-label='Toggle navigation'>
                  {/* <span className='navbar-toggler-icon'></span> */}
                  <i className='fa-solid fa-bars-staggered ' />
               </button>
               <div
                  className='collapse navbar-collapse px-0'
                  id='navbarSupportedContent'>
                  <ul className='navbar-nav mb-2 mb-lg-0 mx-auto menu-navbar-nav  px-0'>
                     <li className='nav-item'>
                        <a
                           className={
                              props.type === "catalog"
                                 ? `${props.navActiveClass}`
                                 : "nav-link"
                           }
                           aria-current='page'
                           href='/catalog'>
                           SHOP
                        </a>
                     </li>
                     <li className='nav-item'>
                        <Link
                           className={
                              props.type === "stories"
                                 ? `${props.navActiveClass}`
                                 : "nav-link"
                           }
                           to='/stories'>
                           STORIES
                        </Link>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' href='#'>
                           KITCHEN STUDIO
                        </a>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' href='#'>
                           OUR STORY
                        </a>
                     </li>

                     <li className='nav-item'>
                        <a className='navbar-brand' href='/'>
                           <img
                              className='img-fluid headerLogo'
                              src={
                                 props.type === "catalog" ||
                                 props.type === "stories"
                                    ? blackHeaderLogo
                                    : headerLogo
                              }
                           />
                           {/* <span style={{ color: "#6e6e70" }}>food</span>
                  <span style={{ color: "#38383a" }}>story</span> */}
                        </a>
                     </li>

                     <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='#'>
                           <UserLocation />
                        </a>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' aria-current='page' href='#'>
                           SERVICES
                        </a>
                     </li>

                     <li className='nav-item position-relative'>
                        <form className='search'>
                           <div className='search__wrapper'>
                              <input
                                 type='text'
                                 name=''
                                 placeholder='Search for ...'
                                 className='search__field'
                              />
                              <a className='nav-link' href=''>
                                 <button
                                    type='submit'
                                    className=' search__icon '>
                                    <BiSearch className='navIcons2' />
                                 </button>
                              </a>
                           </div>
                        </form>
                     </li>
                     {/* <li className='nav-item mt-lg-0'>
                        <a className='nav-link' href='#profile'>
                           <CgProfile className='navIcons' />
                            <img
                                 src={profileIcon}
                                 // style={{ width: "80%" }}
                                 className=' w-75 rightSection'
                              /> 
                        </a>
                     </li> */}
                     <li className='nav-item dropdown'>
                        <a
                           className='nav-link dropdown-toggle'
                           href='#'
                           id='navbarDropdown'
                           role='button'
                           data-bs-toggle='dropdown'
                           aria-expanded='false'>
                           <CgProfile className='navIcons' />
                        </a>
                        <ul
                           className='dropdown-menu'
                           aria-labelledby='navbarDropdown'>
                           <li>
                              <Link className='dropdown-item' to='/profile'>
                                 Profile
                              </Link>
                           </li>

                           <li>
                              <hr className='dropdown-divider' />
                           </li>
                           <li>
                              <a className='dropdown-item' href='#'>
                                 Logout
                              </a>
                           </li>
                        </ul>
                     </li>
                     <li className='nav-item'>
                        <a className='nav-link' href='/'>
                           <AiOutlineShoppingCart className='navIcons' />
                           {/* <img
                                 src={cartIcon}
                                 // style={{ width: "80%" }}
                                 className=' w-75 rightSection'
                              /> */}
                        </a>
                     </li>
                  </ul>
                  {/* <form className='d-flex'>
                     <input
                        className='form-control me-2'
                        type='search'
                        placeholder='Search'
                        aria-label='Search'
                     />
                     <button className='btn btn-outline-success' type='submit'>
                        Search
                     </button>
                  </form> */}
               </div>
            </div>
         </nav>
   );
};

export default Navigation;
