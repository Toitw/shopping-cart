import React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainPage from "./Components/MainPage";
import ProductPage from "./Components/ProductPage";
import ErrorPage from "./Components/ErrorPage";
import ShopPage from "./Components/ShopPage";



const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <ShopPage />},
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
