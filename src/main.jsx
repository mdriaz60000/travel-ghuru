import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from './Root/Root';
import Login from "./Page/Login/Login";
import Blog from "./Page/Blog/Blog";
import Register from './Page/Register/Register';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path: '/login',
        element:<Login></Login>,
      },
      {
        path: '/blog',
        element:<Blog></Blog>,
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
