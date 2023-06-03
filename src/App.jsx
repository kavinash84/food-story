/** @format */

import React, { createContext, useState } from "react";

import "./App.css";
import "./Responsive.css";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import Register from "./components/loginRegister/Register";
// import Login from "./components/loginRegister/Login";
// import Stories from "./components/stories/StoriesComponent";
// import PageNotFound from "./components/commonComponents/PageNotFound";
// import PdpComponent from "./components/productDetailPage/PdpComponent";
// import CatalogComponent from "./components/catalog/CatalogComponent";
// import HomePage from "./components/homepage/HomePage";
// import UserProfile from "./components/loginRegister/UserProfile";
// import UserProfileCreateAddress from "./components/loginRegister/UserProfileCreateAddress";
// import UserProfileUpdateAddress from "./components/loginRegister/UserProfileUpdateAddress";
// import UserInfo from "./components/loginRegister/UserInfo";
// import UserAddress from "./components/loginRegister/UserAddress";
// import ProtectedRoute from "./components/commonComponents/ProtectedRoute";

export const SomeContext = createContext({
   initialValues:{
      "id": null,
      "group_id": null,
      "created_at": "",
      "updated_at": "",
      "created_in": "",
      "dob": "1",
      "email": "",
      "firstname": "",
      "lastname": "",
      "gender": 1,
      "store_id": 1,
      "website_id": 1,
      "addresses": [],
      "disable_auto_group_change": 0,
      "extension_attributes": {
          "is_subscribed": true
      }
  },
   setInitialValues:()=>{},
   userDataCtx:{
      "id": "",
      "group_id": "",
      "created_at": "",
      "updated_at": "",
      "created_in": "",
      "dob": "",
      "email": "",
      "firstname": "",
      "lastname": "",
      "gender": 1,
      "store_id": 1,
      "website_id": 1,
      "addresses": [],
      "disable_auto_group_change": 0,
      "extension_attributes": {
          "is_subscribed": false
      }
  },
  setUserDataCtx:()=>{}
});



const App = () => {
   const [initialValues, setInitialValues] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      pincode: "",
      flat: "",
      city: "",
      state: "",
      region: {
         regionCode: "",
         region: "",
         regionId: "",
       },
   });

   const [userDataCtx, setUserDataCtx] = useState({
      "id": "",
      "group_id": "",
      "created_at": "",
      "updated_at": "",
      "created_in": "",
      "dob": "",
      "email": "",
      "firstname": "",
      "lastname": "",
      "gender": 1,
      "store_id": 1,
      "website_id": 1,
      "addresses": [],
      "disable_auto_group_change": 0,
      "extension_attributes": {
          "is_subscribed": false
      }
  });

   return (
      <>
       
         app data
      

      </>
   );
};

export default App;
