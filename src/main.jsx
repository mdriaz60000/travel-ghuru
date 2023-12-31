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
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
