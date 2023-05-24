/** @format */

import React, { createContext, useState } from "react";
import "../src/App.css";
import "../src/Responsive.css";
import HomePage from "./components/homepage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Register from "./components/loginRegister/Register";
import Login from "./components/loginRegister/Login";
import Stories from "./components/stories/StoriesComponent";
// import PageNotFound from "./components/commonComponents/PageNotFound";
import PdpComponent from "./components/productDetailPage/PdpComponent";
import CatalogComponent from "./components/catalog/CatalogComponent";
import UserProfile from "./components/loginRegister/UserProfile";
import UserProfileCreateAddress from "./components/loginRegister/UserProfileCreateAddress";
import UserProfileUpdateAddress from "./components/loginRegister/UserProfileUpdateAddress";
// import UserInfo from "./components/loginRegister/UserInfo";
// import UserAddress from "./components/loginRegister/UserAddress";
// import ProtectedRoute from "./components/commonComponents/ProtectedRoute";

export const SomeContext = createContext(null);

const router = createBrowserRouter([
   {
      path: "/",
      element: <HomePage />,
   },
   {
      path: "/stories",
      element: <Stories />,
   },

   {
      path: "/register",
      element: <Register />,
   },
   {
      path: "/login",
      element: <Login />,
   },
   {
      path: "/pdp",
      element: <PdpComponent />,
   },
   {
      path: "/catalog",
      element: <CatalogComponent />,
   },

   {
      path: "/profile",
      element: <UserProfile />,
   },
   // {
   //    path: "/profile/info",
   //    element: <UserInfo />,
   // },
   // {
   //    path: "/profile/address",
   //    element: <UserAddress />,
   // },
   // {
   //    path: "/profile/wishlist",
   //    element: <UserProfile />,
   // },

   {
      path: "/createAdd",
      element: <UserProfileCreateAddress />,
   },
   {
      path: "/updateAdd",
      element: <UserProfileUpdateAddress />,
   },

   // {
   //    path: "*",
   //    element: <PageNotFound />,
   // },
]);

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
   });

   return (
      <SomeContext.Provider
         value={{
            initialValues,
            setInitialValues,
         }}>
         <RouterProvider router={router} />
      </SomeContext.Provider>
   );
};

export default App;
