import { createBrowserRouter } from "react-router-dom";
import Checkout from "./Checkout";
import Main from "./Main";
import Orders from "./Orders";
import Products from "./Products";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Products></Products>,
      },
      {
        path: "/checkout",
        element: <Checkout></Checkout>,
      },
      {
        path: "/orders",
        element: <Orders></Orders>,
      },
    ],
  },
]);
