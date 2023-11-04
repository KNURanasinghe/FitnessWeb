import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './Components/profile';
import HomePage from './Components/homePage';
import About from './Components/about';
import App from './App';



const router = createBrowserRouter([

  {
    path: "/homePage",
    element: <HomePage/>,
    
  },
  {
    path: "about",
    element: <About/>,
  },
  {
    path: "profile",
    element: <Profile/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
