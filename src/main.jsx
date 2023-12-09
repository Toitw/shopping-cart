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
import Checkout from "./Components/CheckoutPage";



const BrowserRouter = createBrowserRouter([
    {
      path: "/",
      element: <MainPage />,
      errorElement: <ErrorPage />,
      children: [
        {index: true, element: <ShopPage />},
        {
          path: "/product/:id",
          element: <ProductPage />  ,
        },
      ],
    },
    {
      path: "/checkout",
      element: <Checkout />,
    },
  ]);
  

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={BrowserRouter} />
  </React.StrictMode>
);
