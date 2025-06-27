import {
  createBrowserRouter,
} from "react-router";

import Root from "../Root/Root";
import AllPlants from "../pages/AllPlants";
import Home from "../pages/Home";
import AddPlant from "../pages/AddPlant";
import MyPlants from "../pages/MyPlants";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Details from "../components/Details";
import PrivateRoute from "../components/PrivateRoute";
import ErrorElement from "../components/ErrorElement";
import AboutUs from "../pages/AboutUs/AboutUs";
import Contact from "../pages/Contact/Contact";
import DashboardLayout from "../pages/DashboardLayout/DashboardLayout";
import Overview from "../components/Overview/Overview";
import AddItem from "../pages/AddItem/AddItem";
import MyItems from "../pages/DashboardLayout/MyItems/MyItems";

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
     hydrateFallbackElement: <div className="flex items-center justify-center min-h-screen">
    <div className="flex space-x-2">
      <span className="loading loading-bars loading-xs text-green-600"></span>
      <span className="loading loading-bars loading-sm text-green-600"></span>
      <span className="loading loading-bars loading-md text-green-600"></span>
    </div>
  </div>,
     errorElement:<ErrorElement></ErrorElement>,
    children:[
        {
            path:'/',
            loader:()=>fetch('https://mango-server-eight.vercel.app/trees'),
            Component:Home
        },
        {
            path:'allplants',
            loader:()=>fetch('https://mango-server-eight.vercel.app/trees'),
            Component:AllPlants
        },
        {
            path:'addplants',
            element:<PrivateRoute>
                <AddPlant></AddPlant>
            </PrivateRoute>
        },
        {
            path:'myplants',
            loader:()=>fetch('https://mango-server-eight.vercel.app/trees'),
            element:<PrivateRoute>
                <MyPlants></MyPlants>
            </PrivateRoute>
        },
        {
            path:'/about',
            Component:AboutUs

        },
        {
            path:'/contact',
            Component:Contact

        },
       


        
        {
            path:'login',
            Component:Login
        },
        {
            path:'signup',
            Component:SignUp
        },
        {
            path:'/details/:id',
            loader:()=>fetch('https://mango-server-eight.vercel.app/trees'),
            Component:Details
        }
    ] 
  },
 
//   Dashboard route

  {
  path: '/dashboard',
  element: (
    <PrivateRoute>
      <DashboardLayout />
    </PrivateRoute>
  ),
  children: [
    {
      index: true,
      element: <Overview />
    },
    {
      path: 'additem',
      element: <AddItem />
    },
    {
      path: 'myitems',
      element: <MyItems /> 
    },
    {
      path: 'allitems',
      element: <AllPlants /> 
    },
   
  
  ]
}

]);

 export default router