import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
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
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            }
        ]
    },
]);

export default router;