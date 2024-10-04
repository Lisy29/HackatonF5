import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import BrowsingHistory from "../pages/BrowsingHistory";
import LogIn from "../pages/LogIn";
import  Profile from "../pages/Profile";
import Register from "../pages/Register";
import Report from "../pages/Report";
import SignUp from "../pages/SignUp";

export const router = createBrowserRouter([{

    path : '/',
    element: <Layout/>,
    children: [
        {
            index: true,
            element: <Home/>
    },
    {
        path: 'aboutus',
        element: <AboutUs/>
    },
    {
        path: 'history',
        element: <BrowsingHistory/>
    },
    {
        path: 'login',
        element: <LogIn/>
    },
    {
        path: 'profile',
        element: <Profile/>
    },
    {
        path: 'register',
        element: <Register/>
    },
    {
        path: 'report',
        element: <Report/>
    },
    {
        path: 'signup',
        element: <SignUp/>
    }
]

}])