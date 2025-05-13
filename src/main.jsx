import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root/Root';
import Login from "./Page/Login/Login";

import Register from './Page/Register/Register';
import Room from './Page/Room/Room';
import Home from './Page/Home/Home';
import Booking from './Components/Booking/Booking';
import ContactPage from "./Page/Contact/Contact";
import Blog from "./Page/Blog/Blog";
import AuthProvider from "./Provider/AuthProvider";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/',
        element:<Home></Home>,
      },
      {
        path: '/login',
        element:<Login></Login>,
      },
      {
        path: '/room',
        element:<Room></Room>,
        loader:()=>fetch('hotel.json')
      },
      {
        path: '/register',
        element:<Register></Register>,
      },
      {
        path: '/booking',
        element:<Booking></Booking>,
      },
      {
        path: '/contact',
        element:<ContactPage></ContactPage>,
      },
      {
        path: '/blog',
        element:<Blog></Blog>,
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider><RouterProvider router={router} /></AuthProvider>
    
  </React.StrictMode>
);
