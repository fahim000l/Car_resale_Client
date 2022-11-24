import { createBrowserRouter } from "react-router-dom";
import Main from "../LayOuts/Main";
import CategoryProducts from "../Pages/CategoryProducts/CategoryProducts";
import Home from "../Pages/Home";
import SignUp from "../Pages/SignUp/SignUp";


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
                element: <CategoryProducts></CategoryProducts>
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>
            }
        ]
    },
]);

export default router;