/** @format */

import React, { Component, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = (props) => {
   const history = useNavigate();

   const { Component } = props;

   // useEffect(() => {
   //    let login = localStorage.getItem("isLogin");
   //    if (!login) {
   //       history("/login");
   //    }
   // }, []);

   return (
      <div>
         <Component />
      </div>
   );
};

export default ProtectedRoute;
