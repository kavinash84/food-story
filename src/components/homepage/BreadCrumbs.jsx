/** @format */

import React from "react";

const BreadCrumbs = (props) => (
      <nav aria-label='breadcrumb' className='mt-3 px-0' style={props.style}>
         <ol className='breadcrumb'>
            <li className='breadcrumb-item'>
               <a href='#'>Stories </a>
            </li>
            <li className='breadcrumb-item' aria-current='page'>
               stories by sarah
            </li>
            <li className='breadcrumb-item active' aria-current='page'>
               falling in love with a pumpkin
            </li>
         </ol>
      </nav>
   );

export default BreadCrumbs;
