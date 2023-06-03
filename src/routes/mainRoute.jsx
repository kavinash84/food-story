import CatalogComponent from "../components/catalog/CatalogComponent";
import HomePage from "../components/homepage/HomePage";
import Login from "../components/loginRegister/Login";
import Register from "../components/loginRegister/Register";
import UserAddress from "../components/loginRegister/UserAddress";
import UserInfo from "../components/loginRegister/UserInfo";
import UserProfile from "../components/loginRegister/UserProfile";
import UserProfileCreateAddress from "../components/loginRegister/UserProfileCreateAddress";
import UserProfileUpdateAddress from "../components/loginRegister/UserProfileUpdateAddress";
import PdpComponent from "../components/productDetailPage/PdpComponent";
import Stories from "../components/stories/StoriesComponent";

export default [
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
        children:[
         {
            path: "",
            element: <UserInfo />,
         },
         {
            path: "address",
            children:[
               {
                  path:"",
                  element: <UserAddress />,
               },
               {
                  path:"add-new",
                  element: <UserProfileCreateAddress />,
               }
            ]
         },
         {
            path: "wishlist",
            element: <UserAddress />,
         },
        ]
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
];