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

export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[
        {
            path:'/',
            loader:()=>fetch('http://localhost:3000/trees'),
            Component:Home
        },
        {
            path:'allplants',
            loader:()=>fetch('http://localhost:3000/trees'),
            Component:AllPlants
        },
        {
            path:'addplants',
            Component:AddPlant
        },
        {
            path:'myplants',
            Component:MyPlants
        },
        {
            path:'login',
            Component:Login
        },
        {
            path:'signup',
            Component:SignUp
        }
    ] 
  },
]);

 export default router