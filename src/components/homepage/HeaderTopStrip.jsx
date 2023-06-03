/** @format */

import React, { useState } from "react";

const HeaderTopStrip = (props) => {
   const localStorageUser = localStorage.getItem(
      "user-name",
      JSON.stringify(props.userName)
   );
   return (
      <div>
         <div className='headerStrip'>
            <p>
               {localStorageUser ? (
                  <span
                     className='fw-bold'
                     style={{
                        position: "absolute",
                        right: "20px",
                        textTransform: "capitalize",
                     }}>
                     Welcome - {localStorageUser.split("@")[0]}
                  </span>
               ) : null}
               Free delivery <span>service for Holi</span>
            </p>
         </div>
      </div>
   );
};

export default HeaderTopStrip;
