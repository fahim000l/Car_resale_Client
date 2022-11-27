import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import AllAdvertise from "../Pages/AdvertiseSection/AllAdvertise/AllAdvertise";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import AddProducts from "../Pages/DashBoard/AddProducts/AddProducts";
import AllSellers from "../Pages/DashBoard/AllSellers/AllSellers";
import Dashboard from "../Pages/DashBoard/Dashboard";
import MyBuyers from "../Pages/DashBoard/MyBuyers/MyBuyers";
import MyOrders from "../Pages/DashBoard/MyOrders/MyOrders";
import MyProducts from "../Pages/DashBoard/MyProducts/MyProducts";
import ReportedProducts from "../Pages/DashBoard/ReportedProducts/ReportedProducts";
import WelcomeDashBoard from "../Pages/DashBoard/WlcomeDashBoard/WelcomeDashBoard";
import Home from "../Pages/Home";
import SignIn from "../Pages/SignIn/SignIn";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/categoryProducts/:id',
                element: <PrivateRoute><CategoryProducts></CategoryProducts></PrivateRoute>
            },
            {
                path: '/alladvertise',
                element: <AllAdvertise></AllAdvertise>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <WelcomeDashBoard></WelcomeDashBoard>
            },
            {
                path: '/dashboard/myorders',
                element: <MyOrders></MyOrders>
            },
            {
                path: '/dashboard/addproducts',
                element: <AddProducts></AddProducts>
            },
            {
                path: '/dashboard/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashboard/mybuyers',
                element: <MyBuyers></MyBuyers>
            },
            {
                path: '/dashboard/allellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashboard/reportedproducts',
                element: <ReportedProducts></ReportedProducts>
            }
        ]
    }
]);

export default router;