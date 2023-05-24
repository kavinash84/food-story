/** @format */

import React from "react";

const Heading = (props) => {
   return (
      <div className='headingTxt'>
         <h2 className='px-2 pt-5 pb-3' style={props.style}>
            {props.heading}
         </h2>
      </div>
   );
};

export default Heading;
