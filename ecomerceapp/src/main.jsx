import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home from "./Home/Home.jsx";
import Blog from "./blog/Blog.jsx";
import Shop from "./Home/Shop.jsx";
import Singleproduct from "./Home/shop/Singleproduct.jsx";
import "./index.css";
import "./App.css";
import "swiper/css";

import About from './about/About';
import Contactpage from './contactpage/Contactpage'
// bootstrap css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Singleblog from'./blog/Singleblog.jsx'
// // fonts and icons 
import "././assets/css/icofont.min.css";
import "././assets/css/animate.css";
import "././assets/css/style.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AuthProvider from "./context/AuthProvider.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import Cartpage from "./Home/shop/Cartpage";
import Login from './component/Login.jsx'
import Signup from "./component/Signup.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/",
       element: <Home /> },

      { path: "home",
       element: <Home /> },
      {
        path: "/blog",
        element: <Blog />,
      },
      {
        path: "/blog/:id",
        element: <Singleblog />,
      },

      {
        path: "/shop",
        element: <Shop />,
      },

      {
        path: "/shop/:id", //diffrent id of diffrent product after click the product

        element: <Singleproduct />,
      },
      {
        path: "/cart-page",
       element: <PrivateRoute> <Cartpage/></PrivateRoute> //without login no entry in cartPage
      },
      {
        path: "/about",
       element: <About/>,
      },
      {
        path: "/contact",
       element: <Contactpage/>,
      }
    ],
  },

  {
    path:"login",
    element:<Login/>
  },
  {
    path:"sign-up",
    element:<Signup/>
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
 <AuthProvider>
  <RouterProvider router={router} />
 </AuthProvider>

);
