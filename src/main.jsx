/** @format */

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import "./index.css";
import store from "./redux/store";
import mainRoute from "./routes/mainRoute";

const router = createBrowserRouter(mainRoute);


ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>
  </React.StrictMode>);
