import React from "react";
import * as ReactDOM from "react-dom/client";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./Components/MainPage";
import ProductPage from "./Components/ProductPage";



const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      children: [
        {
          path: "/product",
          element: <ProductPage />  ,
        },
      ],
    },
    // {
    //   path: "/shop",
    //   component: Shop,
    // },
  ]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
