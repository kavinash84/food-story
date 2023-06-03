/** @format */

import React from "react";

import footerIcon from "../../assets/footerIcon.png";
import headerLogo from "../../assets/nav/fs-logo-header.png";

const Footer = (props) => (
      <div style={{ background: "#f6ebec", ...props.style }}>
         <div className='subscribeWrapper container-fluid px-0'>
            <div className='container mx-auto'>
               <div className='row'>
                  <div className='col-6'>
                     <blockquote className='blockquotes'>
                        <p>Subscribe for more tasty tales</p>
                        <p className='blockquotes2'>
                           Don't miss anything thanks to the newsletter
                        </p>
                     </blockquote>
                  </div>
                  <div className='col-6'>
                     <div className='input-group mb-3 marTop'>
                        <input
                           type='text'
                           className='form-control2 customInputBox'
                           placeholder='Write your email'
                           aria-label='Write your email'
                           aria-describedby='button-addon2'
                        />
                        <button
                           className='btn btnColor mb-3'
                           type='button'
                           id='button-addon2'>
                           JOIN
                        </button>
                        <p className='subTxt'>
                           By subscribing you accept the general sales
                           conditions
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='container mt-5 ulLi'>
            <div className='row '>
               <div className='col-md-4'>
                  <img
                     src={headerLogo}
                     className='img-fluid rounded-start padTop8'
                     alt='...'
                  />
               </div>
               <div className='col-md-8'>
                  <ul className='d-block float-start'>
                     <li>Shop Online</li>
                     <li>Shop In-store</li>
                     <li>Gifting</li>
                  </ul>
                  <ul className='d-block float-start'>
                     <li>Stories </li>
                     <li>Recipes</li>
                     <li>Services</li>
                  </ul>
                  <ul className='d-block float-start'>
                     <li>About Us</li>
                     <li>FAQs</li>
                     <li>Legal Disclaimer</li>
                  </ul>
                  <ul className='d-block float-start'>
                     <li>Privacy Policy </li>
                     <li>Shipping Policy</li>
                     <li>Returns and Refund Policy</li>
                  </ul>
               </div>
            </div>
         </div>

         <div className='container'>
            <div className='row py-5 fourColWrapper'>
               <div className='card mb-3 col-3 rounded-0 border-0'>
                  <div className='row g-0'>
                     <div className='col-md-2'>
                        <img
                           src={footerIcon}
                           className='img-fluid rounded-start padTop8'
                           alt='...'
                        />
                     </div>
                     <div className='col-md-10'>
                        <div className='card-body'>
                           <h5 className='card-title'>Call us</h5>
                           <p className='card-text'>
                              Mon - Fri: 8 am - 8 pm GMT
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='card mb-3 col-3 rounded-0 border-0'>
                  <div className='row g-0'>
                     <div className='col-md-2'>
                        <img
                           src={footerIcon}
                           className='img-fluid rounded-start padTop8'
                           alt='...'
                        />
                     </div>
                     <div className='col-md-10'>
                        <div className='card-body'>
                           <h5 className='card-title'>Write us</h5>
                           <p className='card-text'>
                              via whastapp, <b>click here</b>
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='card mb-3 col-3 rounded-0 border-0'>
                  <div className='row g-0'>
                     <div className='col-md-2'>
                        <img
                           src={footerIcon}
                           className='img-fluid rounded-start padTop8'
                           alt='...'
                        />
                     </div>
                     <div className='col-md-10'>
                        <div className='card-body'>
                           <h5 className='card-title'>Make an appointment</h5>
                           <p className='card-text'>
                              Click here to make an appointment
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
               <div className='card mb-3 col-3 rounded-0 border-0'>
                  <div className='row g-0'>
                     <div className='col-md-2'>
                        <img
                           src={footerIcon}
                           className='img-fluid rounded-start padTop8'
                           alt='...'
                        />
                     </div>
                     <div className='col-md-10'>
                        <div className='card-body'>
                           <h5 className='card-title'>come to see us</h5>
                           <p className='card-text'>
                              Mumbai, Maharashtra, India
                           </p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>

         <div className='container-fluid footerBottom '>
            <div className='row container mx-auto'>
               <div className='col-8'>Legal Notice - Privacy Policy</div>
               <div className='col-4'>
                  <div className='row'>
                     <div className='col-3'>FACEBOOK</div>
                     <div className='col-3'>instagram</div>
                     <div className='col-3'>youtube</div>
                     <div className='col-3'>whatsapp</div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );

export default Footer;
