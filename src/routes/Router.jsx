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

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
     hydrateFallbackElement: <div className='items-center w-full mx-auto pt-4'><span className="loading loading-bars loading-xs"></span>
     <span className="loading loading-bars loading-sm"></span>
     <span className="loading loading-bars loading-md"></span>
     </div>,
     errorElement:<ErrorElement></ErrorElement>,
    children:[
        {
            path:'/',
            loader:()=>fetch('https://mango-server-p4j3q1uz8-abdul-azizs-projects-9f179af7.vercel.app/trees'),
            Component:Home
        },
        {
            path:'allplants',
            loader:()=>fetch('https://mango-server-p4j3q1uz8-abdul-azizs-projects-9f179af7.vercel.app/trees'),
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
            loader:()=>fetch('https://mango-server-p4j3q1uz8-abdul-azizs-projects-9f179af7.vercel.app/trees'),
            element:<PrivateRoute>
                <MyPlants></MyPlants>
            </PrivateRoute>
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
            loader:()=>fetch('https://mango-server-p4j3q1uz8-abdul-azizs-projects-9f179af7.vercel.app/trees'),
            Component:Details
        }
    ] 
  },
]);

 export default router